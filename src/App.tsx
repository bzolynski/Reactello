import React, { FC, useEffect } from 'react';
import Layout from './components/Layout';
import { CreateBoard } from './models/board';
import BoardPage from './pages/BoardPage';
import dataService from './services/dataService';

const App: FC = () => {
	return (
		<Layout>
			<BoardPage />
		</Layout>
	);
};

export default App;
