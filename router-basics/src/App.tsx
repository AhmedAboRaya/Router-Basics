import { RouterProvider } from 'react-router-dom'
import Router from './Router'
import Navbar from './Components/Navbar'
import Login from './Components/Login'


function App() {
  return (
    <>
        <RouterProvider router={Router} />
    </>
  )
}

export default App
