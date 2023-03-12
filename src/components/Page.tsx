import * as React from 'react';
import Navigation from '../sections/Navigation';
import Footer from '../sections/Footer';
import '../style/override.css';
import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';
import ScrollToTop from "./ScrollToTop";

const Component = ({children}: { children: any }) => {
    return (
        <>
            <ScrollToTop/>
            <Navigation/>
            {children}
            <Footer/>
        </>
    );
};

export default Component;
