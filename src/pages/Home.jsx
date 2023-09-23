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
          <h1>Mercados que atendemos</h1>
          <p>Siempre abiertos a nuevos mercados</p>
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
            <h1>FILOSOFIA KROSS</h1>
            <h2>"LA CALIDAD ESTÁ POR SOBRE LA CANTIDAD"</h2>
            <p>Pensamos como artesanos. Usamos 100% cebada malteada
              ; sin preservantes; carbonatamos nuestras cervezas naturalmente y no apuramos la maduración. También incluimos tecnología de punta en nuestros procesos con el único objetivo de crear cervezas consistentes en calidad para que sean disfrutadas por nuestros fans y clientes</p>
          </div>
        </div>

        <input
          type='string'
          placeholder='Name'
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type='string'
          placeholder='Phone'
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
        <input
          type='string'
          placeholder='Date'
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
        <input
          type='string'
          placeholder='Hour'
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
