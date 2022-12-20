//SE UTILIZA PARA CONECTARNOS CON NUESTRO SERVIDOR DE BACKEND
import axios from 'axios'

//CAMBIAR EL ESTADO DE NUESTRAS CAJAS DE TEXTO INPUTS
import { useState } from 'react'

//NAVEGAR POR NUESTRAS RUTAS 
import { useNavigate } from 'react-router-dom'

//MAQUILLAJE BOOTSTRAP
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

// URL DE LA DIRECCIÓN DE MI SERVIDOR DE BACKEND
const URI = 'http://localhost:8000/regevento/'

export const CompCrearEvento = () => {
    const [fecha, setFecha] = useState('')
    const [equipo1, setEquipo1] = useState('')
    const [equipo2, setEquipo2] = useState('')
    const [marcador1, setMarcador1] = useState('')
    const [marcador2, setMarcador2] = useState('')
    const [tipoevento, setTipoevento] = useState('')
    const navigate = useNavigate()

    var guardar = async (e) => {

        e.preventDefault()
        await axios.post(URI, {
            fecha: fecha,
            equipo1: equipo1,
            equipo2: equipo2,
            marcador1: marcador1,
            marcador2: marcador2,
            tipoevento: tipoevento
        })
        navigate('/mostrareventos')
    }


    return (

        <div className="login-form" >

            <Card style={{ width: '20rem' }}>

                <Card.Body>

                    <Card>
                        <h3> Creacion de Eventos Deportivos</h3>
                        <Form>
                            <Form.Group className="mb-3" >
                                <div>
                                    <Form.Control
                                        value={fecha}
                                        onChange={(e) => setFecha(e.target.value)}
                                        type="text"
                                        placeholder='Fecha año/mes/dia'
                                    />
                                </div>
                                <div>
                                    <Form.Control
                                        value={equipo1}
                                        onChange={(e) => setEquipo1(e.target.value)}
                                        type="text"
                                        placeholder='Ingrese el Equipo1'
                                    />
                                </div>
                                <div>
                                    <Form.Control
                                        value={equipo2}
                                        onChange={(e) => setEquipo2(e.target.value)}
                                        type="text"
                                        placeholder='Ingrese Equipo2'
                                    />
                                </div>
                                <div>
                                    <Form.Control
                                        value={marcador1}
                                        onChange={(e) => setMarcador1(e.target.value)}
                                        type="text"
                                        placeholder='Ingrese Marcador E1'
                                    />
                                </div>
                                <div>
                                    <Form.Control
                                        value={marcador2}
                                        onChange={(e) => setMarcador2(e.target.value)}
                                        type="text"
                                        placeholder='Ingrese el Marcador E2'
                                    />
                                </div>
                                <div>
                                    <Form.Control
                                        value={tipoevento}
                                        onChange={(e) => setTipoevento(e.target.value)}
                                        type="text"
                                        placeholder='Ingrese tipo Evento'
                                    />
                                </div>
                                <Button type="submit" onClick={guardar} variant="outline-success"> Guardar</Button>
                            </Form.Group>
                        </Form>
                    </Card>

                </Card.Body>

            </Card>

        </div>


    )

}
export default CompCrearEvento