import { FC } from 'react';
import styled from 'styled-components';
import { Paper, PaperProps } from '@mui/material';

const Root = styled(Paper)(({ theme }) => ({
	width: 250,
	margin: theme.spacing(0.75),
	backgroundColor: theme.palette.custom.noteSectionBackground,
	'& > ul': {
		paddingBottom: theme.spacing(0.5)
	}
}));

const SectionListElementWrapper: FC<PaperProps> = ({ children, ...props }) => {
	return (
		<div>
			<Root {...props}>{children}</Root>
		</div>
	);
};

export default SectionListElementWrapper;
