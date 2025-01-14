import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const projects = [
    {
        name: 'GLM Website',
        // description: "",
        url: ""
    },
    // {
    //     name: 'Website',
    // },
    // {
    //     name: 'Front end',
    // },
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
            <section id="project-section" className="section_container flex justify-center">
                <div className="flex justify-between">
                    {/* <div className="flex justify-between w-full"> */}
                    {projects.map((project, i) => {
                        return (
                            <div key={i}>
                                <div className="bg-black dark:bg-white min-w-[250px] min-h-[220px] xs:min-w-[350px] xs:min-h-[320px]">
                                    <div className="">
                                    </div>
                                </div>
                                <div className="flex justify-center items-center pt-4">
                                    <div className="text-xl">
                                        {project.name}
                                    </div>
                                    <Link
                                        className="p-2"
                                        href={project.url}
                                        target='_blank'
                                        key={1}
                                    >
                                        <Image
                                            className="dark:invert"
                                            src={`/link-icon.png`}
                                            alt="logo"
                                            width={20}
                                            height={20}
                                            priority
                                        />
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section >
        </>
    )
}

export default Projects