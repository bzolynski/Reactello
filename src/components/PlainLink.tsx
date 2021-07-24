import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
	root: {
		textDecoration: 'none',
		fontSize: 'inherit',
		color: 'inherit',
		fontWeight: 'inherit',
		'&:hover': {
			textDecoration: 'none'
		}
	}
});

type Props = {
	to: string;
};

export const PlainLink: FC<Props> = ({ to, children }) => {
	const classes = useStyles();
	return (
		<Link className={classes.root} component={RouterLink} to={to}>
			{children}
		</Link>
	);
};

export default PlainLink;
