import { FC, useEffect, useRef, useState } from 'react';
import * as Mui from '@mui/material';
import styled from 'styled-components';
import { CheckboxProps } from '@mui/material';
import { CheckBox, LocalPrintshopSharp } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { Store } from 'store/reducers/reducers';
import { ElementType } from 'models/search';

interface WrapperProps{
    checked?: boolean
}

const Wrapper =	styled('div') <WrapperProps>`
    width: fit-content !important;
    height: 22px;   
    border-radius: ${(props) => props.theme.shape.getBorderRadius(5)};
    border: 1px solid ${(props) => props.theme.palette.grey[400]};
    overflow: hidden;
    background-color: ${(props) => (props.checked ? '#A7D6AF' : 'transparent')};
    width: auto;
    cursor: pointer;
    transition: ${(props) => props.theme.transition.hoverBase};
    padding: 1px 7px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    p{
        font-size: 13px;
        text-align: center;
        grid-column: 1;
        padding:0;
        user-select: none;
        display: inline-block;
        width: fit-content;
    }
`;

const CheckboxInput = styled(Mui.Checkbox)`
    display: none;
`;
type Props = {
	checked?: boolean;
    name?:string;
    handleCheck?: (name:string, checked:boolean) => void
};
const ChipCheckbox: FC<Props> = (props) => {
	const [ checked, setChecked ] = useState(props.checked ?? false);
	const checkboxRef = useRef<HTMLInputElement>(null); 
    useEffect(() => {
        setChecked(props.checked!);
    }, [props.checked]) 
	const handleClick = () => {
		setChecked(!checked);
		checkboxRef.current!.checked = !checked;
		props.handleCheck!(props.name ?? "", !checked);
	};

	return (
		<Wrapper checked={checked} onMouseDown={handleClick}>
			<Mui.Typography>{props.children}</Mui.Typography>
			<CheckboxInput name={props.name} disabled inputRef={checkboxRef}/>
		</Wrapper>
	);
};

export default ChipCheckbox;
