import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
// import useLocalStorageState from "use-local-storage-state";

function App() {
  const [activities, setActivities] = useState([]);

  function handleRemoveActivity(activityToDelete) {
    setActivities(
      activities.filter((activity) => activity !== activityToDelete)
    );
  }

  return (
    <>
      <h1>Weather App</h1>
      <List onDeleteActivities={handleRemoveActivity} />
      <Form />
    </>
  );
}

export default App;
