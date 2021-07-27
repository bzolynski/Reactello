import {
	Box,
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CircularProgress,
	Collapse,
	createStyles,
	Icon,
	makeStyles,
	Theme,
	Typography
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { Formik, Form } from 'formik';
import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Section as SectionModel, SectionCreate } from '../models/section';
import { createSection } from '../store/actions/sectionActions';
import { Store } from '../store/reducers/reducers';
import { SectionState } from '../store/reducers/sectionReducer';
import NumberInput from './form/NumberInput';
import TextInput from './form/TextInput';
import Section from './Section';

type CreateSection = ReturnType<typeof createSection>;

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		card: {
			width: 275,
			margin: 10
		}
	})
);

type Props = {
	boardId: number;
};

const SectionList: FC<Props> = ({ boardId }) => {
	const { sections } = useSelector<Store, SectionState>((state) => ({ ...state.sectionReducer }));
	const [ expanded, setExpanded ] = useState(false);
	const dispatch = useDispatch();
	const classes = useStyles();

	const initialSection: SectionCreate = {
		boardId: boardId,
		color: 'black',
		name: '',
		position: 1
	};

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};
	const handleSubmit = (values: SectionCreate) => {
		if (values.name !== '') {
			dispatch<CreateSection>(createSection(values));
		}
		setExpanded(false);
	};
	const renderSections = () => {
		if (sections.length > 0) {
			return sections.map((section) => {
				return (
					<Box key={section.id}>
						<Section section={section} />
					</Box>
				);
			});
		} else {
			return <CircularProgress />;
		}
	};
	return (
		<Box display="flex">
			{renderSections()}
			<Box>
				<Card className={classes.card}>
					<CardActionArea component={'div'}>
						<CardActions onClick={handleExpandClick}>
							<Icon aria-label="add new board">
								<AddIcon />
							</Icon>
							<Typography>Add section</Typography>
						</CardActions>
						<Collapse in={expanded} timeout="auto" unmountOnExit>
							<CardContent>
								<Formik initialValues={initialSection} onSubmit={(values) => handleSubmit(values)}>
									{({ handleSubmit }) => (
										<Form onSubmit={handleSubmit}>
											<TextInput label="Name" name="name" />
											<TextInput label="Color" name="color" />
											<NumberInput
												min={1}
												max={1}
												label="Position"
												disablekeyboard={true}
												name="position"
											/>
											<Button type="submit" variant="outlined">
												Save
											</Button>
										</Form>
									)}
								</Formik>
							</CardContent>
						</Collapse>
					</CardActionArea>
				</Card>
			</Box>
		</Box>
	);
};

export default SectionList;
