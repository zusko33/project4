export default function List({ activities, onDeleteActivities, onFilter }) {
  console.log(activities);
  return (
    <>
      <ul className="activities-list">
        {activities.map((activity, index) => (
          <li key={index} className="activities-list_item">
            <h3>{activity.name}</h3>
            <button
              className="activities-item_button"
              type="button"
              aria-label="delete list item"
              onClick={() => onDeleteActivities?.(activity)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
