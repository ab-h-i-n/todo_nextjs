import React from "react";
import Header from "./Header";

const Page = ({ children, heading }) => {
  return (
    <div>
      <div className="paper">
        <div className="lines" />
        <Header />
        <h1>{heading}</h1>
        <div className="text">{children}</div>
      </div>
    </div>
  );
};

export default Page;
