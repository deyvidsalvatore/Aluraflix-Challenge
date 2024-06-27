import './HomePage.css';
import React from 'react';
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import MainBanner from '../../components/MainBanner/MainBanner';
import VideoCard from '../../components/VideoCard/VideoCard';

export const HomePage = () => {
    return (
        <React.Fragment>
            <Header />
            <VideoCard videoId="1"/>
            <MainBanner />
            <Footer />
        </React.Fragment>
    );
};

export default HomePage;