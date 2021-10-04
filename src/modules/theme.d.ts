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

	export type Variant = 'spread';
}

declare module '@mui/system/' {
	export interface Theme {
		typography: {
			spread: {
				letterSpacing: '0.02em';
				fontSize: '13px';
				lineHeight: '1';
			};
		};
	}
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
		sizes: {
			topBar: string;
		};
		
	}
}
