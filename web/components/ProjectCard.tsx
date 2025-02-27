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
            <div className="p-4">
                {/* img standard 250 220 */}
                <div className="bg-black dark:bg-white w-[350px] h-[235px] relative border-2 border-black dark:border-white">
                    <Link
                        className="flex justify-center items-center"
                        href={project.url}
                        target='_blank'
                        key={2}
                    >
                        <Image
                            className=""
                            src={project.imgSrc}
                            alt="Image of the project"
                            fill
                            priority
                            style={{
                                objectFit: 'cover',
                            }}
                        />
                    </Link>
                </div>
            </div>
            <div className="">
                <Link
                    className="flex justify-center items-center"
                    href={project.url}
                    target='_blank'
                    key={1}
                >
                    <div className="sm:text-xl p-2">
                        {project.name}
                    </div>
                    <Image
                        className="dark:invert m-2"
                        src={`/link-icon.png`}
                        alt="logo"
                        width={20}
                        height={20}
                        priority
                    />
                </Link>
            </div >
        </>
    )
}
export default ProjectCard


