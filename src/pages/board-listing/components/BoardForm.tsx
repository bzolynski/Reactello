import { Button } from '@material-ui/core';
import { Formik, Field } from 'formik';
import { FC, useEffect, useState } from 'react';
import { BoardForm as BoardFormModel } from '../../../models/board';
import CheckboxInput from '../../../components/form/CheckboxInput';
import TextInput from '../../../components/form/TextInput';
import Form from '../../../components/form/Form';
import { useParams } from 'react-router-dom';
import dataService from '../../../services/dataService';
import { closeModal } from '../../../store/actions/modalActions';
import { useDispatch } from 'react-redux';
import { createBoard } from '../../../store/actions/boardActions';

type CloseModal = ReturnType<typeof closeModal>;
type CreateBoard = ReturnType<typeof createBoard>;

const initialBoard: BoardFormModel = {
	isPublic: false,
	name: '',
	background: ''
};
const BoardForm: FC = () => {
	const { id } = useParams<{ id: string }>();
	const [ board, setBoard ] = useState<BoardFormModel>(initialBoard);
	const dispatch = useDispatch();

	useEffect(
		() => {
			if (id) dataService.Boards.getForUpdate(Number.parseInt(id)).then((board) => setBoard(board));
		},
		[ id ]
	);
	const handleSubmit = (values: BoardFormModel) => {
		if (values.name != '') {
			if (id) {
				console.log('Update is not ready yet.');
			} else {
				dispatch<CreateBoard>(createBoard(values));
			}
			dispatch<CloseModal>(closeModal());
		}
	};
	return (
		<Formik enableReinitialize initialValues={board} onSubmit={(values) => handleSubmit(values)}>
			{({ handleSubmit }) => (
				<Form onSubmit={handleSubmit}>
					<TextInput label="Name" name="name" />
					<TextInput label="Background" name="background" />
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
