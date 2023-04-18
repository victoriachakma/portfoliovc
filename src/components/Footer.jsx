import styles from '../styles';
import {ReactComponent as Mail} from '../assets/mail1.svg';
import {ReactComponent as Linkedin} from '../assets/linkedin1.svg';
import {ReactComponent as Github} from '../assets/github1.svg';

const Footer = () => {
  return (
	<div className='px-[20px] md:px-[200px] pt-10 pb-20 w-full flex justify-around'>
		<ul className='list-none md:flex justify-center items-center flex space-x-5'>
			<a href='mailto:vchakma@uwaterloo.ca' target='_blank' without rel='noopener noreferrer'><Mail className={`${styles.footerIcons}`}/></a>
			<a href='https://www.linkedin.com/in/victoriachakma/' target='_blank' without rel='noopener noreferrer'><Linkedin className={`${styles.footerIcons}`}/></a>
			<a href='https://github.com/victoriachakma' target='_blank' without rel='noopener noreferrer'><Github className={`${styles.footerIcons}`}/></a>
			<p className={`${styles.navFooter}`}>Victoria Chakma ~ 2023</p>
		</ul>
	</div>
  )
}

export default Footer