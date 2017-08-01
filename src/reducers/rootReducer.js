import { combineReducers } from 'redux';
import foodsReducer from './foodsReducer';
import consumationReducer from './consumationReducer';

export default combineReducers({foodsReducer,consumationReducer});