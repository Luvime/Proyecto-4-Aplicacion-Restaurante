import gorro from '../assets/gorro.jpg';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.jpg';
import WhatsApp from '../assets/WhatsApp.png';

export const Footer = () => {
    return (
        <>
            <div class="container-fluid bg-light">
                <div class="row p-5 text-dark">
                    <div class="col xs-12 col-md-6 col-lg-3">
                        <img className='logotipo' src={gorro} width={250}></img>
                        <span>ConcePack</span>
                        <p>Somos una empresa al servicio para la region del Bio Bio y todo Chile.</p>
                    </div>
                    <div class="col xs-12 col-md-6 col-lg-3">
                        <p class="h2">Oferta de Valor</p>
                        <div class="mb-2">
                            <a class="text-dark" href="#">Servicio y Asesoramiento</a>
                        </div>
                        <div class="mb-2">
                            <a class="text-dark" href="#">Posicion Estrategica</a>
                        </div>
                        <div class="mb-2">
                            <a class="text-dark" href="#">Tecnologia e Innovacion</a>
                        </div>
                        <div class="mb-2">
                            <a class="text-dark" href="#">Empleabilidad</a>
                        </div>
                    </div>
                    <div class="col xs-12 col-md-6 col-lg-3">
                        <p class="h3">Area sitio web</p>
                        <div class="mb-2">
                            <a class="text-dark" href="#">Productos</a>
                        </div>
                        <div class="mb-2">
                            <a class="text-dark" href="#">Mercado que Atendemos</a>
                        </div>
                    </div>
                    <div class="col xs-12 col-md-6 col-lg-3">
                        <p class="h2">Siguenos</p>
                        <div class="mb-2">
                            <img className='logotipo1' src={facebook} width={50}></img>
                        </div>
                        <div class="mb-2">
                            <img className='logotipo1' src={instagram} width={50}></img>
                        </div>
                        <div class="mb-2">
                            <img className='logotipo1' src={WhatsApp} width={50}></img>
                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}
