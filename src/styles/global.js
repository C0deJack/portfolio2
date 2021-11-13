import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

	html,
	body {
		margin: 0;
		padding: 0;
		/* prevent side scroll on IPhones */
		max-width: 100% !important;
		overflow-x: hidden !important;
	}

	body {
		min-width: 315px;
	}

	*, *::after, *::before {
		box-sizing: border-box;
	}

	body {
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
	/* text-rendering: optimizeLegibility; */
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	
	/* global styles set as light theme initially */
	background-color: ${props => props.theme.color.background};
	color: ${props => props.theme.color.foreground};
}

/* @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@900&display=swap'); */

h1, h2, h3, h4, h5, h6 {
		font-family: "Poppins", sans-serif;
		color: ${props => props.theme.color.foreground};
		font-weight: 700;
	}
`;
