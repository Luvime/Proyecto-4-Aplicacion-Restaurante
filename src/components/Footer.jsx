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
                        <h6>PERLA DEL PACIFICO</h6>
                        <p>Se carateriza por su autenticos platos tradicionales de la region de la costa y sierra del pais Ecuador.</p>
                    </div>
                    <div class="col xs-12 col-md-6 col-lg-3">
                        <p class="h2">Perla del Pacifio</p>
                        <div class="mb-2">
                            <a class="text-dark" href="#">Confidencialidad</a>
                        </div>
                        <div class="mb-2">
                            <a class="text-dark" href="#">Mejores Ingredientes</a>
                        </div>
                        <div class="mb-2">
                            <a class="text-dark" href="#">Atencion al Publico en General</a>
                        </div>
                        <div class="mb-2">
                            <a class="text-dark" href="#">Personal Capacitado</a>
                        </div>
                    </div>
                    <div class="col xs-12 col-md-6 col-lg-3">
                        <p class="h3">Servicio</p>
                        <div class="mb-2">
                            <a class="text-dark" href="#">Forma de Pago</a>
                        </div>
                        <div class="mb-2">
                            <a class="text-dark" href="#">Compra Segura</a>
                        </div>
                        <div class="mb-2">
                            <a class="text-dark" href="#">Politicas de Despacho</a>
                        </div>
                        <div class="mb-2">
                            <a class="text-dark" href="#">Mis Pedidos</a>
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
