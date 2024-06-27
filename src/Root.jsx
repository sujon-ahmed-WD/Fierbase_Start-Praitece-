import { Outlet } from "react-router-dom";
import Header from "./Pages/Header";

 
const Root = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default Root;