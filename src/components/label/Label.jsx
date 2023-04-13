import React from "react";
import StarIcon from "@mui/icons-material/Star";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DirectionsIcon from "@mui/icons-material/Directions";
import "./label.css";

const Label = () => {
  return (
    <div className="label">
      <div className="left">
        <div className="heading">Plumbing services</div>
        <div className="rating">
          <p>
            5.0 <StarIcon className="icon" style={{ color: "gold" }} />
          </p>
          <p>(8)</p>
          <p>.</p>
          <p>Plumber</p>
        </div>
        <div className="address">
          <p>Abc road</p>
          <p>.</p>
          <p>02582 000 000</p>
        </div>
        <div className="timing">Open 24 hours</div>
        <div className="reviews">
          <AccountCircleIcon />
          <p>Review</p>
        </div>
      </div>
      <div className="right">
        <button>
          <DirectionsIcon />
        </button>
        <p>Directions</p>
      </div>
    </div>
  );
};

export default Label;
