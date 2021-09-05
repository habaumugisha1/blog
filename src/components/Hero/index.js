import React from 'react'
import Logo from '../Logo'
import NavBar from '../NavBar'
import Card from '../UI/Card'
import './style.css'
const Hero = () =>{
    return (
        <div>
            <Card>
            <div style={{padding:'50px 0'}}>
                <Logo />
            </div>
            <NavBar />
            </Card>
        </div>
    )
}

export default Hero;
