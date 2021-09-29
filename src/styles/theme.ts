import { createTheme } from '@mui/material/';
import { DefaultTheme } from 'styled-components';

const muiTheme = createTheme({
	palette: {
		primary: {
			main: '#3F525B',
			dark: '#172a32',
			light: '#6a7e88'
		},
		secondary: {
			main: '#7b7b7b',
			dark: '#4f4f4f',
			light: '#aaaaaa'
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
		},
		shape: {
			borderRadius: '4px',
			getBorderRadius: (num : number) => (`${4 * num}px`)
		}
	};
	return customTheme;
};

export const customTheme = getCustomTheme();
