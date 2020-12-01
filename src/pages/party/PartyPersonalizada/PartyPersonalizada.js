import React, { useEffect, useState } from 'react'
import './PartyPersonalizada.css'
import axios from 'axios'


import { SvgPelo, SvgEstetica, SvgComplementos, SvgDetalles, SvgExtras, SvgResumen } from '../../../assets/svg/svg'

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

    const [data, setData] = useState()
    const [current, setCurrent] = useState('loading')
    const [selected, setSelected] = useState(
        {
            pelo: '',
            esteticaCara: '',
            esteticaUñas: '',
            complementosBebida: '',
            complementosComida: '',
            complementosTodo: '',
            extrasAnfitrion: '',
            extrasEspectaculo: '',
            terms: '',
        }
    )
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

    // VARIABLE DECLARATION //



    let header
    let nextPage
    let prevPage
    let displayArray
    let disableNext

    let dateDateFormat = details.date ? new Date(details.date) : ''
    let dateSummaryFormat = details.date ? dateDateFormat.getDate() + '/' + (dateDateFormat.getMonth() + 1) + '/' + dateDateFormat.getFullYear() : ''


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
            parseInt(selected.pelo.split(',')[1]) +
            parseInt(selected.esteticaCara.split(',')[1]) +
            parseInt(selected.esteticaUñas.split(',')[1]) +
            (selected.complementosTodo ? parseInt(selected.complementosTodo.split(',')[1]) :
                parseInt(selected.complementosBebida.split(',')[1]) +
                parseInt(selected.complementosComida.split(',')[1])) +
            (selected.extrasAnfitrion ? parseInt(selected.extrasAnfitrion.split(',')[1]) : 0) +
            (selected.extrasEspectaculo ? parseInt(selected.extrasEspectaculo.split(',')[1]) : 0)) * 100) / 100

    // GET ITEMS FROM FIREBASE

    useEffect(() => {
        axios.get("https://beautyparty-valencia.firebaseio.com/.json")
            .then(res => {
                setData(res.data)
                setCurrent('pelo')

            })
            .catch(err => {
                console.log(err)
            })
    }, []);


    // Changes city selected

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

    const sendWhatsapp = () => {
        // %0A SALTO DE LINEA
        // %E2%86%92 FLECHA A DERECHA
        const nameString = encodeURIComponent('Hola, soy ' + details.name + '.')
        const peloString = encodeURIComponent('- ' + selected.pelo.split(',')[0] + ' → ' + selected.pelo.split(',')[1] + '€')
        const esteticaUñasString = encodeURIComponent('- ' + selected.esteticaUñas.split(',')[0] + ' → ' + selected.esteticaUñas.split(',')[1] + '€')
        const esteticaCaraString = encodeURIComponent('- ' + selected.esteticaCara.split(',')[0] + ' → ' + selected.esteticaCara.split(',')[1] + '€')
        const complementosString = selected.complementosTodo === '' ?
            encodeURIComponent('- ' + selected.complementosBebida.split(',')[0] + ' → ' + selected.complementosBebida.split(',')[1] + '€') + '%0A' +
            encodeURIComponent('- ' + selected.complementosComida.split(',')[0] + ' → ' + selected.complementosComida.split(',')[1] + '€') :
            encodeURIComponent('- ' + selected.complementosTodo.split(',')[0] + ' → ' + selected.complementosTodo.split(',')[1] + '€')
        const extrasString =
            (selected.extrasAnfitrion !== '' ?
                encodeURIComponent('- ' + selected.extrasAnfitrion.split(',')[0] + ' → ' + selected.extrasAnfitrion.split(',')[1] + '€') + '%0A' : '') +
            (selected.extrasEspectaculo !== '' ? encodeURIComponent('- ' + selected.extrasEspectaculo.split(',')[0] + ' → ' + selected.extrasEspectaculo.split(',')[1] + '€') : '')
        const totalString = encodeURIComponent('El total de la fiesta es de ' + totalPersona * details.people + '€')
        const localizacion = details.location === 'Valencia' ? 'Paul Mitchell Valencia' : 'Nou Calasanz Lliria'
        const detallesString = encodeURIComponent('Seremos ' + details.people + ' personas.') + '%0A' + encodeURIComponent('En las instalaciones de ' + localizacion) + '%0A' + encodeURIComponent('Nos gustaría reservar para el día ' + dateSummaryFormat + ' en horario de ' + details.hour + '.')


        window.open(`https://wa.me/34608055822?text=${nameString}%0AEste%20es%20el%20resumen%20de%20mi%20fiesta%3A%0A${peloString}%0A${esteticaUñasString}%0A${esteticaCaraString}%0A${complementosString}%0A${extrasString}%0A${totalString}%0A${detallesString}%0AQuedamos+a+la+espera+de+confirmaci%C3%B3n+y+detalles`)

        axios.put(`https://beautyparty-valencia.firebaseio.com/sesiones/${details.name + ' - ' + dateSummaryFormat.replaceAll('/', '-') + ' - Personalizada'}.json`,
            {
                pelo: peloString,
                referencia: props.referencia,
                esteticaUñas: esteticaUñasString,
                esteticaCara: esteticaCaraString,
                complementos: selected.complementosTodo === '' ? selected.complementosComida + selected.complementosBebida : selected.complementosTodo,
                nombre: details.name,
                personas: details.people,
                localizacion: details.location,
                extras: selected.extrasAnfitrion + selected.extrasEspectaculo,
                importe: totalPersona * details.people,
                fecha: dateSummaryFormat,
                hora: details.hour
            })
            .then(res => {
            })
            .catch(err => {
            })

    }

    // UPDATES STATE TO RENDER NEXT PAGE
    const moveToNextPage = () => {
        current === 'resumen' ? sendWhatsapp() : setCurrent(nextPage)
    }

    // UPDATES STATE TO RENDER PREV PAGE
    const moveToPrevPage = () => {
        current === 'pelo' || current === 'loading' ? props.goToPortada() : setCurrent(prevPage)
    }




    // STORES THE SELECTED VALUE
    const storeSelectedValue = e => {
        const currentObject = e.target.value

        switch (e.target.name) {
            case "pelo":
                setSelected({ ...selected, pelo: currentObject })
                break
            case "esteticaCara":
                setSelected({ ...selected, esteticaCara: currentObject })
                break
            case "esteticaUñas":
                setSelected({ ...selected, esteticaUñas: currentObject })
                break
            case "complementosBebida":
                setSelected({ ...selected, complementosBebida: currentObject, complementosTodo: '' })
                break
            case "complementosComida":
                setSelected({ ...selected, complementosComida: currentObject, complementosTodo: '' })
                break
            case "complementosTodo":
                setSelected({ ...selected, complementosTodo: currentObject, complementosBebida: '', complementosComida: '' })
                break
            case "extrasAnfitrion":
                selected.extrasAnfitrion ?
                    setSelected({ ...selected, extrasAnfitrion: '' }) :
                    setSelected({ ...selected, extrasAnfitrion: currentObject })
                break
            case "extrasEspectaculo":
                selected.extrasEspectaculo ?
                    setSelected({ ...selected, extrasEspectaculo: '' }) :
                    setSelected({ ...selected, extrasEspectaculo: currentObject })
                break
            case "terms":
                selected.terms ?
                    setSelected({ ...selected, terms: '' }) :
                    setSelected({ ...selected, terms: currentObject })
                break
            default: console.log('error')
        }
    }


    // SWITCH STATEMENT TO SET DIFFERENT PARAMETERS
    switch (current) {
        case 'loading':
            disableNext = true
            break
        case 'pelo':
            header = '¿Qué hacemos con vuestro pelo?' // Header for the section
            prevPage = '' // Change to previous page
            nextPage = 'estetica' // Change to next page
            disableNext = selected.pelo ? false : true // is next disabled?
            whatIsSelectedPelo = selected.pelo ? selected.pelo.split(',')[0] : '' // To check if radio was proviously selected
            break;

        case 'estetica':
            header = 'Maquillaje, manicura...¡Tú mandas!'
            prevPage = 'pelo'
            nextPage = 'complementos'
            disableNext = selected.esteticaCara && selected.esteticaUñas ? false : true
            whatIsSelectedCara = selected.esteticaCara ? selected.esteticaCara.split(',')[0] : ''
            whatIsSelectedUñas = selected.esteticaUñas ? selected.esteticaUñas.split(',')[0] : ''
            break;

        case 'complementos':
            header = 'No es una buena fiesta sin un buen picoteo'
            prevPage = 'estetica'
            nextPage = 'detalles'
            disableNext = (selected.complementosBebida && selected.complementosComida) || selected.complementosTodo ? false : true
            whatIsSelectedBebida = data ? selected.complementosBebida.split(',')[0] : ''
            whatIsSelectedComida = data ? selected.complementosComida.split(',')[0] : ''
            whatIsSelectedTodo = data ? selected.complementosTodo.split(',')[0] : ''
            break;

        case 'detalles':
            header = 'Necesitamos algún detallito más'
            prevPage = 'complementos'
            nextPage = 'extras'
            disableNext = details.name && details.people >= 4 && details.people <= 10 && details.location && details.date && details.hour ? false : true
            break;

        case 'extras':
            header = 'Solo nos falta poner la guinda...'
            prevPage = 'detalles'
            nextPage = 'resumen'
            disableNext = false
            whatIsSelectedAnfitrion = data ? selected.extrasAnfitrion.split(',')[0] : ''
            whatIsSelectedEspectaculo = data ? selected.extrasEspectaculo.split(',')[0] : ''
            break;

        case 'resumen':
            header = '¡Ya está! Revisa tu fiesta'
            prevPage = 'extras'
            nextPage = ''
            disableNext = selected.terms ? false : true
            break;

        default: header = 'Cargando fiesta...'
    }

    const esteticaDisplayArray =
        <div className='estetica-container'>
            <span className='esteticaCara'>Estética facial</span>
            <EsteticaCara
                propsEsteticaCara={data ? data.esteticaCara : ''}
                handleStoreSelected={storeSelectedValue}
                isSelected={whatIsSelectedCara}
            />

            <span className='esteticaUñas'>Manicura</span>
            <EsteticaUñas
                propsEsteticaUñas={data ? data.esteticaUñas : ''}
                handleStoreSelected={storeSelectedValue}
                isSelected={whatIsSelectedUñas}
            />
        </div>

    const complementosDisplayArray =
        <div className='estetica-container'>
            <span className='esteticaCara'>¿Algo de picar?</span>
            <ComplementosComida
                propsComplementosComida={data ? data.complementosComida : ''}
                handleStoreSelected={storeSelectedValue}
                isSelected={whatIsSelectedComida}
            />

            <span className='esteticaUñas'>¿Qué quereis beber?</span>
            <ComplementosBebida
                propsComplementosBebida={data ? data.complementosBebida : ''}
                handleStoreSelected={storeSelectedValue}
                isSelected={whatIsSelectedBebida}
            />

            <span className='esteticaUñas'>¡Nosotros nos encargamos!</span>
            <ComplementosTodo
                propsComplementosTodo={data ? data.complementosTodo : ''}
                handleStoreSelected={storeSelectedValue}
                isSelected={whatIsSelectedTodo}
            />
        </div>

    const extrasDisplayArray =
        <div>
            <ExtrasAnfitrion
                handleStoreSelected={storeSelectedValue}
                propsExtrasAnfitrion={data ? data.extrasAnfitrion : ''}
                isSelected={whatIsSelectedAnfitrion} />

            <ExtrasEspectaculo
                handleStoreSelected={storeSelectedValue}
                propsExtrasEspectaculo={data ? data.extrasEspectaculo : ''}
                isSelected={whatIsSelectedEspectaculo} />
        </div>


    // SWITCH STATEMENT TO DETERMINE PAGE TO BE RENDERED
    switch (current) {
        case 'loading':
            displayArray = <LoadingSpinner />
            break
        case 'pelo':
            displayArray = data ? <Pelo
                propsPelo={data.pelo}
                handleStoreSelected={storeSelectedValue}
                isSelected={whatIsSelectedPelo} /> : ''
            break

        case 'estetica':
            displayArray = data ? esteticaDisplayArray : ''
            break

        case 'complementos':
            displayArray = data ? complementosDisplayArray : ''
            break

        case 'detalles':
            displayArray = <Detalles
                city={details.location} updateCityValencia={updateLocationValencia} updateCityLliria={updateLocationLliria}
                num={details.people} mas={handlePlus} menos={handleMinus} updateNum={updatePeople}
                nam={details.name} updateNam={updateName}
                fecha={details.date} updateFecha={updateFecha} weekDay={details.weekDay}
                hora={details.hour} updateHora={updateHora}
                today={props.today}
                sixMonths={props.sixMonths}
            />
            break

        case 'extras':
            displayArray = data ? extrasDisplayArray : ''
            break

        case 'resumen':
            displayArray = <Resumen
                peloS={selected.pelo}
                esteticaCS={selected.esteticaCara} esteticaUS={selected.esteticaUñas}
                complementosCS={selected.complementosComida} complementosBS={selected.complementosBebida} complementosTS={selected.complementosTodo}
                city={details.location} num={details.people} nam={details.name}
                extrasAS={selected.extrasAnfitrion} extrasES={selected.extrasEspectaculo}
                subtotal={totalPersona} handleStoreSelected={storeSelectedValue}
                isSelected={selected.terms}
            />
            break


        default: displayArray = 'error'
    }



    let stepPelo = 'step'
    if (current === 'pelo') {
        stepPelo = 'step-selected'
    } else if (selected.pelo) {
        stepPelo = 'step-completed'
    }

    let stepEstetica = 'step'
    if (current === 'estetica') {
        stepEstetica = 'step-selected'
    } else if (selected.esteticaCara && selected.esteticaUñas) {
        stepEstetica = 'step-completed'
    } else if (selected.pelo) {
        stepEstetica = 'step-selectable'
    }

    let stepComplementos = 'step'
    if (current === 'complementos') {
        stepComplementos = 'step-selected'
    } else if ((selected.complementosBebida && selected.complementosComida) || selected.complementosTodo) {
        stepComplementos = 'step-completed'
    } else if (selected.esteticaCara && selected.esteticaUñas) {
        stepComplementos = 'step-selectable'
    }

    let stepDetalles = 'step'
    if (current === 'detalles') {
        stepDetalles = 'step-selected'
    } else if (details.name && details.people && details.location && details.date && details.hour) {
        stepDetalles = 'step-completed'
    } else if ((selected.complementosBebida && selected.complementosComida) || selected.complementosTodo) {
        stepDetalles = 'step-selectable'
    }

    let stepExtras = 'step'
    if (current === 'extras') {
        stepExtras = 'step-selected'
    } else if (selected.extrasAnfitrion || selected.extrasEspectaculo) {
        stepExtras = 'step-completed'
    } else if (details.name && details.people && details.location) {
        stepExtras = 'step-selectable'
    }

    let stepResumen = 'step'
    if (current === 'resumen') {
        stepResumen = 'step-selected'
    } else if (selected.terms) {
        stepResumen = 'step-completed'
    } else if (details.name && details.people && details.location) {
        stepResumen = 'step-selectable'
    }

    const changeToPelo = () => {
        setCurrent('pelo')
    }

    const changeToEstetica = () => {
        selected.pelo ? setCurrent('estetica') : setCurrent(current)
    }

    const changeToComplementos = () => {
        selected.esteticaCara && selected.esteticaUñas ? setCurrent('complementos') : setCurrent(current)
    }

    const changeToDetalles = () => {
        (selected.complementosBebida && selected.complementosComida) || selected.complementosTodo ? setCurrent('detalles') : setCurrent(current)
    }

    const changeToExtras = () => {
        details.name && details.people >= 4 && details.people <= 10 && details.location && details.date && details.hour && ((selected.complementosBebida && selected.complementosComida) || selected.complementosTodo) ? setCurrent('extras') : setCurrent(current)
    }

    const changeToResumen = () => {
        details.name && details.people >= 4 && details.people <= 10 && details.location && ((selected.complementosBebida && selected.complementosComida) || selected.complementosTodo) ? setCurrent('resumen') : setCurrent(current)
    }

    const nextOrBook = current === 'resumen' ? 'Reservar' : 'Siguiente'


    return (
        <main className='party-main' id='party-portada'>
            <div className='party-header'>
                <h2 className='party-header__text'>
                    {header}
                </h2>
            </div>
            <div className='step-box'>
                <div className={stepPelo} onClick={changeToPelo}>
                    <SvgPelo isSelected={current} isCompleted={selected.pelo !== undefined} />
                </div>
                <div className={stepEstetica} onClick={changeToEstetica}>
                    <SvgEstetica isSelected={current} isCompleted={selected.esteticaCara && selected.esteticaUñas} />
                </div>
                <div className={stepComplementos} onClick={changeToComplementos}>
                    <SvgComplementos isSelected={current} isCompleted={(selected.complementosBebida && selected.complementosComida) || selected.complementosTodo} />
                </div>
                <div className={stepDetalles} onClick={changeToDetalles}>
                    <SvgDetalles isSelected={current} isCompleted={details.name && details.people && details.location} />
                </div>
                <div className={stepExtras} onClick={changeToExtras}>
                    <SvgExtras isSelected={current} isCompleted={selected.extrasAnfitrion || selected.extrasEspectaculo} />
                </div>
                <div className={stepResumen} onClick={changeToResumen}>
                    <SvgResumen isSelected={current} isCompleted={selected.terms !== ''} />
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