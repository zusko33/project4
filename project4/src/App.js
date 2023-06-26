import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import { uid } from "uid";

function App() {
  const [activities, setActivities] = useState([]);

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
    <>
      <h1>Weather App</h1>
      <List onDeleteActivities={handleRemoveActivity} activities={activities} />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
