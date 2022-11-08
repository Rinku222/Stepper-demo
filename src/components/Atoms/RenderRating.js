import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import "../../Styles/CommonCSS.css";

const RenderRating = (props) => {
  const { name, value, setFieldValue, title, error } = props;

  return (
    <div>
      <div className="rating-title">{title}</div>
      <div className="star-container">
        {Array(5)
          .fill()
          .map((item, i) => {
            if (value > i)
              return (
                <div key={i} onClick={() => setFieldValue(name, i + 1)}>
                  <StarIcon />
                </div>
              );
            else
              return (
                <div key={i} onClick={() => setFieldValue(name, i + 1)}>
                  <StarBorderIcon />
                </div>
              );
          })}
      </div>
      <div className="error-text">{error}</div>
    </div>
  );
};

export default RenderRating;
