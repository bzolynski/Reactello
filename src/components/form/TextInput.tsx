import { TextField } from '@material-ui/core';
import { useField } from 'formik';
import { FC } from 'react';

type Props = {
	placeholder?: string;
	name: string;
	label?: string;
};
const TextInput: FC<Props> = (props: Props) => {
	const [ field, meta ] = useField(props.name);

	return (
		<TextField
			error={meta.touched && !!meta.error}
			{...field}
			{...props}
			helperText={meta.error}
		/>
	);
};

export default TextInput;
