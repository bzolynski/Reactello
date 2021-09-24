import { FC } from 'react';
import Layout from 'components/Layout';
import BoardListingPage from 'pages/board-listing';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BoardPage from 'pages/board';
import ModalSwitch from 'components/ModalSwitch';
import * as Mui from '@mui/material';
import BoardForm from 'pages/board-listing/components/BoardForm';
import Note from 'pages/board/components/Note';
import { ThemeProvider } from 'styled-components';
import { customTheme } from 'styles/index';
import styled from 'styled-components';

const BoardFormWrapper = styled(Mui.Paper)(({ theme }) => ({
	width: 300,
	backgroundColor: theme.palette.background.paper,
	padding: theme.spacing(2, 4, 3)
}));

const App: FC = () => {
	return (
		<ThemeProvider theme={customTheme}>
			<Router>
				<Switch>
					<Layout>
						<Route path={'/boards'}>
							<BoardListingPage />
						</Route>
						<Route path={'/board/:id'}>
							<BoardPage />
						</Route>
					</Layout>
				</Switch>
				<ModalSwitch>
					<Route exact path={'/boards/m/create'}>
						<BoardFormWrapper>
							<BoardForm />
						</BoardFormWrapper>
					</Route>
					<Route path={'/board/:id/m/note/:id'}>
						<Note />
					</Route>
				</ModalSwitch>
			</Router>
		</ThemeProvider>
	);
};

export default App;
