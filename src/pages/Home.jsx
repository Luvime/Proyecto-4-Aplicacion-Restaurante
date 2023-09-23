import React, { useEffect, useState } from 'react'
import '../../src/Home.css'
import banner from '../assets/banner.jpg';
import desayuno from '../assets/desayuno.jpg';
import almuerzo from '../assets/almuerzo.jpg';
import cena from '../assets/cena.jpg';
import home from '../assets/home.jpeg';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';

export const Home = () => {
  const reservasCollectionRef = collection(db, 'reservas')
  const [reservas, setReservas] = useState([])
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [date, setDate] = useState("")
  const [hour, setHour] = useState("")

  const getReservas = async () => {
    const data = await getDocs(reservasCollectionRef)
    setReservas(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    console.log('reservas =>', reservas)
  }

  const createReserva = async () => {
    await addDoc(reservasCollectionRef, { name, phone, date, hour })
    getReservas()
  }

  useEffect(() => {
    getReservas()
  }, [])
  return (
    <>
      <div className='background'>
        <div className='banner'>
          <img className='banner1' src={banner}></img>
        </div>

        <div className='container'>
          <h1>NUESTRAS PREPARACIONES</h1>
          <h5>"Siempre en la mira, la excelencia"</h5>
        </div>

        <div className='container1'>
          <img className='imagen1' src={desayuno}></img>
          <img className='imagen1' src={almuerzo}></img>
          <img className='imagen1' src={cena}></img>
        </div>

        <div className='padre'>
          <div className='hijo'>
            <img className='home' src={home}></img>
          </div>
          <div className='hijo2'>
            <h1>NUESTRA MISIÓN</h1>
            <h2>"SABORES NATURALES Y EXCELENTE ATENCION"</h2>
            <p>Pensamos como guayaquileños. Usamos ingredientes 100% naturales de nuestras raices, para cocinar las mejores y más sabrosas preparaciones,
              sin perder el sabor único y tradicional de nuestra tierra. Mantenemos además una cultura destacada de excelente trato a nuestra clientela,
              para que puedan sentir en primera persona, la calidez de nuestra gente. Garantizamos una experiencia satisfactoria.</p>
          </div>
        </div>
      </div>

      <div className='container2'>
        <div className='hijo1'>
          <h1>¡RESERVA CON NOSOTROS!</h1>
          <h2>Te contactaremos enseguida</h2>
        </div>
      </div>

      <div className='container3'>
        <input
          type='string'
          placeholder='Nombre'
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type='string'
          placeholder='Telefono'
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
        <input
          type='string'
          placeholder='Fecha'
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
        <input
          type='string'
          placeholder='Hora'
          value={hour}
          onChange={(event) => setHour(event.target.value)}
        />

        <Button onClick={createReserva} variant='success'>Agregar</Button>
        <Table striped bordered hover>
          <thead>
            <tr></tr>
          </thead>
          <tbody>
            {
              reservas.map(reserva => (
                <tr key={reserva.id}></tr>
              ))
            }

          </tbody>
        </Table>

      </div>

    </>
  )

}
