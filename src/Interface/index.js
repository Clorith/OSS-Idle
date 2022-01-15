import './interface.css';
import Navigation from "./Navigation";
import { Route, Routes } from "react-router-dom";
import Main from "../Pages/Main";
import About from "../Pages/About";
import Code from "../Pages/Code";

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
                    <Route path="/">
                        <Route index={true} element={ <Main resources={ resources } feature={ feature } /> } />
                        <Route index={false} path="code" element={ <Code resources={ resources } setResources={ setResources } feature={ feature } setFeature={ setFeature } />} />
                        <Route index={false} path="about" element={ <About /> } />
                    </Route>
                </Routes>
            </div>
        </>
    )
}

export default Interface;
