import React from 'react';
import Header from '../../components/Header/Header';
import NotFound from '../../components/not_found/not_found';
import Footer from '../../components/footer/Footer';

const Error = () => {
    return (
        <div className="error">
            <Header/>
            <NotFound/>
            <Footer/>

        </div>
    )
}

export default Error