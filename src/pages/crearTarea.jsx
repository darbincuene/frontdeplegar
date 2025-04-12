import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios';

function CrearTarea() {
  const navigate = useNavigate();

  const [titulo,setTitulo]=useState('');
  const [Descripcion,setDescripcion]=useState('');
  const [estado,setEstado]=useState('');

  const enviarDatos=async (e)=>{
    e.preventDefault();
    try{
       const datos=await axios.post(`http://localhost:12345/tarea`,{
        titulo:titulo,
        descripcion:Descripcion,
        estado:estado,
        
      }
    );
    console.log(datos);

      navigate('/')


    } catch(error){
      alert('error al crear la tarea', error)
      console.log(error);
    }
  }




  return (
    <>
      <div className='grid place-items-center m-18 min-h-screen'>
        <div className=' p-4 flex justify-center shadow-md  rounded-md w-full max-w-xl'>

























          <form action="" onSubmit={enviarDatos} className='flex flex-col gap-8'>
            <label htmlFor="">Titulo</label>
            <input value={titulo} onChange={(e)=>setTitulo(e.target.value)} type="text" className='border rounded p-2  w-full mb-2 color-black' />
            <label htmlFor="">Descripción</label>
            <input value={Descripcion} onChange={(e)=>setDescripcion(e.target.value)} type="text" className='border rounded p-2  w-full mb-2 color-black' />
            <label htmlFor="">Estado: <select value={estado} onChange={(e)=>setEstado(e.target.value)} name="" id=""> 
              <option value="pendiente">Pendiente</option>
              <option value="completada">Completada</option></select>
            </label>
            <button type='submit'> crear tarea</button>


          </form>
        </div>

      </div>
    </>
  )
}

export default CrearTarea
