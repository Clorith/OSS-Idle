import './navigation.css';
import {Link} from "react-router-dom";

import * as Settings from "../../config";

import ApiIcon from '@mui/icons-material/Api';
import HomeIcon from '@mui/icons-material/Home';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import ExtensionIcon from '@mui/icons-material/Extension';
import PaidIcon from '@mui/icons-material/Paid';
import InfoIcon from '@mui/icons-material/Info';

function Navigation( props ) {
    const {
        feature
    } = props;

    const isActiveRoute = ( path ) => {
        return document.location.pathname === path;
    }

    return (
        <nav role="navigation" aria-label="Main menu">
            <div id="menuwrap">
                <ul id="menu">
                    <li className={ isActiveRoute( '/' ) ? 'menu-open' : '' }>
                        <Link to="/">
                            <div className="menu-icon">
                                <HomeIcon />
                            </div>
                            <div className="menu-name">
                                Dashboard
                            </div>
                        </Link>
                    </li>
                    {feature?.release &&
                        <li className={ isActiveRoute( '/release' ) ? 'menu-open' : '' }>
                            <Link to="/release">
                                <div className="menu-icon">
                                    <NewReleasesIcon />
                                </div>
                                <div className="menu-name">
                                    Releases
                                </div>
                            </Link>
                        </li>
                    }
                    {feature?.plugins &&
                        <li className={ isActiveRoute( '/plugins' ) ? 'menu-open' : '' }>
                            <Link to="/plugins">
                                <div className="menu-icon">
                                    <ExtensionIcon />
                                </div>
                                <div className="menu-name">
                                    Plugins
                                </div>
                            </Link>
                        </li>
                    }
                    {feature?.sponsors &&
                        <li className={ isActiveRoute( '/sponsors' ) ? 'menu-open' : '' }>
                            <Link to="/sponsors">
                                <div className="menu-icon">
                                    <PaidIcon />
                                </div>
                                <div className="menu-name">
                                    Sponsors
                                </div>
                            </Link>
                        </li>
                    }
                    <li className="menu-separator" aria-hidden="true"/>
                    <li className={ isActiveRoute( '/about' ) ? 'menu-open' : '' }>
                        <Link to="/about">
                            <div className="menu-icon">
                                <InfoIcon />
                            </div>
                            <div className="menu-name">
                                About
                            </div>
                        </Link>
                    </li>
                    {Settings.debugMode &&
                        <>
                            <li className="menu-separator" aria-hidden="true" />
                            <li className={ isActiveRoute( '/devtools' ) ? 'menu-open' : '' }>
                                <Link to="/devtools">
                                    <div className="menu-icon">
                                        <ApiIcon />
                                    </div>
                                    <div className="menu-name">
                                        Developer Tools
                                    </div>
                                </Link>
                            </li>
                        </>
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;
