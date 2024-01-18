import React from "react";
import { ItemInterface } from "./DAO";

function Stats({ items }: any) {
  if (!items.length) {
    return (
      <em className="stats">Start adding some items to your packing list 👝</em>
    );
  }
  const allItems = items.length;
  const packedItems = items.filter((item: ItemInterface) => item.packed).length;
  const percentage = Math.round((packedItems / allItems) * 100);
  return (
    <footer className="stats">
      <em>
        {+percentage === 100
          ? `You got everything! Ready to go ✈️`
          : `💼 You have ${allItems} items on your list, and you already packed ${packedItems} ${+percentage}%)`}
      </em>
    </footer>
  );
}

export default Stats;
