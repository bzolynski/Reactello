import { FC } from 'react';
import { BoardPage as BoardModel } from '../models/board';
import Section from '../components/Section';
import { Box, createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {}
	})
);

type Props = {
	board: BoardModel;
};
const Board: FC<Props> = ({ board }) => {
	const classes = useStyles();
	return (
		<Box className={classes.root} display="flex">
			{board.sections.map((section) => {
				return (
					<Box key={section.id}>
						<Section section={section} />
					</Box>
				);
			})}
		</Box>
	);
};

export default Board;
