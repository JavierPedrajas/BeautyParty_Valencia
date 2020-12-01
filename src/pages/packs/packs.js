import React from 'react'
import './packs.css'

import { ButtonSmall } from '../../components/button/button'
import PackDetails from './packDetails/packDetails'
import { SvgArrowRight } from '../../assets/svg/svg'

const Packs = (props) => {

    let packString // Defines title of pack to be rendered
    let renderPack // Defines content of pack to be rendered
    let whatsPack // Defines intro of the WhattsApp message to be sent


    // Change of variables according to the pack to be rendered
    switch (props.currentPack) {
        case 'Portada':
            renderPack =
                <div className='packs-section' id='packs'>
                    <div className='packs-section__container' id='pack-dia'>
                        <h3 className='pack-section__container-title'>
                            Pack Día
                        </h3>
                        <div className='packs-section__container-1' onClick={props.handleDia}>
                            <div className='packs-section__container__textbox'>
                                <span>
                                    Este pack incluye:
                                </span>
                                <br />
                        Peinado en Trenza, Maquillaje de Día, Esmaltado de Día, Canapés Deluxe, Refrescos y Espectáculo
                    </div>
                            <div className='packs-section__container__pricebutton'>
                                <div className='packs-section__container__pricebutton-price'>
                                    56€/persona
                        </div>
                                <div className='packs-section__container__pricebutton-button'>
                                    <ButtonSmall isClicked={props.handleDia}><SvgArrowRight /></ButtonSmall>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='packs-section__container' id='pack-cumple'>
                        <h3 className='pack-section__container-title'>
                            Pack Cumpleaños
                </h3>
                        <div className='packs-section__container-2' onClick={props.handleCumple}>
                            <div className='packs-section__container__textbox'>
                                <span>
                                    Este pack incluye:
                        </span>
                                <br />
                        Peinado en Seco, Maquillaje, Esmaltado, Frivolidades, Copa de Cava y Espectáculo
                    </div>
                            <div className='packs-section__container__pricebutton'>
                                <div className='packs-section__container__pricebutton-price'>
                                    58€/persona
                        </div>
                                <div className='packs-section__container__pricebutton-button'>
                                    <ButtonSmall isClicked={props.handleCumple}><SvgArrowRight /></ButtonSmall>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='packs-section__container' id='pack-noche'>
                        <h3 className='pack-section__container-title'>
                            Pack Noche
                </h3>
                        <div className='packs-section__container-3' onClick={props.handleNoche}>
                            <div className='packs-section__container__textbox'>
                                <span>
                                    Este pack incluye:
                        </span>
                                <br />
                        Peinado Elegante, Maquillaje de Noche, Canapés Deluxe, Refrescos, Cava y Espectáculo
                    </div>
                            <div className='packs-section__container__pricebutton'>
                                <div className='packs-section__container__pricebutton-price'>
                                    68€/persona
                        </div>
                                <div className='packs-section__container__pricebutton-button'>
                                    <ButtonSmall isClicked={props.handleNoche}><SvgArrowRight /></ButtonSmall>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            break
        case 'dia':
            whatsPack = 'He seleccionado un Pack Día con los siguientes detalles:'
            packString = 'Rellena estos datos y disfruta tu Pack de Día'
            renderPack = <PackDetails classDetails='pack-dia__details-container'
                stringPack={packString} goToPortada={props.handlePortada} whatsPack={whatsPack} money={56}
                pack='dia' minDay={props.today} regalo={'Copa de Cava'} sixMonths={props.sixMonths} />
            break
        case 'cumple':
            whatsPack = 'He seleccionado un Pack Cumpleaños con los siguientes detalles:'
            packString = 'Rellena estos datos y disfruta tu Pack Cumpleaños'
            renderPack = <PackDetails classDetails='pack-cumple__details-container'
                stringPack={packString} goToPortada={props.handlePortada} whatsPack={whatsPack} money={58}
                pack='cumple' minDay={props.today} regalo={'Tarta de Cumpleaños'} sixMonths={props.sixMonths} />
            break
        case 'noche':
            whatsPack = 'He seleccionado un Pack Noche con los siguientes detalles:'
            packString = 'Rellena estos datos y disfruta tu Pack de Noche'
            renderPack = <PackDetails classDetails='pack-noche__details-container'
                stringPack={packString} goToPortada={props.handlePortada} whatsPack={whatsPack} money={68}
                pack='noche' minDay={props.today} regalo={'Copa de Cava'} sixMonths={props.sixMonths} />
            break
        default: renderPack = ''
    }


    return (
        renderPack
    )
}

export default Packs