import React from 'react';
import { shallow } from 'enzyme';
import Tile from './index';

describe('Tile', () => {

	const props = {
		children: "Tile content",
		className: "tile",
		theme: "default",
		textColour: "black",
		bgColour: "white",
	};
	const wrapper = shallow(<Tile {...props} />);

	it('renders', () => {
		expect(wrapper.exists()).toBe(true);
	});

});
