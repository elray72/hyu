import * as React from 'react';
import styled from 'styled-components';

interface IProps {
	className?: string,
	src: string | undefined,
	alt: string,
}

export const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
`;

export const Image = styled.img`
	display: block;
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const BgImage: React.FC<IProps> = (props) => {

	return (
		<Wrapper className={props.className}>
			<Image src={props.src} alt={props.alt} />
		</Wrapper>
	);
};

export default BgImage;
