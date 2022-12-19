import React from "react";
import {Circles} from "react-loader-spinner";
import '../../../assets/styles/components/common/_loading.scss';
const Loading = () => {
  return (
    <div className="loading-container">
      <Circles
        height="150"
        width="150"
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
