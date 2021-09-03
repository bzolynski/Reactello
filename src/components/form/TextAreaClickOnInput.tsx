import { createStyles, makeStyles } from '@material-ui/core';
import * as Mui from '@material-ui/core';
import { useField } from 'formik';
import { FC, MouseEvent } from 'react';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Mui.Theme) =>
	createStyles({
		root: {
			width: '100%',
			cursor: 'pointer',
			'& textarea': {
				cursor: 'inherit',
				paddingTop: 2,
				paddingBottom: 2,
				paddingLeft: 3,
				paddingRight: 3,
				border: 'transparent 1px solid',
				wordBreak: 'break-all'
			},
			'&:focus-within': {
				cursor: 'text',
				'& textarea': {
					backgroundColor: 'white',
					borderRadius: '3px',
					borderColor: 'black'
				}
			}
		}
	})
);

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
	customClasses?: string;
	blurOnEnter?: boolean;
};
const TextAreaClickOnInput: FC<Props> = ({ customClasses, blurOnEnter, ...props }) => {
	const [ field, meta ] = useField(props.name);
	const classes = useStyles();

	return (
		<Mui.InputBase
			error={meta.touched && !!meta.error}
			{...field}
			{...props}
			onBlur={(e) => (props.onBlur ? props.onBlur(e) : null)}
			className={clsx(classes.root, customClasses)}
			multiline
			onKeyPress={blurOnEnter ? handleBlurOnEnter : undefined}
			onMouseDown={handleOnMouseDown}
			onMouseUp={handleOnMouseUp}
		/>
	);
};

export default TextAreaClickOnInput;
