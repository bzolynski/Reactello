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
import { createStyles, makeStyles } from '@material-ui/core';

type CreateNote = ReturnType<typeof createNote>;

const useStyles = makeStyles((theme: Mui.Theme) =>
	createStyles({
		formContent: {
			display: 'flex',
			flexDirection: 'column',
			padding: theme.spacing(1),
			paddingLeft: theme.spacing(2),
			paddingRight: theme.spacing(2)
		},
		formButtons: {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
			paddingTop: theme.spacing(1)
		}
	})
);

type Props = {
	sectionId: number;
};

const AddNoteButton: FC<Props> = ({ sectionId }) => {
	const [ formOpen, setFormOpen ] = useState<boolean>(false);
	const dispatch = useDispatch();
	const classes = useStyles();

	const initialNote: NoteCreate = {
		title: '',
		description: '',
		sectionId: sectionId
	};

	const handleSubmit = (values: NoteCreate) => {
		if (values.title !== '') {
			dispatch<CreateNote>(createNote(values));
		}
		setFormOpen(false);
	};
	const renderComponent = () => {
		if (formOpen) {
			return (
				<NoteListingWrapper>
					<Formik initialValues={initialNote} onSubmit={(values) => handleSubmit(values)}>
						<Form>
							<Mui.Box className={classes.formContent}>
								<TextInput label="Title" name="title" />
								<TextInput label="Description" name="description" />
								<Mui.Box className={classes.formButtons}>
									<Mui.Button type="submit" variant="outlined">
										Create
									</Mui.Button>
									<Mui.IconButton aria-label="delete" type="reset" onClick={() => setFormOpen(false)}>
										<ClearIcon />
									</Mui.IconButton>
								</Mui.Box>
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
