import { Container, Toolbar } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { FC, ReactNode } from 'react';
import TopBar from './TopBar';

type Props = { children: ReactNode };
const Layout: FC<Props> = (props: Props) => {
	return (
		<Container>
			<TopBar />
			<Toolbar />
			{props.children}
		</Container>
	);
};

export default Layout;
