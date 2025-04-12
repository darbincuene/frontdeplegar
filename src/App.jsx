import './App.css'
import "tailwindcss";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Tareas from './pages/TareasServidor/Tarea.jsx'// import EditarTarea from './pages/editarTarea'
import Miamor from './pages/Miamor.jsx'// import CrearTarea from './pages/crearTarea';
function App() {
    return (
      <>
       <Router>
        <Routes>
          {/* <Route path='=/tarea'element={<Tarea/>}></Route> */}
          
          <Route path='/tareas' element={<Tareas/>}></Route>
          <Route path='/' element={<Miamor/>}></Route>

           {/*<Route path='/editar/tarea/:id' element={<EditarTarea/>}></Route>
          <Route path='/crear/tarea' element={<CrearTarea/>}></Route> */}
        </Routes>
       </Router>
      </>
    )
  }

  export default App;
