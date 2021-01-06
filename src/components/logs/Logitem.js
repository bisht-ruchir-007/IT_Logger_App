import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

const Logitem = ({ log }) => {
	return (
		<li className='collection-item'>
			<div>
				<a href='#edit-log-model' className={`model-trigger ${log.attention ? 'red-text' : 'blue-text'}`}>
					{log.message}
				</a>
				<br />
				<span className='grey-text'>
					<span className='black-text'>ID #{log.id}</span> last updated by {' '}
					<span className='black-text'>{log.tech}</span> on{' '}
					<Moment parse='DD-MM-YYYYTHH:mm:ss' format='MMMM Do, YYYY, h:mm a'>
						{log.date}
					</Moment>
					<a href='' className='secondary-content'>
						<i className='material-icons grey-text'>delete</i>
					</a>
				</span>
			</div>
		</li>
	);
};

Logitem.propTypes = {
	log: PropTypes.object.isRequired
};

export default Logitem;
