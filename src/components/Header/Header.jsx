import { useState } from 'react';
import aluraFlixLogo from '../../assets/logo/aluraflix.png';
import BannerButton from '../Buttons/BannerButton/BannerButton';
import './Header.css';

export const Header = () => {
    const [activeButton, setActiveButton] = useState('home');

    const handleClick = (label) => {
        setActiveButton(label);
    };

    return (
        <header>
            <div className="header">
                <div className="header__logo">
                    <img className="header__logo_img" src={aluraFlixLogo} alt='Logo do AluraFlix'/>
                </div>

                <div className="header__actions">
                    <BannerButton
                        label="home"
                        isActive={activeButton === 'home'}
                        onClick={handleClick}
                    />
                    <BannerButton
                        label="novo vídeo"
                        isActive={activeButton === 'novo vídeo'}
                        onClick={handleClick}
                    />
                </div>
            </div>
        </header>
    );
};
