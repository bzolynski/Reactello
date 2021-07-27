import { TextField } from '@material-ui/core';
import { useField } from 'formik';
import { FC } from 'react';

type Props = {
	placeholder?: string;
	name: string;
	label?: string;
	min?: number;
	max?: number;
	disablekeyboard: boolean;
};

const TextInput: FC<Props> = (props: Props) => {
	const [ field, meta ] = useField(props.name);

	return (
		<TextField
			InputProps={{
				inputProps: {
					max: props.max,
					min: props.min
				}
			}}
			error={meta.touched && !!meta.error}
			{...field}
			{...props}
			helperText={meta.error}
			type="number"
			onKeyDown={(event) => {
				if (props.disablekeyboard) event.preventDefault();
			}}
		/>
	);
};

export default TextInput;
