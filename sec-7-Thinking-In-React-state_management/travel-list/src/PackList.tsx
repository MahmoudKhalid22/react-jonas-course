import React, { useState } from "react";
import { ItemInterface } from "./DAO";
import Item from "./Item";

function PackList({ items, onDeleteItem, onToggleItem, onClearList }: any) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a: ItemInterface, b: ItemInterface) =>
        a.description.localeCompare(b.description)
      );
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a: ItemInterface, b: ItemInterface) => +b.packed - +a.packed);

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item: ItemInterface) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by Input order</option>
          <option value="description">Sort by Description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>clear list</button>
      </div>
    </div>
  );
}

export default PackList;
