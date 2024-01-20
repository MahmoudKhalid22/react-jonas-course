import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import { ItemInterface } from "./utils/DAO";
import Logo from "./components/Logo";
import PackList from "./components/PackList";
import Stats from "./components/Stats";

const retrieveUser = (): ItemInterface[] | null => {
  const userData = localStorage.getItem("items");
  return userData ? (JSON.parse(userData) as ItemInterface[]) : null;
};
const itemsData = retrieveUser();
function App() {
  const [items, setItems] = useState<ItemInterface[]>(
    itemsData ? itemsData : []
  );

  const handleItems = (item: never): void => {
    setItems([...items, item]);
  };
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const handleClearList = () => {
    const confirmation = window.confirm("Are you sure !");
    console.log(confirmation);
    if (confirmation) {
      setItems([]);
      localStorage.setItem("items", JSON.stringify([]));
    }
  };
  // JSON.parse(localStorage.getItem("items"));

  const handleDeleteItem = (id: number) => {
    setItems(items.filter((item: ItemInterface) => item?.id !== id));
  };

  const handleToggleItem = (id: number) => {
    const newItems = items?.map((item: ItemInterface) =>
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
