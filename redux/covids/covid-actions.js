import COVID_TYPES from './covid-types';

const getGlobalDataStarted = () => {
  return {
    type: COVID_TYPES.GET_GLOBAL_DATA_STARTED,
  };
};

const getGlobalDataSuccess = (globalData) => {
  return {
    type: COVID_TYPES.GET_GLOBAL_DATA_SUCCESS,
    payload: globalData,
  };
};

const getGlobalDataFailure = (error) => {
  return {
    type: COVID_TYPES.GET_GLOBAL_DATA_FAILURE,
    payload: error,
  };
};

export const getGlobalData = () => {
  return dispatch => {
    dispatch(getGlobalDataStarted());
    return fetch('https://covid19.mathdro.id/api')
      .then((response) => response.json())
      .then((data) => dispatch(getGlobalDataSuccess(data)))
      .catch((error) => dispatch(getGlobalDataFailure(error)));
  };
};

const getCountryListStarted = () => ({
  type: COVID_TYPES.GET_COUNTRY_LIST_STARTED,
});

const getCountryListSuccess = (countryList) => ({
  type: COVID_TYPES.GET_COUNTRY_LIST_SUCCESS,
  payload: countryList,
});

const getCountryListFailure = (error) => ({
  type: COVID_TYPES.GET_COUNTRY_LIST_FAILURE,
  payload: error,
});

export const getCountryList = () => (
  dispatch => {
    dispatch(getCountryListStarted());
    return fetch('https://covid19.mathdro.id/api/countries')
      .then((response) => response.json())
      .then((data) => dispatch(getCountryListSuccess(data)))
      .catch((error) => dispatch(getCountryListFailure(error)));
  }
);

const getCountryDataStarted = () => ({
  type: COVID_TYPES.GET_COUNTRY_DATA_STARTED,
});

const getCountryDataSuccess = (countryData) => ({
  type: COVID_TYPES.GET_COUNTRY_DATA_SUCCESS,
  payload: countryData,
});

const getCountryDataFailure = (error) => ({
  type: COVID_TYPES.GET_COUNTRY_DATA_FAILURE,
  payload: error,
});

export const getCountryData = (countryName) => (
  dispatch => {
    dispatch(getCountryDataStarted());
    return fetch(`https://covid19.mathdro.id/api/countries/${countryName}`)
      .then((response) => response.json())
      .then((data) => dispatch(getCountryDataSuccess(data)))
      .catch((error) => dispatch(getCountryDataFailure(error)));
  }
);
