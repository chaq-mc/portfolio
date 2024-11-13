import {Experiences} from "../constants/static.ts";

function Experience() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Experience</h1>
      <div>
        {Experiences.map((exp, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-300">{exp.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{exp.role} - {" "}
                <span className="text-sm text-green-200">
                  {exp.company}
                </span>
              </h6>
              <ul className="list-disc">
                {exp.description.map((des, index) => (
                  <li key ={`desc-${index}`} className="mb-4 text-base text-neutral-300 antialiased">{des}</li>
                ))}
              </ul>
              <div className="flex flex-wrap">
                {exp.technologies.map((tech, index) => (
                  <span key={`tech-${index}`} className="mr-2 mt-4 px-2 py-1 rounded bg-neutral-900 text-sm font-medium text-green-700">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience