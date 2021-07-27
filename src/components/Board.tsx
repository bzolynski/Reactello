import { FC, useEffect } from 'react';
import { BoardPage as BoardModel } from '../models/board';
import { Box } from '@material-ui/core';
import { getSectionsForBoard } from '../store/actions/sectionActions';
import { useDispatch } from 'react-redux';
import SectionList from '../components/SectionList';

type GetSectionsForBoard = ReturnType<typeof getSectionsForBoard>;

type Props = {
	board: BoardModel;
};
const Board: FC<Props> = ({ board }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch<GetSectionsForBoard>(getSectionsForBoard(board.id));
	}, []);

	return (
		<Box display="flex">
			<SectionList boardId={board.id} />
		</Box>
	);
};

export default Board;
