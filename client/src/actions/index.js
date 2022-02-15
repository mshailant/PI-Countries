import axios from "axios";

const API_URL = "http://localhost:3001/";

export const getCountries = () => {
  return async (dispatch) => {
    const response = await axios.get(`${API_URL}countries`);
    dispatch({
      type: "GET_COUNTRIES",
      payload: response.data,
    });
  };
};

export const filterCountries = (payload) => {
  return {
    type: "FILTER_COUNTRIES",
    payload,
  };
};

export const sortCountries = (payload) => {
  return {
    type: "SORT_COUNTRIES",
    payload,
  };
};
