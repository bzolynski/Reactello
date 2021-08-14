import { FC } from 'react';
import * as Mui from '@material-ui/core';
import { Formik } from 'formik';
import TextInput from '../../../components/form/TextInput';
import NumberInput from '../../../components/form/NumberInput';
import { SectionCreate } from '../../../models/section';
import { useDispatch, useSelector } from 'react-redux';
import { Store } from '../../../store/reducers/reducers';
import { BoardPage } from '../../../models/board';
import { createSection } from '../../../store/actions/sectionActions';
import Form from '../../../components/form/Form';

type CreateSection = ReturnType<typeof createSection>;

type Props = {
	callback?: () => void;
};

const SectionForm: FC<Props> = ({ callback }) => {
	const { id: boardId } = useSelector<Store, BoardPage>((state) => ({ ...state.boardReducer.currentBoard! }));
	const numberOfSections = useSelector<Store, number>((state) => state.sectionReducer.itemIds.length);
	const dispatch = useDispatch();

	const maxSectionNumber = numberOfSections + 1;
	const initialSection: SectionCreate = {
		boardId: boardId,
		color: '',
		name: '',
		position: maxSectionNumber
	};

	const handleSubmit = (values: SectionCreate): void => {
		if (values.name !== '') {
			dispatch<CreateSection>(createSection(values));
		}
		if (callback) {
			callback();
		}
	};

	return (
		<Formik initialValues={initialSection} onSubmit={(values) => handleSubmit(values)}>
			{({ handleSubmit }) => (
				<Form onSubmit={handleSubmit}>
					<TextInput label="Name" name="name" />
					<TextInput label="Color" name="color" />
					<NumberInput
						min={1}
						max={maxSectionNumber}
						label="Position"
						disablekeyboard={true}
						name="position"
					/>
					<Mui.Button type="submit" variant="outlined">
						Save
					</Mui.Button>
				</Form>
			)}
		</Formik>
	);
};

export default SectionForm;
