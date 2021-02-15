import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

const ColorForm = ({ addColor }) => {
	const [ formData, setFormData ] = useState({ name: '', color: '#000000' });
	const history = useHistory();

	const handleChange = (evt) => {
		const { name, value } = evt.target;
		setFormData((formData) => ({
			...formData,
			[name] : value
		}));
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();
		addColor(formData);
		history.push('/colors');
	};

	return (
		<div className="ColorForm">
			<h1>Add a Color</h1>
			<form onSubmit={handleSubmit} className="ColorForm-form">
				<label htmlFor="name">Name: </label>
				<input
					onChange={handleChange}
					name="name"
					id="name"
					type="text"
					value={formData.name}
					placeholder="Enter a name"
				/>
				<label htmlFor="color">Color: </label>
				<input onChange={handleChange} name="color" id="color" type="color" value={formData.color} />
				<button>Add Color</button>
			</form>
			<Link to="/colors">Back</Link>
		</div>
	);
};

export default ColorForm;
