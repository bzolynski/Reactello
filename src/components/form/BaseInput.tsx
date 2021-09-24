import { InputBase } from '@mui/material';
import { useField } from 'formik';
import { FC } from 'react';

type Props = {
	placeholder?: string;
	name: string;
	label?: string;
};
const BaseInput: FC<Props> = (props: Props) => {
	const [ field, meta ] = useField(props.name);

	return <InputBase error={meta.touched && !!meta.error} {...field} {...props} />;
};

export default BaseInput;
