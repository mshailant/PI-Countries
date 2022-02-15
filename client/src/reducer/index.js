const initialState = {
  countries: [],
  filteredCountries: [],
  country: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_COUNTRIES":
      return {
        ...state,
        countries: action.payload,
        filteredCountries: action.payload,
      };
    case "GET_COUNTRY":
      return {
        ...state,
        country: action.payload,
      };
    case "FILTER_COUNTRIES":
      let filtered =
        action.payload === "All"
          ? state.countries
          : state.countries.filter((country) =>
              country.continent
                .toLowerCase()
                .includes(action.payload.toLowerCase())
            );
      return {
        ...state,
        filteredCountries: filtered,
      };
    case "SORT_COUNTRIES":
      let sortered = [];
      if (action.payload === "A-Z") {
        sortered = state.filteredCountries.sort((a, b) =>
          a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
        );
      } else if (action.payload === "Z-A") {
        sortered = state.filteredCountries.sort((a, b) =>
          a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1
        );
      } else if (action.payload === "PopAsc") {
        sortered = state.filteredCountries.sort((a, b) =>
          a.population > b.population ? 1 : -1
        );
      } else if (action.payload === "PopDesc") {
        sortered = state.filteredCountries.sort((a, b) =>
          a.population < b.population ? 1 : -1
        );
      } else if (action.payload === "Def") {
        sortered = state.filteredCountries;
      }
      return {
        ...state,
        filteredCountries: sortered,
      };
    default:
      return state;
  }
};

export default reducer;
