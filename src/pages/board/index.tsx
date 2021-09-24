import { Box, CircularProgress } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { NormalizedBoard } from 'models/normalizedModels';
import { Store } from 'store/reducers/reducers';
import SectionList from './components/SectionList';

type Props = {};
const BoardPage: FC<Props> = () => {
	const board = useSelector<Store, NormalizedBoard>(
		(state) => state.boardReducer.items[state.boardReducer.currentBoard!]
	);
	const params = useParams<{ id: string }>();
	const id = Number.parseInt(params.id);

	if (board == null || board.id !== id) return <CircularProgress />;

	return (
		<Box mt={5}>
			<Box display="flex">
				<SectionList />
			</Box>
		</Box>
	);
};

export default BoardPage;
