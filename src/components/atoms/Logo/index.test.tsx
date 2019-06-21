import React from 'react';
import { shallow } from 'enzyme';
import Logo from './index';

describe('Logo', () => {

	const props = {
		className: "logo-image",
		src: "logo.png",
		alt: "This is a logo",
	};
	const wrapper = shallow(<Logo {...props} />);

	it('renders', () => {
		expect(wrapper.exists()).toBe(true);
	});

});
