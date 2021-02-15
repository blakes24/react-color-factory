import { Link } from 'react-router-dom';

const ColorFactory = ({ colors }) => {
	return (
		<div>
			<header>
				<h1>Welcome to the Color Factory</h1>
				<Link to="colors/new">Add a color</Link>
			</header>
			<p>Select a color.</p>
			<ul>
				{colors.map((color) => (
					<li>
						<Link to={`colors/${color.name}`}>{color.name}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

ColorFactory.defaultProps = {
	colorList : [ { name: 'red', color: 'red' }, { name: 'green', color: 'green' }, { name: 'blue', color: 'blue' } ]
};

export default ColorFactory;
