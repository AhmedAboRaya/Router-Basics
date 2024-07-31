import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="flex justify-center m-12">
            <ul className="flex flex-row space-x-11 text-white ">
                <li><NavLink className="hover:text-blue-500 duration-300 text-xl" to="/">Home</NavLink></li>
                <li><NavLink className="hover:text-blue-500 duration-300 text-xl" to="/about">About</NavLink></li>
                <li><NavLink className="hover:text-blue-500 duration-300 text-xl" to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar