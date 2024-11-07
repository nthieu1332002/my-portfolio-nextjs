import React from 'react'
import { Skill } from '../Skills/Skills'

const SkillContainer = ({name, icon}: Skill) => {
  return (
    <div className="relative p-5 w-lg_size md:w-[calc(33.33%-1rem)] lg:w-[calc(20%-1rem)] h-28 rounded-xl bg-gray-600 flex justify-center align-middle text-gray-400 hover:text-primary-color duration-500" >
        <div data-tooltip={name} className="tooltip">{icon}</div>
    </div>
  )
}

export default SkillContainer