import { FC } from 'react';
import * as Mui from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme: Mui.Theme) =>
	createStyles({
		paper: {
			margin: 8,
			marginTop: 6,
			marginBottom: 6,
			'& li': {
				borderRadius: 'inherit'
			}
		}
	})
);
const NoteListingWrapper: FC = ({ children }) => {
	const classes = useStyles();

	return (
		<Mui.Paper elevation={2} className={classes.paper}>
			{children}
		</Mui.Paper>
	);
};

export default NoteListingWrapper;
