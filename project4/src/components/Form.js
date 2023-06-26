import React from "react";
import { uid } from "uid";

export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const submittedData = Object.fromEntries(formData);

    const data = {
      name: submittedData.name,
      isForGoodWeather: event.target.elements.checkbox.checked,
      id: uid(),
    };

    onAddActivity(data);

    // reset the form
    event.target.reset();
    event.target.name.focus();
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="form__title">Add a new activity: </h2>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="form-name" />
        <label htmlFor="checkbox-weather">Good-weather activity?</label>
        <input type="checkbox" name="checkbox" id="checkbox" />
        <button type="submit" name="submit" id="submit">
          Submit
        </button>
      </form>
    </>
  );
}

// const name = event.target.elements["form-name"].value;
// const isForGoodWeather = event.target.elements["checkbox"].checked;

// const submittedData = {
//   name: name,
//   isForGoodWeather: isForGoodWeather,
// };

// onAddActivity(submittedData.name, submittedData.isForGoodWeather);
