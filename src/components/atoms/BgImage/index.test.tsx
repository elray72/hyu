import React from 'react';
import { shallow } from 'enzyme';
import BgImage from './index';

describe('BgImage', () => {

	const props = {
		className: "bg-image",
		src: "image.jpg",
		alt: "This is an image",
	};
	const wrapper = shallow(<BgImage {...props} />);

	it('renders', () => {
		expect(wrapper.exists()).toBe(true);
	});

});
