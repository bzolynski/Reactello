import { Card, CardMedia, Paper } from '@material-ui/core';
import { FC } from 'react';
import tempBG from '@assets/tempBG.jpg';

type Props = {};
const Board: FC<Props> = (props: Props) => {
	return (
		<Card>
			<CardMedia image={tempBG} />
		</Card>
	);
};

export default Board;
