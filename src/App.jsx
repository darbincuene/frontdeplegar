import React from 'react'

import './App.css'
import "tailwindcss";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Miamor from './pages/Miamor.jsx'// import CrearTarea from './pages/crearTarea';
import Tarea from '../src/pages/TareasServidor/CrearTarea.jsx';
function App() {
    return (
      <>
       <Router>
        <Routes>
          {/* <Route path='=/tarea'element={<Tarea/>}></Route> */}
          
          <Route path='/darbin' element={<Tarea/>}></Route>
          <Route path='/craer/tarea' element={<Tarea/>}></Route>
          <Route path='/' element={<Miamor/>}></Route>

           {/*<Route path='/editar/tarea/:id' element={<EditarTarea/>}></Route>
          <Route path='/crear/tarea' element={<CrearTarea/>}></Route> */}
        </Routes>
       </Router>
      </>
    )
  }

  export default App;
