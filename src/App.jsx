import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Work from './components/work/Work'
import Contact from './components/contact/Contact'

const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Work/>
      <Contact/>
      <Footer/>

    </>
  )
}

export default App