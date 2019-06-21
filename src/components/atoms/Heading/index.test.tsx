import React from 'react';
import { shallow } from 'enzyme';
import Heading from './index';

describe('Heading', () => {

	const wrapper = shallow(<Heading tagName="h1" />);

	it('renders', () => {
		expect(wrapper.exists()).toBe(true);
	});

});
