import * as Settings from '../config';

function maybeAddContributor( feature, resources, setResources ) {
    if ( ! feature?.contributors ) {
        return;
    }

    const currentContributors = ( resources?.contributors ? resources.contributors : 0 );
    const addProbability = ( Math.random() * 100 );

    let newContributors = currentContributors,
        multiplier = 1,
        addChance = Settings.baseChanceAddContributor;

    addChance = addChance * multiplier;

    if ( addChance > addProbability ) {
        newContributors++;
    }

    setResources( { contributors: newContributors } );
}

export default maybeAddContributor;
