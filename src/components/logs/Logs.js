import React, { useState, useEffect } from 'react';
import Logitem from './Logitem';
import Preloader from '../layout/Preloader';

const Logs = () => {
	const [ logs, setLogs ] = useState([]);
	const [ loading, setLoading ] = useState(false);

	useEffect(() => {
		getLogs();
		// eslint-disable-next-line
	}, []);
	const getLogs = async () => {
		setLoading(true);

		const res = await fetch('http://localhost:5000/logs');
		const data = await res.json();
		setLogs(data); //store "logs" from db.json to state
		setLoading(false);
	};

	if (loading) {
		return <Preloader />;
	}

	return (
		<ul className='collection with-header'>
			<li className='collection-header'>
				<h4 className='center'>System Logs</h4>
			</li>
			{!loading && logs.length === 0 ? (
				<p className='center'>No Logs Found ...</p>
			) : (
				logs.map((log) => <Logitem log={log} key={log.id} />)
			)}
		</ul>
	);
};

export default Logs;
