import { FC } from 'react';
import * as Mui from '@mui/material';
import { useParams } from 'react-router-dom';
import { NormalizedNote } from 'models/normalizedModels';
import { useDispatch, useSelector } from 'react-redux';
import { Store } from 'store/reducers/reducers';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import { closeModal } from 'store/actions/modalActions';
import CloseIcon from '@mui/icons-material/Close';
import TextAreaClickOnInput from 'components/form/TextAreaClickOnInput';
import { Formik } from 'formik';
import Form from 'components/form/Form';
import { NoteUpdate } from 'models/note';
import { updateNote } from 'store/actions/noteActions';
import styled from 'styled-components';
import ColorPicker from 'components/ColorPicker'

type CloseModal = ReturnType<typeof closeModal>;
type UpdateNote = ReturnType<typeof updateNote>;

const Wrapper = styled(Mui.Box)(({ theme }) => ({
	minHeight: 280,
	color: theme.palette.primary.main,
	paddingTop: theme.spacing(3),
	paddingBottom: theme.spacing(3),
	backgroundColor: theme.palette.custom.noteSectionBackground,
	borderRadius: theme.shape.borderRadius
}));

const Layout = styled('div')(({ theme }) => ({
	display: 'grid',
	gridTemplateColumns: '1fr 230px',
	height: '100%',
	width: '100%'
}));

const Content = styled('div')(({ theme }) => ({
	gridColumn: 1
}));

const ContentLayout = styled('div')(({ theme }) => ({
	display: 'grid',
	gridAutoRows: 'auto',
	gap: '10px'
}));

const ContentRow = styled('div')(({ theme }) => ({
	display: 'grid',
	gridTemplateColumns: '50px minmax(300px, 550px)',
	alignItems: 'center',
	'& .icon': {
		justifySelf: 'center',
		fontSize: theme.spacing(3.5),
		height: theme.spacing(3.5),
		width: theme.spacing(3.5),
		'& p': {
			fontSize: theme.spacing(1.5)
		}
	}
}));

const StyledTextAreaClickOnInputTitle = styled(TextAreaClickOnInput)(({ theme }) => ({
	fontWeight: 'bold'
}));
const StyledTextAreaClickOnInputDescription = styled(TextAreaClickOnInput)(({ theme }) => ({
	borderRadius: theme.shape.borderRadius,
	'& textarea': {
		'&:focus ': {
			height: '150px !important',
			transition: 'ease-in 0.1s'
		}
	},
	'& :hover': {
		transition: 'ease-out 0.5s',
		backgroundColor: theme.palette.grey[200]
	}
}));
const SideBar = styled('div')(({ theme }) => ({
	gridColumn: 2
}));

const StyledCommentSectionBox = styled(Mui.Box)(({ theme }) => ({
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
}));

const Note: FC = () => {
	const params = useParams<{ id: string }>();
	const id = Number.parseInt(params.id);
	const note = useSelector<Store, NormalizedNote>((state) => state.noteReducer.items[id]);
	const sectionName = useSelector<Store, string>((state) => state.sectionReducer.items[note.sectionId].name);
	const dispatch = useDispatch();

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
				<Wrapper>
					<Layout>
						<Content>
							<Formik
								initialValues={initialNote}
								onSubmit={(values) => handleEditNote(values)}
								validateOnBlur
							>
								{({ handleSubmit, handleBlur, submitForm }) => (
									<Form onSubmit={handleSubmit}>
										<ContentLayout>
											<ContentRow>
												<EventNoteOutlinedIcon className="icon" />
												<StyledTextAreaClickOnInputTitle
													blurOnEnter
													name="title"
													onBlur={(e) => {
														handleBlur(e);
														submitForm();
													}}
												/>
											</ContentRow>
											<ContentRow style={{ marginTop: -15 }}>
												<br />
												<Mui.Typography>on list: {sectionName}</Mui.Typography>
											</ContentRow>
											<ContentRow>
												<DescriptionOutlinedIcon className="icon" />
												<Mui.Typography>Description</Mui.Typography>
											</ContentRow>
											<ContentRow style={{ marginTop: -15 }}>
												<br />
												<StyledTextAreaClickOnInputDescription
													name="description"
													onBlur={(e) => {
														handleBlur(e);
														submitForm();
													}}
												/>
											</ContentRow>
											<ContentRow>
												<ChatOutlinedIcon className="icon" />
												<Mui.Typography>Activities</Mui.Typography>
											</ContentRow>
											<ContentRow>
												<Mui.Avatar className="icon">
													<p>OP</p>
												</Mui.Avatar>
												<Mui.Typography>tu będzie input na comment</Mui.Typography>
												<ColorPicker></ColorPicker>
											</ContentRow>
										</ContentLayout>
									</Form>
								)}
							</Formik>
						</Content>
						<SideBar>
							<Mui.IconButton size="small" onClick={handleCloseModal}>
								<CloseIcon fontSize="small" />
							</Mui.IconButton>
						</SideBar>
					</Layout>
				</Wrapper>
			);
		}
	};

	return <Mui.Box>{renderNote()}</Mui.Box>;
};

export default Note;
