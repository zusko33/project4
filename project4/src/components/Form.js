import React from "react";
import "./form.css";

export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const submittedData = Object.fromEntries(formData);

    onAddActivity(submittedData);

    event.target.reset();
    event.target.name.focus();
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="form_title">Add a new activity: </h2>
        <label htmlFor="name" className="form_label">
          Name:
        </label>
        <input type="text" name="name" id="form-name" />
        <label htmlFor="checkbox-weather">Good-weather activity?</label>
        <input type="checkbox" name="checkbox" id="checkbox" />
        <button type="submit" name="submit" id="submit" className="form_button">
          Submit
        </button>
      </form>
    </>
  );
}
