import COVID_TYPES from './covid-types';

const INITIAL_STATE = {
  globalConfirmed: '',
  globalRecovered: '',
  globalDeaths: '',
  error: null,
};

const covidReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case COVID_TYPES.GET_GLOBAL_DATA_STARTED:
      return {
        ...state,
        globalConfirmed: 'Loading...',
        globalRecovered: 'Loading...',
        globalDeaths: 'Loading...',
      };
    case COVID_TYPES.GET_GLOBAL_DATA_SUCCESS:
      return {
        ...state,
        globalConfirmed: action.payload.confirmed.value,
        globalRecovered: action.payload.recovered.value,
        globalDeaths: action.payload.deaths.value,
      };
    case COVID_TYPES.GET_GLOBAL_DATA_FAILURE:
      return {
        ...state,
        error: 'Failed to get covid data :(',
        globalConfirmed: 'Failed to get covid data :(',
        globalRecovered: 'Failed to get covid data :(',
        globalDeaths: 'Failed to get covid data :(',
      };
    default:
      return state;
  }
};

export default covidReducer;
