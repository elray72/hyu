import * as React from 'react';
import { Helmet } from 'react-helmet';

import Page from '../../templates/Page';
import Blade from '../../organisms/Blade';

export default class I30n extends React.PureComponent {
	render() {
		const title: string = 'Designer';

		return (
			<Page className="page page--placeholder">
				<Helmet>
					<title>{title}</title>
					<meta name="description" content="Home" />
				</Helmet>
				<Blade>
					<h1>{title}</h1>
				</Blade>
			</Page>
		);
	}
}
