import './interface.css';
import Navigation from "./Navigation";
import { Route, Routes } from "react-router-dom";
import Main from "../Pages/Main";
import About from "../Pages/About";

function Interface() {
    return (
        <>
            <Navigation/>
            <div id="wpcontent">
                <Routes>
                    <Route path="/" element={ <Main /> }>
                        <Route path="about" element={ <About /> } />
                    </Route>
                </Routes>
            </div>
        </>
    )
}

export default Interface;
