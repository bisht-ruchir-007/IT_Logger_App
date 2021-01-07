import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Logitem from './Logitem';
import Preloader from '../layout/Preloader';
import PropTypes from 'prop-types';
import { getLogs } from '../../actions/logActions';

const Logs = ({ log: { logs, loading }, getLogs }) => {
	useEffect(() => {
		getLogs();
		// eslint-disable-next-line
	}, []);

	if (loading || logs === null) {
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

Logs.prototype = {
	log: PropTypes.object.isRequired
};

// state.log is taken from cmponents/reducers/index.js (Root Reducer)
const mapStateToProps = (state) => ({
	log: state.log
});

// connect mapStatetoProps , actions...
export default connect(mapStateToProps, { getLogs })(Logs);
