import Hero from "../../Interface/Components/Hero";

function Release( { resources, setResources, setFeature } ) {
    const createRelease = () => {
        const currentVersion = resources?.versions;
        let newVersion = ( Number.isInteger( currentVersion ) ? ( currentVersion + 1 ) : 1 );

        setResources( { versions: newVersion } );
        setFeature( { contributors: true } );
    }

    return (
        <>
            <Hero title="Creating a release">
                <p>
                    Releases are what drive a project to grow, without them you won't attract new contributors, or gain new users.
                </p>

                <p>
                    A release should not be done for the sake of pushing releases, which may lead to upgrade fatigue in users, so make sure there's viable work behind each release.
                </p>
            </Hero>

            <button className="button button-primary button-hero" onClick={ createRelease }>
                Release a new version
            </button>
        </>
    )
}

export default Release;
