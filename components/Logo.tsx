import * as React from 'react';
import styled from "styled-components";
import { rem } from '../utils';

type LogoProps = React.HTMLAttributes<HTMLAnchorElement> & {
	theme: 'light' | 'dark'
}

const Component: React.FC<LogoProps> = ({ className }) => (
	<a className={className} href="/">Learn React</a>
)

export const Logo = styled(Component)(({ theme }) => {
	const shared = {
		textDecoration: 'none',
		color: 'white',
		fontSize: rem(26),
		fontWeight: 600
	}

	if (theme === 'light') {
		return {
			...shared,
			color: 'black'
		}
	} else {
		return {
			...shared,
			color: 'white'
		}
	}
});