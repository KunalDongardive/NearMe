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
        <p className="scatter1">Plumbers near me</p>
        <p className="scatter2">Restaurents near me</p>
        <p className="scatter3">Hotels near me</p>
        <p className="scatter4">Electrician near me</p>
        <p className="scatter5">Hospitals near me</p>
        <p className="scatter6">Carpenters near me</p>
        <p className="scatter7">Mechanics near me</p>
        <p className="scatter8">Painters near me</p>
        <p className="scatter9">Pharmacy near me</p>
        <p className="scatter10">Engineers near me</p>
      </div>
    </div>
  );
};

export default HomePage;
