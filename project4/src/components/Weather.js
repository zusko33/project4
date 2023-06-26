export default function Weather({ weather }) {
  return (
    <header>
      <h2>
        {weather.condition} {weather.temperature} °C
      </h2>
      <h3>
        {weather.isGoodWeather
          ? "The weather is great, go outside and: "
          : "Bad weather outside there! Here's what you can do now:"}
      </h3>
    </header>
  );
}
