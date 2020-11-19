import React from 'react'
import './partyPortada.css'
import { ButtonHero, ButtonNotHero } from '../../components/button/button'
import PartyPersonalizada from './PartyPersonalizada/PartyPersonalizada'
import PartyPresupuesto from './PartyPresupuesto/PartyPresupuesto'

import { v4 as uuidv4 } from 'uuid';

const PartyPortada = (props) =>{


    let partyRender

    let partyRef = 
    localStorage.getItem('partyRef') ? localStorage.getItem('partyRef') 
    : localStorage.setItem('partyRef', uuidv4())

    switch (props.stateParty) {
        case 'Portada':
            partyRender = 
            <div className='party-portada' id='party-portada'>
                <div className='portada-header'>
                    <h2 className='portada-header_text'>Elige el estilo de tu fiesta</h2>
                </div>
                <div className='portada-main'>
                    <h3 className='portada-main_text'>¡Hazla a tu manera y personaliza todos los detalles!</h3>
                    <ButtonHero isClicked={props.personalizada}>Como tú quieras</ButtonHero>
                </div>
                <div className='portada-secondary'>
                    <h3 className='portada-secondary_text'>Dinos vuestro presupuesto y os prepararemos algo increible</h3>
                    <ButtonNotHero isClicked={props.presupuesto}>Nosotros la organizamos</ButtonNotHero>
                </div>
            </div>
            break;
        case 'Personalizada':
            partyRender = <PartyPersonalizada goToPortada={props.portada} referencia={partyRef} today={props.today} sixMonths={props.sixMonths}/>
            break

        case 'Presupuesto':
            partyRender = <PartyPresupuesto goToPortada={props.portada} referencia={partyRef} today={props.today} sixMonths={props.sixMonths}/>
            break
    
        default:
            break;
    }



    return(
        partyRender
    )
}


export default PartyPortada