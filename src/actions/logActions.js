import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG } from './types';

// Get all the logs from backend
// export const getLogs = () => {
// 	// redux thungs is usd to make a async-await call
// 	return async (dispatch) => {
// 		setLoading();
// 		const res = await fetch('http://localhost:5000/logs');
// 		const data = await res.json();

// 		dispatch({
// 			type: GET_LOGS,
// 			payload: data
// 		});
// 	};
// };

// Get all the logs from server (backend)
export const getLogs = () => async (dispatch) => {
	try {
		setLoading();
		const res = await fetch('http://localhost:5000/logs');
		const data = await res.json();

		dispatch({
			type: GET_LOGS,
			payload: data
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.data
		});
	}
};

//add new log
export const addLog = (log) => async (dispatch) => {
	try {
		setLoading();
		const res = await fetch('http://localhost:5000/logs', {
			method: 'POST',
			body: JSON.stringify(log),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const data = await res.json();

		dispatch({
			type: ADD_LOG,
			payload: data
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.data
		});
	}
};

// Set loading to true
export const setLoading = () => {
	return {
		type: SET_LOADING
	};
};
