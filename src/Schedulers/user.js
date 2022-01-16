import * as Settings from '../config';

function maybeAddUser( feature, resources, setResources ) {
    if ( ! feature?.users ) {
        return;
    }

    const currentUsers = ( resources?.users ? resources.users : 0 );
    const addProbability = ( Math.random() * 100 );

    let newUsers = currentUsers,
        multiplier = 1,
        addChance = Settings.baseChanceAddUser;

    addChance = addChance * multiplier;

    if ( addChance > addProbability ) {
        newUsers++;
    }

    setResources( { users: newUsers } );
}

export default maybeAddUser;
