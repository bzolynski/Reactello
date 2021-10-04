import { FC } from 'react';
import styled from 'styled-components';
import { Paper, PaperProps } from '@mui/material';

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

const PaperWrapper: FC<PaperProps> = ({ children, ...props }) => {
	return <Root {...props}>{children}</Root>;
};

export default PaperWrapper;
