import {FormControlLabel, FormGroup, Switch} from "@mui/material";

function DevTools( { feature, setFeature } ) {
    return (
        <>
            <FormGroup>
                <FormControlLabel control={ <Switch checked={ feature.users } onChange={ ( event ) => { setFeature( { users: event.target.checked } ) } } /> } label="Users" />
                <FormControlLabel control={ <Switch checked={ feature.release } onChange={ ( event ) => { setFeature( { release: event.target.checked } ) } } /> } label="Release" />
                <FormControlLabel control={ <Switch checked={ feature.plugins } onChange={ ( event ) => { setFeature( { plugins: event.target.checked } ) } } /> } label="Plugins" />
                <FormControlLabel control={ <Switch checked={ feature.sponsors } onChange={ ( event ) => { setFeature( { sponsors: event.target.checked } ) } } /> } label="Sponsors" />
                <FormControlLabel control={ <Switch checked={ feature.contributors } onChange={ ( event ) => { setFeature( { contributors: event.target.checked } ) } } /> } label="Contributors" />
                <FormControlLabel control={ <Switch checked={ feature.dependencies } onChange={ ( event ) => { setFeature( { dependencies: event.target.checked } ) } } /> } label="Dependencies" />
            </FormGroup>
        </>
    )
}

export default DevTools;
