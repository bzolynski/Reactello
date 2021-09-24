import { FC } from 'react';
import styled from 'styled-components';
import { Paper } from '@mui/material';

const Root = styled(Paper)(({ theme }) => ({
	width: 250,
	margin: theme.spacing(0.75),
	backgroundColor: theme.palette.custom.noteSectionBackground,
	'& > ul': {
		paddingBottom: theme.spacing(0.5)
	}
}));
type Props = {
	elevation?: number;
};
const SectionListElementWrapper: FC<Props> = ({ children, elevation }) => {
	return <Root elevation={elevation}>{children}</Root>;
};

export default SectionListElementWrapper;
