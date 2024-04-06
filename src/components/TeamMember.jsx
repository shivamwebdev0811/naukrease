import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';

const TeamMember = ({ member }) => {
  return (
    <AnimationOnScroll animateIn='animate__bounceIn'>
      <div className='flex flex-col gap-3'>
        <h1 className='font-bold text-3xl'>{member.name}</h1>
        <p className='font-semibold text-xl'>{member.designation}</p>
      </div>
    </AnimationOnScroll>

  )
}

export default TeamMember