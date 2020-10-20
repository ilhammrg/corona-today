import COVID_TYPES from './covid-types';

export const getCountryListSuccess = (countryList) => ({
  type: COVID_TYPES.GET_COUNTRY_LIST_SUCCESS,
  payload: countryList,
});

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
