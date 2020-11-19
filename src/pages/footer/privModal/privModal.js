import React from 'react'
import { SvgCross } from '../../../assets/svg/svg'

const PrivModal = (props) => {


    return (
        <div className='tycModal-Backdrop' >
            <button className='cross-container' onClick={props.closeModal}>
                    <SvgCross/>
                </button>
            <div className='tycModal'>
                <h2>

                Política de privacidad
                </h2><br/>
                HÉCTOR CALASANZ NAVARRO con CIF 44.878.862-C con domicilio en GRAN VÍA RAMON Y CAJAR, 28, VALENCIA (VALENCIA), 46007 es titular del sitio web paulmitchellvalencia.com y responsable del tratamiento de los datos de carácter personal que los usuarios suministran a través de este sitio web. HÉCTOR CALASANZ NAVARRO informa a los usuarios de este sitio web sobre su política respecto del tratamiento y protección de los datos de carácter personal de los usuarios y clientes que puedan ser recabados por la navegación y uso de este sitio web. La finalidad de este documento es informar a los usuarios sobre qué hacemos con sus datos personales, cómo se recaban, para qué se utilizan, los derechos que les asisten así como toda la información necesaria establecida por la normativa vigente. Al utilizar este sitio web entendemos que ha leído y comprendido la información que se expone en relación con el tratamiento de sus datos de carácter personal. Nuestro principal objetivo es tratar los datos personales de una forma lícita, leal y transparente.
                <br/><br/>
                <h3>
                    
                Datos recabados, finalidad y licitud
                </h3>
                Los datos de carácter personal tratados son los aportados por los usuarios a través de los formularios disponibles en este sitio web y son los mínimos exigibles para poder enviarle información sobre nuestros productos / servicios, poder realizar pedidos, así como poder elaborar las facturas correspondientes, informar sobre el estado de los pedidos, atender reclamaciones y cualquier otra gestión derivada de la prestación del servicio realizado a través de este sitio web. Dichas finalidades están basadas en principios legales de tratamiento de los datos recogidos por la normativa vigente: para la ejecución de un contrato o la prestación de un servicio a los usuarios, para el cumplimiento de obligaciones legales, por el interés legítimo y con el consentimiento de los usuarios.
                <br/><br/>
                <h3>
                    
                Datos recabados para la solicitud de información a través del formulario web.
                </h3>
                Los datos personales recabados a través del formulario web para la petición de información tienen como finalidad el envío de información comercial sobre nuestros productos y servicios. El tratamiento de los datos en este caso concreto está legitimado por el consentimiento expreso que usted nos presta al aceptar el envío de la información aportada a través del formulario.
                <br/><br/>
                <h3>
                    
                Operaciones que se realizan con los datos personales
                </h3>
                Los datos de carácter personal son registrados a través de la web y conservados en soportes electrónicos controlados y supervisados por el responsable del tratamiento. Los soportes cuentan con las medidas técnicas y organizativas necesarias que garantizan la debida confidencialidad en el tratamiento de los datos. El personal implicado en las operaciones de tratamiento de datos: acceso, edición, borrado, etc… está capacitado para ello y está formado y comprometido con nuestra política de protección de datos.
                <br/><br/>
                <h3>
                    
                Conservación de los datos
                </h3>
                Los datos de carácter personal se conservarán el tiempo que sea necesario para poder atender la finalidad / finalidades para los que fueron. Por lo tanto mantendremos su información personal mientras exista una relación contractual y/o comercial con usted o mientras usted no ejerza su derecho de supresión, cancelación y/o limitación del tratamiento de sus datos. En estos casos, mantendremos la información debidamente bloqueada, sin darle ningún uso, mientras pueda ser necesaria para el ejercicio o defensa de reclamaciones o pueda derivarse algún tipo de responsabilidad judicial, legal o contractual de su tratamiento, que deba ser atendida y para lo cual sea necesaria su recuperación.
                <br/><br/>
                <h3>
                    
                Protección de los menores
                </h3>
                Esta página web no está dirigida a usuarios menores de edad. Si usted es menor de edad, por favor no
                intente registrarse como usuario. Si descubrimos que por error hemos obtenido información personal de
                un menor, eliminaremos dicha información lo antes posible.
                <br/><br/>
                <h3>
                    
                Destinatarios de sus datos personales
                </h3>
                Informamos a los usuarios de que sus datos personales no serán comunicados a terceros, con la salvedad de que dicha comunicación de datos esté amparada en una obligación legal o cuando para la correcta prestación del servicio o la ejecución del contrato sea necesario comunicar sus datos a otros responsables como pueden ser otras empresas del grupo, encargados del tratamiento. Para los casos en los que la comunicación de datos a terceros no esté amparada en las bases legales establecidas en el apartado anterior, la comunicación de datos a otros destinatarios sólo se realizará si el usuario ha dado su consentimiento expreso. HÉCTOR CALASANZ NAVARRO mantiene unos criterios estrictos de selección de encargados de tratamiento y se compromete contractualmente con cada uno a cumplir y hacer cumplir las obligaciones establecidas en materia de protección de datos. Puede obtener más información sobre el tratamiento de los datos personales de nuestra organización en el siguiente enlace:
                https://www.accesousuario.com/protecciondedatos/rgpd/informacion_consentimientoAPI.php?codEmpresa=61625
                <br/>
                <br/>
                <h3>
                    
                Ejercicio de los derechos
                </h3>
                De acuerdo con los derechos que confiere la normativa vigente en materia de protección de datos de carácter personal, el usuario podrá ejercer los derechos de acceso, rectificación, limitación de tratamiento, supresión, portabilidad y oposición al tratamiento de sus datos dirigiendo su petición a la dirección postal indicada o al correo electrónico hola@paulmitchellvalencia.com

                Para el ejercicio de los derechos deberá identificarse mediante la presentación de su DNI.

                Para cualquier reclamación puede dirigirse al mismo correo indicado. Igualmente podrá dirigirse a la Agencia Española de Protección de Datos: www.agpd.es
            </div>
        </div>
    )
}

export default PrivModal