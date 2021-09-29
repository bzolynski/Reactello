import { FC, useState } from 'react';
import { Slider } from '@mui/material';
import { styled } from '@mui/system';

interface ColorSliderProps {
	$hsl: string;
	$hue: number;
}
const ColorSlider =
	styled(Slider) <
	ColorSliderProps >
	` 
	color: ${(props) => props.$hsl};
	.Mui-active{
		box-shadow: 0px 0px 0px 14px hsla(${(props) => props.$hue}, 75%, 85%, 0.4) !important;
	}
	.Mui-focusVisible{
		box-shadow: 0px 0px 0px 8px hsla(${(props) => props.$hue}, 75%, 85%, 0.4);
	}
	.MuiSlider-thumb{
		:hover{
			box-shadow: 0px 0px 0px 8px hsla(${(props) => props.$hue}, 75%, 85%, 0.4) ;
		}
	}
	
`;

const getHsl = (hue: number): string => {
	const saturation = Math.floor(Math.random() * (75 - 60 + 1)) + 60;
	return `hsl(${hue}, ${saturation}%, 85%)`;
};

type Props = {
	getColor?: (color: string) => void;
};

const ColorPicker: FC<Props> = ({ getColor }) => {
	const [ hue, setHue ] = useState(0);
	const [ hsl, setHsl ] = useState(getHsl(0));

	const handleChange = (event: Event, newValue: number | number[], activeThumb: number) => {
		if (!Array.isArray(newValue)) {
			if (hue !== newValue) {
				setHue(newValue);
				setHsl(getHsl(newValue));
			}
		}
	};
	const handleChangeCommited = () => {
		if (getColor) getColor(hsl);
		console.log('PICKER ' + hsl);
	};

	return (
		<ColorSlider
			orientation="horizontal"
			$hsl={hsl}
			$hue={hue}
			aria-label="Color picker"
			defaultValue={0}
			step={10}
			min={0}
			max={360}
			onChange={handleChange}
			onChangeCommitted={handleChangeCommited}
		/>
	);
};

export default ColorPicker;
