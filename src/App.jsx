import React from 'react'

import './App.css'
import "tailwindcss";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import TodasTareas from '../src/pages/Tarea.jsx'
import Tarea from '../src/pages/TareasServidor/CrearTarea.jsx';
function App() {
    return (
      <>
       <Router>
        <Routes>
          
          <Route path='/crear/tarea' element={<Tarea/>}></Route>
          <Route path='/' element={<TodasTareas/>}></Route>

           {/*<Route path='/editar/tarea/:id' element={<EditarTarea/>}></Route>
          <Route path='/crear/tarea' element={<CrearTarea/>}></Route> */}
        </Routes>
       </Router>
      </>
    )
  }

  export default App;
