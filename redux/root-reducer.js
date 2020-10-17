import { combineReducers } from 'redux';

import themeReducer from './theme/theme-reducer';
import covidReducer from './covids/covid-reducer';

const rootReducer = combineReducers({
  theme: themeReducer,
  covids: covidReducer,
});

export default rootReducer;
