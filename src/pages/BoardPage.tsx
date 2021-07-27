import { Box, CircularProgress, Grid, Typography } from '@material-ui/core';
import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getBoard } from '../store/actions/boardActions';
import { BoardState } from '../store/reducers/boardReducer';
import { Store } from '../store/reducers/reducers';
import Board from '../components/Board';

type GetBoard = ReturnType<typeof getBoard>;

type Props = {};
const BoardPage: FC<Props> = () => {
	const [ hasError, setHasError ] = useState<boolean>(false);
	const { board } = useSelector<Store, BoardState>((state) => ({ ...state.boardReducer }));
	
	const params = useParams<{ id: string }>();

	const dispatch = useDispatch();

	useEffect(() => {
		try {
			let id: number = Number.parseInt(params.id);
			dispatch<GetBoard>(getBoard(id));
			setHasError(false);
		} catch (ex) {
			console.log(ex.message);
			setHasError(true);
		}
	}, []);

	const renderBoard = () => {
		if (hasError) {
			return <a>Something went wrong. TODO: Custom error</a>;
		} else {
			if (board == null) {
				return <CircularProgress />;
			} else {
				return <Board board={board} />;
			}
		}
	};

	return <Box mt={5}>{renderBoard}</Box>;
};

export default BoardPage;
