import React from 'react';import axios from 'axios';
import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

function Tarea() {

    const [datos, setData] = useState([]);

    useEffect(() => {
        axios.get("https://express-2obu.onrender.com/tareas")
            .then((response) => {
                setData(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error("error al obtener los datos :", error)
            })
    }, []);

    return (

        <>
        <div className="py-8 px-8">
          <h1 className="text-center py-8 font-mono text-6xl">Tareas </h1>
  
  
          <div className="grid grid-cols-3 gap-4">
            {datos.map((tarea) => (
              <div key={tarea.id} className="bg-amber-950 px-8 py-8 rounded-3xl">
                <h2 className="text-center px-4 py-4 text-white">{tarea.titulo}</h2>
                <p className="text-center px-4 py-4 text-white">
                  {tarea.descripcion ?? "Sin descripción"}
                </p>
                <p className="text-center px-4 py-4 text-white">
                  {tarea.completada ? "Completada" : "Pendiente"}
                </p>
                <p className="text-center px-4 py-4 text-white">{tarea.fechaCreacion}</p>
              </div>
            ))}
          </div>
        </div>
      </>
    )
}

export default Tarea
