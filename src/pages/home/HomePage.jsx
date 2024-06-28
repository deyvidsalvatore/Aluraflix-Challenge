import './HomePage.css';
import React from 'react';
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import MainBanner from '../../components/MainBanner/MainBanner';
import SecaoDeCards from '../../components/SecaoDeCards/SecaoDeCards';
import MenuNavegacao from '../../components/Mobile/MenuNavegacao/MenuNavegacao';

export const HomePage = () => {
    return (
        <React.Fragment>
            <Header />
            <MainBanner />
            <SecaoDeCards/>
            <Footer />
            <MenuNavegacao/>
        </React.Fragment>
    );
};

export default HomePage;