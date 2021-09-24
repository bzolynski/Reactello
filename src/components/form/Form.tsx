import React, { FC } from 'react';
import { Form as FormikForm } from 'formik';
import styled from 'styled-components';

const FlexForm = styled(FormikForm)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column'
}));

const Form: FC<React.FormHTMLAttributes<HTMLFormElement>> = (props: React.FormHTMLAttributes<HTMLFormElement>) => {
	return (
		<FlexForm autoComplete="off" {...props}>
			{props.children}
		</FlexForm>
	);
};

export default Form;
