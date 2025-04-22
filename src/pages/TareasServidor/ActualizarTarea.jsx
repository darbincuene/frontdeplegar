import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';

function ActualizarTarea() {
    const { id } = useParams();
    const navega = useNavigate();
    const [tareaEditada, setTareaEditada] = useState({ titulo: "", descripcion: "", completada: false });

    useEffect(() => {
        console.log(id)
        axios.get(`https://express-2obu.onrender.com/tareas/${id}`)
            .then((response) => {
                setTareaEditada(response.data.tarea)
                console.log(response.data.tarea)
            })
            .catch((error) =>
                console.error("Error al obtener la tarea:", error)
            );
    }, [id]);

    const actualizarTarea = (e) => {
        e.preventDefault(); 
        axios.patch(`https://express-2obu.onrender.com/tareas/${id}`, tareaEditada)
            .then(() => {
                navega('/');
            })
            .catch((error) => {
                console.log(`Error al actualizar la tarea: ${error}`);
            });
    };

    return (
        <div>
            <form onSubmit={actualizarTarea}>
                <label>Título</label>
                <input
                    type="text"
                    value={tareaEditada.titulo}
                    onChange={(e) => setTareaEditada({ ...tareaEditada, titulo: e.target.value })}
                />
                <label>Descripción</label>
                <input
                    type="text"
                    value={tareaEditada.descripcion}
                    onChange={(e) => setTareaEditada({ ...tareaEditada, descripcion: e.target.value })}
                />
                <label>Completada</label>
                <input
                    type="checkbox"
                    checked={tareaEditada.completada}
                    onChange={(e) => setTareaEditada({ ...tareaEditada, completada: e.target.checked })}
                />
                <button type="submit">Actualizar Tarea</button>
            </form>
        </div>
    );
}

export default ActualizarTarea;
