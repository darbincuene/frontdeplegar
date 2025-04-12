import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios';
import '../css/editar.css';

function EditarTarea() {
    const { id } = useParams();//es un hook que no permite acceder a los parametros de la url
    const navigate = useNavigate();//es un hook que nos permite navegar de una pagina a otra
    const [tareaEditada, setTareaEditada] = useState({ titulo: "", descripcion: "", estado: "" })

    useEffect(() => { //se ejecuta na vez tengamos el id de la tarea
        axios.get(`http://localhost:12345/tarea/${id}`)//se hace un peticion get con el id correspondiente de la tarea
            .then((response) => {
                // console.log("Datos recibidos:", response.data); 
                setTareaEditada(response.data[0]); //recibe los datos y los guarda en tareaEditada response.data es un array por eso ingresamos al 0
            })
            .catch((error) => console.error("Error al obtener la tarea:", error));
    }, [id]);


    const actualizarTarea = () => {
        axios.patch(`http://localhost:12345/tarea/${id}`, tareaEditada)//hace una peticion patch para actualizar la tarea   tareaEditada contiene el titulo,descripcion estado modificados
            .then(() => {
                navigate('/')
            })
            .catch((error) => console.error('error al actualizar la tarea :', error))
    }
    return (
        <>
            <div className=' grid place-items-center min-h-screen'>    {tareaEditada ? ( // Solo renderiza si los datos existen
                <div className=" p-4 flex flex-col shadow-md  gap-4 rounded-md w-full max-w-xl">
                    <h2 className="text-2xl font-bold">Editar Tarea</h2>
                    <input
                        type="text"
                        className="border rounded p-2  w-full mb-2 color-black"
                        value={tareaEditada.titulo}
                        onChange={(e) => setTareaEditada({ ...tareaEditada, titulo: e.target.value })}
                    />
                    <textarea
                        className="border rounded w-full p-2 mb-2"
                        value={tareaEditada.descripcion}
                        onChange={(e) => setTareaEditada({ ...tareaEditada, descripcion: e.target.value })}
                    />
                    <select
                        className="border rounded w-full p-2 mb-2"
                        value={tareaEditada.estado}
                        onChange={(e) => setTareaEditada({ ...tareaEditada, estado: e.target.value })}
                    >
                        <option value="pendiente">Pendiente</option>
                        <option value="completada">Completada</option>
                    </select>
                    <div className='flex justify-center'>
                    <button
                        className="bg-blue-700 text-white w-62 px-4 py-2 rounded hover:bg-green-700"
                        onClick={actualizarTarea}
                    >
                        Guardar cambios
                    </button>
                    </div>
                </div>
            ) : (
                <p>Cargando tarea...</p>
            )}
            </div>
        </>
    );

}

export default EditarTarea
