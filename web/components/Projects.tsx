import React from 'react'
import ProjectCard from './ProjectCard';
import ProjectTitleSection from './ProjectTitleSection';

export type Project = {
    name: string,
    imgSrc: string,
    url: string,
}

export const projects: Project[] = [
    {
        name: 'Flashcards Lite via Flask',
        imgSrc: '/project-flask-flashcards.png',
        url: "https://flashcards-lite.onrender.com"
    },
    {
        name: 'GLM Podcast Website',
        imgSrc: '/project-glm.png',
        url: "https://www.gamingslostmemories.com"
    },
];

const Projects = () => {
    return (
        <>
            <ProjectTitleSection></ProjectTitleSection>
            <section id="project-list" className="section_container flex justify-center">
                <div className="flex flex-col lg:flex-row items-center justify-between xl:w-4/5">
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