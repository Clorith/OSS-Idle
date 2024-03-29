import {useState} from "react";
import Hero from "../../Interface/Components/Hero";

import './code.css';
import * as SampleCodes from "./sample-code";
import * as Settings from "../../config";
import Notice from "../../Interface/Notice";

function Code( { resources, setResources, feature, setFeature } ) {
    const {
        linesOfCode,
        filesWritten,
        sponsors
    } = resources;

    const [ disableCodeWriting, setDisableCodeWriting ] = useState( false );
    const sampleCodeLines = SampleCodes.WordPressAbout.split( '\n' );

    const [ writtenSampleCodeLine, setWrittenSampleCodeLine ] = useState( -1 );

    let nextCodeLineToWrite = writtenSampleCodeLine;

    const updateCode = () => {
        const terminal = document.getElementById( 'terminal' );
        let newResource = linesOfCode + 1;

        nextCodeLineToWrite++;

        // Reset the terminal if a full file has been written.
        if ( nextCodeLineToWrite >= sampleCodeLines.length ) {
            setResources( { filesWritten: ( Number.isInteger( filesWritten ) ? filesWritten + 1 : 1 ) } )
            setFeature( { release: true } );

            nextCodeLineToWrite = 0;
            terminal.value = '';
        }
        terminal.value += '\n' + sampleCodeLines[ nextCodeLineToWrite ];
        terminal.scrollTop = terminal.scrollHeight;

        setWrittenSampleCodeLine( nextCodeLineToWrite );

        if ( linesOfCode > Settings.baseBurnoutDelay && ( !feature.sponsors || ( feature.sponsors && sponsors < 100 ) ) ) {
            let clickDelay = Settings.initialInspirationLines; // Click-delay is 1 second by default, and reduced with sponsorships, until you can work full time on the project.
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
                <Hero title="Writing code">
                    <p className="about-description">
                        Start writing code for your project, hit the button, and watch the magic!
                    </p>

                    {!feature.sponsors && linesOfCode > Settings.baseBurnoutDelay &&
                        <p className="about-description">
                            You are spending your free time writing code, and your availability is limited.
                        </p>
                    }
                    {!feature.sponsors && linesOfCode < Settings.baseBurnoutDelay &&
                        <p className="about-description">
                            You are spending your free time writing code, but your initial excitement helps fuel your productivity!
                        </p>
                    }
                    {feature.sponsors &&
                        <p className="about-description">
                            Your work has earned some recognition, and { resources.sponsors } sponsors are helping to cover x% of your salary so you can continue working on the project.
                        </p>
                    }
                </Hero>

                <span className="lines-of-code">
                    { resources.linesOfCode }
                </span>

                <div className="actions">
                    <button className="button button-primary button-hero" onClick={ updateCode } disabled={ disableCodeWriting }>Write some code</button>
                </div>

                <Notice type="warning">
                    <p>
                        Remember to finish writing your file before leaving, or you may end up re-writing your code!
                    </p>
                </Notice>
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
