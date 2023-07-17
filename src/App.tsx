import { Route, createRoutesFromElements } from "react-router-dom";
import Admin from "./components/admin";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Mainpage from "./pages/Mainpage";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/admin/ds/home";
import Pay from "./components/admin/ds/pay";
import PayFail from "./components/admin/ds/payFail";
import Paypage from "./components/admin/ds/paypage";
import Form from "./components/admin/ds/Form";

const router = createBrowserRouter(
  createRoutesFromElements(
    // <Route path="/" element={<Root />}>
    //   <Route path="dashboard" element={<Dashboard />} />
    //   <Route path="about" element={<About />} />
    // </Route>
    <>
      <Route path="/" element={<Mainpage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Admin />} />
      <Route path="/home" element={<Home />} />
      <Route path="/pay" element={<Pay />} />
      <Route path="/payFail" element={<PayFail />} />
      <Route path="/paypage" element={<Paypage />} />
      <Route path="/form" element={<Form />} />
    </>
  )
);


const App = () => {
  return <div className="">
 
 <RouterProvider router={router} />
  </div>;
};

export default App;
