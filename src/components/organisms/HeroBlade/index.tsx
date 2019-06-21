import * as React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import Blade from '../Blade';

interface IProps {
	children?: React.ReactNode,
	className?: string,
	name?: string,
	theme?: string,
	textColour?: string,
	bgColour?: string,
}

const Wrapper = styled(Blade)``;

export const HeroBlade: React.FC<IProps> = (props) => {
	const componentClass: string = classNames(props.className, 'tile');

	return (
		<Wrapper className={componentClass}>
			{props.children}
		</Wrapper>
	)
};

export default HeroBlade;
