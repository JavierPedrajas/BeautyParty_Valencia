import React, { useEffect, useState} from 'react'
import './PartyPersonalizada.css'
import axios from 'axios'


import { SvgPelo, SvgEstetica, SvgComplementos, SvgDetalles, SvgExtras, SvgResumen} from '../../../assets/svg/svg'

import LoadingSpinner from '../../../UI/loadingSpinner/loadingSpinner'

import Pelo from './pelo/pelo'
import { EsteticaCara, EsteticaUñas } from './estetica/estetica'
import { ComplementosBebida, ComplementosComida, ComplementosTodo } from './complementos/complementos'
import Detalles from './detalles/detalles'
import { ExtrasAnfitrion, ExtrasEspectaculo } from './extras/extras'
import Resumen from './resumen/resumen'

import { ButtonPrev, ButtonNext } from '../../../components/button/button'


const PartyPersonalizada = (props) => {

        // STATE DECLARATION //

    const [currParty, setCurrParty] = useState('loading')

    const [pelo, setPelo] = useState();
    const [esteticaCara, setEsteticaCara] = useState();
    const [esteticaUñas, setEsteticaUñas] = useState();
    const [complementosComida, setComplementosComida] = useState();
    const [complementosBebida, setComplementosBebida] = useState();
    const [complementosTodo, setComplementosTodo] = useState();
    const [extrasAnfitrion, setExtrasAnfitrion] = useState();
    const [extrasEspectaculo, setExtrasEspectaculo] = useState();


    const [location, setLocation] = useState('');
    const [name, setName] = useState('')
    const [people, setPeople] = useState('')
    const [date, setDate] = useState('')
    const [hour, setHour] = useState('')

    const [weekDay, setWeekDay] = useState()



    const [peloSelected, setPeloSelected] = useState('');

    const [esteticaCaraSelected, setEsteticaCaraSelected] = useState('');
    const [esteticaUñasSelected, setEsteticaUñasSelected] = useState('');

    const [complementosBebidaSelected, setComplementosBebidaSelected] = useState('');
    const [complementosComidaSelected, setComplementosComidaSelected] = useState('');
    const [complementosTodoSelected, setComplementosTodoSelected] = useState('');

    const [extrasAnfitrionSelected, setExtrasAnfitrionSelected] = useState('');
    const [extrasEspectaculoSelected, setExtrasEspectaculoSelected] = useState('');

    const [termsSelected, setTermsSelected] = useState ('')



    // DEMO TO TEST RESUMEN
    // const [location, setLocation] = useState('Valencia');
    // const [name, setName] = useState('Javier Pedrajas')
    // const [people, setPeople] = useState('7')
    // const [peloSelected, setPeloSelected] = useState('Peinado en seco,10,blablabla');
    // const [esteticaCaraSelected, setEsteticaCaraSelected] = useState('Limpieza Facial,10');
    // const [esteticaUñasSelected, setEsteticaUñasSelected] = useState('Manicura Express,10');
    // const [complementosBebidaSelected, setComplementosBebidaSelected] = useState('');
    // const [complementosComidaSelected, setComplementosComidaSelected] = useState('');
    // const [complementosTodoSelected, setComplementosTodoSelected] = useState('Catering de la Casa,10');
    // const [extrasAnfitrionSelected, setExtrasAnfitrionSelected] = useState('Anfitrion,10');
    // const [extrasEspectaculoSelected, setExtrasEspectaculoSelected] = useState('');



        // VARIABLE DECLARATION //



    let header
    let nextPage
    let prevPage
    let displayArray
    let disableNext

    let dateDateFormat = date ? new Date(date) : ''
    let dateSummaryFormat = date ? dateDateFormat.getDate() + '/' + (dateDateFormat.getMonth() + 1) + '/' + dateDateFormat.getFullYear() : ''


    let whatIsSelectedPelo

    let whatIsSelectedCara
    let whatIsSelectedUñas

    let whatIsSelectedBebida
    let whatIsSelectedComida
    let whatIsSelectedTodo

    let whatIsSelectedAnfitrion
    let whatIsSelectedEspectaculo

    const totalPersona = 
    Math.round((
    parseInt(peloSelected.split(',')[1]) + 
    parseInt(esteticaCaraSelected.split(',')[1]) + 
    parseInt(esteticaUñasSelected.split(',')[1]) +
    (complementosTodoSelected ? parseInt(complementosTodoSelected.split(',')[1]) : 
    parseInt(complementosBebidaSelected.split(',')[1]) +
    parseInt(complementosComidaSelected.split(',')[1])) + 
    (extrasAnfitrionSelected ? parseInt(extrasAnfitrionSelected.split(',')[1]) : 0) +
    (extrasEspectaculoSelected ? parseInt(extrasEspectaculoSelected.split(',')[1]) : 0)) * 100) / 100
    
    // GET ITEMS FROM FIREBASE

    useEffect ( () => {
        axios.get("https://beautyparty-valencia.firebaseio.com/.json")
        .then( res => {
            setPelo(res.data.pelo)
            setCurrParty('pelo')
            setEsteticaCara(res.data.esteticaCara)
            setEsteticaUñas(res.data.esteticaUñas)
            setComplementosBebida(res.data.complementosBebida)
            setComplementosComida(res.data.complementosComida)
            setComplementosTodo(res.data.complementosTodo)
            setExtrasAnfitrion(res.data.extrasAnfitrion)
            setExtrasEspectaculo(res.data.extrasEspectaculo)

        })
        .catch(err => {
            console.log(err)
        })
    }, []);


    // Changes city selected

    const updateLocationValencia = () => {
        setLocation('Valencia')
    }
    const updateLocationLliria = () => {
        setLocation('Lliria')
    }



    // Changes name stored
    const updateName = (e) => {
        setName(e.target.value)
    }


    // Changes people selected
    const updatePeople = (e) => {
        setPeople(parseInt(e.target.value))
    }

    const updateHora = (e) => {
        setHour(e.target.value)
    }

     const updateFecha = (e) => {
        const dateS = new Date(e.target.valueAsDate)
        setWeekDay(dateS.getDay())
        setDate(e.target.value)
    }

    // PLUS AND MINUS HANDLER FOR PEOPLE NUMBER
    const handlePlus = () => {
        if (people < 4) {
            setPeople(4)
        } else if (people < 10) {
            setPeople(parseInt(people) + 1)
        } else if (people > 10) {
            setPeople(10)
        }
    }
    
    const handleMinus = () => {
        if (people < 5) {
            setPeople(4)
        } else if (people > 10) {
            setPeople(10)
        } else if (people >= 5) {
            setPeople(parseInt(people) - 1)
        } 
    }

    const sendWhatsapp = () => {
        // %0A SALTO DE LINEA
        // %E2%86%92 FLECHA A DERECHA
        const nameString = encodeURIComponent('Hola, soy ' + name + '.')
        const peloString = encodeURIComponent('- ' + peloSelected.split(',')[0] + ' → ' + peloSelected.split(',')[1] + '€')
        const esteticaUñasString = encodeURIComponent('- ' + esteticaUñasSelected.split(',')[0] + ' → ' + esteticaUñasSelected.split(',')[1] + '€')
        const esteticaCaraString = encodeURIComponent('- ' + esteticaCaraSelected.split(',')[0] + ' → ' + esteticaCaraSelected.split(',')[1] + '€')
        const complementosString = complementosTodoSelected === '' ? 
        encodeURIComponent('- ' + complementosBebidaSelected.split(',')[0] + ' → ' + complementosBebidaSelected.split(',')[1] + '€') + '%0A' + 
        encodeURIComponent('- ' + complementosComidaSelected.split(',')[0] + ' → ' + complementosComidaSelected.split(',')[1] + '€') :
        encodeURIComponent('- ' + complementosTodoSelected.split(',')[0] + ' → ' + complementosTodoSelected.split(',')[1] + '€')
        const extrasString = 
        (extrasAnfitrionSelected !== '' ? 
        encodeURIComponent('- ' + extrasAnfitrionSelected.split(',')[0] + ' → ' + extrasAnfitrionSelected.split(',')[1] + '€') + '%0A' : '') + 
        (extrasEspectaculoSelected !== '' ? encodeURIComponent('- ' + extrasEspectaculoSelected.split(',')[0] + ' → ' + extrasEspectaculoSelected.split(',')[1] + '€') : '')
        const totalString = encodeURIComponent('El total de la fiesta es de ' + totalPersona*people + '€')
        const localizacion = location === 'Valencia' ? 'Paul Mitchell Valencia' : 'Nou Calasanz Lliria'
        const detallesString = encodeURIComponent('Seremos ' + people + ' personas.') + '%0A' + encodeURIComponent('En las instalaciones de ' + localizacion) + '%0A' + encodeURIComponent('Nos gustaría reservar para el día ' + dateSummaryFormat + ' en horario de ' + hour + '.')
        

        window.open(`https://wa.me/34608055822?text=${nameString}%0AEste%20es%20el%20resumen%20de%20mi%20fiesta%3A%0A${peloString}%0A${esteticaUñasString}%0A${esteticaCaraString}%0A${complementosString}%0A${extrasString}%0A${totalString}%0A${detallesString}%0AQuedamos+a+la+espera+de+confirmaci%C3%B3n+y+detalles`)

        axios.put(`https://beautyparty-valencia.firebaseio.com/sesiones/${name + ' - ' + dateSummaryFormat.replaceAll('/', '-') + ' - Personalizada'}.json`, 
            {pelo: peloString,
            referencia: props.referencia,
            esteticaUñas: esteticaUñasString,
            esteticaCara: esteticaCaraString,
            complementos: complementosTodoSelected === '' ? complementosComidaSelected +  complementosBebidaSelected : complementosTodoSelected,
            nombre: name,
            personas: people,
            localizacion: location,
            extras: extrasAnfitrionSelected + extrasEspectaculoSelected,
            importe: totalPersona * people,
            fecha: dateSummaryFormat,
            hora: hour
            })
            .then( res => {
            })
            .catch(err => {
            })

    }

    // UPDATES STATE TO RENDER NEXT PAGE
    const moveToNextPage = () => {
        currParty === 'resumen' ? sendWhatsapp() : setCurrParty(nextPage)
    }

    // UPDATES STATE TO RENDER PREV PAGE
    const moveToPrevPage = () => {
        currParty === 'pelo' || currParty === 'loading' ? props.goToPortada() : setCurrParty(prevPage)
    }

    


    // STORES THE SELECTED VALUE
    const storeSelectedValue = (e) => {
        const currentObject = e.target.value

        switch (e.target.name) {
            case "pelo":
                setPeloSelected(currentObject)
                break
            case "esteticaCara":
                setEsteticaCaraSelected(currentObject)
                break
            case "esteticaUñas":
                setEsteticaUñasSelected(currentObject)
                break
            case "complementosBebida":
                setComplementosBebidaSelected(currentObject)
                setComplementosTodoSelected('')
                break
            case "complementosComida":
                setComplementosComidaSelected(currentObject)
                setComplementosTodoSelected('')
                break
            case "complementosTodo":
                setComplementosTodoSelected(currentObject)
                setComplementosComidaSelected('')
                setComplementosBebidaSelected('')
                break
            case "extrasAnfitrion":
                extrasAnfitrionSelected ? setExtrasAnfitrionSelected('') : setExtrasAnfitrionSelected(currentObject)
                break
            case "extrasEspectaculo":
                extrasEspectaculoSelected ? setExtrasEspectaculoSelected('') : setExtrasEspectaculoSelected(currentObject)
                break
            case "terms":
                termsSelected ? setTermsSelected('') : setTermsSelected(currentObject)
                break
            default: console.log('error')
        }
    }


    // SWITCH STATEMENT TO SET DIFFERENT PARAMETERS
    switch (currParty) {
        case 'loading':
            disableNext = true
        break
        case 'pelo': 
        header = '¿Qué hacemos con vuestro pelo?' // Header for the section
        prevPage = '' // Change to previous page
        nextPage = 'estetica' // Change to next page
        disableNext = peloSelected ? false : true // is next disabled?
        whatIsSelectedPelo = peloSelected ? peloSelected.split(',')[0] : '' // To check if radio was proviously selected
        break;

        case 'estetica': 
        header = 'Maquillaje, manicura...¡Tú mandas!'
        prevPage = 'pelo'
        nextPage = 'complementos'
        disableNext = esteticaCaraSelected && esteticaUñasSelected ? false : true
        whatIsSelectedCara = esteticaCaraSelected ? esteticaCaraSelected.split(',')[0] : ''
        whatIsSelectedUñas = esteticaUñasSelected ? esteticaUñasSelected.split(',')[0] : ''
        break;

        case 'complementos': 
        header = 'No es una buena fiesta sin un buen picoteo'
        prevPage = 'estetica'
        nextPage = 'detalles'
        disableNext = (complementosBebidaSelected && complementosComidaSelected) || complementosTodoSelected ? false : true
        whatIsSelectedBebida = complementosBebida ? complementosBebidaSelected.split(',')[0] : ''
        whatIsSelectedComida = complementosComida ? complementosComidaSelected.split(',')[0] : ''
        whatIsSelectedTodo = complementosTodo ? complementosTodoSelected.split(',')[0] : ''
        break;

        case 'detalles': 
        header = 'Necesitamos algún detallito más'
        prevPage = 'complementos'
        nextPage = 'extras'
        disableNext = name && people >= 4 && people <= 10 && location && date && hour ? false : true
        break;

        case 'extras':
        header = 'Solo nos falta poner la guinda...'
        prevPage = 'detalles'
        nextPage = 'resumen'
        disableNext = false
        whatIsSelectedAnfitrion = extrasAnfitrion ? extrasAnfitrionSelected.split(',')[0] : ''
        whatIsSelectedEspectaculo = extrasEspectaculo ? extrasEspectaculoSelected.split(',')[0] : ''
        break;

        case 'resumen': 
        header = '¡Ya está! Revisa tu fiesta'
        prevPage = 'extras'
        nextPage = ''
        disableNext = termsSelected ? false : true
        break;
        
        default: header = 'Cargando fiesta...'
    }

    const esteticaDisplayArray = 
    <div className='estetica-container'>
        <span className='esteticaCara'>Estética facial</span>
        <EsteticaCara 
            propsEsteticaCara={esteticaCara}
            handleStoreSelected={storeSelectedValue}
            isSelected={whatIsSelectedCara}
        />

        <span className='esteticaUñas'>Manicura</span>
        <EsteticaUñas
            propsEsteticaUñas={esteticaUñas}
            handleStoreSelected={storeSelectedValue}
            isSelected={whatIsSelectedUñas}
        />
    </div>

    const complementosDisplayArray = 
    <div className='estetica-container'>
        <span className='esteticaCara'>¿Algo de picar?</span>
        <ComplementosComida 
            propsComplementosComida={complementosComida}
            handleStoreSelected={storeSelectedValue}
            isSelected={whatIsSelectedComida}
        />

        <span className='esteticaUñas'>¿Qué quereis beber?</span>
        <ComplementosBebida 
            propsComplementosBebida={complementosBebida} 
            handleStoreSelected={storeSelectedValue}
            isSelected={whatIsSelectedBebida}
        />

        <span className='esteticaUñas'>¡Nosotros nos encargamos!</span>
        <ComplementosTodo 
            propsComplementosTodo={complementosTodo} 
            handleStoreSelected={storeSelectedValue}
            isSelected={whatIsSelectedTodo}
        />
    </div>

    const extrasDisplayArray =
    <div>
        <ExtrasAnfitrion 
        handleStoreSelected={storeSelectedValue}
        propsExtrasAnfitrion={extrasAnfitrion}
        isSelected={whatIsSelectedAnfitrion}/>

        <ExtrasEspectaculo 
        handleStoreSelected={storeSelectedValue}
        propsExtrasEspectaculo={extrasEspectaculo}
        isSelected={whatIsSelectedEspectaculo}/>
    </div>


    // SWITCH STATEMENT TO DETERMINE PAGE TO BE RENDERED
    switch (currParty) {
        case 'loading':
            displayArray = <LoadingSpinner/>
            break
        case 'pelo':
            displayArray = pelo ? <Pelo 
            propsPelo={pelo} 
            handleStoreSelected={storeSelectedValue}
            isSelected={whatIsSelectedPelo}/> : ''
            break
            
        case 'estetica':
            displayArray = esteticaCara && esteticaUñas ? esteticaDisplayArray : ''
            break

        case 'complementos':
            displayArray = complementosBebida && complementosComida ? complementosDisplayArray : ''
            break

        case 'detalles':
            displayArray = <Detalles 
            city={location} updateCityValencia={updateLocationValencia} updateCityLliria={updateLocationLliria}
            num={people} mas={handlePlus} menos={handleMinus} updateNum={updatePeople}
            nam={name} updateNam={updateName}
            fecha={date} updateFecha={updateFecha} weekDay={weekDay}
            hora={hour} updateHora={updateHora}
            today={props.today}
            sixMonths={props.sixMonths}
            />
        break

        case 'extras':
            displayArray = extrasAnfitrion && extrasEspectaculo ? extrasDisplayArray : ''
            break

        case 'resumen':
            displayArray = <Resumen 
            peloS={peloSelected} 
            esteticaCS={esteticaCaraSelected} esteticaUS={esteticaUñasSelected} 
            complementosCS={complementosComidaSelected} complementosBS={complementosBebidaSelected} complementosTS={complementosTodoSelected}
            city={location} num={people} nam={name} 
            extrasAS={extrasAnfitrionSelected} extrasES={extrasEspectaculoSelected}
            subtotal={totalPersona} handleStoreSelected={storeSelectedValue}
            isSelected={termsSelected}
            />
            break
        

        default: displayArray = 'error'
    }


    
    let stepPelo = 'step'
    if (currParty === 'pelo') {
        stepPelo = 'step-selected'
    } else if (peloSelected) {
        stepPelo = 'step-completed'
    }

    let stepEstetica = 'step'
    if (currParty === 'estetica') {
        stepEstetica = 'step-selected'
    } else if (esteticaCaraSelected && esteticaUñasSelected) {
        stepEstetica = 'step-completed'
    } else if (peloSelected) {
        stepEstetica = 'step-selectable'
    }

    let stepComplementos = 'step'
    if (currParty === 'complementos') {
        stepComplementos = 'step-selected'
    } else if ((complementosBebidaSelected && complementosComidaSelected) || complementosTodoSelected) {
        stepComplementos = 'step-completed'
    } else if (esteticaCaraSelected && esteticaUñasSelected) {
        stepComplementos = 'step-selectable'
    }

    let stepDetalles = 'step'
    if (currParty === 'detalles') {
        stepDetalles = 'step-selected'
    } else if (name && people && location && date && hour) {
        stepDetalles = 'step-completed'
    } else if ((complementosBebidaSelected && complementosComidaSelected) || complementosTodoSelected) {
        stepDetalles = 'step-selectable'
    }

    let stepExtras = 'step'
    if (currParty === 'extras') {
        stepExtras = 'step-selected'
    } else if (extrasAnfitrionSelected || extrasEspectaculoSelected) {
        stepExtras = 'step-completed'
    } else if (name && people && location) {
        stepExtras = 'step-selectable'
    }

    let stepResumen = 'step'
    if (currParty === 'resumen') {
        stepResumen = 'step-selected'
    } else if (termsSelected) {
        stepResumen = 'step-completed'
    } else if (name && people && location) {
        stepResumen = 'step-selectable'
    }

    const changeToPelo = () => {
        setCurrParty('pelo')
    }

    const changeToEstetica = () => {
        peloSelected ? setCurrParty('estetica') : setCurrParty(currParty)
    }

    const changeToComplementos = () => {
        esteticaCaraSelected && esteticaUñasSelected ? setCurrParty('complementos') : setCurrParty(currParty)
    }

    const changeToDetalles = () => {
        (complementosBebidaSelected && complementosComidaSelected) || complementosTodoSelected ? setCurrParty('detalles') : setCurrParty(currParty)
    }

    const changeToExtras = () => {
        name && people >= 4 && people <= 10 && location && date && hour && ((complementosBebidaSelected && complementosComidaSelected) || complementosTodoSelected) ? setCurrParty('extras') : setCurrParty(currParty)
    }

    const changeToResumen = () => {
        name && people >= 4 && people <= 10 && location && ((complementosBebidaSelected && complementosComidaSelected) || complementosTodoSelected) ? setCurrParty('resumen') : setCurrParty(currParty)
    }

    const nextOrBook = currParty === 'resumen' ? 'Reservar' : 'Siguiente'


    return (
        <main className='party-main' id='party-portada'>           
            <div className='party-header'>
                <h2 className='party-header__text'>
                    {header}
                </h2>
            </div>
            <div className='step-box'>
                    <div className={stepPelo} onClick={changeToPelo}>
                        <SvgPelo isSelected={currParty} isCompleted={peloSelected !== undefined}/>
                    </div>
                    <div className={stepEstetica} onClick={changeToEstetica}>
                        <SvgEstetica isSelected={currParty} isCompleted={esteticaCaraSelected && esteticaUñasSelected}/>
                    </div>
                    <div className={stepComplementos} onClick={changeToComplementos}>
                        <SvgComplementos isSelected={currParty} isCompleted={(complementosBebidaSelected && complementosComidaSelected) || complementosTodoSelected}/>
                    </div>
                    <div className={stepDetalles} onClick={changeToDetalles}>
                        <SvgDetalles isSelected={currParty} isCompleted={name && people && location}/>
                    </div>
                    <div className={stepExtras} onClick={changeToExtras}>
                        <SvgExtras isSelected={currParty} isCompleted={extrasAnfitrionSelected || extrasEspectaculoSelected}/>
                    </div>
                    <div className={stepResumen} onClick={changeToResumen}>
                        <SvgResumen isSelected={currParty} isCompleted={termsSelected !== ''}/>
                    </div>
            </div>
            <div className='party-creator'>
                <div className='parties'>
                    {displayArray}
                </div>
                <div className='button-container'>
                    <ButtonPrev clickedPrev={moveToPrevPage}>Atrás</ButtonPrev>
                    <ButtonNext clickedNext={moveToNextPage} isDisabled={disableNext}>{nextOrBook}</ButtonNext>  
                </div>
                
            </div>

        </main>
    )
}

export default PartyPersonalizada