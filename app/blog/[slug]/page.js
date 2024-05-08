import React from "react";

function pages({ params }) {
  console.log("params", params);
  return <div>{params.slug}</div>;
}

export default pages;
