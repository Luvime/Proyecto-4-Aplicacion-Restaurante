import React from 'react'
import '../../src/Nosotros.css'
import nosotros from '../assets/nosotros.jpg';
import guayaquil from '../assets/guayaquil.jpg';

export const Nosotros = () => {
  return (
    <>
      <div className='bannernosotros'>
        <img className='bannernosotros1' src={nosotros}></img>
      </div>

      <div className='padre'>
        <div className='hijo'>
          <img className='guayaquil' src={guayaquil}></img>
        </div>
        <div className='hijo2'>
          <h1>FILOSOFIA KROSS</h1>
          <h2>"LA CALIDAD ESTÁ POR SOBRE LA CANTIDAD"</h2>
          <p>Pensamos como artesanos. Usamos 100% cebada malteada
            ; sin preservantes; carbonatamos nuestras cervezas naturalmente y no apuramos la maduración. También incluimos tecnología de punta en nuestros procesos con el único objetivo de crear cervezas consistentes en calidad para que sean disfrutadas por nuestros fans y clientes</p>
        </div>
      </div>
    </>
  )
}
