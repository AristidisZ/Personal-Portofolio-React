// import React from 'react'

import {motion} from 'framer-motion'
import {styles} from '../styles'
import { ComputersCanvas } from './canvas'
import { jack } from '../assets'


const Hero = () => {
  const handleClick = (event) => {
    // Open a new window with the specified URL
    window.open("https://en.wikipedia.org/wiki/Jack_of_all_trades", "_blank");
};



  
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute
        inset-0 top-[120px] 
        max-w-7xl mx-auto flex 
        flex-row items-start gap-5`}>
        <div className='flex flex-col
          justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>

        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'am <span className='text-[#915eff]'>
            Aristidis</span></h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                I am a developer as one can say "Jack of all trades, master of none"
                <span>
                  <img className="w-9 h-9 cursor-pointer" src={jack} alt="jack" onClick={handleClick}/>   
                </span>
            </p>
        </div>
      </div>
      <ComputersCanvas/>

      <div className='absolute xs:bottom-10 bottom-32 
      w-full flex justify-center item-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 
          border-secondary flex justify-center items-start p-2 '>
            <motion.div
              animate={{
                y:[0, 24, 0]
              }}
              transition= {{
                duration : 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>

        </a>
        
      </div>
    </section>  
  )
}

export default Hero