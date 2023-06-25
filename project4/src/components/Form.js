import React from "react";

export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();

    const name = event.target.elements["form-name"].value;
    const isForGoodWeather = event.target.elements["checkbox"].checked;

    const submittedData = {
      name: name,
      isForGoodWeather: isForGoodWeather,
    };

    onAddActivity(submittedData.name, submittedData.isForGoodWeather);

    // reset the form
    event.target.reset();
    event.target.elements.name.focus();
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="form__title">Add a new activity: </h2>
        <label htmlFor="form-name">Name:</label>
        <input type="text" name="form-name" id="form-name" />
        <label htmlFor="checkbox-weather">Good-weather activity?</label>
        <input type="checkbox" name="checkbox" id="checkbox" />
        <button type="submit" name="submit" id="submit">
          Submit
        </button>
      </form>
    </>
  );
}
