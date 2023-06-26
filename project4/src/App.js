import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
// import { uid } from "uid";

function App() {
  const [activities, setActivities] = useState([]);

  function handleAddActivity(newActivity) {
    console.log("newAct:", newActivity);
    // setActivities(...activities, newActivity);
    setActivities(...activities, newActivity);
  }

  return (
    <>
      <h1>Weather App</h1>
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
