import { useLocation } from "react-router"

const Contribute = () => {

    const {state} = useLocation();
    console.log(state);
    
    return (
        <form className="justify-center items-center flex flex-col">
            <h1 className="text-white font-bold p-2">{state.email}</h1>
            <label className="text-white font-bold p-2" htmlFor="textarea">Put Your Contribute🐍</label>
            <textarea className="bg-[#3e4566] border-2 w-[30%] focus:outline-none pl-1 text-gray-300 rounded-xl " id="textarea"></textarea>
            <button className="mt-5 text-lg font-bold px-5 py-1 bg-white text-[#3e4566] rounded-xl border-2 border-white hover:bg-[#3e4566] hover:text-white duration-500">Submit</button>
        </form>
    )
}

export default Contribute