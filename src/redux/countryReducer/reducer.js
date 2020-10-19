import {
  GET_COUNTRIES_REQUEST,
  GET_COUNTRIES_SUCCESS,
  GET_COUNTRIES_FAILURE,
  ADD_COUNTRY_REQUEST,
  ADD_COUNTRY_SUCCESS,
  ADD_COUNTRY_FAILURE,
} from "./actionTypes";

const initState = {
  countries: [],
};

export const countryReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_COUNTRIES_REQUEST:
      console.log(type);
      return {
        ...state,
      };

    case GET_COUNTRIES_SUCCESS:
      console.log(type, payload);

      let keys = payload.map((item) => item.country);
      return {
        ...state,
        countries: [...keys],
      };

    case GET_COUNTRIES_FAILURE:
      console.log(type, payload);
      return {
        ...state,
      };

    case ADD_COUNTRY_REQUEST:
      console.log(type, payload);
      return {
        ...state,
      };

    case ADD_COUNTRY_SUCCESS:
      console.log(type, payload);
      let newCountry = payload.country;
      return {
        ...state,
        countries: [...state.countries, newCountry],
      };

    case ADD_COUNTRY_FAILURE: {
      console.log(type, payload);
      return {
        ...state,
      };
    }
    default:
      return { ...state };
  }
};
