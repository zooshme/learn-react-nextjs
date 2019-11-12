import * as React from 'react';
import styled from 'styled-components';
import AppContext from '../contexts/AppContext';


type ThemeToggleProps = React.HTMLAttributes<HTMLDivElement> & {
    themeName: string;
}


const ChildComponent = ({ className }) => (
    <div className={className}>
        <div className="indicator"></div>
    </div>
)

const StyledChildComponent = styled(ChildComponent)(({ theme, themeName }) => {
    const wrapper = {
        width: '90px',
        height: '50px',
        borderRadius: '40px',
        position: 'relative',
        boxShadow: '0 3px 5px rgba(0,0,0,.15)',
        padding: '5px',
        backgroundColor: theme.backgroundColor
    };

    let indicator = {
        width: '40px',
        height: '40px',
        borderRadius: '40px',
        backgroundColor: theme.highlightColor,
        position: 'absolute',
        left: '5px',
        right: 'initial',
        top: '5px'
    }

    if (themeName === 'dark') {
        indicator = {
            ...indicator,
            left: 'initial',
            right: '5px',
            backgroundColor: theme.highlightColor,
        }
    }

    return {
        ...wrapper,
        '.indicator': indicator
    }
})


export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className }) => {
    const { setThemeName, themeName } = React.useContext(AppContext)

    return <div onClick={(e) => {
        setThemeName(themeName === 'light' ? 'dark' : 'light');
    }}><StyledChildComponent themeName={themeName} /></div>
}