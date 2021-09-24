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
import styled from 'styled-components';

type DeleteSection = ReturnType<typeof deleteSection>;
type UpdateSectionName = ReturnType<typeof updateSectionName>;

const StyledSubheader = styled(Mui.ListSubheader)(({ theme }) => ({
	backgroundColor: theme.palette.custom.noteSectionBackground
}));

const TitleInput = styled(TextAreaClickOnInput)(({ theme }) => ({
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
	const renderSection = () => {
		if (section == null) {
			return <Mui.CircularProgress />;
		} else {
			return (
				<SectionListElementWrapper elevation={2}>
					<Mui.List
						subheader={
							<StyledSubheader>
								<Mui.Box display="flex" flexDirection="row" justifyContent="space-between">
									<Formik onSubmit={(values) => handleSubmit(values)} initialValues={initialSection}>
										{({ handleSubmit, submitForm, handleBlur }) => (
											<StyledForm onSubmit={handleSubmit}>
												<TitleInput
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
						{section.notes.map((noteId) => <NoteCard key={noteId} noteId={noteId} />)}
						{/* <NoteListingList sectionId={sectionId} /> */}
						<AddNoteButton sectionId={sectionId} />
					</Mui.List>
				</SectionListElementWrapper>
			);
		}
	};

	return <Mui.Box>{renderSection()}</Mui.Box>;
};

export default Section;
