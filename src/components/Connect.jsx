import React from 'react'
import styles from '../styles';
import {ReactComponent as Mail} from '../assets/mail1.svg';
import {ReactComponent as Linkedin} from '../assets/linkedin1.svg';
import {ReactComponent as Github} from '../assets/github1.svg';

const Connect = () => {
  return (
	<div className='w-full flex justify-between'>
		<ul className='list-none flex space-x-5'>
			<a href='mailto:vchakma@uwaterloo.ca' target='_blank' without rel='noopener noreferrer'><Mail className={`${styles.footerIcons}`}/></a>
			<a href='https://www.linkedin.com/in/victoriachakma/' target='_blank' without rel='noopener noreferrer'><Linkedin className={`${styles.footerIcons}`}/></a>
			<a href='https://github.com/victoriachakma' target='_blank' without rel='noopener noreferrer'><Github className={`${styles.footerIcons}`}/></a>
		</ul>
	</div>
  )
}

export default Connect