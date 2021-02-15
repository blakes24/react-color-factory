import { Link } from 'react-router-dom';
import './ColorFactory.css';

const ColorFactory = ({ colors }) => {
	return (
		<div className="ColorFactory">
			<header>
				<h1>Welcome to the Color Factory</h1>
				<Link to="colors/new" className="ColorFactory-add">
					Add a color
				</Link>
			</header>
			<h2>Select a color.</h2>
			<ul>
				{colors.map((color, idx) => (
					<li key={idx}>
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
