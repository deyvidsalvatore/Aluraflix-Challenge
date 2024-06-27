import './HomePage.css';
import React from 'react';
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import MainBanner from '../../components/MainBanner/MainBanner';

export const HomePage = () => {
    return (
        <React.Fragment>
            <Header />
            <MainBanner />
            <Footer />
        </React.Fragment>
    );
};

export default HomePage;