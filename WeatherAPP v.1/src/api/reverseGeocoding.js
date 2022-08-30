import axios from "axios";

async function getAddressOfCoordinates(lat, lng) {
  const response = await axios.get(
    process.env.REACT_APP_OPENCAGEDATA_API_URL,
    {
      params: {
        key: process.env.REACT_APP_OPENCAGEDATA_API_KEY,
        q: `${lat}+${lng}`,
        language: "en"
      }
    }
  );

  return response;
}

export default getAddressOfCoordinates;
