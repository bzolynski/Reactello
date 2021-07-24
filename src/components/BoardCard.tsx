import {
	Box,
	Card,
	CardActionArea,
	CardActions,
	CardHeader,
	CardMedia,
	createStyles,
	IconButton,
	makeStyles,
	Theme
} from '@material-ui/core';
import { common } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import StarIcon from '@material-ui/icons/Star';
import ShareIcon from '@material-ui/icons/ShareOutlined';
import { FC } from 'react';
import tempBG from '../assets/tempBG.jpg';
import { BoardListing } from '../models/board';
import PlainLink from './PlainLink';

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

type Props = {
	board: BoardListing;
};
const BoardCard: FC<Props> = ({ board }) => {
	const classes = useStyles();

	return (
		<Box>
			<Card className={classes.card}>
				<CardActionArea>
					<PlainLink to={`/boards/${board.id}`}>
						<CardHeader
							className={classes.header}
							action={
								<IconButton size="small" aria-label="settings">
									<MoreVertIcon />
								</IconButton>
							}
							title={board.name}
							subheader="TODO: data utworzenia(?)"
							titleTypographyProps={{ variant: 'subtitle2' }}
							subheaderTypographyProps={{ variant: 'caption' }}
						/>
						<CardMedia className={classes.media} image={tempBG} />
						<CardActions>
							<IconButton size="small" aria-label="add to favorites">
								<StarIcon fontSize="small" />
							</IconButton>
							<IconButton size="small" aria-label="share">
								<ShareIcon fontSize="small" />
							</IconButton>
						</CardActions>
					</PlainLink>
				</CardActionArea>
			</Card>
		</Box>
	);
};

export default BoardCard;
