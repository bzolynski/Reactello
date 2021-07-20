import { Box, Grid } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { FC } from 'react';
import Board from '@components/Board';

const BoardPage: FC = () => {
	return (
		<Box mt={5}>
			<Grid container>
				<Grid container xs={3}>
					<p>lorem100 </p>
				</Grid>
				<Grid container xs={9} spacing={1}>
					<Grid item>
						<Board />
					</Grid>
					<Grid item>
						<Board />
					</Grid>
					<Grid item>
						<Board />
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
};

export default BoardPage;
