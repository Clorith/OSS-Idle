import './interface.css';
import Navigation from "./Navigation";
import { Route, Routes } from "react-router-dom";
import Main from "../Pages/Main";
import About from "../Pages/About";

function Interface( props ) {
    const {
        resources,
        setResources,
        feature,
        setFeature
    } = props;

    return (
        <>
            <Navigation feature={ feature }/>

            <div id="content">
                <Routes>
                    <Route path="/" element={ <Main resources={ resources } setResources={ setResources } feature={ feature } setFeature={ setFeature } /> }>
                        <Route path="about" element={ <About /> } />
                    </Route>
                </Routes>
            </div>
        </>
    )
}

export default Interface;
