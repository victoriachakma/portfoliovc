import styles from '../styles';
import '../index.css';
import { Control } from '../components';
import {ReactComponent as Logo} from '../assets/logo.svg';
import {resume}  from '../assets';

const Navbar = () => {

return (
	<nav className='px-[20px] md:px-[200px] bg-alice dark:bg-darkblue transition duration-500 w-full flex py-5 justify-between items-center navbar sticky top-0'>
		<a href="/"><Logo className="fill-darkblue dark:fill-alice h-[60px] w-[60px]"/></a>

		<ul className='list-none justify-end items-center flex space-x-5 xs:space-x-10'>
			<a href="/About"><li className={`${styles.navFooter} hover-underline-animation cursor-pointer`}>About</li></a>
			<a href={resume} without rel="noopener noreferrer" target="_blank"><li className={`${styles.navFooter} hover-underline-animation cursor-pointer`}>Resume</li></a>
			<Control />
		</ul>

	</nav>
)
};

export default Navbar