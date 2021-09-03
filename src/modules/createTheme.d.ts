import '@material-ui/core/';

declare module '@material-ui/core/' {
	interface Theme {
		customColors: {
			noteSectionBackground: string;
		};
	}
	interface ThemeOptions {
		customColors?: {
			noteSectionBackground?: string;
		};
	}
}
