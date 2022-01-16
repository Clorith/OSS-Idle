import './navigation.css';
import {Link} from "react-router-dom";

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
                            <div className="menu-name">
                                Dashboard
                            </div>
                        </Link>
                    </li>
                    {feature?.plugins &&
                        <li className={ isActiveRoute( '/plugins' ) ? 'menu-open' : '' }>
                            <Link to="/plugins">
                                <div className="menu-name">
                                    Plugins
                                </div>
                            </Link>
                        </li>
                    }
                    {feature?.release &&
                        <li className={ isActiveRoute( '/release' ) ? 'menu-open' : '' }>
                            <Link to="/release">
                                <div className="menu-name">
                                    Releases
                                </div>
                            </Link>
                        </li>
                    }
                    <li className="menu-separator" aria-hidden="true"/>
                    <li className={ isActiveRoute( '/about' ) ? 'menu-open' : '' }>
                        <Link to="/about">
                            <div className="menu-name">
                                About
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;
