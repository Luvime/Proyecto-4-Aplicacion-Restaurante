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
          <h1>NUESTRA HISTORIA</h1>
          <h2>"GRASTRONOMIA UNIDA, UN ENFOQUE EN CRECIMIENTO"</h2>
          <p>Somos una empresa familiar, nacida en Guayaquil en el año 2000, fundada por el patriarca familiar
            Alfonso Villegas. En el 2012 emigramos a Chile en busca de nuevos desafíos, preservando las enseñanzas
            de nuestros antecesores en cuanto a la gastronomía ecuatoriana, desarrollando y adaptando nuestra cocina 
            desde entonces. Hoy, nuestra visión es unir el sabor de nuestros ancestros, y el sabor del país que nos abrio los brazos, Chile.  
          </p>
        </div>
      </div>
    </>
  )
}
