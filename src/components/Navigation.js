import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import Button from './Button'

const section = styled.section`
 width: 100vw;
 background-color: ${props=>props.theme.body};


`
const NavBar = styled.nav`

display: flex;
justify-content: space-between;
align-items: center;
width: 85%;
/* height: ${props=>props.theme.NavHeight}; */
height: 5rem;
margin: 0 auto;


`
const Menu = styled.ul`
display: flex;
justify-content: space-between;
align-items: center;
list-style: none;




`
const MenuItems = styled.li`

margin: 0 1rem;
color: ${props=>props.theme.text};
cursor: pointer;

&::after{
  content: '';
  display: block;
  width: 0%;
  height: 2px;
  background: ${props=> props.theme.text};
  transition: width 0.3s ease;


}
&:hover::after{
 width: 100%;
}



`

const Navigation = () => {
  return (
    <section>
      <NavBar>
        <Logo/>
        <Menu>
          <MenuItems>Home</MenuItems>
          <MenuItems>About</MenuItems>
          <MenuItems>Roadmap</MenuItems>
          <MenuItems>Showcase</MenuItems>
          <MenuItems>Team</MenuItems>
          <MenuItems>Faq</MenuItems>


        </Menu>


        <Button text ="Login / SignUP" />
      </NavBar>

    </section>
  )
}

export default Navigation