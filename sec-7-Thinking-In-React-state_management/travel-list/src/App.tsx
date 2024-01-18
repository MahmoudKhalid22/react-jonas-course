import React, { useState } from "react";

interface ItemInterface {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
}

// const initialItems: ItemInterface[] = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Socks", quantity: 12, packed: true },
// ];

function App() {
  const [items, setItems] = useState([]);

  const handleItems = (item: never): void => {
    setItems([...items, item]);
  };
  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleItems} />
      <PackList items={items} />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🏝️ Far Away 🧳</h1>;
}
function Form({ onAddItem }: any) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();

    if (!description) return;
    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };
    onAddItem(newItem);
    setDescription("");
    setQuantity(1);
  };

  return (
    <>
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need for your 😎 trip?</h3>
        <select onChange={(e) => setQuantity(+e.target.value)} value={quantity}>
          {Array.from({ length: 21 }, (_, index) => index++).map((index) => (
            <option key={index} value={index}>
              {index}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item..."
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <button>Add</button>
      </form>
    </>
  );
}
function PackList({ items }: any) {
  return (
    <div className="list">
      <ul>
        {items.map((item: ItemInterface) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }: any) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.description} {item.quantity}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>💼 You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
}

export default App;
