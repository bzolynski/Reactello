import { FC, Fragment, useState } from 'react';
import * as Mui from '@mui/material';
import SectionElementWrapper from './SectionElementWrapper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import BaseInput from 'components/form/BaseInput';
import Form from 'components/form/Form';
import { Formik } from 'formik';
import { NoteCreate } from 'models/note';
import { createNote } from 'store/actions/noteActions';
import { useDispatch } from 'react-redux';
import NoteCardListItemWrapper from './NoteCardListItemWrapper';
import styled from 'styled-components';

type CreateNote = ReturnType<typeof createNote>;

const StyledCardActionArea = styled('div')<{ expanded: boolean }>(({ theme, expanded }) => ({
	borderRadius: theme.shape.borderRadius
}));

const NewNoteButton = styled('div')(({ theme }) => ({
	transition: theme.transition.hoverBase,
	cursor: 'pointer',
	borderRadius: theme.shape.borderRadius,
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	padding: theme.spacing(0.625),
	marginBottom: theme.spacing(1),
	'&:hover': {
		backgroundColor: theme.palette.grey[100]
	},
	p: {
		fontSize: '13px',
		userSelect: 'none'
	}
}));

const FormWrapper = styled(NoteCardListItemWrapper)(({ theme }) => ({
	'&&&': {
		backgroundColor: 'red'
	}
}));

const ArrowIcon = styled(KeyboardArrowDownIcon)<{ expanded: boolean }>(({ theme, expanded }) => ({
	transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
	transition: theme.transition.hoverBase
}));
const StyledFormContent = styled(Mui.Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column'
}));
const StyledFormButtons = styled(Mui.Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',
	paddingTop: theme.spacing(1)
}));

const PlainInput = styled(BaseInput)(({ theme }) => ({
	backgroundColor: 'transparent',
	borderRadius: theme.spacing(0.5),
	padding: `0 ${theme.spacing(1)}`,
	transition: 'ease-out 0.2s',
	':first-child input': {
		fontSize: '13px ',
		color: theme.palette.primary.main,
		marginTop: theme.spacing(0.5)
	},
	':last-child': {
		fontSize: '11px !important',
		color: theme.palette.secondary.main,
		marginTop: theme.spacing(0.5),
		marginBottom: theme.spacing(0.5)
	}
}));

const CreateButton = styled(Mui.Button)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
	':hover': {
		backgroundColor: theme.palette.primary.dark
	}
}));

type Props = {
	sectionId: number;
};

const AddNoteButton: FC<Props> = ({ sectionId }) => {
	const [ expanded, setExpanded ] = useState(false);
	const dispatch = useDispatch();

	const initialNote: NoteCreate = {
		title: '',
		description: '',
		sectionId: sectionId
	};

	const handleSubmit = (values: NoteCreate) => {
		console.log(values);
		if (values.title !== '') {
			dispatch<CreateNote>(createNote(values));
		}
		setExpanded(false);
	};
	const handleToogleExpand = () => {
		setExpanded(!expanded);
	};
	const handleClickAway = () => {
		if (expanded) setExpanded(false);
	};

	return (
		<SectionElementWrapper>
			<Mui.ClickAwayListener onClickAway={handleClickAway}>
				<StyledCardActionArea expanded={expanded}>
					<NewNoteButton onClick={handleToogleExpand}>
						<Mui.Icon fontSize="small" aria-label="add new board">
							<ArrowIcon expanded={expanded} fontSize="small" />
						</Mui.Icon>
						{expanded ? (
							<Mui.Typography>Close</Mui.Typography>
						) : (
							<Mui.Typography>Create note</Mui.Typography>
						)}
					</NewNoteButton>
					<Mui.Collapse in={expanded} timeout="auto" unmountOnExit>
						<Formik initialValues={initialNote} onSubmit={(values) => handleSubmit(values)}>
							<Form>
								<FormWrapper>
									<StyledFormContent>
										<PlainInput name="title" placeholder="title" />
										<PlainInput name="description" placeholder="description" />
									</StyledFormContent>
								</FormWrapper>
								<StyledFormButtons>
									<CreateButton
										size="small"
										variant="contained"
										type="submit"
										endIcon={<NoteAddIcon fontSize="small" />}
									>
										Create
									</CreateButton>
								</StyledFormButtons>
							</Form>
						</Formik>
					</Mui.Collapse>
				</StyledCardActionArea>
			</Mui.ClickAwayListener>
		</SectionElementWrapper>
	);
};

export default AddNoteButton;
