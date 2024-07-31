import Navbar from "../Pages/Navbar"
import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default Layout

