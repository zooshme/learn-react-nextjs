import * as React from 'react'
import styled from 'styled-components';
import { rem, fontFamily } from '../utils';

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
	level: 1 | 2 | 3 | 4 | 5 | 6
}

const Component: React.FC<HeadingProps> = ({ level, ...rest }) => {
	return React.createElement(`h${level}`, rest)
};

export const Heading = styled(Component)(({ level }) => {
    const shared = {
        fontFamily
    }
	switch(level) {
		case 1:
			return {
                ...shared,
				fontSize: rem(68),
				lineHeight: rem(70),
				fontWeight: 600
			}
		case 2:
			return {
                ...shared,
				fontSize: rem(42),
				lineHeight: rem(50),
				fontWeight: 600
			}
		case 3:
			return {
                ...shared,
				fontSize: rem(26),
				lineHeight: rem(30),
				fontWeight: 600
			}
		default: 
			return {
                ...shared,
				fontSize: rem(16),
				lineHeight: rem(20),
				fontWeight: 600
			}
	}
})