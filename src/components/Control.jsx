import React, { useState } from 'react';
import useDarkSide from './useDarkSide';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const Control = () => {

	const [colorTheme, setTheme] = useDarkSide();
	const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false);

	const toggleDarkMode = (checked) => {
		setTheme(colorTheme);
		setDarkSide(checked);
	};

	return (
		<DarkModeSwitch 
			checked={darkSide}
			onChange={toggleDarkMode}
			size={35}
			moonColor='#F2F5F8'
			sunColor='#1D2934'
		/>
	)
}

export default Control