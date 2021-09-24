import React, { FC, MouseEvent, ReactElement, useRef, useState } from 'react';
import { openSearch, closeSearch, triggerSearch } from 'store/actions/searchActions';
import { useDispatch, useSelector } from 'react-redux';
import { Store } from 'store/reducers/reducers';
import { SearchState } from 'store/reducers/searchReducer';
import SearchIcon from '@mui/icons-material/Search';
import DoneIcon from '@mui/icons-material/Done';
import * as Mui from '@mui/material';
import styled, { keyframes, css } from 'styled-components';
type OpenSearch = ReturnType<typeof openSearch>;
type CloseSearch = ReturnType<typeof closeSearch>;
type TriggerSearch = ReturnType<typeof triggerSearch>;

const RootContainer = styled(Mui.Box)(({ theme }) => ({
	position: 'relative'
}));

const SearchInput = styled(Mui.InputBase)<{ isOpen: boolean }>(({ theme, isOpen }) => ({
	width: isOpen ? 400 : 180,
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

const ExpandingPanelContainer =	styled(Mui.Box) <	{ isOpen: boolean } >	`
	width: 600px; 
	position: absolute;
	left: 0px;
	top: ${props => props.isOpen ? "35px" : "0px"};
	z-index: ${props => props.isOpen ? 1 : -1};
	animation: ${(props) => (props.isOpen ? showSearchBarFrames() : hideSearchBarFrames())} 1s ease-in-out;
`;
const PanelPaper = styled(Mui.Paper)<{ isOpen: boolean }>(({ theme, isOpen }) => ({
		width: 'inherit',
		position: 'absolute',
		borderRadius: theme.shape.borderRadius
		//top: isOpen ? 0 : -200,
}));

const PanelPaper2 =
	styled(Mui.Paper) <
	{ isOpen: boolean } >
	`
	width: inherit;
	position: absolute;
	border-radius: ${(props) => props.theme.shape.borderRadius};
	animation: ${testAnimate} 1s ease both infinite;
`;

type Props = {};
const Search: FC<Props> = (props: Props) => {
	const { isOpen } = useSelector<Store, SearchState>((state) => state.searchReducer);
	const { searchItems } = useSelector<Store, SearchState>((state) => state.searchReducer);

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
		dispatch<TriggerSearch>(triggerSearch(inputValue));
	};

	const handleCheck = () => {
		console.log('checked');
	};

	return (
		<Mui.ClickAwayListener onClickAway={handleClickAway}>
			<RootContainer onClick={(e) => handleClick(e)}>
				<SearchInput
					isOpen={isOpen}
					inputRef={searchInputRef}
					onChange={handleChange}
					placeholder="Search..."
					endAdornment={
						<Mui.InputAdornment position="end">
							<SearchIcon fontSize="small" />
						</Mui.InputAdornment>
					}
				/>

				<ExpandingPanelContainer isOpen={isOpen} ref={containerRef}>
					{/* <Mui.Slide direction="down" in={isOpen} container={containerRef.current}> */}
					<PanelPaper isOpen={isOpen} elevation={3}>
						<Mui.Grid container>
							<Mui.Grid item sm={2}>
								<Mui.Chip size="small" variant="outlined" label="All" deleteIcon={<DoneIcon />} />
							</Mui.Grid>
							<Mui.Grid item sm={2} alignItems="stretch">
								<Mui.Chip
									size="small"
									variant="outlined"
									onDelete={() => {
										handleCheck();
									}}
									onClick={() => {
										handleCheck();
									}}
									label="Boards"
									deleteIcon={<DoneIcon />}
								/>
							</Mui.Grid>
							<Mui.Grid item sm={2}>
								<Mui.Chip size="small" variant="outlined" label="Sections" deleteIcon={<DoneIcon />} />
							</Mui.Grid>
							<Mui.Grid item sm={2}>
								<Mui.Chip size="small" variant="outlined" label="Notes" deleteIcon={<DoneIcon />} />
							</Mui.Grid>
							<Mui.Grid item sm={2}>
								<Mui.Chip size="small" variant="outlined" label="Comments" deleteIcon={<DoneIcon />} />
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
