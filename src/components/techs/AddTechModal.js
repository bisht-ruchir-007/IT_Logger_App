import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTechs } from '../../actions/techActions';

const AddTechmodal = ({ addTechs }) => {
	const [ firstname, setFirstname ] = useState('');
	const [ lastname, setLastname ] = useState('');

	const onSubmit = () => {
		if (firstname === '' || lastname === '') {
			M.toast({
				html: 'Please Enter FirstName & LastName of the Technician'
			});
		} else {
			const newTech = {
				firstname,
				lastname
			};
			addTechs(newTech);
			// Clear Log fields
			M.toast({
				html: `New Technician Added : ${firstname} ${lastname}`
			});
			setFirstname('');
			setLastname('');
		}
	};

	return (
		<div id='tech-modal' className='modal'>
			<div className='modal-content'>
				<h4>New Technician </h4>
				<div className='row'>
					<div className='input-field'>
						<input
							type='text'
							name='firstname'
							value={firstname}
							onChange={(e) => setFirstname(e.target.value)}
						/>
						<label htmlFor='firstname' className='active'>
							Firstname
						</label>
					</div>
				</div>
				<div className='row'>
					<div className='input-field'>
						<input
							type='text'
							name='lastname'
							value={lastname}
							onChange={(e) => setLastname(e.target.value)}
						/>
						<label htmlFor='lastname' className='active'>
							Lastname
						</label>
					</div>
				</div>
			</div>
			<div className='modal-footer'>
				<a href='#!' onClick={onSubmit} className='modal-close waves-effect blue waves-light btn'>
					Add
				</a>
			</div>
		</div>
	);
};

AddTechmodal.prototype = {
	addTechs: PropTypes.func.isRequired
};

export default connect(null, { addTechs })(AddTechmodal);
