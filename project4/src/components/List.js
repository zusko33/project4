import "./list.css";

export default function List({ activities, onDeleteActivities }) {
  return (
    <>
      <ul className="activities-list">
        {activities.map((activity, index) => (
          <li key={index} className="activities-list_item">
            <h5>{activity.name}</h5>
            <button
              className="activities-item_button"
              type="button"
              aria-label="delete list item"
              onClick={() => onDeleteActivities?.(activity)}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
