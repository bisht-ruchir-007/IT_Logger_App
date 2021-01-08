import React from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { deleteLog, updateLog, setCurrent } from '../../actions/logActions';

import M from 'materialize-css/dist/js/materialize.min.js';

const Logitem = ({ log, deleteLog, setCurrent }) => {
	const onDelete = () => {
		deleteLog(log.id);
		M.toast({ html: `Log with ID : ${log.id} is Deleted.` });
	};

	return (
		<li className='collection-item'>
			<div>
				<a
					href='#edit-log-model'
					className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`}
					onClick={() => setCurrent(log)}
				>
					{log.message}
				</a>
				<br />
				<span className='grey-text'>
					<span className='black-text'>ID #{log.id}</span> last updated by {' '}
					<span className='black-text'>{log.tech}</span> on{' '}
					<Moment parse='DD-MM-YYYYTHH:mm:ss' format='MMMM Do, YYYY, h:mm a'>
						{log.date}
					</Moment>
					<a href='#!' className='secondary-content' onClick={onDelete}>
						<i className='material-icons grey-text'>delete</i>
					</a>
				</span>
			</div>
		</li>
	);
};

Logitem.propTypes = {
	log: PropTypes.object.isRequired,
	deleteLog: PropTypes.func.isRequired,
	setCurrent: PropTypes.func.isRequired
};

export default connect(null, { deleteLog, setCurrent })(Logitem);
