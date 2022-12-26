import React from "react";
import './_open-search.scss';
import x from "../../assets/images/x.svg";
import searchButton from "../../assets/images/search-icon.svg";
import { FunctionOrConstructorTypeNode } from "typescript";
interface IProps{
    searchToggle:()=>void
    resetToggles:(type:string,func:Function)=>void
}
const OpenSearch = ({searchToggle,resetToggles}:IProps) => {
  return (
    <div className="open-search">
      <div className="search-button">
        <img src={x} alt="hamborger-icon" onClick={()=> resetToggles("search",searchToggle)}></img>
        <h2>Search</h2>
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
