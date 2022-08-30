import axios from "axios";

async function getWeatherAndForecast(coordinates) {
  const response = await axios.get(
    process.env.REACT_APP_OPENWEATHER_API_URL,
    {
      params: {
        lat: coordinates.lat,
        lon: coordinates.lng,
        exclude: "minutely,hourly,alerts",
        appid: process.env.REACT_APP_OPENWEATHER_API_ID,
        units: "metric"
      }
    }
  );

  return response;
}

export default getWeatherAndForecast;
