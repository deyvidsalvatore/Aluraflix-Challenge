import './CardButton.css';
import PropTypes from 'prop-types';

export const CardButton = ({ label, vectorUrl, onClick }) => {
  return (
    <div className="card-button" onClick={onClick}>
      <div className="card-button__icon">
        <img src={vectorUrl} alt="Ícone" className="vector-img" />
      </div>
      <div className="card-button__label">{label}</div>
    </div>
  );
};

CardButton.propTypes = {
    label: PropTypes.string.isRequired,
    vectorUrl: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default CardButton;
