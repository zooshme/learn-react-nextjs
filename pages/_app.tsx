import React from "react";
import App from "next/app";
import { ThemeProvider } from "styled-components";
import AppContext, { AppProvider } from "../contexts/AppContext";
import { createGlobalStyle } from "styled-components";

const themes = {
  light: {
    backgroundColor: 'white',
    color: 'black',
    highlightColor: 'black'
  },
  dark: {
    backgroundColor: 'black',
    color: 'white',
    highlightColor: 'blue'
  }
};

const GlobalStyles = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;

export default class MyApp extends App<{}, {}, { themeName: string }> {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  constructor(props) {
    super(props);

    this.state = {
      themeName: "light"
    };
  }

  render() {
    const { Component, pageProps } = this.props;
    const value = {
      themeName: this.state.themeName,
      setThemeName: themeName => {
        this.setState({
          themeName
        });
      }
    };

    return (
      <AppProvider value={value}>
        <GlobalStyles />
        <ThemeProvider theme={themes[this.state.themeName]}>
          <Component {...pageProps} />
        </ThemeProvider>
      </AppProvider>
    );
  }
}
