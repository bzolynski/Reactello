import * as Mui from '@mui/material';
import { FC, useState } from 'react';
import { Store } from 'store/reducers/reducers';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import NoteCard from './NoteCard';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { NormalizedSection } from 'models/normalizedModels';
import AddNoteButton from './AddNoteButton';
import { deleteSection, updateSectionName } from 'store/actions/sectionActions';
import { Formik } from 'formik';
import { SectionUpdateName } from 'models/section';
import Form from 'components/form/Form';
import SectionListElementWrapper from './SectionListElementWrapper';
import TextAreaClickOnInput from 'components/form/TextAreaClickOnInput';
import styled, { useTheme } from 'styled-components';

type DeleteSection = ReturnType<typeof deleteSection>;
type UpdateSectionName = ReturnType<typeof updateSectionName>;

const StyledList = styled(Mui.List)<{ $bgColor: string }>(({ theme, $bgColor }) => ({
	backgroundColor: $bgColor,
	borderRadius: theme.shape.borderRadius
}));
const StyledSubheader = styled(Mui.ListSubheader)<{ $bgColor: string }>(({ theme, $bgColor }) => ({
	backgroundColor: $bgColor,
	borderRadius: theme.shape.borderRadius
}));
const CardContainer = styled('div')`
	max-height: calc(80vh - 160px);
	overflow: auto;
`;
export const SectionTitleInput = styled(TextAreaClickOnInput)(({ theme }) => ({
	marginTop: theme.spacing(1),
	'& textarea': {
		fontSize: '13px',
		color: theme.palette.secondary.main
	}
}));

const StyledForm = styled(Form)(({ theme }) => ({
	width: '100%',
	display: 'flex',
	justifyContent: 'center'
}));

type Props = {
	sectionId: number;
};
const Section: FC<Props> = ({ sectionId }) => {
	const [ anchorEl, setAnchorEl ] = useState<HTMLButtonElement | null>(null);
	const section = useSelector<Store, NormalizedSection>((state) => {
		return state.sectionReducer.items[sectionId];
	});
	const dispatch = useDispatch();

	const initialSection: SectionUpdateName = {
		id: section.id,
		name: section.name
	};
	const theme = useTheme();
	const bgColor = section.color !== '' ? section.color : theme.palette.custom.noteSectionBackground;

	const handleOpenPopover = (e: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(e.currentTarget);
	};
	const handleClosePopover = () => {
		setAnchorEl(null);
	};
	const handleDeleteSection = () => {
		dispatch<DeleteSection>(deleteSection(sectionId, section.boardId));
		handleClosePopover();
	};

	const handleSubmit = (values: SectionUpdateName) => {
		dispatch<UpdateSectionName>(updateSectionName(values));
	};
	if (section == null) {
		return <Mui.CircularProgress />;
	}

	return (
		<SectionListElementWrapper elevation={2}>
			<StyledList
				$bgColor={bgColor}
				subheader={
					<StyledSubheader $bgColor={bgColor}>
						<Mui.Box display="flex" flexDirection="row" justifyContent="space-between">
							<Formik onSubmit={(values) => handleSubmit(values)} initialValues={initialSection}>
								{({ handleSubmit, submitForm, handleBlur }) => (
									<StyledForm onSubmit={handleSubmit}>
										<SectionTitleInput
											blurOnEnter
											name="name"
											onBlur={(e) => {
												handleBlur(e);
												submitForm();
											}}
										/>
									</StyledForm>
								)}
							</Formik>
							<Mui.Box>
								<Mui.IconButton size="small" onClick={handleOpenPopover}>
									<MoreHorizIcon />
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
									<Mui.Box sx={{ padding: 0.5 }}>
										<Mui.IconButton size="small" onClick={handleDeleteSection}>
											<DeleteIcon color="secondary" fontSize="small" />
										</Mui.IconButton>
									</Mui.Box>
								</Mui.Popover>
							</Mui.Box>
						</Mui.Box>
					</StyledSubheader>
				}
			>
				<CardContainer>
					{section.notes.map((noteId) => <NoteCard key={noteId} noteId={noteId} />)}
				</CardContainer>
				<AddNoteButton sectionId={sectionId} />
				{/* <NoteListingList sectionId={sectionId} /> */}
			</StyledList>
		</SectionListElementWrapper>
	);
};

export default Section;
