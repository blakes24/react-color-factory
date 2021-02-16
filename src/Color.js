import { useParams, Redirect, Link } from 'react-router-dom';
import './Color.css';

const Color = ({ colors }) => {
	const { color } = useParams();
	const currColor = colors.filter((c) => c.name === color)[0];
	if (!currColor) return <Redirect to="/colors" />;
	return (
		<div className="Color" style={{ backgroundColor: currColor.color }}>
			<div className="Color-text">
				<h1>{currColor.name}</h1>
				<Link to="/colors">Back</Link>
			</div>
		</div>
	);
};

export default Color;
