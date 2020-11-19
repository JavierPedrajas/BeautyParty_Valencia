import React from 'react'
import './tycModal.css'
import { SvgCross } from '../../../assets/svg/svg'

const TycModal = (props) => {


    return (
        <div className='tycModal-Backdrop' >
            <button className='cross-container' onClick={props.closeModal}>
                    <SvgCross/>
                </button>
            <div className='tycModal'>
                   <h2>
                   Avisos legales
                    </h2> 
                    <br/><br/>
                    <h3>Forma de Contratación</h3>
                    La fecha y hora seleccionadas no son vinculantes, quedan pendientes de disponibilidad.
                    Para que el producto se de por contratado, el usuario deberá decibir confirmación por parte del Centro de Reservas asociado al número de WhatsApp que se genera al pulsar "Reservar".
                    Se deberá efectuar un pago del 30% del importe total, al menos 7 días antes de la fecha reservada. (Más información por WhatsApp).
                    En caso de cancelación del evento por parte del usuario, se devolverá el dinero únicamente si faltan más de 7 días para la reserva.
                    Queda reservada la capacidad del evento a la legislación de COVID 19 vigente.
                    Es imprescindible seguir las normas sanitarias que los Profesionales del local indicarán a los participantes.
                    <br/><br/><h3>Titularidad de la página WEB</h3>
                    De acuerdo con el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio se informa al usuario que la página web es titularidad de Héctor Calasanz Navarro con D.N.I. 44.878.862.C , domicilio en Gran Vía Ramón y Cajal, 28 46007 Valencia, España el cual es responsable único y exclusivo en relación a la veracidad de la información contenida en la página web en cuanto a los textos, fotografías, logotipos, cupones, productos, servicios e imágenes visualizadas.
                    <br/><br/><h3>Términos y condiciones de uso</h3>
                    El acceso a esta página web atribuye la condición de USUARIO, quien accede voluntariamente a este sitio web. El acceso y navegación en este sitio web implica aceptar y conocer las advertencias legales, condiciones y términos de uso contenidos en dicho sitio web. El mero acceso no implica el establecimiento de ningún tipo de relación comercial entre el USUARIO y Héctor Calasanz Navarro. La información suministrada en la página web tiene como finalidad facilitar el conocimiento por parte de los usuarios de las actividades y de los servicios que presta el Héctor Calasanz Navarro, quien se reserva el derecho de efectuar, en cualquier momento cuantas modificaciones, variaciones, supresión o cancelaciones de los contenidos y en la forma de presentación de los mismos que considere necesaria para la prestación de los servicios. Esta facultad no otorga a los usuarios ningún derecho a percibir indemnización por daños y perjuicios, por lo que se recomienda al USUARIO que lea este Aviso Legal tantas veces como acceda a la web.
                    <br/><br/><h3>
                    Uso indebido
                    </h3>
                    El USUARIO asume la responsabilidad del uso del portal, comprometiéndose a realizar un buen uso de la página web y aportar información veraz y lícita, no permitiéndose conductas que vayan contra la ley, los derechos o intereses de terceros. La utilización de ciertos servicios o solicitudes a Héctor Calasanz Navarro estarán condicionadas a la previa cumplimentación del correspondiente formulario de recogida de datos. A estos efectos, el USUARIO será responsable de la información falsa o inexacta que pudiera realizar o comunicar y de los perjuicios que cause a Héctor Calasanz Navarro y al responsable de la web en su caso. Héctor Calasanz Navarro se reservan el derecho a denegar o retirar el acceso a la web a aquellos USUARIOS que incumplen las condiciones y obligaciones de la presente página web.
                    <br/><br/><h3>
                    Exclusión de garantías y responsabilidad
                    </h3>
                    Héctor Calasanz Navarro no se responsabilizan del mal uso que se realice de los contenidos de la página web, y no se hacen responsables en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudiera ocasionar el funcionamiento de la página web y/o sus servicios ni garantizan la utilidad de la página web, ni que el usuario pueda utilizar en todo momento la web o los servicios que se ofrezcan. Héctor Calasanz Navarro no puede garantizar la fiabilidad, veracidad, exhaustividad y actualidad de los contenidos y por tanto, queda excluido cualquier tipo de responsabilidad que pudiera derivarse por los daños causados, directa o indirectamente, por la información a la que se acceda por medio de la web. No obstante, Héctor Calasanz Navarro declara que ha adoptado todas las medidas necesarias, dentro de sus posibilidades y del estado de la tecnología, para garantizar el funcionamiento de la página web y evitar la existencia y transmisión de virus y demás componentes dañinos a los usuarios.
                    <br/><br/><h3>
                    Enlaces
                    </h3>
                    En el caso de que en el sitio web se dispusiesen enlaces o hipervínculos hacía otros sitios de Internet, Héctor Calasanz Navarro no ejercerá ningún tipo de control sobre dichos sitios y contenidos, no asumiendo en ningún caso responsabilidad alguna por los contenidos de algún enlace perteneciente a un sitio web ajeno.
                    <br/><br/><h3>
                    Propiedad intelectual e industrial
                    </h3>
                    El Copyright, diseño y creación de la página web es titularidad de Héctor Calasanz Navarro. El acceso gratuito no implica otros derechos o licencias para reproducción y/o distribución sin la previa autorización expresa del propietario, por lo que, de conformidad con lo dispuesto en los artículos 8 y 32.1, párrafo segundo, de la Ley de Propiedad Intelectual, quedan expresamente prohibidas la reproducción, distribución y comunicación pública de la totalidad o parte de los contenidos de esta página web, con fines comerciales, en cualquier soporte y por cualquier medio técnico sin previa autorización, comprometiéndose el USUARIO en respetar los derechos de Propiedad Intelectual e Industrial. Las marcas, logotipos, diseños, contenidos, programas u objetos similares que forman parte de esta página web, están protegidos por leyes de propiedad industrial e intelectual. La reproducción, distribución, manipulación o des ensamblaje no autorizado de los códigos fuente, de los algoritmos incorporados o de la base datos, ya sea total o parcial, dará lugar a graves penalizaciones tanto civiles como penales y será objeto de cuantas acciones judiciales correspondan en Derecho.
                    <br/><br/><h3>    
                    Política de privacidad y protección de datos
                    </h3>
                    Héctor Calasanz Navarro será Responsable de la recogida de datos de este sitio web. En virtud de lo dispuesto en el Reglamento General de Protección de Datos (RGPD), Reglamento UE 2016/679, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de los mismos, se informa al USUARIO que todos los datos que proporciones serán incorporados a un fichero, creado y mantenido bajo la responsabilidad de Héctor Calasanz Navarro con el fin de gestionar el envío de la información que soliciten, facilitar al interesado ofertas de productos y servicios de su interés y mejorar su experiencia de usuario, pudiendo elaborarse, de ser necesario, un perfil comercial, en base a la información facilitada. No se tomarán decisiones automatizadas en base a dicho perfil. Los datos personales proporcionados se conservarán mientras se mantenga la relación mercantil, en su caso, y no se solicite su supresión por el interesado. Para ello, Héctor Calasanz Navarro solicitará el consentimiento del interesado a través del formulario de recogida de datos para el tratamiento de los mismos y la oferta prospectiva de productos y servicios, estando el USUARIO legitimado para retirar dicho consentimiento en cualquier momento, así como a ejercer sus derechos de acceso, rectificación, portabilidad y supresión de sus datos, y a presentar una reclamación ante la autoridad de control , si considera que el tratamiento no se ajusta a la normativa vigente. Los contenidos de la página web están dirigidos a personas mayores de edad, Héctor Calasanz Navarro no pretende obtener datos de personas menores de edad, y cuando tenga conocimiento de que existen en su fichero datos de carácter personal de un menor, procederá de inmediato a cancelar dichos datos.
                    <br/><br/><h3>
                    Legislación aplicable y jurisdicción
                    </h3>
                    La relación con el USUARIO se regirá por la normativa española vigente y cualquier controversia se someterá a los Juzgado y tribunales de la ciudad de Valencia salvo que la legislación aplicable determine de forma imperativa otro fuero o legislación distinta.
            </div>
        </div>
    )
}

export default TycModal

