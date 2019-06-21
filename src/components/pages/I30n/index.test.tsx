import React from 'react';
import { shallow } from 'enzyme';
import I30n from './index';

describe('I30n', () => {

	const props = {
		children: "HeroBlade content",
		className: "tile",
		bladeName: "hero-blade",
		theme: "default",
		textColour: "black",
		bgColour: "white",
	};
	const wrapper = shallow(<I30n {...props} />);

	it('renders', () => {
		expect(wrapper.exists()).toBe(true);
	});

});
