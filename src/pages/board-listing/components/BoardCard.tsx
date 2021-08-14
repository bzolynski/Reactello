import * as Mui from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import StarIcon from '@material-ui/icons/Star';
import ShareIcon from '@material-ui/icons/ShareOutlined';
import React, { FC } from 'react';
import tempBG from '../../../assets/tempBG.jpg';
import { BoardListing } from '../../../models/board';
import { useHistory } from 'react-router';
import { getBoard } from '../../../store/actions/boardActions';
import { useDispatch } from 'react-redux';

type GetBoard = ReturnType<typeof getBoard>;

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		card: {
			maxWidth: '100%'
		},
		media: {
			height: 80
		},
		header: {
			padding: 10
		}
	})
);

const buttonInCardActionArea = {
	onMouseDown: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => event.stopPropagation(),
	onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.stopPropagation();
		event.preventDefault();
	}
};

type Props = {
	board: BoardListing;
};
const BoardCard: FC<Props> = ({ board }) => {
	const classes = useStyles();
	const history = useHistory();
	const dispatch = useDispatch();
	const redirectToBoard = () => {
		dispatch<GetBoard>(getBoard(board.id));
		history.push(`/boards/${board.id}/${board.name}`);
	};
	return (
		<Mui.Box>
			<Mui.Card className={classes.card}>
				<Mui.CardActionArea component="div" onClick={redirectToBoard}>
					<Mui.CardHeader
						className={classes.header}
						action={
							<Mui.IconButton {...buttonInCardActionArea} size="small" aria-label="settings">
								<MoreVertIcon />
							</Mui.IconButton>
						}
						title={board.name}
						subheader="TODO: data utworzenia(?)"
						titleTypographyProps={{ variant: 'subtitle2' }}
						subheaderTypographyProps={{ variant: 'caption' }}
					/>
					<Mui.CardMedia className={classes.media} image={tempBG} />
					<Mui.CardActions>
						<Mui.IconButton size="small" aria-label="add to favorites">
							<StarIcon fontSize="small" />
						</Mui.IconButton>
						<Mui.IconButton size="small" aria-label="share">
							<ShareIcon fontSize="small" />
						</Mui.IconButton>
					</Mui.CardActions>
				</Mui.CardActionArea>
			</Mui.Card>
		</Mui.Box>
	);
};

export default BoardCard;
