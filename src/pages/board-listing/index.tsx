import * as Mui from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { FC, useEffect } from 'react';
import BoardCard from './components/BoardCard';
import { useDispatch, useSelector } from 'react-redux';
import { getBoardListings } from '../../store/actions/boardActions';
import { Store } from '../../store/reducers/reducers';
import { BoardState } from '../../store/reducers/boardReducer';
import CircularProgress from '@material-ui/core/CircularProgress';
import BoardForm from './components/BoardForm';
import Modal from '../../components/Modal';
import AddIcon from '@material-ui/icons/Add';
import { openModal } from '../../store/actions/modalActions';

type GetBoardListings = ReturnType<typeof getBoardListings>;
type OpenModal = ReturnType<typeof openModal>;

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		paper: {
			width: 300,
			backgroundColor: theme.palette.background.paper,
			padding: theme.spacing(2, 4, 3)
		}
	})
);

const BoardListingPage: FC = () => {
	const { boardListings: boards } = useSelector<Store, BoardState>((state) => ({ ...state.boardReducer }));
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch<GetBoardListings>(getBoardListings());
	}, []);

	const classes = useStyles();

	const renderBoardCards = () => {
		if (boards.length > 0) {
			return boards.map((board) => (
				<Mui.Grid key={board.id} xs={4} item>
					<BoardCard board={board} />
				</Mui.Grid>
			));
		} else {
			return <CircularProgress />;
		}
	};
	return (
		<Mui.Box mt={5}>
			<Mui.Grid container>
				<Mui.Grid item container xs={3}>
					<p>lorem100 </p>
				</Mui.Grid>
				<Mui.Grid item container xs={9} spacing={1}>
					{renderBoardCards()}
					<Mui.Grid xs={4} item>
						<Mui.Card>
							<Mui.CardActionArea onClick={() => dispatch<OpenModal>(openModal())}>
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
			<Modal>
				<Mui.Paper className={classes.paper}>
					<BoardForm />
				</Mui.Paper>
			</Modal>
		</Mui.Box>
	);
};

export default BoardListingPage;
