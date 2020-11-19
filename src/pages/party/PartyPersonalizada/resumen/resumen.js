import React, {useState} from 'react'
import './resumen.css'
import { SvgDot } from '../../../../assets/svg/svg'
import TycModal from '../../../footer/tycModal/tycModal'

// import Separator from '../../../UI/separator/separator'

const Resumen = (props) => {

    const [modalOpen, setModalOpen] = useState('')

    const arrayPelo = props.peloS.split(',')
    const arrayEsteticaCara = props.esteticaCS.split(',')
    const arrayEsteticaUñas = props.esteticaUS.split(',')
    const arrayComplementosComida = props.complementosCS.split(',')
    const arrayComplementosBebida = props.complementosBS.split(',')
    const arrayComplementosTodo = props.complementosTS.split(',')
    const arrayExtrasAnfitrion = props.extrasAS.split(',')
    const arrayExtrasEspectaculo = props.extrasES.split(',')


    let displayComplementos = ''
    if (!props.complementosTS) {
        displayComplementos = 
            <div>
                <div className='checkout-component'>
                    <div className='checkout-item'>
                        <div className='dot-container'>
                            <SvgDot/>
                        </div>
                        <div className='checkout-item-name'>
                            {arrayComplementosComida[0]}
                        </div>
                        <div className='checkout-price'>
                            {arrayComplementosComida[1]}€
                            {/* {(Math.floor(arrayComplementosComida[1]*.79 * 100) / 100).toFixed(2)}€ */}
                        </div>
                    </div>
                    <div className='checkout-explanation'>
                        {/* {arrayComplementosComida[2]} */}
                    </div>
                </div>
                <div className='checkout-component'>
                    <div className='checkout-item'>
                        <div className='dot-container'>
                            <SvgDot/>
                        </div>
                        <div className='checkout-item-name'>
                            {arrayComplementosBebida[0]}
                        </div>
                        <div className='checkout-price'>
                            {arrayComplementosBebida[1]}€
                        </div>
                    </div>
                    <div className='checkout-explanation'>
                        {/* {arrayComplementosBebida[2]} */}
                    </div>
                </div>

            </div>
    } else {
        displayComplementos =
            <div className='checkout-component'>
                <div className='checkout-item'>
                    <div className='dot-container'>
                        <SvgDot/>
                    </div>
                    <div className='checkout-item-name'>
                        {arrayComplementosTodo[0]}
                    </div>
                    <div className='checkout-price'>
                        {arrayComplementosTodo[1]}€
                    </div>
                </div>
                <div className='checkout-explanation'>
                    {/* {arrayComplementosTodo[2]} */}
                </div>
            </div>
    }

    let displayExtras = ''
    if (props.extrasAS && props.extrasES) {
        displayExtras = 
            <div>
                <div className='checkout-component'>
                    <div className='checkout-item'>
                        <div className='dot-container'>
                            <SvgDot/>
                        </div>
                        <div className='checkout-item-name'>
                            {arrayExtrasAnfitrion[0]}
                        </div>
                        <div className='checkout-price'>
                            {arrayExtrasAnfitrion[1]}€
                        </div>
                    </div>
                    <div className='checkout-explanation'>
                        {/* {arrayExtrasAnfitrion[2]} */}
                    </div>
                </div>
                <div className='checkout-component'>
                    <div className='checkout-item'>
                        <div className='dot-container'>
                            <SvgDot/>
                        </div>
                        <div className='checkout-item-name'>
                            {arrayExtrasEspectaculo[0]}
                        </div>
                        <div className='checkout-price'>
                            {arrayExtrasEspectaculo[1]}€
                        </div>
                    </div>
                    <div className='checkout-explanation'>
                        {/* {arrayExtrasEspectaculo[2]} */}
                    </div>
                </div>
            </div>
    } else if (!props.extrasAS && props.extrasES) {
        displayExtras =
            <div className='checkout-component'>
                <div className='checkout-item'>
                    <div className='dot-container'>
                        <SvgDot/>
                    </div>
                    <div className='checkout-item-name'>
                        {arrayExtrasEspectaculo[0]}
                    </div>
                    <div className='checkout-price'>
                        {arrayExtrasEspectaculo[1]}€
                    </div>
                </div>
                <div className='checkout-explanation'>
                    {/* {arrayExtrasEspectaculo[2]} */}
                </div>
            </div>
    } else if (props.extrasAS && !props.extrasES) {
        displayExtras = 
            <div className='checkout-component'>
                <div className='checkout-item'>
                    <div className='dot-container'>
                        <SvgDot/>
                    </div>
                    <div className='checkout-item-name'>
                        {arrayExtrasAnfitrion[0]}
                    </div>
                    <div className='checkout-price'>
                        {arrayExtrasAnfitrion[1]}€
                    </div>
                </div>
                <div className='checkout-explanation'>
                    {/* {arrayExtrasAnfitrion[2]} */}
                </div>
            </div>
    }

    
    const handleOpenModal = () => {
        setModalOpen('Open')
    }
    
    const handleCloseModal = () => {
        setModalOpen('')
    }
    
    let showModal = modalOpen ? <TycModal closeModal={handleCloseModal}/> : ''

    const locString = props.city === 'Valencia' ? 'Paul Mitchell Valencia' : 'Nou Calasanz Lliria'

    return (
        <div className='resumen'>
            {showModal}
            <div className='intro-resumen'>
                {props.nam},<br/> aquí tienes el resumen de tu fiesta:
            </div>
            <div className='checkout-list'>
                <div className='checkout-component'>
                    <div className='checkout-item'>
                        <div className='dot-container'>
                            <SvgDot/>
                        </div>
                        <div className='checkout-item-name'>
                            {arrayPelo[0]}
                        </div>
                        <div className='checkout-price'>
                            {arrayPelo[1]}€
                        </div>
                    </div>
                    <div className='checkout-explanation'>
                        {/* {arrayPelo[2]} */}
                    </div>
                </div>
                <div className='checkout-component'>
                    <div className='checkout-item'>
                        <div className='dot-container'>
                            <SvgDot/>
                        </div>
                        <div className='checkout-item-name'>
                            {arrayEsteticaCara[0]}
                        </div>
                        <div className='checkout-price'>
                            {arrayEsteticaCara[1]}€
                        </div>
                    </div>
                    <div className='checkout-explanation'>
                        {/* {arrayEsteticaCara[2]} */}
                    </div>
                </div>
                <div className='checkout-component'>
                    <div className='checkout-item'>
                        <div className='dot-container'>
                            <SvgDot/>
                        </div>
                        <div className='checkout-item-name'>
                            {arrayEsteticaUñas[0]}
                        </div>
                        <div className='checkout-price'>
                            {arrayEsteticaUñas[1]}€
                        </div>
                    </div>
                    <div className='checkout-explanation'>
                        {/* {arrayEsteticaUñas[2]} */}
                    </div>
                </div>
                {displayComplementos}
                {displayExtras}
                <div className='checkout-component'>
                    <div className='checkout-item'>
                        <div className='dot-container'>
                            <SvgDot/>
                        </div>
                        <div className='checkout-item-name'>
                            {props.num} amigas
                        </div>
                        <div className='checkout-price'>
                            
                        </div>
                    </div>
                    <div className='checkout-explanation'>

                    </div>
                </div>
                <div className='checkout-component'>
                    <div className='checkout-item'>
                        <div className='dot-container'>
                            <SvgDot/>
                        </div>
                        <div className='checkout-item-name'>
                            {locString}
                        </div>
                        <div className='checkout-price'>
                            
                        </div>
                    </div>
                    <div className='checkout-explanation'>
                        
                    </div>
                </div>
            </div>
            <hr></hr>
            <hr></hr>

            <div className='totales'>
                <div className='subtotal'>
                    <div>
                        Subtotal:   
                    </div>
                    <div className='subtotal-price'>
                        {props.subtotal} €/persona
                    </div>
                </div> 
                <div className='subtotal'>
                    <div>
                        Subtotal sin IVA:
                    </div>
                    <div className='subtotal-price'>
                        {(Math.floor(props.subtotal*.79 * 100) / 100).toFixed(2)} €/persona
                    </div>
                </div>
                <hr></hr>
                <div className='subtotal'>
                    <div>
                        Total:
                    </div>
                    <div className='subtotal-price'>
                        {props.subtotal * props.num} €
                    </div>
                </div>
            </div>
            <div className='terms'>
                <div className='cbx-container'>
                    <input id="cbx" type="checkbox" onClick={props.handleStoreSelected} name='terms' value='terms-accepted' defaultChecked={props.isSelected}/>
                    <label className="cbx" htmlFor="cbx">
                        <div className="flip">
                            <div className="front"></div>
                            <div className="back">
                                <svg width="16" height="14" viewBox="0 0 16 14">
                                    <path d="M2 8.5L6 12.5L14 1.5"></path>
                                </svg>
                            </div>
                        </div>
                    </label>
                </div>
                <span className='tyc'>He leido y acepto los <span className='buttonTyc' onClick={handleOpenModal}>Términos y Condiciones</span></span>
            </div>
            {/* <div className='explicaciones'>
                <div className='explicacion-1'>
                    Al pulsar en "Reservar" nos escribirás un mensaje de WhatsApp con los detalles de tu fiesta
                </div>
                <div className='explicacion-2'>
                    Te contactaremos para concretar día y hora <br/> ¿Alguna duda? ¡Pregúntanos lo que quieras!
                </div>
            </div> */}
    
        </div>
    )
    
}

export default Resumen