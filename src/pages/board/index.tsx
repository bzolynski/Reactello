import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import SectionList from './components/SectionList';
import { setCurrentBoard } from 'store/actions/boardActions';
import styled from 'styled-components';
type SetCurrentBoard = ReturnType<typeof setCurrentBoard>;

const Wrapper = styled('div')`
	height: 100%;
`;

type Props = {};
const BoardPage: FC<Props> = () => {
	const dispatch = useDispatch();
	const params = useParams<{ id: string }>();
	const id = Number.parseInt(params.id);

	useEffect(
		() => {
			dispatch<SetCurrentBoard>(setCurrentBoard(id));
		},
		[ id ]
	);

	return (
		<Wrapper>
			<SectionList />
		</Wrapper>
	);
};

export default BoardPage;
