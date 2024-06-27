import "./Tag.css";
import PropTypes from "prop-types";

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

export const Tag = ({ category }) => {
  const color = getCategoryColor(category);

  return (
    <div className="Category">
      <div className="CategoryBackground" style={{ background: color }}>
        <div className="Title">{category}</div>
      </div>
    </div>
  );
};

Tag.propTypes = {
  category: PropTypes.string.isRequired,
};
export default Tag;
