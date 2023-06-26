import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import { uid } from "uid";
// import useLocalStorageState from "use-local-storage-state";

function App() {
  // const [activities, setActivities] = useLocalStorageState("activities", []);
  // console.log(useLocalStorageState);
  const [activities, setActivities] = useState([]);

  function handleAddActivity(newActivity) {
    console.log("newAct:", newActivity);
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
  // const isGoodWeather = true;
  // function filterGoodWeather(activities) {
  //   activities.filter(
  //     (activity) => (activity.isForGoodWeather = isGoodWeather)
  //   );
  // }
  return (
    <>
      <h1>Weather App</h1>
      <List onDeleteActivities={handleRemoveActivity} activities={activities} />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
