import React, { FC } from 'react';
import TopBar from './TopBar';
import styled from 'styled-components';

const Wrapper = styled('div')`
	--additional-margin: 20px;
	height: calc(100% - ${(props) => props.theme.sizes.topBar} - var(--additional-margin));
	width: max-content;
	padding-left: 100px;
	padding-right: 100px;
	padding-top: ${(props) => props.theme.sizes.topBar}; 
	padding-top: calc(${(props) => props.theme.sizes.topBar} + var(--additional-margin));
`;

const Container = styled('div')`
	position: relative;	 
	height: 100%;
	width: 100%;
`;
const Layout: FC = ({ children }) => {
	return (
		<React.Fragment>
			<TopBar />
			<Wrapper>
				<Container>{children}</Container>
			</Wrapper>
		</React.Fragment>
	);
};

export default Layout;
