import * as Mui from '@mui/material';
import { createStyles, makeStyles, Theme } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import ShareIcon from '@mui/icons-material/ShareOutlined';
import React, { FC } from 'react';
import tempBG from 'assets/tempBG.jpg';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Store } from 'store/reducers/reducers';
import { NormalizedBoard } from 'models/normalizedModels';
import { setCurrentBoard } from 'store/actions/boardActions';
import styled from 'styled-components';

type SetCurrentBoard = ReturnType<typeof setCurrentBoard>;

const Card = styled(Mui.Card)(({ theme }) => ({
	maxWidth: '100%',
	'& :hover': {
		[`${BottomSection}`]: {
			right: 0
		},
		[`${OptionButton}`]: {
			right: 0
		}
	}
}));
const CardMedia = styled(Mui.CardMedia)(({ theme }) => ({
	height: 75,
	padding: theme.spacing(1.5),
	color: 'white',
	position: 'relative'
}));
const CardHeader = styled(Mui.CardMedia)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	color: '#fafbfc',
	'& span': {
		fontWeight: 'bold'
	},
	'& p': {
		fontSize: 9
	}
}));

const OptionButton = styled(Mui.IconButton)(({ theme }) => ({
	transition: 'ease-in-out 0.1s',
	position: 'absolute',
	right: -55,
	top: 1,
	color: '#fafbfc'
}));

const BottomSection = styled(Mui.Box)(({ theme }) => ({
	transition: 'ease-in-out 0.1s',
	color: '#fafbfc',
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	position: 'absolute',
	bottom: 1,
	right: -55,
	'& button': {
		color: '#fafbfc'
	}
}));

const buttonInCardActionArea = {
	onMouseDown: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => event.stopPropagation(),
	onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.stopPropagation();
		event.preventDefault();
	}
};

type Props = {
	boardId: number;
};
const BoardCard: FC<Props> = ({ boardId }) => {
	const board = useSelector<Store, NormalizedBoard>((state) => state.boardReducer.items[boardId]);
	const history = useHistory();
	const dispatch = useDispatch();
	const redirectToBoard = () => {
		dispatch<SetCurrentBoard>(setCurrentBoard(boardId));
		history.push(`/board/${boardId}/`);
	};
	return (
		<Mui.Box>
			<Card>
				<Mui.CardActionArea component="div" onClick={redirectToBoard}>
					<CardMedia image={tempBG}>
						<CardHeader>
							<Mui.Typography variant={'button'}>{board.name}</Mui.Typography>
							<Mui.Typography component="p" variant={'caption'}>
								TODO: data utworzenia(?)
							</Mui.Typography>
						</CardHeader>
						<OptionButton {...buttonInCardActionArea} size="small" aria-label="settings">
							<MoreVertIcon />
						</OptionButton>
						<BottomSection>
							<Mui.IconButton {...buttonInCardActionArea} size="small" aria-label="add to favorites">
								<StarOutlineIcon fontSize="small" />
							</Mui.IconButton>
							<Mui.IconButton {...buttonInCardActionArea} size="small" aria-label="share">
								<ShareIcon fontSize="small" />
							</Mui.IconButton>
						</BottomSection>
					</CardMedia>
				</Mui.CardActionArea>
			</Card>
		</Mui.Box>
	);
};

export default BoardCard;
