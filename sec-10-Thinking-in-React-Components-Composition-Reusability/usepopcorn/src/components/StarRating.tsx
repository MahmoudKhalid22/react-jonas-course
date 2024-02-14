import React, { useState } from "react";
import Star from "./Star";

function StarRating({ maxRating = 5, color = "#fcc419", number = 48 }): void {
  const [rating, setRating] = useState<number>(0);
  const [tempRating, setTempRating] = useState(0);
  const handleTempRating = (number: any) => {
    console.log(number);

    setTempRating(number);
  };
  const containerStyle = {
    margin: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const starContainerStyle = {};
  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => {
          <Star
            key={i}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onRate={setRating}
            handleTempRating={handleTempRating}
            tempRating={tempRating}
          />;
        })}
      </div>
    </div>
  );
}

export default StarRating;
