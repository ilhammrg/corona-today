import COVID_TYPES from './covid-types';

const INITIAL_STATE = {
  globalSummary: {
    totalConfirmed: '',
    totalRecovered: '',
    totalDeaths: '',
    lastUpdate: '',
  },
  countryList : [],
  countrySummary: {
    totalConfirmed: '',
    totalRecovered: '',
    totalDeaths: '',
    lastUpdate: '',
  },
  error: null,
};

const covidReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case COVID_TYPES.GET_GLOBAL_DATA_STARTED:
    case COVID_TYPES.GET_COUNTRY_LIST_STARTED:
    case COVID_TYPES.GET_COUNTRY_DATA_STARTED:
      return {
        ...state,
        error: null,
      };
    case COVID_TYPES.GET_GLOBAL_DATA_SUCCESS:
      return {
        ...state,
        globalSummary: {
          totalConfirmed: action.payload.confirmed.value,
          totalRecovered: action.payload.recovered.value,
          totalDeaths: action.payload.deaths.value,
          lastUpdate: action.payload.lastUpdate,
        },
        error: null,
      };
    case COVID_TYPES.GET_COUNTRY_LIST_SUCCESS:
      return {
        ...state,
        countryList: action.payload.countries,
        error: null,
      };
    case COVID_TYPES.GET_COUNTRY_DATA_SUCCESS:
      return {
        ...state,
        countrySummary: {
          totalConfirmed: action.payload.confirmed.value,
          totalRecovered: action.payload.recovered.value,
          totalDeaths: action.payload.deaths.value,
          lastUpdate: action.payload.lastUpdate,
        },
        error: null,
      }
    case COVID_TYPES.GET_GLOBAL_DATA_FAILURE:
    case COVID_TYPES.GET_COUNTRY_LIST_FAILURE:
    case COVID_TYPES.GET_COUNTRY_DATA_FAILURE:
      return {
        ...state,
        error: 'Failed to load data',
      };
    default:
      return state;
  }
};

export default covidReducer;
