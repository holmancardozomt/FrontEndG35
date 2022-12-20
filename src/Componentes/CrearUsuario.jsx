//ACÁ IMPORTAMOS LAS LIBRERÍA A UTILIZAR EN NUESTRO COMPONENTE

// PARA CONECTARNOS CON NUESTRO SERVIDOR DE BACKEND
import axios from 'axios'

//CAMBIAR EL ESTADO DE NUESTRAS CAJAS DE TEXTO INPUTS
import { useState } from 'react'

//PARA NAVEGAR POR LAS RUTAS 
import { useNavigate } from 'react-router-dom'

//MAQUILLAJE BOOTSTRAP
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

//ACÁ FINALIZA**********LA IMPORTACIÓN

// URL DE LA DIRECCIÓN DE MI SERVIDOR DE BACKEND
const URI = 'http://localhost:8000/regusuario/'

export const CompCrearUsuario = () => {

    //ESCRIBIMOS NUESTRO CÓDIGO DE GUARDAR INFORMACIÓN DEL USUARIO

    //DEFINIR NUESTRAS VARIABLES A UTILIZAR

    const [nomuser, setUsuario] = useState('')
    const [correo, setCorreo] = useState('')
    const [password, setPass] = useState('')
    const navigate = useNavigate()

    //PARA GUARDAR LA INFORMACIÓN EN LA BASE DE DATOS
    var guardar = async (e) => {

        e.preventDefault()
        await axios.post(URI, {
            correo: correo,
            nomuser: nomuser,
            password: password
        })
        navigate('/usuarios')
    }

    return (

        <div className="login-form" >

            <Card style={{ width: '20rem' }}>
                <center>
                    <Card.Body>
                        <Card>
                            <h3> Creacion de Usuario</h3>
                            <Form>
                                <Form.Group className="mb-3" >
                                    <div>
                                        <Form.Control
                                            value={nomuser}
                                            onChange={(e) => setUsuario(e.target.value)}
                                            type="text"
                                            placeholder='Ingrese su nombre'
                                        />
                                    </div>
                                    <div>
                                        <Form.Control
                                            value={correo}
                                            onChange={(e) => setCorreo(e.target.value)}
                                            type="email"
                                            placeholder='Ingrese su Email'
                                        />
                                    </div>
                                    <div>
                                        <Form.Control
                                            value={password}
                                            onChange={(e) => setPass(e.target.value)}
                                            type="password"
                                            placeholder='Ingrese su Password'
                                        />
                                    </div>
                                    <Button type="submit" onClick={guardar} variant="outline-success"> Guardar</Button>
                                </Form.Group>
                            </Form>
                        </Card>
                    </Card.Body>
                </center>
            </Card>

        </div>

    )

}

export default CompCrearUsuario