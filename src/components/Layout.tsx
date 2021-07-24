import { Container, Toolbar } from '@material-ui/core';
import { FC } from 'react';
import TopBar from './TopBar';

const Layout: FC = ({ children }) => {
	return (
		<div>
			<Container>
				<TopBar />
				<Toolbar />
				{children}
			</Container>
		</div>
	);
};

export default Layout;
