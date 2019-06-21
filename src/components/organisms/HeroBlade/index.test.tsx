import React from 'react';
import { shallow } from 'enzyme';
import HeroBlade from './index';

describe('HeroBlade', () => {

	const props = {
		children: "HeroBlade content",
		className: "tile",
		bladeName: "hero-blade",
		theme: "default",
		textColour: "black",
		bgColour: "white",
	};
	const wrapper = shallow(<HeroBlade {...props} />);

	it('renders', () => {
		expect(wrapper.exists()).toBe(true);
	});

});
