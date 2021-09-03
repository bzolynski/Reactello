import { FC } from 'react';
import * as Mui from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { NormalizedNote } from '../../../models/normalizedModels';
import { useDispatch, useSelector } from 'react-redux';
import { Store } from '../../../store/reducers/reducers';
import EventNoteOutlinedIcon from '@material-ui/icons/EventNoteOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import { closeModal } from '../../../store/actions/modalActions';
import CloseIcon from '@material-ui/icons/Close';
import { createStyles, makeStyles } from '@material-ui/core';
import TextAreaClickOnInput from '../../../components/form/TextAreaClickOnInput';
import { Formik } from 'formik';
import Form from '../../../components/form/Form';
import { NoteUpdate } from '../../../models/note';
import { updateNote } from '../../../store/actions/noteActions';

type CloseModal = ReturnType<typeof closeModal>;
type UpdateNote = ReturnType<typeof updateNote>;

const useStyles = makeStyles((theme: Mui.Theme) =>
	createStyles({
		root: {
			color: theme.palette.primary.main,
			padding: theme.spacing(0),
			backgroundColor: theme.customColors.noteSectionBackground,
			border: 'none'
		},
		section: {
			border: 'none',
			marginLeft: theme.spacing(4),
			position: 'relative',
			marginBottom: theme.spacing(2),
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			'& svg': {
				position: 'absolute',
				left: -theme.spacing(4),
				fontSize: theme.spacing(3)
			}
		},
		description: {
			height: '400px'
		},
		subsection: {
			marginLeft: theme.spacing(4),
			color: theme.palette.secondary.main,
			marginTop: -theme.spacing(2),
			marginBottom: theme.spacing(2),
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center'
		},
		commentInputSection: {
			display: 'flex',
			flexDirection: 'row',
			marginLeft: theme.spacing(4),
			marginTop: theme.spacing(1),
			marginBottom: theme.spacing(1),
			position: 'relative',
			alignItems: 'center',
			'& div': {
				position: 'absolute',
				height: theme.spacing(3),
				width: theme.spacing(3),
				left: -theme.spacing(4),
				fontSize: theme.spacing(1.5)
			}
		}
	})
);

const Note: FC = () => {
	const params = useParams<{ id: string }>();
	const id = Number.parseInt(params.id);
	const note = useSelector<Store, NormalizedNote>((state) => state.noteReducer.items[id]);
	const sectionName = useSelector<Store, string>((state) => state.sectionReducer.items[note.sectionId].name);
	const dispatch = useDispatch();
	const classes = useStyles();
	const handleCloseModal = () => {
		dispatch<CloseModal>(closeModal());
	};

	const initialNote: NoteUpdate = {
		id: note.id,
		title: note.title,
		description: note.description,
		position: note.position,
		sectionId: note.sectionId
	};

	const handleEditNote = (values: NoteUpdate) => {
		dispatch<UpdateNote>(updateNote(values));
	};

	const renderNote = () => {
		if (note == null) {
			return <Mui.Typography>note not found</Mui.Typography>;
		} else {
			return (
				<Mui.Card className={classes.root}>
					<Mui.CardContent>
						<Formik
							initialValues={initialNote}
							onSubmit={(values) => handleEditNote(values)}
							validateOnBlur
						>
							{({ handleSubmit, handleBlur, submitForm }) => (
								<Form onSubmit={handleSubmit}>
									<Mui.Box
										display="flex"
										justifyContent="space-between"
										flexDirection="row"
										width="40vw"
										minWidth="400px"
									>
										<Mui.Box flexGrow={3} display="flex" flexDirection="column">
											<Mui.Box className={classes.section}>
												<EventNoteOutlinedIcon />
												<TextAreaClickOnInput
													blurOnEnter
													name="title"
													onBlur={(e) => {
														handleBlur(e);
														submitForm();
													}}
												/>
											</Mui.Box>
											<Mui.Box className={classes.subsection}>
												<Mui.Typography>on list: {sectionName}</Mui.Typography>
											</Mui.Box>
											<Mui.Box className={classes.section}>
												<DescriptionOutlinedIcon />
												<Mui.Typography>Description</Mui.Typography>
											</Mui.Box>
											<Mui.Box className={classes.subsection}>
												<TextAreaClickOnInput
													name="description"
													onBlur={(e) => {
														handleBlur(e);
														submitForm();
													}}
												/>
											</Mui.Box>
											<Mui.Box className={classes.section}>
												<ChatOutlinedIcon />
												<Mui.Typography>Activities</Mui.Typography>
											</Mui.Box>
											<Mui.Box className={classes.commentInputSection}>
												<Mui.Avatar>OP</Mui.Avatar>
												<Mui.Typography>tu będzie input na comment</Mui.Typography>
											</Mui.Box>
										</Mui.Box>
										<Mui.Box flexGrow={2} display="flex" flexDirection="column">
											<Mui.Box alignSelf="flex-end">
												<Mui.IconButton size="small" onClick={handleCloseModal}>
													<CloseIcon fontSize="small" />
												</Mui.IconButton>
											</Mui.Box>
										</Mui.Box>
									</Mui.Box>
								</Form>
							)}
						</Formik>
					</Mui.CardContent>
				</Mui.Card>
			);
		}
	};

	return <Mui.Box>{renderNote()}</Mui.Box>;
};

export default Note;
