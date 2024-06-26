import PropTypes from 'prop-types';
import './BannerButton.css';

const BannerButton = ({ label, isActive, onClick }) => {
    return (
        <div
            className={`banner-button-container ${isActive ? 'active' : ''}`}
            onClick={() => onClick(label)}
        >
            <div className="banner-button-background"></div>
            <div className="banner-button-label">{label}</div>
        </div>
    );
};

BannerButton.propTypes = {
    label: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default BannerButton;
