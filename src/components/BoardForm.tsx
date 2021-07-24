import { Button } from '@material-ui/core';
import { Formik, Field } from 'formik';
import { FC, useEffect, useState } from 'react';
import { BoardForm as BoardFormModel } from '../models/board';
import CheckboxInput from './form/CheckboxInput';
import TextInput from './form/TextInput';
import Form from './form/Form';
import { useParams } from 'react-router-dom';
import dataService from '../services/dataService';

const initialBoard: BoardFormModel = {
	isPublic: false,
	name: '',
	background: 'black'
};
const BoardForm: FC = () => {
	const { id } = useParams<{ id: string }>();
	const [ board, setBoard ] = useState<BoardFormModel>(initialBoard);

	useEffect(
		() => {
			if (id) dataService.Boards.getForUpdate(Number.parseInt(id)).then((board) => setBoard(board));
		},
		[ id ]
	);
	return (
		<Formik enableReinitialize initialValues={board} onSubmit={(values) => console.log(values)}>
			{({ handleSubmit }) => (
				<Form onSubmit={handleSubmit}>
					<TextInput label="Name" name="name" />
					<Field name="background" />
					<CheckboxInput label="Public" name="isPublic" />
					<Button type="submit" variant="outlined">
						Save
					</Button>
				</Form>
			)}
		</Formik>
	);
};

export default BoardForm;
