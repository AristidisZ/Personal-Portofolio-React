import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full' options={{ max: 45, scale: 1, speed: 450 }}>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div className='bg-tertiary rounded-[20px] py-5 px-12 flex justify-evenly items-center flex-col'>
          <img src={icon} alt={`${title} icon`} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.heroSubText}>Introduction</p>
        <p className={styles.heroHeadText}>Overview</p>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        As a recent graduate with a specialization in Software Development,
        I bring a comprehensive background in web development, API integration,
        and software maintenance. My most recent experience at Aristotle University
        involved developing and maintaining applications using modern frameworks 
        such as VueJS, Typescript, SASS, .NET Core, and .NET Framework.

        In addition to my professional experience, 
        I have hands-on expertise in front-end development, 
        demonstrated through my work on the Kitten Web project, 
        where I utilized Angular and Typescript. I have also engaged in 
        several self-driven projects in Python, including applications in 
        machine learning and deep learning.

        I excel at collaborating with project teams to 
        deliver high-quality software solutions and am always eager to expand my knowledge and skills in the field.

      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About , "about")