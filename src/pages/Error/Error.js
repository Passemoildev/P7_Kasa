import React from 'react';
import Header from '../../components/Header/Header';
import NotFound from '../../components/not_found/not_found';
import Footer from '../../components/footer/Footer';
import { Helmet } from 'react-helmet-async';

const Error = () => {
    return (
        <div className="error">
            <Helmet>
                <title>Oups... La page demandée n'éxiste pas</title>
            </Helmet>
            <Header/>
            <NotFound/>
            <Footer/>

        </div>
    )
}

export default Error