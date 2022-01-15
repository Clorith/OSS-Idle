import './navigation.css';
import {Link} from "react-router-dom";

function Navigation() {
    return (
        <div className="adminmenumain" role="navigation" aria-label="Main menu">
            <div id="adminmenuwrap">
                <ul id="adminmenu">
                    <li className="wp-menu-open">
                        <Link to="/">
                            <div className="wp-menu-name">
                                Dashboard
                            </div>
                        </Link>
                    </li>
                    <li className="wp-menu-separator" aria-hidden="true"/>
                    <li>
                        <Link to="/about">
                            <div className="wp-menu-name">
                                About
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation;
