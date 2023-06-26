import "./App.css";
import { useState, useEffect } from "react";
import Form from "./components/Form";
import List from "./components/List";
import { uid } from "uid";
import Weather from "./components/Weather";
import useLocalStorageState from "use-local-storage-state";

const URL = "https://example-apis.vercel.app/api/weather";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const [weather, setWeather] = useState("");

  const filteredActivities = activities.filter((activity) =>
    weather.isGoodWeather
      ? activity.isForGoodWeather
      : !activity.isForGoodWeather
  );

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch(URL);
        const weather = await response.json();
        setWeather(weather);
      } catch (error) {
        console.log("ERROR in FETCH: ", error);
      }
      const id = setInterval(fetchWeather, 10000);
      return () => {
        clearInterval(id);
      };
    }
    fetchWeather();
  }, [setWeather]);

  function handleAddActivity(newActivity) {
    setActivities([
      {
        id: uid(),
        name: newActivity.name,
        isForGoodWeather: newActivity.checkbox ? true : false,
      },
      ...activities,
    ]);
  }
  function handleRemoveActivity(activityToDelete) {
    setActivities(
      activities.filter((activity) => activity !== activityToDelete)
    );
  }

  return (
    <div className="app">
      <main className="app_main">
        <h1>Weather App</h1>
        <Weather weather={weather} />
        <List
          onDeleteActivities={handleRemoveActivity}
          activities={filteredActivities}
        />
        <hr className="divider" role="none" />
        <Form onAddActivity={handleAddActivity} />
      </main>
    </div>
  );
}

export default App;
