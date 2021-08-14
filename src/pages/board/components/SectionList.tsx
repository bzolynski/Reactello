import * as Mui from '@material-ui/core';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Store } from '../../../store/reducers/reducers';
import { SectionState } from '../../../store/reducers/sectionReducer';
import AddSectionButton from './AddSectionButton';
import Section from './Section';

const SectionList: FC = () => {
	const { itemIds } = useSelector<Store, SectionState>((state) => ({ ...state.sectionReducer }));

	const renderSections = () => {
		if (itemIds.length > 0) {
			return itemIds.map((id) => {
				return <Section key={id} sectionId={id} />;
			});
		} else {
			return <Mui.CircularProgress />;
		}
	};
	return (
		<Mui.Box display="flex">
			{renderSections()}
			<AddSectionButton />			
		</Mui.Box>
	);
};

export default SectionList;
