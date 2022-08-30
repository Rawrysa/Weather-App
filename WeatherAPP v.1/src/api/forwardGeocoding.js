import axios from "axios";

async function getCoordinatesOfAddress(address) {
  const response = await axios.get(
    process.env.REACT_APP_OPENCAGEDATA_API_URL,
    {
      params: {
        key: process.env.REACT_APP_OPENCAGEDATA_API_KEY,
        q: address,
        language: "en"
      }
    }
  );

  return response;
}

export default getCoordinatesOfAddress;
