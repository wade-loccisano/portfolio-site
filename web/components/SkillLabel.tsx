import React from 'react'

const SkillLabel = ({
    name
}: {
    name: string
}) => {
    return (
        <div className="m-1 px-2 border border-black dark:border-white rounded-full">
            {name}
        </div>
    )
}

export default SkillLabel