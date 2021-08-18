import { Box, CircularProgress } from '@material-ui/core';
import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { NormalizedBoard } from '../../models/normalizedModels';
import { BoardState } from '../../store/reducers/boardReducer';
import { Store } from '../../store/reducers/reducers';
import SectionList from './components/SectionList';

type Props = {};
const BoardPage: FC<Props> = () => {
	//dispatch<SetCurrentBoard>(setCurrentBoard(boardId));

	const board = useSelector<Store, NormalizedBoard>(
		(state) => state.boardReducer.items[state.boardReducer.currentBoard!]
	);
	const params = useParams<{ id: string }>();
	const dispatch = useDispatch();
	const id = Number.parseInt(params.id);
	useEffect(() => {
		//dispatch<SetCurrentBoard>(setCurrentBoard(boardId));
	}, []);

	const renderBoard = () => {
		if (board == null || board.id !== id) {
			return <CircularProgress />;
		} else {
			return (
				<Box display="flex">
					<SectionList />
				</Box>
			);
		}
	};

	return <Box mt={5}>{renderBoard}</Box>;
};

export default BoardPage;
