import awsIcon from "../assets/aws.svg";
import dockerIcon from "../assets/docker.svg";
import reactIcon from "../assets/react.svg";
import nextjsIcon from "../assets/nextjs.svg";
import typescriptIcon from "../assets/typescript.svg";
import cssIcon from "../assets/css.svg";
import htmlIcon from "../assets/html.svg";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  hidden: { y: [-10] },
  visible: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
}) 

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <h1 className='my-16 text-center text-4xl'>Technologies</h1>
      <div className='flex flex-wrap items-center justify-center gap-4'>
      <motion.div variants={iconVariants(2.5)} initial="hidden" animate="visible" className='rounded-2xl border-4 border-neutral-800 p-4'>
          <img className="w-16 h-16" src={typescriptIcon} alt=""/>
        </motion.div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <img className="w-16 h-16" src={htmlIcon} alt=""/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <img className="w-16 h-16" src={cssIcon} alt=""/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <img className="w-16 h-16" src={reactIcon} alt=""/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <img className="w-16 h-16" src={nextjsIcon} alt=""/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <img className="w-16 h-16" src={dockerIcon} alt=""/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <img className="w-16 h-16" src={awsIcon} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Technologies