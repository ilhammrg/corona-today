import THEME_TYPES from './theme-types';
import { LIGHT_THEME, DARK_THEME } from './theme-data';

const INITIAL_STATE = {
  darkTheme: false,
  themes: LIGHT_THEME,
};

const themeReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case THEME_TYPES.SWITCH_LIGHT:
      return {
        ...state,
        darkTheme: false,
        themes: LIGHT_THEME,
      };
    case THEME_TYPES.SWITCH_DARK:
      return {
        ...state,
        darkTheme: true,
        themes: DARK_THEME,
      };
    default:
      return state;
  }
};

export default themeReducer;
