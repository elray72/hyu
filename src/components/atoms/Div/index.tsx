import * as React from 'react';
import styled from 'styled-components';

interface IProps {
	className?: string,
	theme?: string,
}

const Wrapper = styled.div``;

export const Div: React.FC<IProps> = (props) => {
	return <Wrapper {...props} />
};

export default Div;

