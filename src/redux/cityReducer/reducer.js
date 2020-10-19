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

const initState = {
  cities: [],
  filtered: [],
  city: [],
  rows_per_page: 5,
  page: 1,
};

export const cityReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_CITY_REQUEST: {
      console.log(type, payload);
      return { ...state };
    }

    case ADD_CITY_SUCCESS: {
      console.log(type, payload);

      const city = payload;
      return {
        ...state,
        cities: [...state.cities, city],
        filtered: [...state.cities, city],
      };
    }

    case ADD_CITY_FAILURE: {
      console.log(type, payload);
      return { ...state };
    }

    case GET_CITIES_REQUEST: {
      console.log(type);
      return {
        ...state,
      };
    }
    case GET_CITIES_SUCCESS: {
      console.log(type, payload);

      return {
        ...state,
        cities: [...payload],
        filtered: payload.filter((a, i) => i < 5),
      };
    }

    case GET_CITIES_FAILURE: {
      console.log(type, payload);
      return {
        ...state,
      };
    }

    case SORT_DATA: {
      console.log(type, payload);
      const { name, value, data } = payload;

      data.sort((a, b) => {
        if (value === "Ascending") {
          if (name === "population") {
            return a.population - b.population;
          } else if (name === "average_income") {
            return a.average_income - b.average_income;
          }
        } else if (value === "Descending") {
          if (name === "population") {
            return b.population - a.population;
          } else if (name === "average_income") {
            return b.average_income - a.average_income;
          }
        }
        return data;
      });
      return {
        ...state,
        cities: [...data],
        filtered: [...data],
      };
    }

    case FILTER_BY_COUNTRY: {
      console.log(type, payload);
      const { value } = payload;
      let newData = state.cities.filter((ele) => ele.country === value);
      console.log("newData", newData);
      return {
        ...state,
        cities: [...state.cities],
        filtered: [...newData],
      };
    }

    case GET_CITY_REQUEST: {
      console.log(type, payload);
      return {
        ...state,
      };
    }

    case GET_CITY_SUCCESS: {
      console.log(type, payload);
      return {
        ...state,
        city: payload,
      };
    }

    case GET_CITY_FAILURE: {
      console.log(type, payload);
      return {
        ...state,
      };
    }

    case DELETE_CITY_REQUEST: {
      console.log(type, payload);
      return {
        ...state,
      };
    }

    case DELETE_CITY_SUCCESS: {
      console.log(type, payload);
      return {
        ...state,
        filtered: payload,
      };
    }

    case DELETE_CITY_FAILURE: {
      console.log(type, payload);
      return {
        ...state,
      };
    }

    case UPDATE_CITY_REQUEST: {
      console.log(type, payload);
      return {
        ...state,
      };
    }

    case UPDATE_CITY_SUCCESS: {
      console.log(type, payload);
      return {
        ...state,
        filtered: payload,
      };
    }

    case UPDATE_CITY_FAILURE: {
      console.log(type, payload);
      return {
        ...state,
      };
    }

    case ITEMS_PER_PAGE_REQUEST: {
      console.log(type, payload);
      return {
        ...state,
      };
    }

    case ITEMS_PER_PAGE_SUCESS: {
      console.log(type, payload);
      return {
        ...state,
        filtered: payload.data,
        cities: state.cities,
        rows_per_page: payload.per_page,
      };
    }

    case ITEMS_PER_PAGE_FAILURE: {
      console.log(type, payload);
      return {
        ...state,
      };
    }

    case PAGE_CHANGE_REQUEST : {
      console.log(type, payload);
      return {
        ...state,
      }
    }

    case PAGE_CHANGE_SUCCESS : {
      console.log(type, payload);
      return {
        ...state,
        filtered: payload.data, 
        rows_per_page: payload.per_page
      }
    }

    case PAGE_CHANGE_FAILURE : {
      console.log(type, payload);
      return {
        ...state,
      }
    }


    default:
      return { ...state };
  }
};
