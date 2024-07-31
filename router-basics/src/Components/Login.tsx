
const Login = () => {
    return (
        <div>
            <form className="flex flex-col items-center justify-center w-full"> 
                <label className="text-white font-bold text-lg text-center p-2 rounded-xl" htmlFor="username">User Name</label>
                <input className="bg-[#3e4566] h-11 border-2 w-[30%] focus:outline-none pl-1 text-gray-300 rounded-xl" type="text" id="username" />
                <label className="text-white font-bold text-lg text-center p-2 rounded-xl" htmlFor="password">Password</label>
                <input className="bg-[#3e4566] h-11 border-2 w-[30%] focus:outline-none pl-1 text-gray-300 rounded-xl" type="password" id="password" />
                <button className="mt-5 text-lg font-bold px-5 py-1 bg-white text-[#3e4566] rounded-xl border-2 border-white hover:bg-[#3e4566] hover:text-white duration-500">Login</button>
            </form>
        </div>
    )
}

export default Login