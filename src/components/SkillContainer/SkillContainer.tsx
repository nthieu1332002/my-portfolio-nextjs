import React from 'react'
import { Skill } from '../Skills/Skills'

const SkillContainer = ({name, icon, color}: Skill) => {
  return (
    <div className="relative p-5 w-28 h-28 rounded-xl bg-gray-600 flex justify-center align-middle text-gray-400 hover:text-primary duration-500" >
        <div data-tooltip={name} className="tooltip">{icon}</div>
    </div>
  )
}

export default SkillContainer