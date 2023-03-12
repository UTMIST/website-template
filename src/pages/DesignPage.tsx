import * as React from 'react';
import '../style/override.css';
import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';
import Page from "../components/Page";
import Design from "../sections/Design";

const Component = () => {
    return (
        <Page>
            <Design/>
        </Page>
    );
}

export default Component;
