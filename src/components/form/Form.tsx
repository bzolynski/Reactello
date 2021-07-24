import React, { FC } from 'react';
import { Form as FormikForm } from 'formik';
import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			flexDirection: 'column'
		}
	})
);

const Form: FC<React.FormHTMLAttributes<HTMLFormElement>> = (props: React.FormHTMLAttributes<HTMLFormElement>) => {
	const classes = useStyles();
	return (
		<FormikForm className={classes.root} {...props}>
			{props.children}
		</FormikForm>
	);
};

export default Form;
