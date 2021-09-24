import { FC, useState } from 'react';
import * as Mui from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SectionForm from './SectionForm';
import styled from 'styled-components';
import SectionListElementWrapper from './SectionListElementWrapper';

const StyledCardActionArea = styled('div')<{ expanded: boolean }>(({ theme, expanded }) => ({
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
	const [ expanded, setExpanded ] = useState(false);

	const handleToogleExpand = (): void => {
		setExpanded(!expanded);
	};

	const handleClickAway = () => {
		if (expanded) setExpanded(false);
	};

	return (
		<Mui.Box>
			<SectionListElementWrapper>
				<Mui.ClickAwayListener onClickAway={handleClickAway}>
					<StyledCardActionArea expanded={expanded}>
						<NewSectionButton onClick={handleToogleExpand}>
							<Mui.Icon aria-label="add new board">
								<AddIcon />
							</Mui.Icon>
							<Mui.Typography>Create section</Mui.Typography>
						</NewSectionButton>
						<Mui.Collapse in={expanded} timeout="auto" unmountOnExit>
							<Mui.CardContent>
								<SectionForm callback={handleToogleExpand} />
							</Mui.CardContent>
						</Mui.Collapse>
					</StyledCardActionArea>
				</Mui.ClickAwayListener>
			</SectionListElementWrapper>
		</Mui.Box>
	);
};

export default AddSectionButton;
