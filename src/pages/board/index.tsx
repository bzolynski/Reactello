import { Box, CircularProgress } from '@material-ui/core';
import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getBoard } from '../../store/actions/boardActions';
import { BoardState } from '../../store/reducers/boardReducer';
import { Store } from '../../store/reducers/reducers';
import Board from './components/Board';

type GetBoard = ReturnType<typeof getBoard>;

type Props = {};
const BoardPage: FC<Props> = () => {
	const { currentBoard } = useSelector<Store, BoardState>((state) => ({ ...state.boardReducer }));
	const params = useParams<{ id: string }>();
	const dispatch = useDispatch();
	const id = Number.parseInt(params.id);
	useEffect(() => {
		dispatch<GetBoard>(getBoard(id));
	}, []);

	const renderBoard = () => {
		if (currentBoard == null) {
			return <CircularProgress />;
		} else {
			return <Board />;
		}
	};

	return <Box mt={5}>{renderBoard}</Box>;
};

export default BoardPage;
