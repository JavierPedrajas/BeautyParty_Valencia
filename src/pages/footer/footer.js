import React, {useState} from 'react'
import './footer.css'

import TycModal from '../footer/tycModal/tycModal'
import PrivModal from '../footer/privModal/privModal'
import CookiesModal from '../footer/cookiesModal/cookiesModal'

const Footer = () => {

    const [modalOpen, setModalOpen] = useState()

    const handleOpenModalTyc = () => {
        setModalOpen('tyc')
    }

    const handleOpenModalPriv = () => {
        setModalOpen('priv')
    }

    const handleOpenModalCookies = () => {
        setModalOpen('cookies')
    }
    
    const handleCloseModal = () => {
        setModalOpen('')
    }
    
    let showModal
    switch (modalOpen){
        case 'tyc':
            showModal = <TycModal closeModal={handleCloseModal}/>
            break
        case 'priv':
            showModal = <PrivModal closeModal={handleCloseModal}/>
            break
        case 'cookies':
            showModal = <CookiesModal closeModal={handleCloseModal}/>
            break
        default: showModal = ''
    }

    return (
        <div className='footer'>
            {showModal}
            <h2 className='footer-title'>
                BeautyParty Valencia
            </h2>
            <div className='footer-links'>
                <button onClick={handleOpenModalPriv} >Política de Privacidad</button>
                <button onClick={handleOpenModalTyc} >Avisos Legales</button>
                <button onClick={handleOpenModalCookies} >Política de Cookies</button>
            </div>
            <div className='footer-credit'>
                Designed & Developed by <a href='https://www.linkedin.com/in/javier-pedrajas-martinez/'>Javier Pedrajas</a>
            </div>
            <div className='footer-atribution'>
                Icons made by <a href="https://www.flaticon.local/authors/freepik">Freepik</a> from <a href="https://www.flaticon.local/">www.flaticon.local</a>
            </div>
        </div>
    )
}

export default Footer