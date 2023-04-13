import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./homePage.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="header">
        <AccountCircleIcon style={{ fontSize: "35px" }} />
      </div>
      <div className="hero">
        <p>Near Me!</p>
        <div className="main">
          <input type="text" placeholder="Search here" />
          <SearchIcon className="icon" />
        </div>
      </div>
      <div className="scatter">
        <p>Plumbers near me</p>
        <p>Restaurents near me</p>
        <p>Hotels near me</p>
        <p>Electrician near me</p>
        <p>Hospitals near me</p>
        <p>Carpenters near me</p>
        <p>Mechanics near me</p>
        <p>Painters near me</p>
        <p>Pharmacy near me</p>
        <p>Engineers near me</p>
      </div>
    </div>
  );
};

export default HomePage;
