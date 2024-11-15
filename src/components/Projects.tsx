import {PROJECTS} from "../constants/static";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl">Projects</h1>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            {PROJECTS.map((proj, index) => (
                 <div key={index} className="col-span-1">
                    <img src={proj.image} className="rounded" />
                    <h3 className="text-lg font-semibold mt-1">{proj.title} </h3>
                    <div className="flex flex-wrap">
                        {proj.technologies.map((tech, index) => (
                        <span key={`projTech-${index}`} className="mr-2 mt-4 px-2 py-1 rounded bg-neutral-900 text-sm font-medium text-green-700">{tech}</span>
                        ))}
                    </div>
                    <div className="py-2">
                      <a href={proj.projLink} target="_blank" className="mr-6 mt-4 px-2 py-1 rounded border-b-4 border-green-500 hover:bg-neutral-900 hover:font-semibold">View Project</a>
                      {proj.hasGit ? <a href={proj.gitLink} target="_blank" className="mr-2 mt-4 px-2 py-1 rounded border-b-4 border-green-500 hover:bg-neutral-900 hover:font-semibold">View Code</a> : null}
                    </div>
                </div>
            ))}          
        </div>
    </div>
  )
}

export default Projects