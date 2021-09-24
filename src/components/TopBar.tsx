import * as Mui from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { FC } from 'react';
import PlainLink from './PlainLink';
import Search from './Search';
import styled from 'styled-components';

const ToolBarContainer = styled(Mui.Toolbar)(({ theme }) => ({
	minHeight: 55,
	background: theme.palette.primary.main
}));
const TopBar: FC = () => {
	return (
		<Mui.AppBar position="fixed">
			<ToolBarContainer>
				<Mui.IconButton edge="start" color="inherit" aria-label="menu">
					<MenuIcon />
				</Mui.IconButton>
				<Mui.Typography variant="h6">Reactello</Mui.Typography>
				<Mui.Button color="inherit">Login</Mui.Button>
				<PlainLink to="/boards">
					<Mui.Button color="inherit">Boards</Mui.Button>
				</PlainLink>
				<Search />
			</ToolBarContainer>
		</Mui.AppBar>
	);
};

export default TopBar;
