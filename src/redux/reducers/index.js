import {combineReducers} from 'redux';
import AppReducer from './AppReducer.js';
import RandomUserReducer from './RandomUserReducer.js';
import NavigateReducers from './NavigationReducer';

export default combineReducers({
  app: AppReducer,
  randomUser: RandomUserReducer,
  nav: NavigateReducers,
});
