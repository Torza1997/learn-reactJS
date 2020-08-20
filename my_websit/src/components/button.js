import React from 'react';
import './button.css';

const STYLES =[
    'btn--primary',
    'btn--outline',
]
const SIZE =[
    'btn--medium',
    'btn--large',
]

export const Button = ({
    children,
    type,
    onClicks,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle:STYLES[0]
    const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize:SIZE[0]
    return(
        <button className = {`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClicks} type={type}>{children}</button>
    )
}