import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import 'sanitize.css';
import '../themes/v1/scss/style.scss';

// Components
import I30n from './pages/I30n/index';
import Designer from './pages/Designer/index';

const App: React.FC = () => {
	return (
		<React.Fragment>
			<Helmet titleTemplate="SWM | %s" defaultTitle="SWM">
				<meta name="description" content="" />
			</Helmet>
			<main className="main">
				<Switch>
					<Route exact path="/" component={I30n} />
					<Route exact path="/hyu" component={I30n} />
					<Route exact path="/hyu/i30n" component={I30n} />
					<Route exact path="/hyu/designer" component={Designer} />
				</Switch>
			</main>
		</React.Fragment>
	);
};

export default App;
