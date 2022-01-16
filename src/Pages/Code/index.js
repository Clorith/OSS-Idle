import {useState} from "react";

import './code.css';
import * as SampleCodes from "./sample-code";

function Code( { resources, setResources, feature } ) {
    const {
        linesOfCode,
        sponsors
    } = resources;

    const [ disableCodeWriting, setDisableCodeWriting ] = useState( false );
    const sampleCodeLines = SampleCodes.WordPressAbout.split( '\n' );

    const [ writtenSampleCodeLine, setWrittenSampleCodeLine ] = useState( 0 );

    const updateCode = () => {
        const terminal = document.getElementById( 'terminal' );
        let newResource = linesOfCode + 1;

        // Reset the terminal if a full file has been written.
        if ( writtenSampleCodeLine >= sampleCodeLines.length ) {
            setWrittenSampleCodeLine( 0 );
            terminal.value = '';
        }
        terminal.value += '\n' + sampleCodeLines[ writtenSampleCodeLine ];
        terminal.scrollTop = terminal.scrollHeight;
        setWrittenSampleCodeLine( writtenSampleCodeLine+1 );

        if ( linesOfCode > 10000 && ( !feature.sponsors || ( feature.sponsors && sponsors < 100 ) ) ) {
            let clickDelay = 1000; // Click-delay is 1 second by default, and reduced with sponsorships, until you can work full time on the project.
            let delayReduction = sponsors > 0 ? sponsors * 10 : 10;

            clickDelay = clickDelay - delayReduction;

            setDisableCodeWriting( true );
            setTimeout(
                () => {
                    setDisableCodeWriting( false )
                },
                clickDelay
            );
        }

        setResources( { linesOfCode: newResource } );
    }

    return(
        <div id="code-screen">
            <div className="left-side">
                <div className="hero-box">
                    <div className="hero-box-content">
                        <h2>Writing code</h2>

                        <p className="about-description">
                            Start writing code for your project, hit the button, and watch the magic!
                        </p>

                        {!feature.sponsors && linesOfCode > 10000 &&
                            <p className="about-description">
                                You are spending your free time writing code, and your availability is limited.
                            </p>
                        }
                        {!feature.sponsors && linesOfCode < 10000 &&
                            <p className="about-description">
                                You are spending your free time writing code, but your initial excitement helps fuel your productivity!
                            </p>
                        }
                        {feature.sponsors &&
                            <p className="about-description">
                                Your work has earned some recognition, and { resources.sponsors } sponsors are helping to cover x% of your salary so you can continue working on the project.
                            </p>
                        }
                    </div>
                </div>

                <span className="lines-of-code">
                    { resources.linesOfCode }
                </span>

                <div className="actions">
                    <button className="button button-primary button-hero" onClick={ updateCode } disabled={ disableCodeWriting }>Write some code</button>
                </div>
            </div>

            <div className="right-side">
                <textarea id="terminal"
                      defaultValue="Terminal source: https://github.com/WordPress/WordPress/blob/0bc24dd81fa62176e0f38072204aecff289cb31a/wp-admin/about.php"
                />
            </div>
        </div>
    )
}

export default Code;
