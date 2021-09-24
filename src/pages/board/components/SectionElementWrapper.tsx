import { FC } from 'react';
import * as Mui from '@mui/material';
import styled from 'styled-components';

const Wrapper = styled('div')(({ theme }) => ({
	margin: theme.spacing(1),
	borderRadius: theme.shape.borderRadius
}));

const SectionElementWrapper: FC = ({ children }) => {
	return <Wrapper>{children}</Wrapper>;
};

export default SectionElementWrapper;
