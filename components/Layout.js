import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <>footer</>
    </React.Fragment>
  );
};

export default Layout;
