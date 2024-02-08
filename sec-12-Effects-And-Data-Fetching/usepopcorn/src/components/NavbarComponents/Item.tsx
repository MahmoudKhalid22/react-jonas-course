import React from "react";

function Item({ movies }: any) {
  return (
    <p className="num-results">
      Found <strong>{movies?.length}</strong> results
    </p>
  );
}

export default Item;
