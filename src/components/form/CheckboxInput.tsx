import { Checkbox, FormControlLabel } from '@material-ui/core';
import { useField } from 'formik';
import { FC } from 'react';

type Props = {
	name: string;
	label?: string;
};
const CheckboxInput: FC<Props> = (props: Props) => {
	const [ field, meta ] = useField(props.name);
	return <FormControlLabel control={<Checkbox {...field} color="primary" />} label={props.label} />;
};

export default CheckboxInput;
