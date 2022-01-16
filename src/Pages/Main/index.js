import './postbox.css';
import {Link, NavLink} from "react-router-dom";
import Hero from "../../Interface/Components/Hero";

function Main( { resources, feature } ) {
    const {
        linesOfCode,
        contributors,
        sponsors
    } = resources;

    return (
        <>
            <Hero title="Welcome to OSS Idle">
                <p className="about-description">Open Source Software Idle will give you an appreciation for all the aspects that play into the creation, and maintenance, of open source software.</p>
                <p className="about-description">Start writing code, and watch your project grow!</p>

                <div className="hero-box-column-container">
                    <div className="hero-box-column">
                        <h3>Get Started</h3>
                        <NavLink to="/code" className="button button-primary button-hero">
                            Go write some code
                        </NavLink>
                    </div>

                    <div className="hero-box-column">
                        <h3>Next Steps</h3>
                        <ul>
                            <li>
                                <Link to="/code">Start writing code</Link>
                            </li>
                            <li>
                                Earn sponsors
                            </li>
                            <li>
                                Encourage others to contribute
                            </li>
                            <li>
                                Grow your platform
                            </li>
                        </ul>
                    </div>

                    <div className="hero-box-column">
                        <h3>More Actions</h3>
                        <ul>
                            <li>
                                Something
                            </li>
                            <li>
                                More stuff
                            </li>
                            <li>
                                More stuff
                            </li>
                            <li>
                                More stuff
                            </li>
                        </ul>
                    </div>
                </div>
            </Hero>

            <div className="postbox ">
                <div className="postbox-header">
                    <h2>At a Glance</h2>
                </div>
                <div className="inside">
                    <div className="main">
                        <ul>
                            <li>{ linesOfCode } Lines of code</li>
                            {feature?.contributors &&
                                <li>{ contributors } Contributors</li>
                            }
                            {feature?.sponsors &&
                                <li>{ sponsors } Sponsors</li>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main;
