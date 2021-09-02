import React, { useState } from 'react'
import {Button} from './button'

const Buttons = ()=>{
    
    const handleClick = ()=>{
        alert('you have clicked me')
    }
    return(
        <div>
            <Button type='button' onClick={handleClick} buttonStyle='btn--solid' buttonSize='btn--large'>Use Current Location</Button>
            <Button type='button' onClick={handleClick} buttonStyle='btn--outline' buttonSize='btn--large'>Enter a different location</Button>
        </div>
    )
}

export default Buttons