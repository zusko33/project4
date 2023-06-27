import "./weather.css";

export default function Weather({ weather }) {
  return (
    <header>
      <h3>
        {weather.condition} {weather.temperature} °C
      </h3>
      <h4>
        {weather.isGoodWeather
          ? "The weather is great, go outside and: "
          : "Bad weather outside! Here's what you can do now:"}
      </h4>
    </header>
  );
}
