import React, { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackList from "./PackList";
import { ItemInterface } from "./DAO";
import Stats from "./Stats";

function App() {
  const [items, setItems] = useState<ItemInterface[]>([]);

  const handleItems = (item: never): void => {
    setItems([...items, item]);
  };
  const handleClearList = () => {
    const confirmation = window.confirm("Are you sure !");
    console.log(confirmation);
    if (confirmation) setItems([]);
  };

  const handleDeleteItem = (id: number) => {
    setItems(items.filter((item: ItemInterface) => item?.id !== id));
  };

  const handleToggleItem = (id: number) => {
    const newItems = items.map((item: ItemInterface) =>
      item?.id === id ? { ...item, packed: !item.packed } : item
    );
    setItems([...newItems]);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleItems} />
      <PackList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
