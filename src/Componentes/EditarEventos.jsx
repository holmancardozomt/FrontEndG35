//ACÁ IMPORTAMOS LAS LIBRERÍA A UTILIZAR EN NUESTRO COMPONENTE
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

//MAQUILLAJE BOOTSTRAP
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

// URL DE LA DIRECCIÓN DE MI SERVIDOR DE BACKEND
const URI = 'http://localhost:8000/mostrareventos/'



//DEFINIR NUESTRAS VARIABLES A UTILIZAR
export const CompEditarEventos = () => {
    const [fecha, setFecha] = useState('')
    const [equipo1, setEquipo1] = useState('')
    const [equipo2, setEquipo2] = useState('')
    const [marcador1, setMarcador1] = useState('')
    const [marcador2, setMarcador2] = useState('')
    const [tipoevento, setTipoevento] = useState('')
    const navigate = useNavigate()
    const { id } = useParams()

    //PROCEDIMIENTO PARA ACTUALIZAR
    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI + id, {
            fecha: fecha,
            equipo1: equipo1,
            equipo2: equipo2,
            marcador1: marcador1,
            marcador2: marcador2,
            tipoevento: tipoevento
        })
        navigate('/mostrareventos')
    }

    const getBlogById = async () => {
        const res = await axios.get(URI + id)
        setFecha(res.data.fecha)
        setEquipo1(res.data.equipo1)
        setEquipo2(res.data.equipo2)
        setMarcador1(res.data.marcador1)
        setMarcador2(res.data.marcador2)
        setTipoevento(res.data.tipoevento)
    }
    useEffect(() => {
        getBlogById()
    },[ ])
    return (

        <div className="login-form">
            <h2>Editar Eventos</h2>
            <Card style={{ width: '40rem' }}>
                <Card.Body>
                    <Form>
                        <div>
                            <label>fecha</label>
                            <Form.Control
                                value={fecha}
                                onChange={(e) => setFecha(e.target.value)}
                                type="text"
                            />
                        </div>
                        <div>
                            <label> equipo1</label>
                            <Form.Control
                                value={equipo1}
                                onChange={(e) => setEquipo1(e.target.value)}
                                type="text"
                            />
                        </div>
                        <div>
                            <label> equipo2</label>
                            <Form.Control
                                value={equipo2}
                                onChange={(e) => setEquipo2(e.target.value)}
                                type="text"
                            />
                        </div>
                        <div>
                            <label> marcador1 </label>
                            <Form.Control
                                value={marcador1}
                                onChange={(e) => setMarcador1(e.target.value)}
                                type="text"
                            />
                        </div>
                        <div>
                            <label> marcador2</label>
                            <Form.Control
                                value={marcador2}
                                onChange={(e) => setMarcador2(e.target.value)}
                                type="text"
                            />
                        </div>
                        <div >
                            <label > tipoevento</label>
                            <Form.Control
                                value={tipoevento}
                                onChange={(e) => setTipoevento(e.target.value)}
                                type="text"
                            />
                        </div>

                        <Button type="submit" onClick={update} >Actualizar</Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CompEditarEventos