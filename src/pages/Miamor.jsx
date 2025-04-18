import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/paginaprincipal.css';

import { useEffect, useState } from 'react';

function Miamor() {
  const navigate = useNavigate();

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
      <div className="divmayor">

        <h1 className=" titulo">Tareas </h1>

        <button onClick={()=>navigate("/darbin")} >vamos a otra pagina</button>

        <div className="contenedorcards">
          {datos.map((tarea) => (
            <div key={tarea.id} className="card">
              <h2 className="">{tarea.titulo}</h2>
              <p className="">
                {tarea.descripcion ?? "Sin descripción"}
              </p>
              <p className="">
                {tarea.completada ? "Completada" : "Pendiente"}
              </p>
              <p className="">{tarea.fechaCreacion}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}


export default Miamor
