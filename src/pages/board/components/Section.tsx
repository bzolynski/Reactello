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
import { deleteSection } from '../../../store/actions/sectionActions';

type DeleteSection = ReturnType<typeof deleteSection>;

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			minWidth: 275,
			margin: 10
			/*backgroundColor: 'rgba(235, 236, 240, 0.8)'*/
		},
		popoverContent: {
			padding: 6
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
	const renderSection = () => {
		if (section == null) {
			return <Mui.CircularProgress />;
		} else {
			return (
				<Mui.Paper className={classes.root} elevation={2}>
					<Mui.List
						subheader={
							<Mui.ListSubheader component="div">
								<Mui.Box
									display="flex"
									flexDirection="row"
									alignItems="center"
									justifyContent="space-between"
								>
									{section.name}
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
										<Mui.Box className={classes.popoverContent}>
											<Mui.IconButton size="small" onClick={handleDeleteSection}>
												<DeleteIcon color="secondary" fontSize="small" />
											</Mui.IconButton>
										</Mui.Box>
									</Mui.Popover>
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
