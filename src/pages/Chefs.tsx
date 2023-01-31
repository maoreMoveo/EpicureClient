import React, { useEffect, useState } from "react";
import "./_chefs.scss";
import { ISortPath } from "../interfaces/sortPath";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootStore } from "../store/store";
import { getChefsWithPagination } from "../store/chef/chefAction";
import Pagination from "../componets/common/pagination/Pagination";
import HeaderSort from "../componets/common/HeaderSort";
import LoadingContent from "../componets/common/loading/LoadingContent";
import IChef from "../interfaces/chef";

const perPage = 6;

const Chefs = () => {
  const { chefs, chefsCount, loading } = useSelector(
    (state: RootStore) => state.chefs
  );
  const dispatch = useDispatch<AppDispatch>();
  const [pageOffset, setPageOffset] = useState<number>(0);
  const [sortPath, setSortPath] = useState<ISortPath>({
    path: "All",
    isActive: true,
    value: "All",
  });
  const [sortPaths, setSortPaths] = useState<ISortPath[]>([
    { path: "All", isActive: true, value: "All" },
    { path: "New", isActive: false, value: "updatedAt" },
    { path: "Most Views", isActive: false, value: "Views" },
  ]);

  useEffect(() => {
    (async () => {
      try {
        await dispatch(
          getChefsWithPagination({
            typeFilter: sortPath.value,
            page: pageOffset + 1,
            perPage: perPage,
          })
        );
      } catch (err) {
        console.log(err);
      }
    })();
  }, [dispatch, pageOffset, sortPath]);
  const handlePageChange = (event: any) => {
    window.scrollTo(0, 0)
    setPageOffset(event.selected);
  };
  const handleFilterChange = async (sortItem: ISortPath) => {
    let tempSortPath = [...sortPaths];
    tempSortPath.map((path) => (path.isActive = false));
    const pathIndex = tempSortPath.findIndex((li) => li.path === sortItem.path);
    tempSortPath[pathIndex].isActive = true;
    setSortPath(sortItem);
    setSortPaths([...tempSortPath]);
    setPageOffset(0);
  };

  return (
    <div className="chefs-container">
      <h2>chefs</h2>
      <div className="chefs-sort">
        <HeaderSort
          sortPaths={sortPaths}
          handleFilterChange={handleFilterChange}
        />
      </div>
      {chefs && chefs.length === 0 && <h2>no chefs...</h2>}
      {loading ? (
        <div className="chefs-content-loading">
          {" "}
          <LoadingContent />
        </div>
      ) : (
        <div className="chefs-content">
          {chefs &&
            chefs.map((chef: IChef) => (
              <div key={chef.name} className="chef-img">
                <img src={`${chef.image}`} alt={chef.name}></img>
                <div>{chef.name}</div>
              </div>
            ))}
        </div>
      )}
      {chefsCount > 0 && (
        <Pagination
          pageCount={Math.floor(chefsCount / 6 + 1)}
          pageOffset={pageOffset}
          handlePageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default Chefs;
