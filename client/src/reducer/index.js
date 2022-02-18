const initialState = {
  countries: [],
  filteredCountries: [],
  seachedCountries: [],
  country: {},
  activity: {},
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
      let filtered;
      let stateToFilter;
      if (action.isSearch) {
        stateToFilter = state.seachedCountries;
      } else {
        stateToFilter = state.countries;
      }
      filtered =
        action.payload === "All"
          ? stateToFilter
          : stateToFilter.filter((country) =>
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

    case "SEARCH_COUNTRIES":
      console.log(action.payload);
      return {
        ...state,
        filteredCountries: action.payload,
        seachedCountries: action.payload,
      };

    case "RESET_SEARCH":
      return {
        ...state,
        filteredCountries: state.countries,
        seachedCountries: [],
      };
    case "CREATE_ACTIVITY":
      return {
        ...state,
        activity: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
