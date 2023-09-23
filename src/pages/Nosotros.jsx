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
          <h1>NUESTRA MISIÓN</h1>
          <h2>"SABORES NATURALES Y EXCELENTE ATENCION"</h2>
          <p>Pensamos como guayaquileños. Usamos ingredientes 100% naturales de nuestras raices, para cocinar las mejores y más sabrosas preparaciones, 
          sin perder el sabor único y tradicional de nuestra tierra. Mantenemos además una cultura destacada de excelente trato a nuestra clientela,
          para que puedan sentir en primera persona, la calidez de nuestra gente. Garantizamos una experiencia satisfactoria.</p>
        </div>
      </div>
    </>
  )
}
