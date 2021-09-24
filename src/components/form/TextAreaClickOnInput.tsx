import * as Mui from '@mui/material';
import { useField } from 'formik';
import { FC } from 'react';
import styled from 'styled-components';

const CustomTextArea = styled(Mui.InputBase)(({ theme }) => ({
	width: '100%',
	cursor: 'pointer',
	borderRadius: theme.spacing(0.3),

	'& textarea': {
		cursor: 'inherit',
		padding: '2px 3px',
		margin: '-2px -3px',
		borderRadius: 'inherit',
		border: 'transparent 1px solid',
		transition: 'ease-out 0.1s'
	},
	'&:focus-within': {
		cursor: 'text',
		'& textarea': {
			backgroundColor: 'white',
			borderColor: 'black',
			transition: 'ease-in 0.1s'
		}
	}
}));

const handleBlurOnEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
	if (e.key == 'Enter') {
		(e.currentTarget.firstElementChild as HTMLTextAreaElement).blur();
	}
};
const handleOnMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
	const textarea = e.currentTarget.firstChild as HTMLTextAreaElement;
	if (document.activeElement != textarea) e.preventDefault();
};
const handleOnMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
	const textarea = e.currentTarget.firstChild as HTMLTextAreaElement;
	textarea.focus();
};
type Props = {
	placeholder?: string;
	name: string;
	label?: string;
	onBlur?: (event: any) => void;
	blurOnEnter?: boolean;
};
const TextAreaClickOnInput: FC<Props> = ({ blurOnEnter, ...props }) => {
	const [ field, meta ] = useField(props.name);

	return (
		<CustomTextArea
			error={meta.touched && !!meta.error}
			{...field}
			{...props}
			onBlur={(e) => (props.onBlur ? props.onBlur(e) : null)}
			multiline
			onKeyPress={blurOnEnter ? handleBlurOnEnter : undefined}
			onMouseDown={handleOnMouseDown}
			onMouseUp={handleOnMouseUp}
		/>
	);
};

export default TextAreaClickOnInput;
