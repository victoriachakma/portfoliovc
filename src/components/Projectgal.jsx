import React from 'react';
import styles from '../styles';

const Projectgal = () => {
  return (
	<div className='grid grid-cols-1 md:grid-cols-2 gap-4 pt-5'>
		<div className='bg-lightblue px-1 rounded-[20px] py-5'>
			<a href='https://about.rogers.com/?icid=R_COR_JOR_OB4PMA' without rel='noopener noreferrer' target='_blank'><h2 className={`${styles.galTitle}`}>&#128279;Rogers Communications</h2></a>
			<p className={`${styles.galCaption} pb-3`}><span className='italic'>Project Manager</span> | Jan – April 2023</p>
			<ol className='list-disc pl-[50px] pr-[25px] text-darkblue'>
				<li>Created detailed project plans for network capacity augmentation, and software and hardware upgrades.</li>
				<li>Tracked tasks and milestones of 3 multi-year programs in Jira to accurately reflect status.</li>
				<li>Effectively compiled and communicated project status reports to stakeholder teams and coworkers.</li>
				<li>Monitored the execution of 20+ network change tickets, ensuring timely completion.</li>
			</ol>
		</div>
		<div className='bg-lightblue px-1 rounded-[20px] py-5'>
			<a href='https://www.itstechnova.org/' without rel='noopener noreferrer' target='_blank'><h2 className={`${styles.galTitle}`}>&#128279;TechNova</h2></a>
			<p className={`${styles.galCaption} pb-3`}><span className='italic'>Logistics Coordinator</span> | Mar 2023 – Present</p>
			<ol className='list-disc pl-[50px] pr-[25px] text-darkblue'>
				<li>Produced detailed plans and timelines for the 2023 Women+ Hackathon multi-day event.</li>
				<li>Successfully collaborated with team members to determine details such as venue and participant flow.</li>
			</ol>
		</div>

	</div>
  )
}

export default Projectgal