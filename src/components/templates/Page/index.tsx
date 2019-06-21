import * as React from 'react';
import styled from 'styled-components';

interface IProps {
	className?: string,
	theme?: string,
}

const Div = styled.div`
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	
	&.page {
		&--placeholder {
			.story {
				text-align: center;
			}
		}
	}
`;

export const Page: React.FC<IProps> = (props) => {
	return <Div {...props} />
};

Page.defaultProps = {
	className: 'page',
	theme: 'hyu',
};

export default Page;
