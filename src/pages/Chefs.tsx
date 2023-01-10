import React,{useEffect,useState} from "react";
import "./_chefs.scss";
import { ISortPath } from "../interfaces/sortPath";
import {useSelector,useDispatch} from 'react-redux';
import { AppDispatch, RootStore } from "../store/store";
import {getChefsWithPagination } from "../store/chef/chefAction";
import Loading from "../componets/common/loading/Loading";
import ReactPaginate from "react-paginate";
const Chefs = () => {
  const {chefs,chefsCount}= useSelector((state:RootStore) => state.chefs);
  const dispatch=useDispatch<AppDispatch>();
  const [pageOffset, setPageOffset] = useState<number>(0);
  const [pageCount, setPageCount] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [sortPath, setSortPath] = useState<ISortPath>({
    path: "All",
    isActive: true,
    value: "All",
  });
  const [sortPaths, setSortPaths] = useState<ISortPath[]>( [
    { path: "All", isActive: true ,value:"All"},
    { path: "New", isActive: false,value:"createdAt" },
    { path: "Most Views", isActive: false,value:"All" },
  ]);
  useEffect(() => {
    console.log('counttt')
    console.log(Math.trunc(chefsCount / 6))
    setPageCount(Math.trunc(chefsCount / 6)+1); 
  }, [chefsCount]);

  useEffect(() => {
    (async () => {
      try {
         await dispatch(
          getChefsWithPagination({
            typeFilter: sortPath.value,
            page: pageOffset + 1,
            perPage: 6,
          })
          );
          setLoading(false)
      } catch (err) {
        console.log(err);
      }
    })();
    setLoading(false);
  }, [dispatch, pageOffset, sortPath]);
  const handlePageChange = (event: any) => {
    setLoading(true);
    setPageOffset(event.selected);
  };
  const handleFilterChange = async (sortItem: ISortPath) => {
    let tempSortPath = [...sortPaths];
    tempSortPath.map((path) => path.isActive = false);
    const pathIndex = tempSortPath.findIndex(
      (li) => li.path === sortItem.path
    );
    tempSortPath[pathIndex].isActive = true;
    setSortPath(sortItem);
    setSortPaths([...tempSortPath])
    setLoading(true);
    setPageOffset(0);
  };
  if(!chefs && !loading) return <Loading/>
  return (
    <div className="chefs-container">
      <h2>chefs</h2>
      {/* add sort item */}
      <div className="chefs-sort">
        <ul>
          {sortPaths.map((path, index) => (
            <li key={index} className={path.isActive ? "active" : ""} onClick={()=> handleFilterChange(path)}>
              {path.path}
            </li>
          ))}
        </ul>
      </div>
      <div className="chefs-content">
        { chefs && chefs.map((chef) => (
          <div key={chef.name} className="chef-img">
            <img src={`${chef.image}`} alt={chef.name}></img>
            <div>{chef.name}</div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <ReactPaginate
          previousLabel="Previous"
          nextLabel="Next"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={(e: any) => handlePageChange(e)}
          containerClassName="pagination"
          activeClassName="link-active"
          forcePage={pageOffset}
        />
      </div>
    </div>
  );
};

export default Chefs;
