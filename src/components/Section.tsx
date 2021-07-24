import {
	Checkbox,
	ListItemIcon,
	List,
	ListItem,
	ListSubheader,
	makeStyles,
	Paper,
	ListItemText,
	ListItemSecondaryAction,
	IconButton,
	createStyles,
	Theme
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AddIcon from '@material-ui/icons/Add';
import { FC, ReactElement } from 'react';
import { Section as SectionModel } from '../models/section';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			minWidth: 275,
			margin: 10
			/*backgroundColor: 'rgba(235, 236, 240, 0.8)'*/
		},
		paper: {
			margin: 8,
			marginTop: 6,
			marginBottom: 6,
			'& li': {
				borderRadius: 'inherit'
			}
		},
		listItem: {
			borderRadius: 'inherit'
		}
	})
);

type Props = {
	section: SectionModel;
};
const Section: FC<Props> = ({ section }) => {
	const classes = useStyles();
	return (
		<Paper className={classes.root} elevation={2}>
			<List
				subheader={
					<ListSubheader component="div" id={section.id.toString()}>
						{section.name}
					</ListSubheader>
				}
			>
				{section.notes.map((note) => (
					<Paper elevation={2} className={classes.paper}>
						<ListItem className={classes.listItem} key={note.id} role={undefined} dense button>
							{/* <ListItemIcon>
							<Checkbox edge="start" tabIndex={-1} disableRipple />
						</ListItemIcon> */}
							<ListItemText id={note.id.toString()} primary={note.title} secondary={'jakiś tekst'} />
							<ListItemSecondaryAction>
								<IconButton edge="end" aria-label="comments">
									<MoreVertIcon />
								</IconButton>
							</ListItemSecondaryAction>
						</ListItem>
					</Paper>
				))}
				<ListItem role={undefined} dense button>
					<ListItemIcon>
						<AddIcon />
					</ListItemIcon>
					<ListItemText primary="Create note" />
				</ListItem>
			</List>
		</Paper>
	);
};

export default Section;
