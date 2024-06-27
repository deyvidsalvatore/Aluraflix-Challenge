import PropTypes from "prop-types";
import "./BannerCard.css";

const BannerCard = ({ category }) => {
  /* Switch entre cores do cards */
  const getCategoryColor = (category) => {
    switch (category.toLowerCase()) {
      case "frontend":
        return "#6BD1FF";
      case "backend":
        return "#00C86F";
      case "mobile":
      case "gestao":
        return "#FFBA05";
      default:
        return "#6BD1FF";
    }
  };

  const backgroundColor = getCategoryColor(category);

  const bannerStyle = {
    backgroundColor: backgroundColor,
    color: "#F5F5F5",
  };

  return (
    <div className="BannerCard" style={bannerStyle}>
      <div className="BannerContent">{category.toUpperCase()}</div>
    </div>
  );
};

BannerCard.propTypes = {
  category: PropTypes.string.isRequired,
};

export default BannerCard;
