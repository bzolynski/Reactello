import * as Mui from '@material-ui/core';
import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Store } from '../../../store/reducers/reducers';
import { NoteState } from '../../../store/reducers/noteReducer';
import AddSectionButton from './AddSectionButton';
import NoteListing from './NoteListing';

type Props = {
	sectionId: number;
};
const NoteListingList: FC<Props> = ({ sectionId }) => {
	const { itemIds } = useSelector<Store, NoteState>((state) => state.noteReducer);
	const renderNotes = () => {
		if (itemIds.length > 0) {
			return itemIds.map((id) => {
				return <NoteListing key={id} noteId={id} />;
			});
		} else {
			return <Mui.CircularProgress />;
		}
	};
	return <Mui.Box>{renderNotes()}</Mui.Box>;
};

export default NoteListingList;
