import React from 'react'
import { RiReactjsLine, RiNodejsFill, RiHtml5Fill, RiCss3Fill } from 'react-icons/ri'
import { SiTailwindcss } from 'react-icons/si'
import { SiJavascript } from 'react-icons/si'
import { SiTypescript } from 'react-icons/si'
import { SiNextdotjs } from 'react-icons/si'
import { SiMongodb } from 'react-icons/si'
import { SiExpress } from 'react-icons/si'
import { SiNodedotjs } from 'react-icons/si'
import { motion } from 'framer-motion'

const iconVariants = (duration) => ({
    initial: {y: -100},
    animate: {
        y: [10, -10], 
        transition: {
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse'
        }}
})

const Technologies = () => {
  return (
    <div className='border-b border-neutral-900 pb-24'>
        <motion.h1 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 1.5}}
        className='my-20 text-center text-4xl font-bold'>Technologies   
        </motion.h1>
        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 1.5}}
        className='flex flex-wrap items-center justify-center gap-4'>
                <motion.div     
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiReactjsLine className='text-7xl text-cyan-400' />
                </motion.div>
                <motion.div     
                variants={iconVariants(2)}
                initial="initial"
                animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiTypescript className='text-7xl text-red-400' />
                </motion.div>
                <motion.div     
                variants={iconVariants(6)}
                initial="initial"
                animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiNextdotjs className='text-7xl text-yellow-400' />
                </motion.div>
                <motion.div     
                variants={iconVariants(4)}
                initial="initial"
                animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiJavascript className='text-7xl text-orange-400' />
                </motion.div>
                <motion.div     
                variants={iconVariants(3)}
                initial="initial"
                animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiMongodb className='text-7xl text-green-400' />
                </motion.div>
                <motion.div     
                variants={iconVariants(5)}
                initial="initial"
                animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiTailwindcss className='text-7xl text-blue-400' />
                </motion.div>
                <motion.div     
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                 className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiNodedotjs className='text-7xl text-yellow-400' />
                </motion.div>
                <motion.div     
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
                 className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiExpress className='text-7xl text-neutral-400' />
                </motion.div>
            </motion.div>
    </div>
  )
}

export default Technologies