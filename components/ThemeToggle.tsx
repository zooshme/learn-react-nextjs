import * as React from 'react';
import styled from 'styled-components';


type ThemeToggleProps = React.HTMLAttributes<HTMLDivElement> & {
    checked: boolean;
}

const Component: React.FC<ThemeToggleProps> = ({ className }) => (
    <div className={className}>
        <div className="indicator"></div>
    </div>
)

export const ThemeToggle = styled(Component)(({ theme, checked }) => {
    const wrapper = {
        width: '90px',
        height: '50px',
        borderRadius: '40px',
        //border: `1px solid rgba(0,0,0,.25)`, // ${theme.borderColor},
        position: 'relative',
        boxShadow: '0 3px 5px rgba(0,0,0,.15)',
        padding: '5px',
        backgroundColor: 'white' // theme.backgroundColor
    };

    let indicator = {
        width: '40px',
        height: '40px',
        borderRadius: '40px',
        backgroundColor: 'black', // theme.highlightColor1,
        position: 'absolute',
        left: '5px',
        right: 'initial',
        top: '5px'
    }

    if (checked) {
        indicator = {
            ...indicator,
            left: 'initial',
            right: '5px',
            backgroundColor: 'blue' // theme.highlightColor2,
        }
    }

    return {
        ...wrapper,
        '.indicator': indicator
    }


})