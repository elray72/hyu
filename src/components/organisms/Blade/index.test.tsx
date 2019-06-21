import React from 'react';
import { shallow } from 'enzyme';
import Blade from './index';

describe('Blade', () => {

	const props = {
		children: "Blade content",
		className: "tile",
		bladeName: "blade",
		theme: "default",
		textColour: "black",
		bgColour: "white",
	};
	const wrapper = shallow(<Blade {...props} />);

	it('renders', () => {
		expect(wrapper.exists()).toBe(true);
	});

});
