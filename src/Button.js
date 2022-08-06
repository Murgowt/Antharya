 import React from 'react'
 import './components/Navbar.css'

 const STYLES = ['btn--primary','btn--outline']

 const SIZES = ['btn--medium','btn--large','btn--mobile','btn--wide']

 const COLOR = ['primary','blue','red','green']

 export const Button =({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    buttonColor
 }) =>{
    const checkbuttonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZES[0]
    const checkButtonColor = STYLES.includes(buttonColor) ? buttonColor : null
    return(
        <button className={`btn ${checkbuttonStyle} ${checkbuttonSize} ${checkButtonColor}`} onClick={onClick} type={type}>{children}</button>
    )
 }