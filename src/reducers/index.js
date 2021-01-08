// root reducers
import { combineReducers } from 'redux';
import logReducers from './logReducer';
import techReducers from './techReducer';

// state : stateReducr
export default combineReducers({
	log: logReducers,
	tech: techReducers
});
