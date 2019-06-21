import * as React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

interface IProps {
	children?: React.ReactNode,
	className?: string,
	bladeName?: string,
	theme?: string,
	textColour?: string,
	bgColour?: string,
}

const Stage = styled.section``;

const Story = styled.div``;

export const Blade: React.FC<IProps> = (props) => {
	const bladeName: string = props.bladeName || 'blade';
	const bladeClass: string = classNames(`stage ${bladeName}`, props.className);

	return (
		<Stage className={bladeClass}>
			<Story className="story">
				{props.children}
			</Story>
		</Stage>
	)
};

export default Blade;
