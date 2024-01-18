import React from 'react'
import styled from 'styled-components'
const LogoText =styled.h1`


  font-family: 'Akaya Telivigala', cursive;
  font-size: ${props=> props.theme.fontxxxl};
  transition: all 0.2s ease;

   &:hover{
    transform: scale(1.1);
   }  


`

const Logo = () => {
  return (
    <LogoText>

        Tapon.
    </LogoText>
  )
}

export default Logo