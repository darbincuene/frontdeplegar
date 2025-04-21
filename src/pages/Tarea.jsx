import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/paginaprincipal.css";

import { useEffect, useState } from "react";

function Miamor() {
  const navigate = useNavigate();

  const [datos, setData] = useState([]);

  const eliminarTarea = (_id) => {
    axios.delete(`https://express-2obu.onrender.com/tareas/${_id}`)
    .then(() => {
      setData(datos.filter((tarea) => tarea._id !== _id));
    })
    .catch((error) => {
      console.error("error al eliminar la tarea :", error);
    });
  };

  useEffect(() => {
    axios
      .get("https://express-2obu.onrender.com/tareas")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("error al obtener los datos :", error);
      });
  }, []);

  return (
    <>
      <div className="divmayor">
        <h1 className=" titulo">Tareas </h1>
        <button onClick={() => navigate("/craer/tarea")}>Crear Tarea</button>

        <div className="contenedorcards">
          {datos.map((tarea) => (
            <div key={tarea._id} className="card">
              <h2 className="">{tarea.titulo}</h2>
              <p className="">{tarea.descripcion ?? "Sin descripción"}</p>
              <p className="">
                {tarea.completada ? "Completada" : "Pendiente"}
              </p>
              <p className="">{tarea.fechaCreacion}</p>
              <button onClick={() => eliminarTarea(tarea._id)}>Eliminar</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Miamor;
