import { TextField } from '@mui/material';
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

const NumberInput: FC<Props> = (props: Props) => {
	const [ field, meta ] = useField(props.name);
	const { disablekeyboard, ...properties } = props;
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
			{...properties}
			helperText={meta.error}
			type="number"
			onKeyDown={(event) => {
				if (props.disablekeyboard) event.preventDefault();
			}}
		/>
	);
};

export default NumberInput;
