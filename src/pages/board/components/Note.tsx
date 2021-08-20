import { FC } from 'react';
import * as Mui from '@material-ui/core';
import Modal from '../../../components/ModalSwitch';
import { useParams } from 'react-router-dom';
import { NormalizedNote } from '../../../models/normalizedModels';
import { useDispatch, useSelector } from 'react-redux';
import { Store } from '../../../store/reducers/reducers';
import EventNoteIcon from '@material-ui/icons/EventNote';
import TextInput from '../../../components/form/TextInput';
import { closeModal } from '../../../store/actions/modalActions';
import CloseIcon from '@material-ui/icons/Close';
type CloseModal = ReturnType<typeof closeModal>;

const Note: FC = () => {
	const params = useParams<{ id: string }>();
	const id = Number.parseInt(params.id);
	const note = useSelector<Store, NormalizedNote>((state) => state.noteReducer.items[id]);
	const dispatch = useDispatch();

	const handleCloseModal = () => {
		dispatch<CloseModal>(closeModal());
	};

	const renderNote = () => {
		if (note == null) {
			return <Mui.Typography>note not found</Mui.Typography>;
		} else {
			return (
				<Mui.Box display="flex" flexDirection="row">
					<EventNoteIcon />
					<Mui.Typography>{note.title}</Mui.Typography>
					<Mui.IconButton size="small" onClick={handleCloseModal}>
						<CloseIcon fontSize="small" />
					</Mui.IconButton>
				</Mui.Box>
			);
		}
	};

	return (
		<Mui.Box>
			<Mui.Card>
				<Mui.CardContent>{renderNote()}</Mui.CardContent>
			</Mui.Card>
		</Mui.Box>
	);
};

export default Note;
