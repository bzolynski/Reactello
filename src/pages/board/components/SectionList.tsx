import * as Mui from '@material-ui/core';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Store } from '../../../store/reducers/reducers';
import { SectionState } from '../../../store/reducers/sectionReducer';
import AddSectionButton from './AddSectionButton';
import Section from './Section';

const SectionList: FC = () => {
	const sectionIds = useSelector<Store, number[]>(
		(state) => state.boardReducer.items[state.boardReducer.currentBoard!].sections
	);

	const renderSections = () => {
		return sectionIds.map((id) => {
			return <Section key={id} sectionId={id} />;
		});
	};
	return (
		<Mui.Box display="flex">
			{renderSections()}
			<AddSectionButton />
		</Mui.Box>
	);
};

export default SectionList;
