import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import aluraFlixLogo from '../../assets/logo/aluraflix.png';
import BannerButton from '../Buttons/BannerButton/BannerButton';
import './Header.css';

export const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    const getActiveButton = () => {
        if (location.pathname === '/novo-video') {
            return 'novo vídeo';
        } else {
            return 'home';
        }
    };

    const [activeButton, setActiveButton] = useState(getActiveButton());

    const handleClick = (label, path) => {
        if (activeButton !== label) {
            setActiveButton(label);
            navigate(path);
        }
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
                        onClick={() => handleClick('home', '/')}
                    />
                    <BannerButton
                        label="novo vídeo"
                        isActive={activeButton === 'novo vídeo'}
                        onClick={() => handleClick('novo vídeo', '/novo-video')}
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
