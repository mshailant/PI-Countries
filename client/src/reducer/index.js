const initialState = {
  countries: [],
  country: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_COUNTRIES":
      return {
        ...state,
        countries: action.payload,
      };
    case "GET_COUNTRY":
      return {
        ...state,
        country: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
