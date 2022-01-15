import './postbox.css';
import './trigger.css';

function Main( { resources, setResources, feature, setFeature } ) {
    const {
        linesOfCode,
        contributors,
        dependencies,
        sponsors,
        plugins
    } = resources;

    const updateCode = () => {
        let newResource = linesOfCode + 1;

        if ( newResource >= 10 ) {
            setFeature( { contributors: true } );
        }

        setResources( { linesOfCode: newResource } );
    }

    return (
        <>
            <div id="welcome-panel" className="welcome-panel">
                <div className="welcome-panel-content">
                    <h2>Welcome to OSS Idle!</h2>
                    <p className="about-description">Open Source Software Idle will give you an appreciation for all the aspects that play into the creation, and maintenance, of open source software.</p>
                    <p className="about-description">Start writing code, and watch your project grow!</p>

                    <div className="welcome-panel-column-container">
                        <div className="welcome-panel-column">
                            <h3>Get Started</h3>
                            <button className="button button-primary button-hero" onClick={ updateCode }>Write some code</button>
                        </div>

                        <div className="welcome-panel-column">
                            <h3>Next Steps</h3>
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

                        <div className="welcome-panel-column">
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
                </div>
            </div>

            <div className="postbox ">
                <div className="postbox-header">
                    <h2>At a Glance</h2>
                </div>
                <div className="inside">
                    <div className="main">
                        <ul>
                            <li>{ linesOfCode } Lines of code</li>
                            {feature?.contributors &&
                                <li>0 Contributors</li>
                            }
                            {feature?.sponsors &&
                                <li>0 Sponsors</li>
                            }
                            <li>0% Marketshare</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main;
