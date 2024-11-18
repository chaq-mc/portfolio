import awsIcon from "../assets/aws.svg";
import dockerIcon from "../assets/docker.svg";
import reactIcon from "../assets/react.svg";
import nextjsIcon from "../assets/nextjs.svg";
import typescriptIcon from "../assets/typescript.svg";
import cssIcon from "../assets/css.svg";
import htmlIcon from "../assets/html.svg";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: [-10] },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse" as const,
    }
  }
}) 

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h1 whileInView={{ opacity: 1, y:0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1 }} className='my-16 text-center text-4xl'>Technologies</motion.h1>
      <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1 }} className='flex flex-wrap items-center justify-center gap-4'>
      <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
          <img className="w-16 h-16" src={typescriptIcon} alt=""/>
        </motion.div>
        <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
          <img className="w-16 h-16" src={htmlIcon} alt=""/>
        </motion.div>
        <motion.div variants={iconVariants(6)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
          <img className="w-16 h-16" src={cssIcon} alt=""/>
        </motion.div>
        <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
          <img className="w-16 h-16" src={reactIcon} alt=""/>
        </motion.div>
        <motion.div variants={iconVariants(4.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
          <img className="w-16 h-16" src={nextjsIcon} alt=""/>
        </motion.div>
        <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
          <img className="w-16 h-16" src={dockerIcon} alt=""/>
        </motion.div>
        <motion.div variants={iconVariants(5.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
          <img className="w-16 h-16" src={awsIcon} alt=""/>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies