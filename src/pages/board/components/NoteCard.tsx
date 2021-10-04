import React, { FC, useEffect, useState } from 'react';
import * as Mui from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Store } from 'store/reducers/reducers';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { NormalizedNote } from 'models/normalizedModels';
import SectionElementWrapper from './SectionElementWrapper';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteNote } from 'store/actions/noteActions';
import { openModal } from 'store/actions/modalActions';
import PaperWrapper from '../../../components/PaperWrapper';
import styled from 'styled-components';

type DeleteNote = ReturnType<typeof deleteNote>;
type OpenModal = ReturnType<typeof openModal>;

const StyledListItem = styled(Mui.ListItem)(({ theme }) => ({
	borderRadius: theme.shape.borderRadius,
	'& span': {
		wordBreak: 'break-all',
		fontSize: '13px'
	},
	'& p': {
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		fontSize: '11px'
	}
}));

const OptionsButton = styled(Mui.IconButton)(({ theme }) => ({
	':hover svg': {
		zIndex: 10,
		background: 'transparent'
	},
	':hover span': {
		backgroundColor: theme.palette.grey[300],
		transition: 'ease-in 0.2s'
	}
}));

type Props = {
	noteId: number;
};
const NoteCard: FC<Props> = ({ noteId }) => {
	const [ anchorEl, setAnchorEl ] = useState<HTMLButtonElement | null>(null);
	const note = useSelector<Store, NormalizedNote>((state) => state.noteReducer.items[noteId]);
	const dispatch = useDispatch();
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
					<PaperWrapper>
						<StyledListItem key={note.id} dense /*button*/ onClick={handleOpenNoteDetails}>
							{/* <Mui.ListItemIcon>
								<Mui.Checkbox edge="start" tabIndex={-1} disableRipple />
							</Mui.ListItemIcon> */}
							<Mui.ListItemText
								id={note.id.toString()}
								primary={note.title}
								secondary={note.description}
							/>
							<Mui.ListItemSecondaryAction>
								<OptionsButton
									size="small"
									edge="end"
									aria-label="note-card-options"
									onClick={handleOpenPopover}
								>
									<MoreVertIcon fontSize="small" />
								</OptionsButton>
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
									<Mui.Box sx={{ padding: 0.5 }}>
										<Mui.IconButton size="small" onClick={handleDeleteNote}>
											<DeleteIcon color="secondary" fontSize="small" />
										</Mui.IconButton>
									</Mui.Box>
								</Mui.Popover>
							</Mui.ListItemSecondaryAction>
						</StyledListItem>
					</PaperWrapper>
				</SectionElementWrapper>
			);
		}
	};
	return <Mui.Box>{renderNote()}</Mui.Box>;
};

export default NoteCard;
