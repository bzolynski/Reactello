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
type CloseModal = ReturnType<typeof closeModal>;

const useStyles = makeStyles((theme: Mui.Theme) =>
	createStyles({
		root: {
			color: theme.palette.primary.main,
			paddingTop: theme.spacing(1)
		},
		section: {
			width: '100%',
			marginLeft: theme.spacing(5),
			position: 'relative',
			marginBottom: theme.spacing(2),
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			'& svg': {
				position: 'absolute',
				left: -theme.spacing(5),
				fontSize: theme.spacing(4)
			}
		},
		subsection: {
			marginLeft: '40px',
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
			marginLeft: theme.spacing(5),
			marginTop: theme.spacing(1),
			marginBottom: theme.spacing(1),
			position: 'relative',
			alignItems: 'center',
			'& div': {
				position: 'absolute',
				height: theme.spacing(4),
				width: theme.spacing(4),
				left: -theme.spacing(5)
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

	const renderNote = () => {
		if (note == null) {
			return <Mui.Typography>note not found</Mui.Typography>;
		} else {
			return (
				<Mui.Box
					className={classes.root}
					display="flex"
					justifyContent="space-between"
					flexDirection="row"
					width="40vw"
					minWidth="400px"
				>
					<Mui.Box flexGrow={3} display="flex" flexDirection="column">
						<Mui.Box className={classes.section}>
							<EventNoteOutlinedIcon />
							<Mui.Typography>{note.title}</Mui.Typography>
						</Mui.Box>
						<Mui.Box className={classes.subsection}>
							<Mui.Typography>on list: {sectionName}</Mui.Typography>
						</Mui.Box>
						<Mui.Box className={classes.section}>
							<DescriptionOutlinedIcon />
							<Mui.Typography>Description</Mui.Typography>
						</Mui.Box>
						<Mui.Box className={classes.subsection}>
							<textarea />
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
