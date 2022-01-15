import './App.css';
import Interface from "./Interface";
import {BrowserRouter} from "react-router-dom";
import {useState} from "react";

import { getResources } from './Data/resources';

function App() {
    const [ resources, setResources ] = useState( getResources() );

    return (
        <BrowserRouter>
            <Interface
                resources={ resources }
                setResources={ setResources }
            />
        </BrowserRouter>
    );
}

export default App;
