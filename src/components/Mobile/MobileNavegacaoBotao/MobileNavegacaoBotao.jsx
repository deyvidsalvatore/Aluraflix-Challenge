import "./MobileNavegacaoBotao.css";
import PropTypes from 'prop-types';

const MobileNavegacaoBotao = ({ label, icon, isActive, onClick }) => {
  return (
    <div className={`mobile-button-container ${isActive ? 'active' : ''}`} onClick={onClick}>
      <img src={icon} alt={`${label} icon`} className="button-icon" />
      {isActive && <span className="button-text">{label}</span>}
    </div>
  );
};

MobileNavegacaoBotao.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MobileNavegacaoBotao;
