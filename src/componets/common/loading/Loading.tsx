import React from "react";
import {Circles} from "react-loader-spinner";
import './_loading.scss';
const Loading = () => {
  return (
    <div className="loading-container">
      <Circles
        height="100"
        width="100"
        color="rgba(222, 146, 0, 0.9)"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loading;
