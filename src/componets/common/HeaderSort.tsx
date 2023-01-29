import React from "react";
import { ISortPath } from "../../interfaces/sortPath";
import "./_headerSort.scss";
type ISortProps = {
  sortPaths: ISortPath[];
  handleFilterChange: (path: ISortPath) => void;
};
const HeaderSort = ({ sortPaths, handleFilterChange }: ISortProps) => {
  return (
    <ul className="header-sort">
      {sortPaths.map((path, index) => (
        <li
          key={index}
          className={path.isActive ? "active" : ""}
          onClick={() => handleFilterChange(path)}
        >
          {path.path}
        </li>
      ))}
    </ul>
  );
};

export default HeaderSort;
