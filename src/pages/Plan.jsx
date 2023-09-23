import React from 'react'
import data from '../data.json'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import plan from '../assets/plan.jpg';
import { Link } from 'react-router-dom';
import '../../src/App.css'

export const Plan = () => {
  return (
    <>
    <div className='bannerplatos'>
      <img className='bannerplatos1' src={plan}></img>
    </div>
      <div className="App">
        {
          data.plans.map(plan => (
            <Card key={plan.sku} style={{ width: '18rem'}}>
              <Card.Img variant="top" src={plan.image} />
              <Card.Body>
                <Card.Title>{plan.name}</Card.Title>
                <Card.Text>{plan.price}</Card.Text>
                <Card.Text>{plan.description}</Card.Text>
                <Link to={`/Proyecto-4-Aplicacion-Restaurante/plans/${plan.sku}`}>
                  <Button variant="primary">Ver Detalle</Button>
                </Link>
              </Card.Body>
            </Card>
          ))
        }
      </div>

    </>
  )
}
