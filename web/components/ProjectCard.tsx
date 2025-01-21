import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Project } from './Projects'

const ProjectCard = ({
    project
}: {
    project: Project
}) => {
    return (
        <>
            <div className="bg-black dark:bg-white min-w-[250px] min-h-[220px] xs:min-w-[350px] xs:min-h-[320px]" >
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
        </>
    )
}
export default ProjectCard


