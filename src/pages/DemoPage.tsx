import * as React from 'react';
import '../style/override.css';
import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';
import Page from "../components/Page";
import Demo from "../sections/Demo";

const Component = () => {
    return (
        <Page>
            <Demo/>
        </Page>
    );
}

export default Component;
