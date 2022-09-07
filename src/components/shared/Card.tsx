import styled from 'styled-components';

type CardProps = {
	padding?: 'large';
	margin?: 'large';
	direction?: 'column';
	justify?: 'around' | 'between' | 'center' | 'end';
	align?: 'around' | 'between' | 'center' | 'end';
};

export const Card = styled.div<CardProps>`
	background-color: #ffffff;
	border-radius: 20px;
	padding: ${(props: any) => {
		if (props.padding === 'large') return '22px 35px 46px 35px';
		return '16px 32px';
	}};
	flex-direction: ${(props: any) => {
		if (props.direction === 'column') return 'column';
		return 'row';
	}};
	margin: ${(props: any) => {
		if (props.margin === 'large') return '2rem 0';
		return '1rem 0';
	}};
	display: flex;
	justify-content: ${(props: any) => {
		if (props.justify === 'around') return 'space-around';
		if (props.justify === 'between') return 'space-between';
		if (props.justify === 'center') return 'center';
		if (props.justify === 'end') return 'end';
		return 'start';
	}};
	align-items: ${(props: any) => {
		if (props.align === 'around') return 'space-around';
		if (props.align === 'between') return 'space-between';
		if (props.align === 'center') return 'center';
		if (props.align === 'end') return 'end';
		return 'start';
	}};
`;
