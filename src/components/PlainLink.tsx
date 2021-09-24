import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import styled from 'styled-components';

const ClearLink = styled(RouterLink)(({ theme }) => ({
	textDecoration: 'none',
	fontSize: 'inherit',
	color: 'inherit',
	fontWeight: 'inherit',
	'&:hover': {
		textDecoration: 'none'
	}
}));

type Props = {
	to: string;
};

export const PlainLink: FC<Props> = ({ to, children }) => {
	return <ClearLink to={to}>{children}</ClearLink>;
};

export default PlainLink;
