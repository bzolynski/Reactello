import React, { FC, useEffect, useState } from 'react';
import * as Mui from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Store } from '../../../store/reducers/reducers';
import { createStyles, makeStyles } from '@material-ui/styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { NormalizedNote } from '../../../models/normalizedModels';
import SectionElementWrapper from './SectionElementWrapper';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteNote } from '../../../store/actions/noteActions';
import { useHistory } from 'react-router';
import { openModal } from '../../../store/actions/modalActions';

type DeleteNote = ReturnType<typeof deleteNote>;
type OpenModal = ReturnType<typeof openModal>;

const useStyles = makeStyles((theme: Mui.Theme) =>
	createStyles({
		listItem: {
			borderRadius: 'inherit'
		},
		popoverContent: {
			padding: 6
		}
	})
);

type Props = {
	noteId: number;
};
const NoteCard: FC<Props> = ({ noteId }) => {
	const [ anchorEl, setAnchorEl ] = useState<HTMLButtonElement | null>(null);
	const note = useSelector<Store, NormalizedNote>((state) => state.noteReducer.items[noteId]);
	const dispatch = useDispatch();
	const classes = useStyles();

	const handleOpenPopover = (e: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(e.currentTarget);
	};
	const handleClosePopover = () => {
		setAnchorEl(null);
	};
	const handleDeleteNote = () => {
		dispatch<DeleteNote>(deleteNote(noteId, note.sectionId));
		handleClosePopover();
	};
	const handleOpenNoteDetails = () => {
		dispatch<OpenModal>(openModal(`m/note/${noteId}`));
	};

	const renderNote = () => {
		if (note == null) {
			return <Mui.Box />;
		} else {
			return (
				<SectionElementWrapper key={note.id}>
					<Mui.ListItem
						className={classes.listItem}
						key={note.id}
						dense
						button
						onClick={handleOpenNoteDetails}
					>
						{/* <Mui.ListItemIcon>
							<Mui.Checkbox edge="start" tabIndex={-1} disableRipple />
						</Mui.ListItemIcon> */}
						<Mui.ListItemText id={note.id.toString()} primary={note.title} secondary={'jakiś tekst'} />
						<Mui.ListItemSecondaryAction>
							<Mui.IconButton edge="end" aria-label="comments" onClick={handleOpenPopover}>
								<MoreVertIcon />
							</Mui.IconButton>
							<Mui.Popover
								open={Boolean(anchorEl)}
								anchorEl={anchorEl}
								onClose={handleClosePopover}
								anchorOrigin={{
									vertical: 'center',
									horizontal: 'right'
								}}
								transformOrigin={{
									vertical: 'center',
									horizontal: 'left'
								}}
							>
								<Mui.Box className={classes.popoverContent}>
									<Mui.IconButton size="small" onClick={handleDeleteNote}>
										<DeleteIcon color="secondary" fontSize="small" />
									</Mui.IconButton>
								</Mui.Box>
							</Mui.Popover>
						</Mui.ListItemSecondaryAction>
					</Mui.ListItem>
				</SectionElementWrapper>
			);
		}
	};
	return <Mui.Box>{renderNote()}</Mui.Box>;
};

export default NoteCard;
