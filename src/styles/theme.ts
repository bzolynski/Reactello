import { createTheme } from '@mui/material/';
import { DefaultTheme } from 'styled-components';

const muiTheme = createTheme({
	palette: {
		primary: {
			main: '#3F525B',
			dark: '#334147'
		},
		secondary: {
			main: '#7b7b7b',
			dark: '6e6e6e'
		},
		custom: {
			noteSectionBackground: '#F9FAFB'
		}
	}
});

const getCustomTheme = (): DefaultTheme => {
	const customTheme: DefaultTheme = {
		...muiTheme,
		transition: {
			hoverBase: 'ease-in-out 0.2s'
		}
	};
	return customTheme;
};

export const customTheme = getCustomTheme();
