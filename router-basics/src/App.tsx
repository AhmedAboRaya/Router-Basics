import { RouterProvider } from 'react-router-dom'
import Router from './Router'
import Navbar from './Pages/Navbar'


function App() {
  return (
    <>
        <RouterProvider router={Router} />
    </>
  )
}

export default App
