import axios from 'axios';

export const getPlaces = async (type, sw, ne) => {
  const options = {
    method: 'GET',
    url: `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
    params: {
      bl_latitude: sw.lat,
      tr_latitude: ne.lat,
      bl_longitude: sw.lng,
      tr_longitude: ne.lng,
    },
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_TRAVEL_KEY,
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
    },
  };
  try {
    const {
      data: { data },
    } = await axios.request(options);
    return data;
  } catch (error) {
    console.log(error);
  }
};
