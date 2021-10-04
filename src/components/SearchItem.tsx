import { FC } from 'react';
import * as Mui from '@mui/material';
import styled from 'styled-components';
import { ElementType, SearchBase, SearchBoard, SearchNote, SearchSection } from '../models/search';
import PaperWrapper from './PaperWrapper';
import PersonIcon from '@mui/icons-material/PersonOutlineOutlined';
import BoardIcon from '@mui/icons-material/FeaturedPlayListOutlined';
import SectionIcon from '@mui/icons-material/DashboardOutlined';
import NoteIcon from '@mui/icons-material/SubjectRounded';
import CommentIcon from '@mui/icons-material/CommentOutlined';
import LockOpenIcon from '@mui/icons-material/LockOpenOutlined';
import LockClosedIcon from '@mui/icons-material/LockOutlined';
import PlainLink from './PlainLink';
import { useDispatch } from 'react-redux';
import { openModal } from 'store/actions/modalActions';
import { useHistory, useLocation } from 'react-router';
import { closeSearch } from 'store/actions/searchActions';

type OpenModal = ReturnType<typeof openModal>;
type CloseSearch = ReturnType<typeof closeSearch>;

const Wrapper = styled('div')`
	margin-top: 2px;
	padding: ${(props) => props.theme.spacing(0.5)};
	display: grid;
	grid-template-columns: 33% 1fr; 
	z-index: 10;
`;

const CardWrapper = styled('div')`
	display: grid;
	grid-template-columns: 28% 1fr;
	grid-template-rows: 27.5px 27.5px;
	padding: 1px;
`;

const IconWrapper = styled('div')`
	grid-column: 1;
	grid-row: 1 / span 2;
	svg{
		height: 100%;
		width: 100%;
	} 
`;
const ContentTitle = styled('div')`
	grid-column: 2;
	grid-row: 1;
	padding-top: ${(props) => props.theme.spacing(1)};
	padding-left: ${(props) => props.theme.spacing(0.5)};
	
    p{
		line-height: 1; 
	}
`;
const ContentDetails = styled('div')`
	padding-bottom: ${(props) => props.theme.spacing(1)};
	display: flex;
	flex-direction: row;
	align-items: center;
	grid-column: 2;
	grid-row: 2;

`;
const IconNumberWrapper = styled('div')`
	height: 100%;
	display: flex;
	align-items: flex-end;
	span{
		line-height: 1;  
		font-size: 11px;
		margin-right: 2px;
	}
	svg{
		margin-right: -7px;
		height: 80%; 
		path{
			transform: translate(-25%, 10%) 
		}
	}
`;
const SearchContentWrapper = styled('div')`
    padding: ${(props) => props.theme.spacing(1)} ;
    display: flex;
    flex-direction: column;
    h6{
		line-height: 1;    
		cursor: pointer;
	}
    span{
        margin-top: ${(props) => props.theme.spacing(1)};
        line-height: 1;
    }
    
`;
type Props = {
	item: SearchBase;
};
const SearchItem: FC<Props> = ({ item }) => {
	const dispatch = useDispatch();
	const history = useHistory();

	const redirectTo = (path: string) => {
		if (path !== history.location.pathname) history.push(path);
		dispatch<CloseSearch>(closeSearch());
	};

	const redirectToModal = (path: string) => {
		dispatch<OpenModal>(openModal(path));
		dispatch<CloseSearch>(closeSearch());
	};

	if (item.type == ElementType.board) {
		const board = item as SearchBoard;
		return (
			<Wrapper>
				<PaperWrapper onClick={() => redirectTo(`/board/${board.id}`)}>
					<CardWrapper>
						<IconWrapper>
							<BoardIcon />
						</IconWrapper>
						<ContentTitle>
							<Mui.Typography variant="body2">{board.title}</Mui.Typography>
						</ContentTitle>
						<ContentDetails>
							<IconNumberWrapper>
								<PersonIcon /> <Mui.Typography variant="caption">todo</Mui.Typography>
							</IconNumberWrapper>
							<IconNumberWrapper>
								<SectionIcon /> <Mui.Typography variant="caption">{board.sectionCount}</Mui.Typography>
							</IconNumberWrapper>
							<IconNumberWrapper>
								<LockClosedIcon />
								<LockOpenIcon />
								<Mui.Typography variant="caption">todo</Mui.Typography>
							</IconNumberWrapper>
						</ContentDetails>
					</CardWrapper>
				</PaperWrapper>
				<SearchContentWrapper>
					<Mui.Typography onClick={() => redirectTo(`/board/${board.id}`)} variant="subtitle1">
						{board.title}
					</Mui.Typography>
					<Mui.Typography variant="caption">in workspace !TODO!</Mui.Typography>
				</SearchContentWrapper>
			</Wrapper>
		);
	}
	if (item.type == ElementType.section) {
		const section = item as SearchSection;
		return (
			<Wrapper>
				<PaperWrapper>
					<CardWrapper onClick={() => redirectTo(`/board/${section.boardId}`)}>
						<IconWrapper>
							<SectionIcon />
						</IconWrapper>
						<ContentTitle>
							<Mui.Typography variant="body2">
								<PlainLink to={`/board/${section.boardId}`}>{section.title}</PlainLink>
							</Mui.Typography>
						</ContentTitle>
						<ContentDetails>
							<IconNumberWrapper>
								<NoteIcon /> <Mui.Typography variant="caption">{section.notesCount}</Mui.Typography>
							</IconNumberWrapper>
						</ContentDetails>
					</CardWrapper>
				</PaperWrapper>
				<SearchContentWrapper>
					<Mui.Typography onClick={() => redirectTo(`/board/${section.boardId}`)} variant="subtitle1">
						{section.title}
					</Mui.Typography>
					<Mui.Typography variant="caption">on board {section.boardName}</Mui.Typography>
				</SearchContentWrapper>
			</Wrapper>
		);
	}
	if (item.type == ElementType.note) {
		const note = item as SearchNote;
		return (
			<Wrapper>
				<PaperWrapper>
					<CardWrapper onClick={() => redirectToModal(`/board/${note.boardId}/m/note/${note.id}`)}>
						<IconWrapper>
							<NoteIcon />
						</IconWrapper>
						<ContentTitle>
							<Mui.Typography variant="body2">{note.title}</Mui.Typography>
						</ContentTitle>
						<ContentDetails>
							<IconNumberWrapper>
								<CommentIcon /> <Mui.Typography variant="caption">{note.commentsCount}</Mui.Typography>
							</IconNumberWrapper>
						</ContentDetails>
					</CardWrapper>
				</PaperWrapper>
				<SearchContentWrapper>
					<Mui.Typography
						onClick={() => redirectToModal(`/board/${note.boardId}/m/note/${note.id}`)}
						variant="subtitle1"
					>
						{note.title}
					</Mui.Typography>
					<Mui.Typography variant="caption">
						in section {note.sectionName} on board {note.boardName}
					</Mui.Typography>
				</SearchContentWrapper>
			</Wrapper>
		);
	}
	return (
		<Wrapper>
			<Mui.CircularProgress />
		</Wrapper>
	);
};

export default SearchItem;
