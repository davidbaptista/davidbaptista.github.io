import './header.scss'
import resume from '../../assets/resume.pdf'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const Header = () => {
  return (
    <header>
      <div className='container header-container'>
        <h1>David Baptista</h1>
        <h5 className='text-light'>Developer</h5>

        <div className='cta'>
          <a href={resume} download className='btn'>Resume</a>
          <a href='#contact' className='btn btn-primary'>Contact</a>
        </div>

        <div className='header-socials'>
          <a href='https://github.com/davidbaptista' target='_blank' rel='noopener noreferrer'><AiFillGithub fontSize='2.5em'/></a>
          <a href='https://www.linkedin.com/in/davidbaptista00/' target='_blank' rel='noopener noreferrer'><AiFillLinkedin fontSize='2.5em'/></a>
        </div>
      </div>
    </header>
  )
}

export default Header