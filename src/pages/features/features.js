import React from 'react'
import './features.css'

import Feature from '../../components/feature/feature'
import Separator from '../../UI/separator/separator'
// import {ButtonSmall} from '../../components/button/button'

import { SvgGrupo, SvgLista, SvgPremium, SvgContacto } from '../../assets/svg/svg'




const features = (props) => {
    return (
        <div className='features-page'>
            <div className='features'>
                <Feature
                icon={<SvgGrupo/>}
                title={'¡Todas Juntas!'}
                content={'Forma un grupo con hasta 10 amigas'}/>

                <Separator />

                <Feature
                icon={<SvgLista/>}
                title={'Tú eliges'}
                content={'Personaliza los detalles de tu fiesta'}/>

                <Separator />
                

                <Feature
                icon={<SvgPremium/>}
                title={'Los mejores'}
                content={'Un equipo de estilistas experimentados a vuestra disposición'}/>

                <Separator />

                <Feature
                icon= {<SvgContacto/>}
                title={'¿Alguna duda?'}
                content={'Contáctanos y te ayudaremos'}/>
                
            </div>
        </div>
    )
}

export default features