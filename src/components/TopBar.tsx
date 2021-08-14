import * as Mui from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { FC } from 'react';
import PlainLink from './PlainLink';

const useStyles = makeStyles({
	toolBar: {
		minHeight: 55
	}
});
const TopBar: FC = () => {
	const styles = useStyles();
	return (
		<Mui.AppBar position="fixed">
			<Mui.Toolbar className={styles.toolBar}>
				<Mui.IconButton edge="start" color="inherit" aria-label="menu">
					<MenuIcon />
				</Mui.IconButton>
				<Mui.Typography variant="h6">Reactello</Mui.Typography>
				<Mui.Button color="inherit">Login</Mui.Button>
				<PlainLink to="/boards">
					<Mui.Button color="inherit">Boards</Mui.Button>
				</PlainLink>
			</Mui.Toolbar>
		</Mui.AppBar>
	);
};

export default TopBar;
