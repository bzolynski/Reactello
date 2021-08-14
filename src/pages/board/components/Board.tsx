import { FC, useEffect } from 'react';
import { Box } from '@material-ui/core';
import { getSectionsForBoard } from '../../../store/actions/sectionActions';
import { useDispatch, useSelector } from 'react-redux';
import SectionList from '../components/SectionList';
import { Store } from '../../../store/reducers/reducers';
import { BoardState } from '../../../store/reducers/boardReducer';

type GetSectionsForBoard = ReturnType<typeof getSectionsForBoard>;

const Board: FC = () => {
	const { currentBoard } = useSelector<Store, BoardState>((state) => ({ ...state.boardReducer }));
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch<GetSectionsForBoard>(getSectionsForBoard(currentBoard!.id));
	}, []);

	return (
		<Box display="flex">
			<SectionList />
		</Box>
	);
};

export default Board;
