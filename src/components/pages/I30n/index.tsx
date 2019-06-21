import * as React from 'react';
import { Helmet } from 'react-helmet';

import Page from '../../templates/Page';
import Blade from '../../organisms/Blade';
import Heading from '../../atoms/Heading';

export default class I30n extends React.PureComponent {
	render() {
		const title: string = 'i30n';

		return (
			<Page className="page page--placeholder">
				<Helmet>
					<title>{title}</title>
				</Helmet>
				<Blade>
					<Heading tagName="h1">i30n</Heading>
				</Blade>
			</Page>
		);
	}
}
