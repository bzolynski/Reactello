import { AppBar, Box, Button, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { FC } from 'react';

const useStyles = makeStyles({
	toolBar: {
		minHeight: 55
	}
});
const TopBar: FC = () => {
	const styles = useStyles();
	return (
		<AppBar position="fixed">
			<Toolbar className={styles.toolBar}>
				<IconButton edge="start" color="inherit" aria-label="menu">
					<MenuIcon />
				</IconButton>
				<Typography variant="h6">Reactello</Typography>
				<Button color="inherit">Login</Button>
			</Toolbar>
		</AppBar>
	);
};

export default TopBar;
