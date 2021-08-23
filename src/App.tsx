import { FC } from 'react';
import Layout from './components/Layout';
import BoardListingPage from './pages/board-listing';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { createStyles, makeStyles, ThemeProvider } from '@material-ui/core';
import BoardPage from './pages/board';
import ModalSwitch from './components/ModalSwitch';
import * as Mui from '@material-ui/core';
import BoardForm from './pages/board-listing/components/BoardForm';
import Note from './pages/board/components/Note';
import { theme } from './mui-styles/index';
const useStyles = makeStyles((theme: Mui.Theme) =>
	createStyles({
		paper: {
			width: 300,
			backgroundColor: theme.palette.background.paper,
			padding: theme.spacing(2, 4, 3)
		}
	})
);

const App: FC = () => {
	const classes = useStyles();
	return (
		<ThemeProvider theme={theme}>
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
						<Mui.Paper className={classes.paper}>
							<BoardForm />
						</Mui.Paper>
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
