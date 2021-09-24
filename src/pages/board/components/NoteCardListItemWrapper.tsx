import { FC } from 'react';
import styled from 'styled-components';
import { Paper } from '@mui/material';

const Root = styled(Paper)(({ theme }) => ({
	cursor: 'pointer',
	borderRadius: theme.shape.borderRadius,
	'& li': {
		borderRadius: theme.shape.borderRadius
	},
	':hover': {
		transition: 'ease-in 0.2s',
		backgroundColor: theme.palette.grey[100]
	}
}));

const NoteCardListItemWrapper: FC = ({ children }) => {
	return <Root>{children}</Root>;
};

export default NoteCardListItemWrapper;
