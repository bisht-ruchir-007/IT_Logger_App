// root reducers
import { combineReducers } from 'redux';
import logReducers from './logReducer';

// state : stateReducr
export default combineReducers({
	log: logReducers
});
