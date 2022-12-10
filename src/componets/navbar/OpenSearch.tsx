import React from "react";
import x from "../../assets/images/x.svg";
import searchButton from "../../assets/images/search-icon.svg";
interface IProps{
    searchToggle:()=>void
}
const OpenSearch = ({searchToggle}:IProps) => {
  return (
    <div className="open-search">
      <div className="menu_button">
        <img src={x} alt="hamborger-icon" onClick={()=> searchToggle()}></img>
        <h3>Search</h3>
      </div>
      <div className="search-content">
        <div className="search">
          <button>
            <img src={searchButton} alt="search-icon"></img>
          </button>
          <input placeholder="Search for restaurant cuisine, chef"></input>
        </div>
      </div>
    </div>
  );
};

export default OpenSearch;
