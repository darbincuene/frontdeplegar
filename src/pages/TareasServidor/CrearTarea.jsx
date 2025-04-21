import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';

function CrearTarea() {
    const navegar = useNavigate();

    const [titulo, setTitulo] = useState('');
    const [descripcion, setdescripcion] = useState('');
    const [completada, setcompletada] = useState(false);

    const enviarTareas = async (e) => {
        e.preventDefault();
        try {
            const respuesta = await axios.post(`https://express-2obu.onrender.com/tareas`, {
                titulo: titulo,
                descripcion: descripcion,
                completada: completada
            });
            console.log(respuesta);
            navegar('/')
        } catch (error) {
            console.log(error);
            alert('error al crear la tarea', error)
        }
    }

    return (
        <>
            <div>
                <div>
                    <form action="" onSubmit={enviarTareas}>
                    <label htmlFor="">titulo</label>
                    <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />

                    <label htmlFor="">descripción</label>
                    <input type="text" value={descripcion} onChange={(e) => setdescripcion(e.target.value)} />

                    <label htmlFor="">Completada</label>
                    <input
                        type="checkbox"
                        checked={completada}
                        onChange={(e) => setcompletada(e.target.checked)}
                    />



                    <button type='submit'>crear Tarea</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default CrearTarea
