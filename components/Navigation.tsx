import * as React from 'react';
import styled from 'styled-components';
import { rem } from '../utils';

type NavigationProps = React.HTMLAttributes<HTMLElement> & {
	theme: 'light' | 'dark'
}

const Component: React.FC<NavigationProps> = ({ className }) => (
	<nav className={className}>
		<a href="/">Home</a>
		<a href="/lessons">Lessons</a>
		<a href="/notes">Notes</a>
	</nav>
)

export const Navigation = styled(Component)(({ theme }) => {
	const shared = {
		a: {
			fontSize: rem(16),
			lineHeight: rem(20),
			textDecoration: 'none',
			marginLeft: rem(26),

			':first-child': {
				marginLeft: 0
			}
		}
	}
	if (theme === 'light') {
		return {
			a: {
				...shared.a,
				color: 'black'
			}
		}
	} else {
		return {
			a: {
				...shared.a,
				color: 'white'
			}
		}
	}
});
