import React, { useState } from "react";

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

export default Form;
