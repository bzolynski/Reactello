import { Button } from '@material-ui/core';
import { Formik, Field } from 'formik';
import { FC, useEffect, useState } from 'react';
import { BoardForm as BoardFormModel } from '../models/board';
import CheckboxInput from './form/CheckboxInput';
import TextInput from './form/TextInput';
import Form from './form/Form';
import { useHistory, useParams } from 'react-router-dom';
import dataService from '../services/dataService';
import { closeModal } from '../store/actions/modalActions';
import { useDispatch } from 'react-redux';

type CloseModal = ReturnType<typeof closeModal>;

const initialBoard: BoardFormModel = {
	isPublic: false,
	name: '',
	background: 'black'
};
const BoardForm: FC = () => {
	const { id } = useParams<{ id: string }>();
	const [ board, setBoard ] = useState<BoardFormModel>(initialBoard);
	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(
		() => {
			if (id) dataService.Boards.getForUpdate(Number.parseInt(id)).then((board) => setBoard(board));
		},
		[ id ]
	);
	const handleSubmit = (values: BoardFormModel) => {
		if (id) dataService.Boards.update(values).then(() => history.push(`/boards/${id}`));
		else dataService.Boards.create(values).then((board) => history.push(`/boards/${board.id}`));
		dispatch<CloseModal>(closeModal());
	};
	return (
		<Formik enableReinitialize initialValues={board} onSubmit={(values) => handleSubmit(values)}>
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
