import { FC } from 'react';
import styled from 'styled-components';
import * as Mui from '@mui/material';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import { ButtonProps } from '@mui/material';

const Wrapper = styled(Mui.Button)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
	':hover': {
		backgroundColor: theme.palette.primary.dark
	}
}));
const CreateButton: FC<ButtonProps> = (props) => {
	return (
		<Wrapper size="small" variant="contained" type="submit" endIcon={<NoteAddIcon fontSize="small" />} {...props}>
			Create
		</Wrapper>
	);
};

export default CreateButton;
