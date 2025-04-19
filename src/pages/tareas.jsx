import React from 'react'
import '../App.css'
import "tailwindcss";

import axios from 'axios';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Tareas() {
    const navigate=useNavigate();
    
    const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:12345/tarea")
      .then((response) => {
        setData(response.data); //guarda los datos en el estado

      })
      .catch((error) => {
        console.error("error al obtener los datos :", error)
      })

  }, []);




    const eliminarTarea = (id) => {
        axios.delete(`http://localhost:12345/tarea/${id}`)
            .then(() => {
                setData(data.filter((tarea) => tarea.id !== id));
            })
            .catch((error) => {
                console.error("error al eliminar la tarea :", error);
            })
    }
    
    return (
        <>
            <div class="py-8 px-8">
                <button onClick={()=>navigate(`/crear/tarea`)} className='bg-blue-800 hover:bg-green-700 text-white  px-4 rounded-3xl cursor-pointer'>Crear tarea</button>
                <h1 className='flex justify-center py-8 font-mono text-6xl'>Tareas</h1>
                <div className='grid grid-cols-3 gap-4 '>

                    {data.map((tarea) => (
                        <div key={tarea.id} className='bg-amber-950 px-8 py-8 rounded-3xl'>
                            <h2 className='flex justify-center px-4 py-4 text-white'>{tarea.titulo}</h2>
                            <p className='flex justify-center px-4 py-4 text-white '>{tarea.descripcion ?? "sin descripcion"}</p>
                            <p className='flex justify-center px-4 py-4 text-white'>{tarea.descripcion ?? "sin descripcion"}</p>
                            <p className='flex justify-center px-4 py-4 text-white'>{tarea.estado}</p>
                            <p className='flex justify-center px-4 py-4 text-white'>{tarea.fecha_creacion}</p>
                            <div className='flex justify-center gap-4'>
                                <button onClick={() => eliminarTarea(tarea.id)} className='bg-red-200  px-4 rounded-3xl cursor-pointer'>Eliminar</button>
                                <button onClick={() =>navigate(`/editar/tarea/${tarea.id}`)} className='bg-red-200  px-4 rounded-3xl cursor-pointer'>Actualizar</button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )


}

export default Tareas;

