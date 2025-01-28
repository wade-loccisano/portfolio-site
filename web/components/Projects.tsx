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
        name: 'Gaming\'s Lost Memories Podcast Website',
        imgSrc: '/project-glm.png',
        url: "https://www.gamingslostmemories.com"
    },
];

const Projects = () => {
    return (
        <>
            <ProjectTitleSection></ProjectTitleSection>
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