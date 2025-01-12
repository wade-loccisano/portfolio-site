const skills = [
  {
    category: 'Front end',
    skills: [
      "React",
      "JavaScript",
      "TypeScript",
    ],
  },
  {
    category: 'Back end',
    skills: [
      "C#",
      ".NET",
      "REST APIs",
      "PostgreSQL",
      "Entity Framework",
    ],
  },
  {
    category: 'Dev Ops',
    skills: [
      "Cloud",
      "AWS",
      "Python",
      "Git",
      "Docker",
    ],
  },
];

const projects = [
  {
    name: 'Front end',
  },
  {
    name: 'Front end',
  },
  {
    name: 'Front end',
  },
];

export default function Home() {
  return (
    <>
      <main className="">
        {/* header */}
        <section className="section_container">
          <h1 className="text-center text-6xl">
            Wade Loccisano
          </h1>
          <div className="p-4 text-center text-4xl">
            Software Developer
          </div>
          <div className="text-center text-2xl">
            Front End - Back End - Full Stack
          </div>
        </section>
        {/* skills */}
        <section id="skills-section" className="section_container flex justify-center">
          <div className="flex flex-col w-[30%]">
            <div className="text-xl md:text-2xl border-b-2 border-slate-400 font-bold text-center">
              Skills
            </div>
            <div className="flex justify-center">
              <div >
                {skills.map((skill, i) => {
                  return (
                    <div key={i}>
                      <div className="">
                        <div className="pt-2">
                          {skill.category}
                        </div>
                        <div className="">
                          <div className="flex flex-row flex-wrap justify-center">
                            {skill.skills.map((name, i) => {
                              return (
                                <div key={i} className="m-1 px-2 border border-black rounded-full bg-white">
                                  {name}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        {/* projects */}
        <section id="projects-section" className="section_container">
          <div className="text-xl md:text-2xl border-b-2 border-slate-400 font-bold text-center">
            <div className="">
              Projects
            </div>
          </div>
          <div className="m-24">
            {projects.map((project, i) => {
              return (
                <div key={i} className="w">
                  {project.name}
                </div>
              );
            })}
          </div>
        </section>
        {/* contact */}
        <section className="section_container">

        </section>
      </main >
    </>
  );
}
