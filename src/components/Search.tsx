import React, { FC, useRef } from 'react';
import { openSearch, closeSearch, changeSearchText, changeSearchFilter } from 'store/actions/searchActions';
import { useDispatch, useSelector } from 'react-redux';
import { Store } from 'store/reducers/reducers';
import { SearchState, SearchFilters } from 'store/reducers/searchReducer';
import SearchIcon from '@mui/icons-material/Search';
import * as Mui from '@mui/material';
import styled, { keyframes } from 'styled-components';
import ChipCheckbox from 'components/ChipCheckbox';
import { ElementType, SearchBase } from 'models/search';

import SearchItem from './SearchItem';

type OpenSearch = ReturnType<typeof openSearch>;
type CloseSearch = ReturnType<typeof closeSearch>;
type ChangeSearchText = ReturnType<typeof changeSearchText>;
type ChangeSearchFilters = ReturnType<typeof changeSearchFilter>;

const RootContainer = styled('div')`
	position: relative;
	
`;

const SearchInput = styled(Mui.InputBase)<{ $isOpen: boolean }>(({ theme, $isOpen }) => ({
	width: $isOpen ? 400 : 180,
	backgroundColor: 'rgba(255,255,255,0.5)',
	borderRadius: theme.spacing(0.5),
	padding: `0 ${theme.spacing(1)}`,
	color: 'white',
	transition: 'ease-out 0.2s'
}));

const showSearchBarFrames = () => keyframes` 
	0% { 
		top: 0px;
		z-index: -1;
	}
	50%{
		top: 48px;  
		z-index: -1;
	}
	100%{
		top: 35px;  
		z-index: 1
	}	
`;
const hideSearchBarFrames = () => keyframes` 
	0% { 
		top: 35px;   
		z-index: 1;
	}
	50%{
		top: 48px;  
		z-index: -1;
	}
	100%{
		top: 0px;
		z-index: -1;	 
	}	
`;

const ExpandingPanelContainer =
	styled(Mui.Box) <
	{ $isOpen: boolean } >
	`
	width: 550px; 
	position: absolute;
	left: 0px;  
	top: ${(props) => (props.$isOpen ? '35px' : '0px')};
	z-index: ${(props) => (props.$isOpen ? 1 : -1)};
	animation: ${(props) => (props.$isOpen ? showSearchBarFrames() : hideSearchBarFrames())} 0.2s ease-in-out;
`;
const PanelPaper = styled(Mui.Paper)`
	width: 'inherit';
	position: 'absolute';  
	border-radius: ${(props) => props.theme.shape.borderRadius};
	background-color: #f8f8f8;
`;

const FiltersContainer = styled('div')`
	padding: ${(props) => props.theme.spacing(0.5)};
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	& > div:not(:last-child){
		margin-right: ${(props) => props.theme.spacing(1)};
	}
	& > div:nth-child(1){ 
		margin-right: auto;
	}
`;

const SectionGroup = styled('div')`
	position: static;
	display: flex;
	flex-direction: column;
	overflow-y: auto;
	max-height: 70vh;
	
`;

const Section = styled('div')`
	display: flex;
	flex-direction: column;
	
	& > div > span > span{
		letter-spacing: 0.4em;
	}

`;

type Props = {};
const Search: FC<Props> = (props: Props) => {
	const { isOpen, searchItems, searchFilters, searchText } = useSelector<Store, SearchState>(
		(state) => state.searchReducer
	);
	const searchInputRef = useRef<HTMLInputElement>();
	const containerRef = useRef<Element>();
	const dispatch = useDispatch();

	const handleClick = (e: React.MouseEvent<HTMLElement>) => {
		if (!isOpen) dispatch<OpenSearch>(openSearch());
	};

	const handleClickAway = () => {
		if (isOpen) {
			dispatch<CloseSearch>(closeSearch());
		}
	};
	const handleChange = () => {
		if (!isOpen) dispatch<OpenSearch>(openSearch());
		const inputValue = searchInputRef.current!.value;
		dispatch<ChangeSearchText>(changeSearchText(inputValue));
	};

	const handleCheck = (name: string, checked: boolean) => {
		let newSearchFilters: SearchFilters;

		if (name === 'all') {
			newSearchFilters = {
				[ElementType.board]: checked,
				[ElementType.section]: checked,
				[ElementType.note]: checked,
				[ElementType.comment]: checked
			};
		} else {
			newSearchFilters = {
				...searchFilters,
				[name]: checked
			};
		}
		dispatch<ChangeSearchFilters>(changeSearchFilter(newSearchFilters));
	};

	const renderSections = () => {
		const groupped = searchItems.reduce(
			(previous, current) => {
				const group = current.type;
				if (!previous[group]) previous[group] = [];
				previous[group].push(current);
				return previous;
			},
			{} as Record<ElementType, SearchBase[]>
		);

		if (groupped) {
			return (
				<Mui.Box display="flex" flexDirection="column">
					{groupped.board != undefined ? (
						<Section>
							<Mui.Divider orientation="horizontal" flexItem>
								<Mui.Typography variant="overline">Boards</Mui.Typography>
							</Mui.Divider>
							{groupped.board.map((x) => <SearchItem key={x.id + x.type} item={x} />)}
						</Section>
					) : null}
					{groupped.section != undefined ? (
						<Section>
							<Mui.Divider orientation="horizontal" flexItem>
								<Mui.Typography variant="overline">Sections</Mui.Typography>
							</Mui.Divider>
							{groupped.section.map((x) => <SearchItem key={x.id + x.type} item={x} />)}
						</Section>
					) : null}
					{groupped.note != undefined ? (
						<Section>
							<Mui.Divider orientation="horizontal" flexItem>
								<Mui.Typography variant="overline">Notes</Mui.Typography>
							</Mui.Divider>
							{groupped.note.map((x) => <SearchItem key={x.id + x.type} item={x} />)}
						</Section>
					) : null}
					{groupped.comment != undefined ? (
						<Section>
							<Mui.Divider orientation="horizontal" flexItem>
								<Mui.Typography variant="overline">Comments</Mui.Typography>
							</Mui.Divider>
							{groupped.comment.map((x) => <SearchItem key={x.id + x.type} item={x} />)}
						</Section>
					) : null}
				</Mui.Box>
			);
		}
		return <div />;
	};

	return (
		<Mui.ClickAwayListener onClickAway={handleClickAway}>
			<RootContainer onClick={(e) => handleClick(e)}>
				<SearchInput
					$isOpen={isOpen}
					inputRef={searchInputRef}
					onChange={handleChange}
					placeholder="Search..."
					value={searchText}
					endAdornment={
						<Mui.InputAdornment position="end">
							<SearchIcon fontSize="small" />
						</Mui.InputAdornment>
					}
				/>

				<ExpandingPanelContainer $isOpen={isOpen} ref={containerRef}>
					<PanelPaper elevation={3}>
						<FiltersContainer>
							<Mui.Grid item>
								<Mui.Typography>Select items to display:</Mui.Typography>
							</Mui.Grid>
							<Mui.Grid item>
								<ChipCheckbox
									name={'all'}
									checked={
										searchFilters[ElementType.board] &&
										searchFilters[ElementType.section] &&
										searchFilters[ElementType.note] &&
										searchFilters[ElementType.comment]
									}
									handleCheck={handleCheck}
								>
									All
								</ChipCheckbox>
							</Mui.Grid>
							<Mui.Grid item alignItems="stretch">
								<ChipCheckbox
									name={ElementType.board}
									checked={searchFilters[ElementType.board]}
									handleCheck={handleCheck}
								>
									Boards
								</ChipCheckbox>
							</Mui.Grid>
							<Mui.Grid item>
								<ChipCheckbox
									name={ElementType.section}
									checked={searchFilters[ElementType.section]}
									handleCheck={handleCheck}
								>
									Sections
								</ChipCheckbox>
							</Mui.Grid>
							<Mui.Grid item>
								<ChipCheckbox
									name={ElementType.note}
									checked={searchFilters[ElementType.note]}
									handleCheck={handleCheck}
								>
									Notes
								</ChipCheckbox>
							</Mui.Grid>
							<Mui.Grid item>
								<ChipCheckbox
									name={ElementType.comment}
									checked={searchFilters[ElementType.comment]}
									handleCheck={handleCheck}
								>
									Comments
								</ChipCheckbox>
							</Mui.Grid>
						</FiltersContainer>
						<SectionGroup>{renderSections()}</SectionGroup>
					</PanelPaper>
				</ExpandingPanelContainer>
			</RootContainer>
		</Mui.ClickAwayListener>
	);
};

export default Search;
