import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import {
  GET_COUNTRIES_REQUEST,
  GET_COUNTRIES_SUCCESS,
  GET_COUNTRIES_FAILURE,
  ADD_COUNTRY_REQUEST,
  ADD_COUNTRY_SUCCESS,
  ADD_COUNTRY_FAILURE,
} from "./actionTypes";

export const getCountriesRequest = (payload) => ({
  type: GET_COUNTRIES_REQUEST,
  payload,
});

export const getCountriesSuccess = (payload) => ({
  type: GET_COUNTRIES_SUCCESS,
  payload,
});

export const getCountriesFailure = (payload) => ({
  type: GET_COUNTRIES_FAILURE,
  payload,
});

export const getCountries = () => async (dispatch) => {
  dispatch(getCountriesRequest());

  try {
    const countries = await axios.get("http://localhost:3000/countries");
    dispatch(getCountriesSuccess(countries.data));
  } catch (err) {
    dispatch(getCountriesFailure(err));
  }
};

export const addCountryRequest = (payload) => ({
  type: ADD_COUNTRY_REQUEST,
  payload,
});

export const addCountrySuccess = (payload) => ({
  type: ADD_COUNTRY_SUCCESS,
  payload,
});

export const addCountryFailure = (payload) => ({
  type: ADD_COUNTRY_FAILURE,
  payload,
});

export const addCountry = (payload) => async (dispatch) => {
  dispatch(addCountryRequest());

  try {
    const country = await axios.post(
      "http://localhost:3000/countries", {
        id: uuidv4(),
        country: payload
      }
      
    );
    dispatch(addCountrySuccess(country.data));
  } catch (err) {
    dispatch(addCountryFailure(err));
  }

  return;
};
