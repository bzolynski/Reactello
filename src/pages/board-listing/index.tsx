import * as Mui from '@mui/material';
import { FC, useEffect } from 'react';
import BoardCard from './components/BoardCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBoards } from 'store/actions/boardActions';
import { Store } from 'store/reducers/reducers';
import { BoardState } from 'store/reducers/boardReducer';
import CircularProgress from '@mui/material/CircularProgress';
import AddIcon from '@mui/icons-material/Add';
import { openModal } from 'store/actions/modalActions';

type GetBoardListings = ReturnType<typeof getAllBoards>;
type OpenModal = ReturnType<typeof openModal>;

const BoardListingPage: FC = () => {
	const { itemIds: boardIds } = useSelector<Store, BoardState>((state) => ({ ...state.boardReducer }));
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch<GetBoardListings>(getAllBoards());
	}, []);

	const renderBoardCards = () => {
		if (boardIds.length > 0) {
			return boardIds.map((id) => (
				<Mui.Grid key={id} xs={3} item>
					<BoardCard boardId={id} />
				</Mui.Grid>
			));
		} else {
			return <CircularProgress />;
		}
	};
	const handleOpenModal = () => {
		dispatch<OpenModal>(openModal(`/boards/m/create`));
	};
	return (
		<div>
			<Mui.Grid container>
				<Mui.Grid item container xs={3}>
					<p>lorem100 </p>
				</Mui.Grid>
				<Mui.Grid item container xs={9} spacing={1}>
					{renderBoardCards()}
					<Mui.Grid xs={3} item>
						<Mui.Card>
							<Mui.CardActionArea onClick={handleOpenModal}>
								<Mui.CardActions>
									<Mui.Icon aria-label="add new board">
										<AddIcon />
									</Mui.Icon>
									<Mui.Typography>Add new board</Mui.Typography>
								</Mui.CardActions>
							</Mui.CardActionArea>
						</Mui.Card>
					</Mui.Grid>
				</Mui.Grid>
			</Mui.Grid>
			{/* <Modal>
				<Mui.Paper className={classes.paper}>
					<BoardForm />
				</Mui.Paper>
			</Modal> */}
		</div>
	);
};

export default BoardListingPage;
