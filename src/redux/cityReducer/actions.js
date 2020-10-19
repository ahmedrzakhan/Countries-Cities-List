import axios from "axios";
import {
  ADD_CITY_REQUEST,
  ADD_CITY_SUCCESS,
  ADD_CITY_FAILURE,
  GET_CITIES_REQUEST,
  GET_CITIES_SUCCESS,
  GET_CITIES_FAILURE,
  SORT_DATA,
  FILTER_BY_COUNTRY,
  GET_CITY_REQUEST,
  GET_CITY_SUCCESS,
  GET_CITY_FAILURE,
  DELETE_CITY_REQUEST,
  DELETE_CITY_SUCCESS,
  DELETE_CITY_FAILURE,
  UPDATE_CITY_REQUEST,
  UPDATE_CITY_SUCCESS,
  UPDATE_CITY_FAILURE,
  ITEMS_PER_PAGE_REQUEST,
  ITEMS_PER_PAGE_SUCESS,
  ITEMS_PER_PAGE_FAILURE,
  PAGE_CHANGE_REQUEST,
  PAGE_CHANGE_SUCCESS,
  PAGE_CHANGE_FAILURE
} from "./actionTypes";

export const addCityRequest = (payload) => ({
  type: ADD_CITY_REQUEST,
  payload,
});

export const addCitySuccess = (payload) => ({
  type: ADD_CITY_SUCCESS,
  payload,
});

export const addCityFailure = (payload) => ({
  type: ADD_CITY_FAILURE,
  payload,
});

export const addCity = (payload) => async (dispatch) => {
  dispatch(addCityRequest);

  try {
    const city = await axios.post("http://localhost:3000/cities", payload);
    dispatch(addCitySuccess(city.data));
  } catch (err) {
    dispatch(addCityFailure(err));
  }
};

export const getCitiesRequest = (payload) => ({
  type: GET_CITIES_REQUEST,
  payload,
});

export const getCitiesSuccess = (payload) => ({
  type: GET_CITIES_SUCCESS,
  payload,
});

export const getCitiesFailure = (payload) => ({
  type: GET_CITIES_FAILURE,
  payload,
});

export const getCities = () => async (dispatch) => {
  dispatch(getCitiesRequest());

  try {
    const cities = await axios.get("http://localhost:3000/cities");

    dispatch(getCitiesSuccess(cities.data));
  } catch (err) {
    dispatch(getCitiesFailure);
  }
};

export const sortData = (payload) => ({
  type: SORT_DATA,
  payload,
});

export const filterByCountry = (payload) => ({
  type: FILTER_BY_COUNTRY,
  payload,
});

export const getCityRequest = (payload) => ({
  type: GET_CITY_REQUEST,
  payload,
});

export const getCitySuccess = (payload) => ({
  type: GET_CITY_SUCCESS,
  payload,
});

export const getCityFailure = (payload) => ({
  type: GET_CITY_FAILURE,
  payload,
});

export const getCity = (payload) => async (dispatch) => {
  dispatch(getCityRequest);

  try {
    const city = await axios.get(
      `http://localhost:3000/cities?city=${payload}`
    );
    dispatch(getCitySuccess(city.data));
  } catch (err) {
    dispatch(getCityFailure(err));
  }
};

export const deleteCityRequest = (payload) => ({
  type: DELETE_CITY_REQUEST,
  payload,
});

export const deleteCitySuccess = (payload) => ({
  type: DELETE_CITY_SUCCESS,
  payload,
});

export const deleteCityFailure = (payload) => ({
  type: DELETE_CITY_FAILURE,
  payload,
});

export const deleteCity = (payload) => async (dispatch, getState) => {
  dispatch(deleteCityRequest(payload));

  try {
    const { city } = getState();
    const { cities } = city;
    await axios.delete(`http://localhost:3000/cities/${payload}`);
    const data = cities.filter((item) => item.id !== payload);
    dispatch(deleteCitySuccess(data));
  } catch (err) {
    dispatch(deleteCityFailure(err));
  }
};

export const updateCityRequest = (payload) => ({
  type: UPDATE_CITY_REQUEST,
  payload,
});

export const updateCitySuccess = (payload) => ({
  type: UPDATE_CITY_SUCCESS,
  payload,
});

export const updateCityFailure = (payload) => ({
  type: UPDATE_CITY_FAILURE,
  payload,
});

export const updateCity = (payload) => async (dispatch, getState) => {
  dispatch(updateCityRequest(payload));

  const config = {
    method: "put",
    url: `http://localhost:3000/cities/${payload.id}`,
    headers: {
      "Content-Type": "application/json",
    },
    data: payload,
  };

  try {
    const { city } = getState();
    const { cities } = city;
    const response = await axios(config);
    const data = cities.map((item) =>
      item.id === payload.id ? response.data : item
    );
    dispatch(updateCitySuccess(data));
  } catch (err) {
    dispatch(updateCityFailure(err));
  }
};

export const itemsPerPageRequest = (payload) => ({
  type: ITEMS_PER_PAGE_REQUEST,
  payload,
});

export const itemsPerPageSuccess = (payload) => ({
  type: ITEMS_PER_PAGE_SUCESS,
  payload,
});

export const itemsPerPageFailure = (payload) => ({
  type: ITEMS_PER_PAGE_FAILURE,
  payload,
});

export const itemsPerPage = (payload) => async (dispatch) => {
  dispatch(itemsPerPageRequest(payload));
  const config = {
    method: "get",
    url: `http://localhost:3000/cities?_page=${payload.page}&_limit=${payload.per_page}`,
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await axios(config);
    dispatch(
      itemsPerPageSuccess({ per_page: payload.per_page, data: response.data })
    );
  } catch (err) {
    dispatch(itemsPerPageFailure(err));
  }
};


export const pageChangeRequest = (payload) => ({
  type: PAGE_CHANGE_REQUEST,
  payload,
});

export const pageChangeSuccess = (payload) => ({
  type: PAGE_CHANGE_SUCCESS,
  payload,
});

export const pageChangeFailure = (payload) => ({
  type: PAGE_CHANGE_FAILURE,
  payload,
});

export const pageChange = (payload) => async (dispatch) => {
  dispatch(pageChangeRequest(payload));
  const config = {
    method: "get",
    url: `http://localhost:3000/cities?_page=${payload.page}&_limit=${payload.per_page}`,
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await axios(config);
    dispatch(
      pageChangeSuccess({ per_page: payload.per_page, data: response.data })
    );
  } catch (err) {
    dispatch(pageChangeFailure(err));
  }
};
