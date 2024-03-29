import './App.css';
import Interface from "./Interface";
import {BrowserRouter} from "react-router-dom";
import {useEffect, useReducer} from "react";
import maybeAddContributor from "./Schedulers/contributor";
import maybeAddUser from "./Schedulers/user";

function App() {
    const defaultResources = () => {
        const hasExistingResources = window.localStorage.getItem( 'resources' );

        return null !== hasExistingResources
            ? JSON.parse( hasExistingResources )
            : {
                linesOfCode: 0,
                filesWritten: 0,
                contributors: 0,
                dependencies: 0,
                sponsors: 0,
                versions: 0,
                plugins: 0,
                users: 0
            }
    }

    const [ resources, setResources ] = useReducer(
        ( state, action ) => ( { ...state, ...action } ),
        defaultResources()
    )

    useEffect( () => {
        window.localStorage.setItem( 'resources', JSON.stringify( resources ) )
    }, [ resources ] );

    const defaultFeature = () => {
        const hasExistingFlags = window.localStorage.getItem( 'feature' )

        return null !== hasExistingFlags
            ? JSON.parse( hasExistingFlags )
            : {
                users: false,
                release: false,
                plugins: false,
                sponsors: false,
                contributors: false,
                dependencies: false
            };
    }

    const [ feature, setFeature ] = useReducer(
        ( state, action ) => ( { ...state, ...action } ),
        defaultFeature()
    )

    useEffect( () => {
        window.localStorage.setItem( 'feature', JSON.stringify( feature ) )
    }, [ feature ] );

    useEffect( () => {
        const incrementContributors = setInterval(
            () => {
                maybeAddContributor( feature, resources, setResources );
            },
            1000
        );

        return () => clearInterval( incrementContributors );
    }, [ feature, resources ] );

    useEffect( () => {
        const incrementUsers = setInterval(
            () => {
                maybeAddUser( feature, resources, setResources );
            },
            1000
        );

        return () => clearInterval( incrementUsers );
    }, [ feature, resources ] );

    return (
        <BrowserRouter>
            <Interface
                resources={ resources }
                setResources={ setResources }
                feature={ feature }
                setFeature={ setFeature }
            />
        </BrowserRouter>
    );
}

export default App;
