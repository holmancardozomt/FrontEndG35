import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import img1 from '../Img/Mundial1.jpg';

// URL MOSTRAR TODOS LOS EVENTOS DEPORTIVOS
const URI = 'http://localhost:8000/mostrareventos/'

export const CompMostrarEventos = () => {

   //ACÁ INICIA EL CÓDIGO QUE ENVÍA EL ENCABEZADO DEL TOKEN
    const token1 = localStorage.getItem("auth")
    const token = `${token1}`;
    const beer = "Bearer"
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'accept': 'application/json',
            //'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Njk0NjcxMzgsImV4cCI6MTY2OTQ2ODkzOH0.Dp0FfAN_taNOtPRhOGeAB7nQZvMvzVddPhN4TKb3JJo',
            'Authorization': `${beer} ${token}`,
        }
    };

  //ACÁ FINALIZA

    const [ceventos, setEventos] = useState([])

    useEffect(() => {
        ObtenerEventos()
    }, )


    //PROCEDIMIENTO PARA MOSTRAR TODOS LOS REGISTROS
    const ObtenerEventos = async () => {
        const res = await axios.get(URI, axiosConfig)
        setEventos(res.data)
    }

   //PROCEDIMIENTO PARA ELIMINAR UN REGISTRO
    const deleteEventos = async (id) => {
        await axios.delete(`${URI}${id}`)
        ObtenerEventos()
    }

    return (

        <div >
            <Link to="/crearevento" className='btn btn-primary mt-2 mb-2'>Crear Evento</Link>
            <center>
                <Card style={{ width: '60rem' }}>
                    <Card.Body>
                        <Card.Img src={img1} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Text>
                                <Table >
                                    <thead >
                                        <tr>
                                            <th>FECHA</th>
                                            <th>EQUIPO1</th>
                                            <th>EQUIPO2</th>
                                            <th>MARCADOR1</th>
                                            <th>MARCADOR2</th>
                                            <th>TIPOEVENTO</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {ceventos.map((blog) => (
                                            <tr key={blog._id}>
                                                <td > {blog.fecha} </td>
                                                <td > {blog.equipo1} </td>
                                                <td > {blog.equipo2} </td>
                                                <td > {blog.marcador1} </td>
                                                <td > {blog.marcador2} </td>
                                                <td > {blog.tipoevento} </td>
                                                <td>
                                                    <Link to={`/editareventos/${blog._id}`} >Editar</Link>
                                                    <Button type="submit" onClick={() => deleteEventos(blog._id)} >Delete</Button>

                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </Card.Text>
                        </Card.ImgOverlay>
                    </Card.Body>
                </Card>
            </center>
        </div>


    )

}

export default CompMostrarEventos