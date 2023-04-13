import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./mainPage.css";
import SettingsIcon from "@mui/icons-material/Settings";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const MainPage = () => {
  return (
    <div className="mainPage">
      <div className="top">
        <div className="left">
          <h2>Near Me</h2>
          <div className="search">
            <input type="text" placeholder="Search here" />
            <SearchIcon className="icon" />
          </div>
        </div>
        <div className="right">
          <SettingsIcon className="icon" />
          <img
            src="images/4x6 (1).jpg"
            alt=""
            style={{ height: "50px", width: "50px", borderRadius: "50px" }}
          />
        </div>
      </div>
      <div className="main">
        <div className="left">
          <div className="results">
            <div className="location">Results for Bhusawal, Maharashtra</div>
            <button>
              <MyLocationIcon className="icon" />
              Use location
            </button>
            <MoreVertIcon className="icon" />
          </div>
          <div className="places">
            <h1>Places</h1>
            <MoreVertIcon className="icon" />
            <button>
              Rating <ArrowDropDownIcon className="icon" />
            </button>
            <button>
              Hours <ArrowDropDownIcon className="icon" />
            </button>
          </div>

          <div className="line">
            <button>
              More places <ArrowForwardIcon />
            </button>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default MainPage;
