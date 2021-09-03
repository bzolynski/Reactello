import * as Mui from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { FC, useState } from 'react';
import { Store } from '../../../store/reducers/reducers';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch, useSelector } from 'react-redux';
import NoteCard from './NoteCard';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { NormalizedSection } from '../../../models/normalizedModels';
import AddNoteButton from './AddNoteButton';
import NoteCardList from './NoteCardList';
import { deleteSection, updateSectionName } from '../../../store/actions/sectionActions';
import { Formik } from 'formik';
import { SectionUpdateName } from '../../../models/section';
import Form from '../../../components/form/Form';
import TextAreaClickOnInput from '../../../components/form/TextAreaClickOnInput';
import dataService from '../../../services/dataService';

type DeleteSection = ReturnType<typeof deleteSection>;
type UpdateSectionName = ReturnType<typeof updateSectionName>;

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: 250,
			margin: theme.spacing(0.75),
			backgroundColor: theme.customColors.noteSectionBackground,
			'& > ul': {
				paddingBottom: theme.spacing(0.5)
			}
		},
		titleBar: {
			width: '100%'
		},
		popoverContent: {
			padding: 6
		},
		titleInput: {
			marginTop: theme.spacing(1),
			'& textarea': {
				color: theme.palette.secondary.main,
				fontWeight: '500',
				fontSize: '13px'
			}
		}
	})
);

type Props = {
	sectionId: number;
};
const Section: FC<Props> = ({ sectionId }) => {
	const [ anchorEl, setAnchorEl ] = useState<HTMLButtonElement | null>(null);
	const section = useSelector<Store, NormalizedSection>((state) => {
		return state.sectionReducer.items[sectionId];
	});
	const dispatch = useDispatch();
	const classes = useStyles();

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
				<Mui.Paper className={classes.root} elevation={2}>
					<Mui.List
						subheader={
							<Mui.ListSubheader component="div">
								<Mui.Box display="flex" flexDirection="row" justifyContent="space-between">
									<Formik onSubmit={(values) => handleSubmit(values)} initialValues={initialSection}>
										{({ handleSubmit, submitForm, handleBlur }) => (
											<Form className={classes.titleBar} onSubmit={handleSubmit}>
												<TextAreaClickOnInput
													blurOnEnter
													customClasses={classes.titleInput}
													name="name"
													onBlur={(e) => {
														handleBlur(e);
														submitForm();
													}}
												/>
											</Form>
										)}
									</Formik>
									<Mui.Box>
										<Mui.IconButton
											style={{ marginTop: 3 }}
											size="small"
											onClick={handleOpenPopover}
										>
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
											<Mui.Box className={classes.popoverContent}>
												<Mui.IconButton size="small" onClick={handleDeleteSection}>
													<DeleteIcon color="secondary" fontSize="small" />
												</Mui.IconButton>
											</Mui.Box>
										</Mui.Popover>
									</Mui.Box>
								</Mui.Box>
							</Mui.ListSubheader>
						}
					>
						{section.notes.map((noteId) => <NoteCard key={noteId} noteId={noteId} />)}
						{/* <NoteListingList sectionId={sectionId} /> */}
						<AddNoteButton sectionId={sectionId} />
					</Mui.List>
				</Mui.Paper>
			);
		}
	};

	return <Mui.Box>{renderSection()}</Mui.Box>;
};

export default Section;
