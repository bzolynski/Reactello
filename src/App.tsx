import { FC } from 'react';
import Layout from './components/Layout';
import BoardListingPage from './pages/BoardListingPage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import BoardPage from './pages/BoardPage';

const App: FC = () => {
	return (
		<Router>
			<Switch>
				<Layout>
					
					<Route exact path={'/boards'}>
						<BoardListingPage />
					</Route>
					<Route path={'/boards/:id'}>
						<BoardPage />
					</Route>
				</Layout>
			</Switch>
		</Router>
	);
};

export default App;
