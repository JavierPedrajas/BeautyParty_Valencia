import React from 'react'
import './detalles.css'





const Detalles = (props) => {



    let optionsHora

    if (props.weekDay === 6) {
        optionsHora = 
        <select name='hora-input' className='hour-field' onChange={props.updateHora} defaultValue={props.hora ? props.hora : ''}>
            <option value=''>Elige hora</option>
            <option value='14:00 - 16:00'>14:00 - 16:00</option>
            <option value='16:30 - 18:30'>16:30 - 18:30</option>
            <option value='19:00 - 21:00'>19:00 - 21:00</option>
            <option value='21:30 - 23:30'>21:30 - 23:30</option>
        </select>
    } else if (props.weekDay === 0) {
        optionsHora = 
        <select name='hora-input' className='hour-field' onChange={props.updateHora} defaultValue={props.hora ? props.hora : ''}>
            <option value=''>Elige hora</option>
            <option value='09:00 - 11:00'>09:00 - 11:00</option>
            <option value='11:30 - 13:30'>11:30 - 13:30</option>
            <option value='14:00 - 16:00'>14:00 - 16:00</option>
            <option value='16:30 - 18:30'>16:30 - 18:30</option>
            <option value='19:00 - 21:00'>19:00 - 21:00</option>
            <option value='21:30 - 23:30'>21:30 - 23:30</option>
        </select>
    } else if (props.weekDay > 0 && props.weekDay < 6) {
        optionsHora = 
        <select name='hora-input' className='hour-field' onChange={props.updateHora} defaultValue={props.hora ? props.hora : ''}>
            <option value=''>Elige hora</option>
            <option value='20:30 - 22:30'>20:30 - 22:30</option>
        </select>
    } else if (!props.weekDay) {
        optionsHora = 
        <select name='hora-input' className='hour-field'>
            <option>Por favor elige fecha</option>
        </select>
    }


    let displayLocation

        if (props.city === 'Valencia') {
            displayLocation = 
                <div className='location-name-container'>
                    <p className='location-main-text'>
                        Paul Mitchell Valencia
                    </p>
                    <p className='location-secondary-text'>
                        (Gran Vía Ramón y Cajal 28, Valencia)
                    </p>
                </div>
            
        } else if (props.city === 'Lliria') {
            displayLocation = 
                <div className='location-name-container'>
                    <p className='location-main-text'>Nou Calasanz Lliria</p>
                    <p className='location-secondary-text'>(Carrer del Pla de l'Arc 21, Lliria)</p>
                </div>
            
        } else {
            displayLocation = 
                <div className='location-name-container'>
                    <p className='location-main-text'>Por favor, selecciona la localización del evento</p>
                </div>
        }



    

    return (
        <div className='detalles-container'>

            <label htmlFor='name' className='name-container'>
                <span className='name-tag'>¿Cómo te llamas?</span>
                <input type='text' name='name' className='name-field' placeholder='Tu nombre' 
                value={props.nam} onChange={props.updateNam}></input>
            </label>

            <label htmlFor='pplNumber' className='ppl-container'>
                <span className='name-tag'>¿Cuántas sois?</span>
                <div className="wrapper">
                    <button className="minusminus" onClick={props.menos}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z"/></svg>
                    </button>

                    <input type="number" className="num" placeholder='4-10' min="4" step="1"
                    id='pplNumber' name='pplNumber'  value={props.num} onChange={props.updateNum}/>

                    <button className="plusplus" onClick={props.mas} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/></svg>
                    </button>

                </div>
            </label>
            <div className='fecha-input'>
                <label htmlFor='fecha-input' className='name-tag'>¿Para qué fecha?</label>
                <input className='date-field'  type='date' name='fecha-input' onChange={props.updateFecha} 
                defaultValue={props.fecha ? props.fecha : ''} placeholder='dd/mm/aaa' min={props.today} max={props.sixMonths}/>
            </div>
            <div className='hora-input'>
                <label htmlFor='hora-input' className='name-tag'>¿A qué hora os viene bien?</label>
                {optionsHora}
            </div>

            <div className='location-container'>
                <span className='name-tag'>Elige localización</span>
                <div className='cities-selector'>
                    <div className='detalles-city-container' >
                        <label htmlFor='valencia' className="btn-radio" onClick={props.updateCityValencia}>
                            <input type="radio" id='valencia' name='city' 
                            checked={props.city === 'Valencia'} 
                            onChange={props.updateCityValencia} 
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
                    <label htmlFor='lliria' className="btn-radio" onClick={props.updateCityLliria}>
                        <input type="radio" id='lliria' name='city' 
                        checked={props.city === 'Lliria'} 
                        onChange={props.updateCityLliria}
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
            {displayLocation}
        </div>
    )
}

export default Detalles