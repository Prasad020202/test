import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect';
import  Button from './Button';

const Title = styled.h2`
font-size: ${props=>props.theme.fontxxl};
text-transform: capitalize;
width: 70%; //80 tha 
color: ${props=>props.theme.text};
align-self: flex-start;
span{
    text-transform: uppercase;
    font-family: Akaya Telivigala , cursive;
}
.text-1{
    color: red;
}
.text-2{
    color: blue;
}


`

const SubTitle = styled.h3`

font-size: ${props=>props.theme.fontlg};
text-transform: capitalize;
color: ${props=>`rgba(${props.theme.textRgba},0.6)`};
font-weight:600;
margin-bottom:1rem;
width:80%;
align-self:flex-start;





`
const ButtonContainer= styled.div`
width:80%;
align-self:flex-start;


`

const TypeWriterText = () => {
  return (
    <>
    <Title>
        Discover a new era of cool
        <Typewriter

        options={{
            autoStart:true,
            loop:true,
        }}
  onInit={(typewriter) => {
    typewriter.typeString('<span class="text-1">Minipages</span>')
    .pauseFor(2000)
    .deleteAll()
    .typeString('<span class="text-2">Sharable-Pages</span>')
   
    .start()
      
  }}
/>

   
    </Title>
     <SubTitle>Discover a new world of Webpages</SubTitle>
     <ButtonContainer>
     <Button text="Explore" link="#about"/>
     </ButtonContainer>
     </>
  )
}

export default TypeWriterText