import React from "react";

function Searchbar({ onHandleQuery }: any) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      onChange={(e) => onHandleQuery(e.target.value)}
    />
  );
}

export default Searchbar;
