import React from 'react'
import './button.css'



// onClick={props.scrollTo}

export const ButtonHero = (props) => {
    return (
        <button className='button-hero' onClick={props.isClicked}>{props.children}</button>
    )
}

export const ButtonNotHero = (props) => {
    return (
        <button className='button-notHero' onClick={props.isClicked}>{props.children}</button>
    )
}

export const ButtonSmall = (props) => {
    return (
        <button className='button-small' onClick={props.isClicked}>{props.children}</button>
    )
}

export const ButtonNext = (props) => {
    return (
        <button className='button-next' onClick={props.clickedNext} disabled={props.isDisabled}>{props.children}</button>
    )
}

export const ButtonPrev = (props) => {
    return (
        <button className='button-prev' onClick={props.clickedPrev} disabled={props.isDisabled}>{props.children}</button>
    )
}