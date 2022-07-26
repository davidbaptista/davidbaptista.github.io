import React from 'react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

const Socials = () => {
  	return (
		<div className='header__socials'>
			<a href="https://github.com"><AiFillGithub fontSize="2.5em" /></a>
			<a href="https://linkedin.com"><AiFillLinkedin fontSize="2.5em"  /></a>
		</div>
	)
}

export default Socials