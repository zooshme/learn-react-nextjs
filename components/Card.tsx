import * as React from "react";
import styled from "styled-components";
import { Heading } from './Heading';
import { rem } from '../utils';

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
	title: string;
	subtitle?: string;
	actions?: any;
}

const Component: React.FC<CardProps> = ({
	className,
	title,
	subtitle,
	actions
}) => (
		<div className={className}>
			<header className="header">
				<Heading level={3}>{title}</Heading>
				{subtitle && <Heading level={4}>{subtitle}</Heading>}
			</header>
			<main>

			</main>
			{actions && (<footer>
                {actions}
			</footer>)}
		</div>
	)

export const Card = styled(Component)(() => ({
	backgroundColor: 'white',
	padding: rem(20),
    borderRadius: '6px',
    boxShadow: '0 2px 3px rgba(0,0,0,.15)'
}));


