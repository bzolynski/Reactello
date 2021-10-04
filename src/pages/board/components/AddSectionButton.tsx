import { FC, useEffect, useState } from 'react';
import * as Mui from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from 'react-redux';
import { SectionCreate } from 'models/section';
import { createSection } from 'store/actions/sectionActions';
import { Store } from 'store/reducers/reducers';
import styled, { useTheme } from 'styled-components';
import SectionListElementWrapper from './SectionListElementWrapper';
import { Formik, validateYupSchema } from 'formik';
import TextInput from 'components/form/TextInput';
import Form from 'components/form/Form';
import ColorPicker from 'components/ColorPicker';
import CreateButton from 'components/form/CreateButton';
type CreateSection = ReturnType<typeof createSection>;

const StyledCardActionArea = styled('div')(({ theme }) => ({
	borderRadius: theme.shape.borderRadius
}));

const NewSectionButton = styled('div')(({ theme }) => ({
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

const AddSectionButton: FC = () => {
	const theme = useTheme();
	const boardId = useSelector<Store, number>((state) => state.boardReducer.currentBoard!);
	const [ expanded, setExpanded ] = useState(false);
	const [ color, setColor ] = useState(theme.palette.custom.noteSectionBackground);
	const dispatch = useDispatch();

	const handleToogleExpand = (): void => {
		setExpanded(!expanded);
	};

	const handleClickAway = () => {
		if (expanded) setExpanded(false);
	};

	const initialSection = {
		boardId: boardId,
		color: color,
		name: ''
	};

	const handleSubmit = (values: SectionCreate): void => {
		if (values.name !== '') {
			console.log(values);
			values.color = color;
			dispatch<CreateSection>(createSection(values));
			setExpanded(false);
			setColor(theme.palette.custom.noteSectionBackground);
		}
	};

	const getColor = (color: string) => {
		setColor(color);
	};

	return (
		<SectionListElementWrapper>
			<Mui.ClickAwayListener onClickAway={handleClickAway}>
				<StyledCardActionArea>
					<NewSectionButton onClick={handleToogleExpand}>
						<Mui.Icon aria-label="add new board">
							<AddIcon />
						</Mui.Icon>
						<Mui.Typography>Create section</Mui.Typography>
					</NewSectionButton>
					<Mui.Collapse in={expanded} timeout="auto" unmountOnExit>
						<Mui.CardContent>
							<Formik initialValues={initialSection} onSubmit={(values) => handleSubmit(values)}>
								{({ handleSubmit }) => (
									<Form onSubmit={handleSubmit}>
										<TextInput label="Name" name="name" />
										<ColorPicker getColor={getColor} />
										<CreateButton />
									</Form>
								)}
							</Formik>
						</Mui.CardContent>
					</Mui.Collapse>
				</StyledCardActionArea>
			</Mui.ClickAwayListener>
		</SectionListElementWrapper>
	);
};

export default AddSectionButton;
