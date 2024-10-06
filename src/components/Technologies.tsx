import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandDocker } from "react-icons/tb";
import { FaAws } from "react-icons/fa6";

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <h1 className='my-16 text-center text-4xl'>Technologies</h1>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <RiReactjsLine className="text-7xl text-cyan-400"/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <TbBrandNextjs className="text-7xl"/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <TbBrandDocker className="text-7xl text-blue-500"/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaAws className="text-7xl text-orange-400"/>
        </div>
      </div>
    </div>
  )
}

export default Technologies