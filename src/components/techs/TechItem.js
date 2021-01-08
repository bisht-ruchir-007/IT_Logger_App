import React from 'react';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import { deleteTech } from '../../actions/techActions';

const TechItem = ({ tech: { firstname, lastname, id }, deleteTech }) => {
	const onDelete = () => {
		deleteTech(id);
		M.toast({
			html: `${firstname} ${lastname} deleted from the Technician List`
		});
	};
	return (
		<li className='collection-item'>
			<div>
				{firstname} {lastname}
				<a href='#!' className='secondary-content' onClick={onDelete}>
					<i className='material-icons grey-text'>delete</i>
				</a>
			</div>
		</li>
	);
};

TechItem.propTypes = {
	tech: PropTypes.object.isRequired,
	deleteTech: PropTypes.func.isRequired
};

export default connect(null, { deleteTech })(TechItem);
