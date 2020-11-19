import React, { useState } from 'react';

import './App.css';

import Hero from './pages/hero/hero'
import Features from './pages/features/features'
import Packs from './pages/packs/packs'
import PartyPortada from './pages/party/partyPortada'
import Footer from './pages/footer/footer'

function App() {

  const [partyState, setPartyState] = useState('Portada')
  const [packSelected, setPackSelected] = useState('Portada')


  // Changes Party Status to render "Personalizada" & scrolls to center view + changes Packs section to "Main" 
  const handlePartyPersonalizada = () => {
    scrollToParty()
    setPartyState('Personalizada')
    setPackSelected('Portada')
  }

  // Changes Party Status to render "Presupuesto" & scrolls to center view + changes Packs section to "Main" 
  const handlePartyPresupuesto = () => {
    scrollToParty()
    setPartyState('Presupuesto')
    setPackSelected('Portada')
  }


  // Changes Party Status to render "Main"
  const handlePartyPortada = () => {
    setPartyState('Portada')
  }

  // Changes Packs Status to render "Dia" & scrolls to center view + changes Party section to "Main" 
  const handlePackDia = () => {
    setPackSelected('dia')
    setPartyState('Portada')
    scrollToPack()

}
  // Changes Packs Status to render "Cumple" & scrolls to center view + changes Party section to "Main" 
const handlePackCumple = () => {
    setPackSelected('cumple')
    setPartyState('Portada')
    scrollToPack()

}
  // Changes Packs Status to render "Noche" & scrolls to center view + changes Party section to "Main" 
const handlePackNoche = () => {
    setPackSelected('noche')
    setPartyState('Portada')
    scrollToPack()
}

// Changes Packs Status to render "Main"
const handlePackPortada = () => {
  setPackSelected('Portada')
}

  // Scroll to center view on Party section
  const scrollToParty = () => {
    setPartyState('Portada')
    if (document.getElementById('party-portada')) {
        document.getElementById('party-portada').scrollIntoView({block: "center", behavior: "smooth"})
    }
  }

  // Scroll to center view on Packs section
  const scrollToPack = () => {
    if (document.getElementById('packs')) {
        document.getElementById('packs').scrollIntoView({block: "center", behavior: "smooth"})
    }
  }

  // Establish min and max date selectable at input date fields
  const today = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] // Min date 7 days from today
  const sixMonths = new Date(Date.now() + 180 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] // Max date 6 months from today


  return (
    <div className="App">
      <header className="App-header">
        <Hero goToParty={scrollToParty}/>
      </header>
      <Features goToParty={scrollToParty}/>
      <Packs currentPack={packSelected} handleDia={handlePackDia} 
      handleCumple={handlePackCumple} handleNoche={handlePackNoche} handlePortada={handlePackPortada}
      today={today} sixMonths={sixMonths}/>
      <PartyPortada stateParty={partyState} 
      personalizada={handlePartyPersonalizada} presupuesto={handlePartyPresupuesto} portada={handlePartyPortada}
      today={today} sixMonths={sixMonths}/>
      <Footer/>
    </div>
  );
}

export default App;
