import aluraFlixLogo from '../../assets/logo/aluraflix.png';
import './Footer.css';
export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__logo">
                <img className="footer__logo_img" src={aluraFlixLogo} alt='Logo do AluraFlix'/>
            </div>
        </div>

    );
};