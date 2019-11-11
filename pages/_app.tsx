import React from 'react'
import App from 'next/app'
import { ThemeProvider } from 'styled-components'
import { AppProvider } from '../contexts/AppContext'

const themes = {
    light: {

    },
    dark: {

    }
}

export default class MyApp extends App<{}, {}, { themeName: string }> {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }
        return { pageProps }
    }

    constructor(props) {
        super(props);

        this.state = {
            themeName: 'light'
        }
    }

    render() {
        const { Component, pageProps } = this.props
        const value = {
            themeName: this.state.themeName,
            setThemeName: (themeName) => {
                this.setState({
                    themeName
                })
            }
        }

        return (
            <AppProvider value={value}>
                <ThemeProvider theme={themes[this.state.themeName]}>
                    <Component {...pageProps} />
                </ThemeProvider>
            </AppProvider>
        )
    }
}