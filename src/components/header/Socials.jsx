import React from 'react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

const Socials = () => {
  return (
		<div className='header__socials'>
			<a href="https://github.com"  ><AiFillGithub/></a>
			<a href="https://linkedin.com" ><AiFillLinkedin/></a>
		</div>
	)
}

export default Socials