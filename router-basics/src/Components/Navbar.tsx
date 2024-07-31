import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="flex justify-center m-12">
            <ul className="flex flex-row space-x-11 text-white ">
                <li><NavLink className="hover:text-blue-500 duration-300 text-xl p-2 rounded-xl" to="/">Home</NavLink></li>
                <li><NavLink className="hover:text-blue-500 duration-300 text-xl p-2 rounded-xl" to="/about">About</NavLink></li>
                <li><NavLink className="hover:text-blue-500 duration-300 text-xl p-2 rounded-xl" to="/contact">Contact</NavLink></li>
                <li><NavLink className="hover:text-blue-500 duration-300 text-xl p-2 rounded-xl" to="/learn">Learn</NavLink></li>
                <li><NavLink className="hover:text-blue-500 duration-300 text-xl p-2 rounded-xl" to="/contribute">Contribute</NavLink></li>
                <li><NavLink className="hover:text-blue-500 duration-300 text-xl p-2 rounded-xl" to="/login">Login</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar