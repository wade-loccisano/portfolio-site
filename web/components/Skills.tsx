import React from 'react'
import SkillLabel from './SkillLabel';

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

const Skills = () => {
    return (
        <section id="skill-section" className="section_container flex justify-center">
            <div className="flex flex-col  w-[90%] lg:w-[50%] xl:w-[30%]">
                <div className="text-xl md:text-2xl border-b-2 border-slate-400 font-bold text-center">
                    Technical Skills
                </div>
                <div className="flex justify-center mt-4">
                    <div >
                        {skills.map((skill, i) => {
                            return (
                                <div key={i}>
                                    <div>
                                        <div className="pt-2">
                                            {/* {skill.category} */}
                                        </div>
                                        <div>
                                            <div className="flex flex-row flex-wrap justify-center">
                                                {skill.skills.map((name, i) => {
                                                    return (
                                                        <div key={i}>
                                                            <SkillLabel name={name}></SkillLabel>
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
    )
}

export default Skills