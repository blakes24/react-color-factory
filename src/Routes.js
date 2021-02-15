import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ColorFactory from './ColorFactory';
import Color from './Color';
import ColorForm from './ColorForm';

const Routes = ({ colorList }) => {
	const [ colors, setColors ] = useState(colorList);

	const addColor = (newColor) => {
		setColors([ ...colors, newColor ]);
	};

	return (
		<Switch>
			<Route exact path="/colors/new">
				<ColorForm addColor={addColor} />
			</Route>
			<Route exact path="/colors/:color">
				<Color colors={colors} />
			</Route>
			<Route exact path="/colors">
				<ColorFactory colors={colors} />
			</Route>
			<Redirect to="/colors" />
		</Switch>
	);
};

Routes.defaultProps = {
	colorList : [ { name: 'red', color: 'red' }, { name: 'green', color: 'green' }, { name: 'blue', color: 'blue' } ]
};

export default Routes;
