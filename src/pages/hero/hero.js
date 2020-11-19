import React from 'react'
import './hero.css'
import { ButtonHero } from '../../components/button/button'

const hero = (props) => {

    return (
        <div className='hero'>
            <div className='hero-textbox'>
                <h1 className='title-main'>Bienvenida a tu <span>Beauty Party</span></h1>
                <h2 className='motto'> Tú imaginas la fiesta, nosotros la montamos</h2>
                <div className='button-hero-container'>
                    <ButtonHero isClicked={props.goToParty}>¡Crea tu fiesta!</ButtonHero>
                </div>
            </div>
        </div>
    )
}

export default hero