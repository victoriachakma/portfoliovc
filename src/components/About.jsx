import React from 'react'
import { vic2 } from '../assets'
import '../index.css'
import styles from '../styles';

const About = () => {
  return (
	  <div className='px-[20px] md:px-[200px] py-[80px]'>

      <section className='md:flex'>
        <div className='text-center w-full md:w-1/3'>
          <div className='flex flex-row place-content-center md:px-2'>
            <img src = { vic2 } className='object-cover shrink w-[350px] rounded-[20px]' alt='Victoria on the Cabot Trail!'/>
          </div>
          <p className='text-darkblue dark:text-alice text-[18px]'>On the Cabot Trail, August 2022!</p>
        </div>
        <div className='pl-4 md:w-2/3 pt-5'>
          <h2 className='text-darkblue dark:text-alice text-[35px] font-bold pb-1'>&#128075;Hey, I'm <span className='text-medblue font-bold'>Victoria</span>!</h2>
          <p className={`${styles.aboutMe}`}>
            I'm a <a href='https://uwaterloo.ca/systems-design-engineering/about-systems-design-engineering' without rel='noopener noreferrer' target='_blank'><span className='font-bold underline'>Systems Design Engineering</span></a> student at the University of Waterloo with interests in <span className='italic'>software development, design,</span> and <span className='italic'>product management</span>. Through the interdisciplinary nature of my program, I have a strong <span className='font-bold'>technical</span> and <span className='font-bold'>design</span> foundation. 
          </p>
          <p className={`${styles.aboutMe}`}>
            Having been a member of Girl Guides of Canada for the past 14 years, I'm passionate about creating a more <span className='font-bold'>diverse</span> and <span className='font-bold'>inclusive</span> space in STEM, especially for women and girls. 
          </p>
          <p className={`${styles.aboutMe}`}> 
           Outside of the classroom and workplace you can find me working out, scrimaging on a volleyball court, catching the sunrise, or working on a new crochet project! 
          </p>
        </div>
        
      </section>

    </div>
  )
}

export default About