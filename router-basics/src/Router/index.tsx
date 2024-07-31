import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Home from "../Pages/Home"
import About from "../Pages/About"
import Contact from "../Pages/Contact"
import Layout from "../Pages/Layout"

const Router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />  // If Home component is needed
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
        </Route>
    )
)


export default Router
