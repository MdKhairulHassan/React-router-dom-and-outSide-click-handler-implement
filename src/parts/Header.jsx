import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Menu from '../components/Menu'
import { NavLink, useNavigate } from 'react-router-dom'

const Header = ({ imgSrc, imgAlt, menuone, menutwo, menuthree, menufour }) => {
  
  const navigate = useNavigate();

  return (
    
    <>
      {/* Header Logo with Menu Start */}
      <div className='py-[30px]'>
        <Container className={'max-w-headerContainer'}>
          <Flex>
          <div className='w-[30%]'>
            <NavLink to={'/'}>
            <Image imgSrc={imgSrc} imgAlt={imgAlt}/>
            </NavLink>
          </div>
            <Flex className='w-[70%] pl-8'>
            <NavLink to={'/'}>
            <Menu menuName={menuone}/>
            </NavLink>
            <NavLink to={'/shop'}>
            <Menu menuName={menutwo}/>
            </NavLink>
            <NavLink to={'/about'}>
            <Menu menuName={menuthree}/>
            </NavLink>
            <NavLink to={'/contact'} onClick={() => navigate('/', {replace:true})}>    
            <Menu menuName={menufour}/>
            </NavLink>
          </Flex>
          </Flex>
        </Container>
      </div>
      {/* Header Logo with Menu End */}
    </>
  )
}

export default Header