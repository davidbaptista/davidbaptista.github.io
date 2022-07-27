import React from 'react'
import CTA from './CTA'
import Socials from './Socials'
import './header.scss'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1>David Baptista</h1>
        <h5 className='text-light'>Developer</h5>
        <CTA/>
        <Socials/>
      </div>
    </header>
  )
}

export default Header