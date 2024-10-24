import profilePic from '../assets/TeddyProfile.jpg'
import {HERO_CONTENT} from '../constants/index'
import { motion } from 'framer-motion'

const container = (delay) => ({
    hidden: {opacity: 0},
    visible: {
        x:0,
        opacity: 1,
        transition: {
            delay: delay,
            duration: 0.5,
            ease: "easeInOut"
        }
    }
})

const Hero = () => {
  return (
    <div className="flex h-screen items-center justify-center">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                     variants={container()}
                     initial="hidden"
                     animate="visible"
                     className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Tewodros Megabiaw Tassew (Teddy)</motion.h1>
                    <motion.span 
                    variants={container(0.5)}
                    initial="hidden"
                    animate="visible"
                    className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>Researcher, App and Full Stack Developer</motion.span>
                    <motion.p 
                    variants={container(1)}
                    initial="hidden"
                    animate="visible"
                    className="my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}</motion.p>

                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.img 
                    initial={{opacity: 0, x: 100}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 1, delay: 1.2}}
                    src={profilePic} alt="Teddy" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero