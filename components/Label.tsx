import * as React from 'react';
import styled from "styled-components";
import { rem } from '../utils';

type LabelProps = React.HTMLAttributes<HTMLLabelElement> & {
    text: string
}

const Component: React.FC<LabelProps> = ({text, className, ...rest}) => (
    <label className={className} {...rest}>{text}</label>
)

export const Label = styled(Component)({
    fontSize: rem(16),
    lineHeight: rem(20),
    fontWeight: 600,
    color: 'blue' 
});