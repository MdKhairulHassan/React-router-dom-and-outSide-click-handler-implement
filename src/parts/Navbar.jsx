import React from 'react'
import Logo from '../assets/Logo.png'
import Header from './Header'

const Navbar = () => {
  return (

    <Header
      imgSrc={Logo}
      imgAlt={Logo}
      menuone={'Home'} 
      menutwo={'Shop'} 
      menuthree={'About'} 
      menufour={'Contacts'}
    />
    
  )
}

export default Navbar