import React, { FC, useRef } from 'react';
import { openSearch, closeSearch, changeSearchText, changeSearchFilter } from 'store/actions/searchActions';
import { useDispatch, useSelector } from 'react-redux';
import { Store } from 'store/reducers/reducers';
import { SearchState, SearchFilters } from 'store/reducers/searchReducer';
import SearchIcon from '@mui/icons-material/Search';
import * as Mui from '@mui/material';
import styled, { keyframes, css } from 'styled-components';
import ChipCheckbox from 'components/ChipCheckbox';
import { ElementType } from 'models/search';
type OpenSearch = ReturnType<typeof openSearch>;
type CloseSearch = ReturnType<typeof closeSearch>;
type ChangeSearchText = ReturnType<typeof changeSearchText>;
type ChangeSearchFilters = ReturnType<typeof changeSearchFilter>;

const RootContainer = styled(Mui.Box)(({ theme }) => ({
	position: 'relative'
}));

const SearchInput = styled(Mui.InputBase)<{ $isOpen: boolean }>(({ theme, $isOpen }) => ({
	width: $isOpen ? 400 : 180,
	backgroundColor: 'rgba(255,255,255,0.5)',
	borderRadius: theme.spacing(0.5),
	padding: `0 ${theme.spacing(1)}`,
	color: 'white',
	transition: 'ease-out 0.2s'
}));

const testAnimate = () => keyframes` 
	0% { 
		background-color: yellow;
	}
	50% {
		background-color: red;

	}
	100%{
		background-color: blue;

	}
	
`;

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
	width: 600px; 
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
	//top: isOpen ? 0 : -200,

`;

type Props = {};
const Search: FC<Props> = (props: Props) => {
	const { isOpen, searchItems, searchFilters } = useSelector<Store, SearchState>((state) => state.searchReducer);
	const searchInputRef = useRef<HTMLInputElement>();
	const containerRef = useRef<Element>();
	const dispatch = useDispatch();

	const handleClick = (e: React.MouseEvent<HTMLElement>) => {
		if (!isOpen) dispatch<OpenSearch>(openSearch());
	};

	const handleClickAway = () => {
		if (isOpen) {
			dispatch<CloseSearch>(closeSearch());
			searchInputRef.current!.value = '';
		}
	};
	const handleChange = () => {
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
	return (
		<Mui.ClickAwayListener onClickAway={handleClickAway}>
			<RootContainer onClick={(e) => handleClick(e)}>
				<SearchInput
					$isOpen={isOpen}
					inputRef={searchInputRef}
					onChange={handleChange}
					placeholder="Search..."
					endAdornment={
						<Mui.InputAdornment position="end">
							<SearchIcon fontSize="small" />
						</Mui.InputAdornment>
					}
				/>

				<ExpandingPanelContainer $isOpen={isOpen} ref={containerRef}>
					{/* <Mui.Slide direction="down" in={isOpen} container={containerRef.current}> */}
					<PanelPaper elevation={3}>
						<Mui.Grid container>
							<Mui.Grid item sm={2}>
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
							<Mui.Grid item sm={2} alignItems="stretch">
								<ChipCheckbox
									name={ElementType.board}
									checked={searchFilters[ElementType.board]}
									handleCheck={handleCheck}
								>
									Boards
								</ChipCheckbox>
							</Mui.Grid>
							<Mui.Grid item sm={2}>
								<ChipCheckbox
									name={ElementType.section}
									checked={searchFilters[ElementType.section]}
									handleCheck={handleCheck}
								>
									Sections
								</ChipCheckbox>
							</Mui.Grid>
							<Mui.Grid item sm={2}>
								<ChipCheckbox
									name={ElementType.note}
									checked={searchFilters[ElementType.note]}
									handleCheck={handleCheck}
								>
									Notes
								</ChipCheckbox>
							</Mui.Grid>
							<Mui.Grid item sm={2}>
								<ChipCheckbox
									name={ElementType.comment}
									checked={searchFilters[ElementType.comment]}
									handleCheck={handleCheck}
								>
									Comments
								</ChipCheckbox>
							</Mui.Grid>
						</Mui.Grid>
						<Mui.Box display="flex" flexDirection="column">
							{searchItems.map((x) => <p key={x.title + x.id}>{x.title}</p>)}
						</Mui.Box>
					</PanelPaper>
					{/* </Mui.Slide> */}
				</ExpandingPanelContainer>
			</RootContainer>
		</Mui.ClickAwayListener>
	);
};

export default Search;
