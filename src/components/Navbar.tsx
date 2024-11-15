import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
   <nav className="mb-20 flex items-center justify-between py-6">
    <div className='flex flex-shrink-0 items-center'>
        <h1 className='text-4xl font-semibold'>
            Chequel<span className='text-accent'>.</span>
        </h1>
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/chequel-mcneil/" target="_blank">
            <FaLinkedin />
        </a>
        <a href="https://github.com/chaq-mc" target="_blank">
            <FaGithub />
        </a>
    </div>
   </nav>
  )
}

export default Navbar