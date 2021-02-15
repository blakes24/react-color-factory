import { useParams, Redirect } from 'react-router-dom';

const Color = ({ colors }) => {
	const { color } = useParams();
	const currColor = colors.filter((c) => c.name === color)[0];
	if (!currColor) return <Redirect to="/colors" />;
	return (
		<div className="Color" style={{ backgroundColor: currColor.color }}>
			<h1>{currColor.name}</h1>
		</div>
	);
};

export default Color;
