import { NavLink } from "react-router-dom"

const Aside = () => {
    return (
        <div className="flex flex-col space-y-9">
            <div className="text-gray-800 font-semibold border-t-2 border-gray-800 pl-2">LEARN REACT</div>

            <NavLink className="text-white font-semibold hover:text-blue-500 duration-500 p-3 pr-16 rounded-xl" to="quick">Quick Start Page</NavLink>
            <NavLink className="text-white font-semibold hover:text-blue-500 duration-500 p-3 pr-16 rounded-xl" to="thinking-in-react">Thinking In React</NavLink>
            <NavLink className="text-white font-semibold hover:text-blue-500 duration-500 p-3 pr-16 rounded-xl" to="installation">Installation</NavLink>

        </div>
    )
}

export default Aside


