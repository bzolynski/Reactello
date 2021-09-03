import { FC, useState } from 'react';
import * as Mui from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import SectionForm from './SectionForm';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		card: {
			width: 275,
			margin: theme.spacing(0.75)
		}
	})
);

const AddSectionButton: FC = () => {
	const [ expanded, setExpanded ] = useState(false);
	const classes = useStyles();

	const handleExpandClick = (): void => {
		setExpanded(!expanded);
	};

	return (
		<Mui.Box>
			<Mui.Card className={classes.card}>
				<Mui.CardActionArea component={'div'}>
					<Mui.CardActions onClick={handleExpandClick}>
						<Mui.Icon aria-label="add new board">
							<AddIcon />
						</Mui.Icon>
						<Mui.Typography>Add section</Mui.Typography>
					</Mui.CardActions>
					<Mui.Collapse in={expanded} timeout="auto" unmountOnExit>
						<Mui.CardContent>
							<SectionForm callback={handleExpandClick} />
						</Mui.CardContent>
					</Mui.Collapse>
				</Mui.CardActionArea>
			</Mui.Card>
		</Mui.Box>
	);
};

export default AddSectionButton;
