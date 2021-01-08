import {
	GET_LOGS,
	SET_LOADING,
	LOGS_ERROR,
	ADD_LOG,
	UPDATE_LOG,
	DELETE_LOG,
	SET_CURRENT,
	CLEAR_CURRENT,
	SEARCH_LOGS
} from './types';

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

// Update log from server (backend)
export const updateLog = (log) => async (dispatch) => {
	try {
		setLoading();
		const res = await fetch(`http://localhost:5000/logs/${log.id}`, {
			method: 'PUT',
			body: JSON.stringify(log),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const data = await res.json();

		dispatch({
			type: UPDATE_LOG,
			payload: data
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.data
		});
	}
};

// Delete log from server (backend)
export const deleteLog = (id) => async (dispatch) => {
	try {
		setLoading();
		await fetch(`http://localhost:5000/logs/${id}`, {
			method: 'DELETE'
		});

		dispatch({
			type: DELETE_LOG,
			payload: id
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.data
		});
	}
};

// Search server logs
export const searchLogs = (text) => async (dispatch) => {
	try {
		setLoading();
		const res = await fetch(`http://localhost:5000/logs?q=${text}`);
		const data = await res.json();

		dispatch({
			type: SEARCH_LOGS,
			payload: data
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.data
		});
	}
};

// Set current Log
export const setCurrent = (log) => {
	return {
		type: SET_CURRENT,
		payload: log
	};
};

// Clear current Log
export const clearCurrent = () => {
	return {
		type: CLEAR_CURRENT
	};
};

// Set loading to true
export const setLoading = () => {
	return {
		type: SET_LOADING
	};
};
