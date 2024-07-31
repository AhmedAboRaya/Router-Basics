import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "../Components/Home";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Layout from "../Components/Layout";
import LearnLayout from "../Pages/Learn/LearnLayout";
import Learn from "../Pages/Learn";
import QuickStart from "../Pages/Learn/QuickStart";
import Installation from "../Pages/Learn/Installation";
import Thinking from "../Pages/Learn/Thinking";
import Login from "../Components/Login";
import Contribute from "../Components/Contribute";
import ProtectRoute from "../Components/Auth/ProtectRoute";
import ErrorHandler from "../Components/Errors/ErrorHandler";

const isLoggedIn: boolean = true;
const userData: { email: string } | null = isLoggedIn ? { email:"email@gmail.com"} : null ;

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />} errorElement={<ErrorHandler />}>
        <Route index element={<Home /> } /> // If Home component is needed
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route
          path="login"
          element={
            <ProtectRoute isAllowed={!isLoggedIn} redirectPath="/contribute" data={userData} >
              <Login />
            </ProtectRoute>
          }
        />
        <Route
          path="contribute"
          element={
            <ProtectRoute isAllowed={isLoggedIn} redirectPath="/login">
              <Contribute />
            </ProtectRoute>
          }
        />
      </Route>

      <Route path="/learn" element={<LearnLayout />}>
        <Route index element={<Learn />} />
        <Route path="quick" element={<QuickStart />} />
        <Route path="installation" element={<Installation />} />
        <Route path="thinking-in-react" element={<Thinking />} />
      </Route>


      <Route path="*" element={<ErrorHandler title="Page Not Found" statusCode={404} />} />
    </>
  )
);

export default Router;
