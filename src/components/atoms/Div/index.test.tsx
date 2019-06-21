import React from 'react';
import { shallow } from 'enzyme';
import Div from './index';

describe('Div', () => {

	const props = {
		className: "div",
		theme: "default",
	};
	const wrapper = shallow(<Div {...props} />);

	it('renders', () => {
		expect(wrapper.exists()).toBe(true);
	});

});
