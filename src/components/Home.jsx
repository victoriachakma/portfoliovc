import React from 'react';
import '../index.css'
import Typed from 'react-typed';
import { vic } from '../assets';
import { Connect, Projectgal } from '../components';
import styles from '../styles';

const Home = () => {
  return (
    <div className='px-[20px] md:px-[200px] pt-[140px] pb-[100px]'>

      <section className='md:flex'> 
        <div>
          <h1 className='text-medblue font-bold'>Victoria Chakma</h1>
          <h1 className='text-darkblue dark:text-alice font-semibold text-[40px]'>
            <Typed 
              strings={['aspiring developer &#128187;',
                'design enthusiast &#127912;',
                'avid crocheter&#129526;',
                'early bird &#127774;',
                'engineering student &#128218;',
              ]}
              typeSpeed={75}
              backSpeed={50}
              backDelay={2500}
              smartBackspace={true}
              loopCount={3}
              cursorChar='|'
            />
          </h1>
          <p className="pt-6 text-darkblue dark:text-alice pb-6">I'm an aspiring developer with a passion for leaving a positive impact on the world through <span className='font-bold'>tech</span> and <span className='font-bold'>innovation</span>.</p>
          <Connect />
        </div>
        <div className='flex flex-row pt-10 md:pt-0 pl-[40px] place-content-center'><img src={ vic } alt="Victoria Chakma" className='object-cover shrink w-[500px] rounded-full '/></div>
      </section>
      
      <section className='pt-[110px]'>
        <h2 className={`${styles.subHeader}`}>Experience</h2>
        <span className={`${styles.caption}`}>What I've been up to lately!</span>
        <Projectgal />
        <div className='pt-4'>
          <p className='rounded-[20px] text-dimdarkblue dark:text-dimalice bg-dimalice dark:bg-dimdarkblue transition duration-500 py-2 font-semibold text-center'>More projects in progress...</p>
        </div>
      </section>

    </div>
  )
}

export default Home