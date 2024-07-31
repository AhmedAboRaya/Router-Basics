import { Outlet } from "react-router"
import Navbar from "../../Components/Navbar"
import Aside from "./LearnAside"

const LearnLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <div className="float-left ml-7">
                <Aside />
            </div> 
        </>
    )
}

export default LearnLayout