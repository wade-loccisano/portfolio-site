import React from 'react'
import ProjectCard from './ProjectCard';

export type Project = {
    name: string,
    imgSrc: string,
    url: string,
}

export const projects: Project[] = [
    {
        name: 'Gaming\'s Lost Memories Podcast Website',
        imgSrc: '/project-glm.png',
        url: "https://www.gamingslostmemories.com"
    },
];

const Projects = () => {
    return (
        <>
            <section className="section_container flex justify-center">
                <div className="text-xl md:text-2xl border-b-2 border-slate-400 font-bold text-center w-[90%] lg:w-[50%] xl:w-[30%]">
                    <div>
                        Projects
                    </div>
                </div>
            </section>
            <section id="project-list" className="section_container flex justify-center">
                <div className="flex justify-between">
                    {projects.map((project, i) => {
                        return (
                            <div key={i}>
                                <ProjectCard
                                    project={project}
                                >
                                </ProjectCard>
                            </div>
                        );
                    })}
                </div>
            </section >
        </>
    )
}

export default Projects