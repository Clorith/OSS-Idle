import './interface.css';
import Navigation from "./Navigation";
import { Route, Routes } from "react-router-dom";
import Main from "../Pages/Main";
import About from "../Pages/About";
import Code from "../Pages/Code";
import Release from "../Pages/Release";
import DevTools from "../Pages/Devtools";

import * as Settings from "../config";

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
                        <Route index={false} path="release" element={ <Release resources={ resources } setResources={ setResources } feature={ feature } setFeature={ setFeature } /> } />
                        <Route index={false} path="about" element={ <About /> } />

                        {Settings.debugMode &&
                            <Route index={false} path="devtools" element={<DevTools feature={feature} setFeature={setFeature} resources={resources} setResources={setResources}/>}/>
                        }
                    </Route>
                </Routes>
            </div>
        </>
    )
}

export default Interface;
