import React from "react";
import { Oval } from "react-loader-spinner";

const Loader = () => {
  return (
    <Oval
      visible={true}
      height="80"
      width="80"
      color="#1A56DB"
      ariaLabel="oval-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};

export default Loader;
