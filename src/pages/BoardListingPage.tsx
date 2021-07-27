import {
	Box,
	Card,
	CardActionArea,
	CardActions,
	createStyles,
	Grid,
	Icon,
	makeStyles,
	Paper,
	Theme,
	Typography
} from '@material-ui/core';
import { FC, useEffect } from 'react';
import BoardCard from '../components/BoardCard';
import { useDispatch, useSelector } from 'react-redux';
import { getBoardListings } from '../store/actions/boardActions';
import { Store } from '../store/reducers/reducers';
import { BoardState } from '../store/reducers/boardReducer';
import CircularProgress from '@material-ui/core/CircularProgress';
import BoardForm from '../components/BoardForm';
import RouterModal from '../components/RouterModal';
import AddIcon from '@material-ui/icons/Add';
import { openModal } from '../store/actions/modalActions';

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
				<Grid key={board.id} xs={4} item>
					<BoardCard board={board} />
				</Grid>
			));
		} else {
			return <CircularProgress />;
		}
	};
	return (
		<Box mt={5}>
			<Grid container>
				<Grid item container xs={3}>
					<p>lorem100 </p>
				</Grid>
				<Grid item container xs={9} spacing={1}>
					{renderBoardCards()}
					<Grid xs={4} item>
						<Card>
							<CardActionArea onClick={() => dispatch<OpenModal>(openModal())}>
								<CardActions>
									<Icon aria-label="add new board">
										<AddIcon />
									</Icon>
									<Typography>Add new board</Typography>
								</CardActions>
							</CardActionArea>
						</Card>
					</Grid>
				</Grid>
			</Grid>
			<RouterModal>
				<Paper className={classes.paper}>
					<BoardForm />
				</Paper>
			</RouterModal>
		</Box>
	);
};

export default BoardListingPage;
