import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
const EditLogmodal = () => {
	const [ message, setMessage ] = useState('');
	const [ attention, setAttention ] = useState(false);
	const [ tech, setTech ] = useState('');

	const onSubmit = () => {
		if (message === '' || tech === '') {
			M.toast({
				html: 'Please Enter a message and Technician'
			});
		} else {
			console.log(message, tech, attention);
			// Clear Log fields
			setMessage('');
			setTech('');
			setAttention(false);
		}
	};

	return (
		<div id='edit-log-model' className='modal' style={modalStyle}>
			<div className='modal-content'>
				<h4>Edit System Log</h4>
				<div className='row'>
					<div className='input-field'>
						<input
							type='text'
							name='message'
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						/>
						<label htmlFor='message' className='active'>
							Log Message
						</label>
					</div>
				</div>
				<div className='row'>
					<div className='input-field'>
						<select
							name='tech'
							value={tech}
							className='browser-default'
							onChange={(e) => setTech(e.target.value)}
						>
							<option value='' disable>
								Select a Technician
							</option>
							<option value='John Deo'>John Deo</option>
							<option value='Sam Smith'>Sam Smith</option>
							<option value='Sara Williams'>Sara Williams</option>
						</select>
						<label htmlFor='message' className='active'>
							Log Message
						</label>
					</div>
				</div>
				<div className='row'>
					<div className='input-field'>
						<p>
							<label>
								<input
									type='checkbox'
									className='filled-in'
									checked={attention}
									value={attention}
									onChange={(e) => setAttention(!attention)}
								/>
								<span>Needs Attention</span>
							</label>
						</p>
					</div>
				</div>
			</div>
			<div className='modal-footer'>
				<a href='#!' onClick={onSubmit} className='modal-close waves-effect blue waves-light btn'>
					Enter
				</a>
			</div>
		</div>
	);
};

const modalStyle = {
	height: '75%',
	width: '75%'
};
export default EditLogmodal;
