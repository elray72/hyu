import * as React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

interface IProps {
	children?: React.ReactNode,
	className?: string,
	theme?: string,
	textColour?: string,
	bgColour?: string,
}

const Wrapper = styled.div``;

export const Tile: React.FC<IProps> = (props) => {
	const componentClass: string = classNames('tile', props.className);

	return (
		<Wrapper className={componentClass}>
		</Wrapper>
	)
};

export default Tile;
