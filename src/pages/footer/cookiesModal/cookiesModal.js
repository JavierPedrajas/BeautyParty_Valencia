import React from 'react'
import { SvgCross } from '../../../assets/svg/svg'

const CookiesModal = (props) => {


    return (
        <div className='tycModal-Backdrop' >
            <button className='cross-container' onClick={props.closeModal}>
                    <SvgCross/>
                </button>
            <div className='tycModal'>
                <h2>
                Política de cookies
                </h2> <br/><br/>
                <h3>

                Concepto de Cookies
                </h3><br/>
                Las cookies constituyen una herramienta empleada por los servidores Web para almacenar y recuperar información acerca de sus visitantes o usuarios. No es más que un fichero de texto que algunos servidores instalan durante la navegación y que permiten conocer información como por ejemplo: el lugar desde el que accede, el tiempo de conexión, el dispositivo desde el que accede (fijo o móvil), el sistema operativo y navegador utilizados, las páginas más visitadas, el número de clicks realizados y de datos respecto al comportamiento del usuario en Internet. No proporcionan referencias que permitan deducir el nombre y apellidos del usuario y no pueden leer datos de su disco duro ni incluir virus en sus equipos. Asimismo, no puede leer las cookies implantadas en el disco duro del usuario desde otros servidores.<br/><br/>
                <h3>
                    
                ¿Por qué son importantes?
                </h3><br/>
                El sitio web es accesible sin necesidad de que las cookies estén activadas, si bien, su desactivación puede impedir su funcionamiento correcto. Desde un punto de vista técnico las cookies permiten que los sitios web funcionen de forma más ágil y adaptada a las preferencias de los usuarios, como por ejemplo almacenar el idioma, la moneda del país o detectar el dispositivo de acceso. Establecen niveles de protección y seguridad que Impiden o dificultan ciberataques contra el sitio web o sus usuarios. Permiten que los gestores de los medios puedan conocer datos estadísticos recopilados para mejorar la calidad y experiencia de sus servicios. Sirven para optimizar la publicidad que mostramos a los usuarios, ofreciendo la que más se ajusta a sus intereses.<br/><br/>
                <h3>
                    
                Autorización para el uso de cookies
                </h3><br/>
                En el sitio web aparece un Aviso de Cookies que el usuario o visitante puede aceptar, consintiendo expresamente al uso de las cookies según se indica a continuación. El usuario puede configurar su navegador para rechazar por defecto todas las cookies o para recibir un aviso en pantalla de la recepción de cada cookie y decidir sobre su instalación o no en su disco duro.<br/><br/>
                <h3>
                    
                Configuración del navegador
                </h3><br/>
                Héctor Calasanz Navarro recuerda a sus usuarios que el uso de cookies podrá estar sujeto a su aceptación durante la instalación o actualización del navegador utilizado por éstos. Esta aceptación podrá ser revocada mediante las opciones de configuración de contenidos y privacidad disponibles en el mismo. El Titular recomienda a sus usuarios que consulten la ayuda de su navegador o acceda a las páginas web de ayuda de los principales navegadores: Firefox, Internet Explorer, Safari, Chrome. Si desea más información acerca de cómo revocar el consentimiento prestado o sobre el procedimiento para deshabilitar las cookies, así como realizar alguna pregunta sobre la Política de Cookies, puede contactar con el titular a través de la siguiente dirección de correo electrónico hola@paulmitchellvalencia.com indicando “Política de Cookies” en el asunto.<br/><br/>
                <h3>
                    
                Tipos de Cookies que se utilizan en la Web
                </h3><br/>
                El usuario que navega por la Web puede encontrar cookies insertadas directamente por el titular, o bien cookies insertadas por entidades distintas al titular, según lo detallado en los siguientes apartados:
                Cookies de sesión: expiran cuando el usuario abandona la página o cierra el navegador, es decir, están activas mientras dura la visita al sitio web y por tanto son borradas de nuestro ordenador al abandonarlo.
                Cookies permanentes: expiran cuando se cumple el objetivo para el que sirven o bien cuando se borran manualmente, tienen fecha de borrado y se utilizan normalmente en proceso de compra online, personalizaciones o en el registro, para no tener que introducir una contraseña constantemente. Según la entidad que gestiona el equipo o dominio desde donde se envían las cookies y trata los datos que se obtengan, podemos distinguir entre Cookies propias y de terceros.
                Cookies propias: son aquellas cookies que son enviadas al ordenador del usuario y son gestionadas exclusivamente por nosotros para el mejor funcionamiento del Sitio Web. La información que recabamos se emplea para mejorar la calidad de nuestro servicio y tu experiencia como usuario.
                Cookies de terceros: cuando el usuario interactúa con el contenido de nuestro sitio Web también pueden establecerse cookies de terceros (por ejemplo, al pulsar botones de redes sociales o visionar vídeos alojados en otro sitio web), que son aquellas establecidas por un dominio diferente de nuestro Sitio Web. No podemos acceder a los datos almacenados en las cookies de otros sitios web cuando navegues en los citados sitios web.
                Los tipos que podemos encontrar són:<br/>

                De rendimiento<br/>
                Descripción: Estas cookies se utilizan para mejorar tu experiencia de navegación y optimizar el funcionamiento de nuestros sitios web.Almacenan configuraciones de servicios para que no tengas que reconfigurarlos cada vez que nos visitas.
                <br/>Ejemplos de uso:<br/>
                Ajustes de volumen de reproductores de vídeo o sonido.<br/>
                Velocidades de transmisión de vídeo óptimas.<br/>
                Almacena la compra realizada en un «carrito de la compra» en los servicios de E-commerce.<br/>
                De geolocalización
                <br/>Descripción: Estas cookies se utilizan para almacenar datos de geolocalización del ordenador o dispositivos para ofrecerte contenidos y servicios más adecuados.
                <br/>Ejemplos de uso:<br/>
                Contenidos a justados al país, ciudad, idioma,etc.<br/>
                De registro
                <br/>Descripción: Las cookies de registro se crean al registrarte o cuando inicias sesión en uno de nuestros portales web.
                <br/>Ejemplos de uso:
                <br/>Puedes mantenerte autenticado aunque cierres el navegador, así cuando vuelvas seguirás identificado a menos que te desconectes o cierres sesión.
                <br/>Para acceder a ciertas zonas de nuestros portales web, por ejemplo para participar en un concurso.
                <br/>Análiticas
                <br/>Descripción: Estas cookies recopilan información de tu experiencia de navegación en nuestros portales web de forma totalmente anónima.
                <br/>Ejemplos de uso:
                <br/>Podemos contabilizar el número de visitantes de la página o contenidos más vistos.
                <br/>Podemos saber si el usuario que esté accediendo es nuevo o repite visitas.
                <br/>Esa información puede ayudarnos a mejorar la navegación y darte un mejor servicio.
                <br/>De publicidad
                <br/>Descripción: Estas cookies recogen información sobre los anuncios mostrados a cada usuario anónimo en portales web.
                <br/>Ejemplos de uso:
                <br/>Adaptar la publicidad al tiempo de dispositivo desde el que el usuario se está conectando.
                <br/>Proporcionar anuncios gestionados a través de terceros («Ad-servers») que son mostrados en la página en tiempo real.
            </div>
        </div>
    )
}

export default CookiesModal