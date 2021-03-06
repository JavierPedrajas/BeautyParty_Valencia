import React, { useState } from 'react'
import axios from 'axios'
import './packDetails.css'

import TycModal from '../../footer/tycModal/tycModal'
import { ButtonNext, ButtonPrev } from '../../../components/button/button'

const PackDetails = (props) => {

    const [modalOpen, setModalOpen] = useState('')
    const [termsSelected, setTermsSelected] = useState ('')
    const [details, setDetails] = useState(
        {
            location: '',
            name: '',
            people: '',
            date: '',
            hour: '',
            weekDay: ''
        }
    )


    let optionsHora

    let dateDateFormat = details.date ? new Date(details.date) : ''
    let dateSummaryFormat = details.date ? dateDateFormat.getDate() + '/' + (dateDateFormat.getMonth() + 1) + '/' + dateDateFormat.getFullYear() : ''

    const isDateValid = props.minDay <= details.date && props.sixMonths > details.date
   
    const allChecked = details.name && details.people && details.hour && details.location && termsSelected && isDateValid
        
    const whatsAppPack = () => {
        const nameString = encodeURIComponent('Hola, soy ' + details.name + '.')
        const packString = encodeURIComponent(props.whatsPack)
        const localizacion = details.location === 'Valencia' ? 'Paul Mitchell Valencia.' : 'Nou Calasanz Lliria.'
        const detallesString = encodeURIComponent('Seremos ' + details.people + ' personas.') + '%0A' + encodeURIComponent('El precio del pack es de ' + props.money + '€/persona') + '%0A' + encodeURIComponent('En las instalaciones de ' + localizacion) + '%0A' + encodeURIComponent('Nos gustaría reservar para el día ' + dateSummaryFormat + ' en horario de ' + details.hour + '.')
        

        window.open(`https://wa.me/34608055822?text=${nameString}%0A${packString}%0A${detallesString}%0AQuedamos+a+la+espera+de+confirmaci%C3%B3n+y+detalles.`)

        axios.put(`https://beautyparty-valencia.firebaseio.com/sesiones/${details.name + ' - ' + dateSummaryFormat.replaceAll('/', '-') + ' - Pack'}.json`, 
            {nombre: details.name,
            personas: details.people,
            localizacion: details.location,
            pack: props.pack,
            precioPack: props.money,
            importe: props.money * details.people,
            fecha: dateSummaryFormat,
            hora: details.hour
            })
            .then( res => {
            })
            .catch(err => {
            })
    }


    const updateLocationValencia = () => {
        setDetails({...details, location: 'Valencia'})
    }
    const updateLocationLliria = () => {
        setDetails({...details, location: 'Lliria'})
    }



    // Changes name stored
    const updateName = e => {
        setDetails({...details, name: e.target.value})
    }


    // Changes people selected
    const updatePeople = e => {
        setDetails({...details, people: parseInt(e.target.value)})
    }

    const updateHora = e => {
        setDetails({...details, hour: e.target.value})
    }

    const updateFecha = e => {
        const dateS = new Date(e.target.valueAsDate)
        setDetails({...details, date: e.target.value, weekDay: dateS.getDay()})
    }


  // PLUS AND MINUS HANDLER FOR PEOPLE NUMBER
  const handlePlus = () => {
    if (details.people < 4) {
        setDetails({...details, people: 4})
    } else if (details.people < 10) {
        setDetails({...details, people: parseInt(details.people) + 1})
    } else if (details.people > 10) {
        setDetails({...details, people: 10})
    }
}

const handleMinus = () => {
    if (details.people < 5) {
        setDetails({...details, people: 4})
    } else if (details.people > 10) {
        setDetails({...details, people: 10})
    } else if (details.people >= 5) {
        setDetails({...details, people: parseInt(details.people) - 1})
    }
}

    // Open and closes T&C modals
    const handleOpenModal = () => {
        setModalOpen('Open')
    }
    const handleCloseModal = () => {
        setModalOpen('')
    }

    // Stores when T&C are selected
    const storeTerms = (e) => {
        termsSelected ? setTermsSelected('') : setTermsSelected(e.target.value)
    }
    
    let showModal = modalOpen ? <TycModal closeModal={handleCloseModal}/> : ''

    // Options for schedule based on Weekday
    if (details.weekDay === 6) { // Saturday
        optionsHora = 
        <select name='hora-input' className='hour-field' onChange={updateHora} defaultValue={details.hour ? details.hour : ''}>
            <option value=''>Elige hora</option>
            <option value='14:00 - 16:00'>14:00 - 16:00</option>
            <option value='16:30 - 18:30'>16:30 - 18:30</option>
            <option value='19:00 - 21:00'>19:00 - 21:00</option>
            <option value='21:30 - 23:30'>21:30 - 23:30</option>
        </select>
    } else if (details.weekDay === 0) { // Sunday
        optionsHora = 
        <select name='hora-input' className='hour-field' onChange={updateHora} defaultValue={details.hour ? details.hour : ''}>
            <option value=''>Elige hora</option>
            <option value='09:00 - 11:00'>09:00 - 11:00</option>
            <option value='11:30 - 13:30'>11:30 - 13:30</option>
            <option value='14:00 - 16:00'>14:00 - 16:00</option>
            <option value='16:30 - 18:30'>16:30 - 18:30</option>
            <option value='19:00 - 21:00'>19:00 - 21:00</option>
            <option value='21:30 - 23:30'>21:30 - 23:30</option>
        </select>
    } else if (details.weekDay > 0 && details.weekDay < 6) { // Monday - Friday
        optionsHora = 
        <select name='hora-input' className='hour-field' onChange={updateHora} defaultValue={details.hour ? details.hour : ''}>
            <option value=''>Elige hora</option>
            <option value='20:30 - 22:30'>20:30 - 22:30</option>
        </select>
    } else if (!details.weekDay) { // No date selected
        optionsHora = 
        <select name='hora-input' className='hour-field'>
            <option>Por favor elige fecha</option>
        </select>
    }

    // Gift to be rendered depending on people number
    let regalo = ''
    let regaloClass = 'regalo'
    if (details.people < 6) {
        regalo = <div>6/p: {props.regalo} de regalo <br/> 10/p: Anfitrión incluido</div>
        regaloClass = 'regalo-not-selected'
    } else if (details.people >= 6 && details.people < 10) {
        regalo = `¡${props.regalo} de regalo!`
    } else if (details.people === 10) {
        regalo = `¡${props.regalo} y Anfitrión incluidos!`
    } else {
        regalo = ''
    }


    return (
        <div className='pack-section'>
            {showModal}
            <div className={props.classDetails}>
                <h2 className='party-header__text'>
                    {props.stringPack}
                </h2>
            </div>

            <div className='party-creator-presupuesto'>

            <label htmlFor='name' className='name-container'>
                <span className='name-tag'>¿Cómo te llamas?</span>
                <input type='text' name='name' className='name-field' placeholder='Tu nombre' 
                value={details.name} onChange={updateName}></input>
            </label>

            <label htmlFor='pplNumber' className='ppl-container-presupuesto'>
                <span className='name-tag'>¿Cuántas sois?</span>
                <div className='wrapper-gift'>
                    <div className="wrapper-packs">
                        <button className="minusminus" onClick={handleMinus}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z"/></svg>
                        </button>

                        <input type="number" className="num" placeholder='4-10' min="4" step="1"
                        id='pplNumber' name='pplNumber' value={details.people} onChange={updatePeople}/>

                        <button className="plusplus" onClick={handlePlus} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/></svg>
                        </button>
                    </div>
                    <div className={regaloClass}>
                        {regalo}
                    </div>
                </div>
            </label>


            <div className='fecha-input-presupuesto'>
                <label htmlFor='fecha-input' className='name-tag'>¿Para qué fecha?</label>
                <input className='date-field'  type='date' name='fecha-input' onChange={updateFecha} 
                defaultValue={details.date ? details.date : ''} min={props.minDay} max={props.sixMonths} placeholder='dd/mm/aaaa'/>
            </div>
            <div className='hora-input-presupuesto'>
                <label htmlFor='hora-input' className='name-tag'>¿A qué hora os viene bien?</label>
                {optionsHora}
            </div>

            <div className='location-container-presupuesto'>
                <span className='name-tag'>Elige localización</span>
                <div className='cities-selector'>
                    <div className='detalles-city-container' >
                        <label htmlFor='valencia' className="btn-radio" onClick={updateLocationValencia}>
                            <input type="radio" id='valencia' name='city' 
                            checked={details.location === 'Valencia'} 
                            onChange={updateLocationValencia} 
                            />
                            <svg width="20px" height="20px" viewBox="0 0 20 20">
                                <circle cx="10" cy="10" r="9"></circle>
                                <path d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z" className="inner"></path>
                                <path d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z" className="outer"></path>
                            </svg>
                            <span className='component-name'>Valencia</span>
                        </label>
                    </div>
                    <div className='detalles-city-container' >
                    <label htmlFor='lliria' className="btn-radio" onClick={updateLocationLliria}>
                        <input type="radio" id='lliria' name='city' 
                        checked={details.location === 'Lliria'} 
                        onChange={updateLocationLliria}
                        />
                        <svg width="20px" height="20px" viewBox="0 0 20 20">
                            <circle cx="10" cy="10" r="9"></circle>
                            <path d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z" className="inner"></path>
                            <path d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z" className="outer"></path>
                        </svg>
                        <span className='component-name'>Lliria</span>
                    </label>
                    </div>
                </div>
            </div>
            <div className='terms'>
                <div className='cbx-container'>
                    <input id="cbx" type="checkbox" onClick={storeTerms} name='terms' value='terms-accepted'/>
                    <label className="cbx" htmlFor="cbx">
                        <div className="flip">
                            <div className="front"></div>
                            <div className="back-presupuesto">
                                <svg width="16" height="14" viewBox="0 0 16 14">
                                    <path d="M2 8.5L6 12.5L14 1.5"></path>
                                </svg>
                            </div>
                        </div>
                    </label>
                </div>
                <span className='tyc'>He leido y acepto los <span className='buttonTyc' onClick={handleOpenModal}>Términos y Condiciones</span></span>
            </div>
            

            <div className='button-container'>
                <ButtonPrev clickedPrev={props.goToPortada}>Atrás</ButtonPrev>
                <ButtonNext clickedNext={whatsAppPack} isDisabled={!allChecked}>Reservar</ButtonNext>  
            </div>
                
            </div>
        </div>
    )
}

export default PackDetails