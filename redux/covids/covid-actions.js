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
