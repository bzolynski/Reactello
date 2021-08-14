import { FC, useState } from 'react';
import * as Mui from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';
import NoteListingWrapper from './NoteListingWrapper';
import TextInput from '../../../components/form/TextInput';
import Form from '../../../components/form/Form';
import { Formik } from 'formik';
import { NoteCreate } from '../../../models/note';
import { createNote } from '../../../store/actions/noteActions';
import { useDispatch } from 'react-redux';

type CreateNote = ReturnType<typeof createNote>;

type Props = {
	sectionId: number;
};

const AddNoteButton: FC<Props> = ({ sectionId }) => {
	const [ formOpen, setFormOpen ] = useState<boolean>(false);
	const dispatch = useDispatch();

	const initialNote: NoteCreate = {
		title: '',
		description: '',
		sectionId: sectionId
	};

	const handleSubmit = (values: NoteCreate) => {
		console.log(values);
		if (values.title !== '') {
			dispatch<CreateNote>(createNote(values, sectionId));
		}
		setFormOpen(false);
	};
	const renderComponent = () => {
		if (formOpen) {
			return (
				<NoteListingWrapper>
					<Formik initialValues={initialNote} onSubmit={(values) => handleSubmit(values)}>
						<Form>
							<TextInput label="Title" name="title" />
							<TextInput label="Description" name="description" />
							<Mui.Box>
								<Mui.Button type="submit" variant="outlined">
									Create
								</Mui.Button>
								<Mui.IconButton aria-label="delete" type="reset" onClick={() => setFormOpen(false)}>
									<ClearIcon />
								</Mui.IconButton>
							</Mui.Box>
						</Form>
					</Formik>
				</NoteListingWrapper>
			);
		} else {
			return (
				<Mui.ListItem dense button onClick={() => setFormOpen(true)}>
					<Mui.ListItemIcon>
						<AddIcon />
					</Mui.ListItemIcon>
					<Mui.ListItemText primary="Create note" />
				</Mui.ListItem>
			);
		}
	};
	return <Mui.Box>{renderComponent()}</Mui.Box>;
};

export default AddNoteButton;
