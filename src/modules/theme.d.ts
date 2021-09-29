import { Palette } from '@mui/material';
import { Theme as MuiTheme } from '@mui/system/';
import 'styled-components';
import '@mui/system/';
import '@mui/material/styles';

/* mui */
declare module '@mui/material/styles' {
	export interface PaletteOptions {
		custom?: {
			noteSectionBackground?: string;
		};
	}

	export interface Palette {
		custom: {
			noteSectionBackground: string;
		};
	}
}

declare module '@mui/system/' {
	export interface Theme {}
	export interface ThemeOptions {}
}
/* styled-components */
declare module 'styled-components' {
	export interface DefaultTheme extends MuiTheme {
		palette: Palette;
		transition: {
			hoverBase: string;
		};
		shape: {
			borderRadius: '4px';
			getBorderRadius: (num: number) => string;
		};
	}
}
