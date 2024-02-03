import React from "react";

interface MyComponentProps {
  number: number;
  onRate: void;
  full: boolean;
  handleTempRating: void;
  color: string;
  size: string;
}

function Star({
  number,
  onRate,
  full,
  handleTempRating,
  color = "#fcc419",
  size = "16px",
}: MyComponentProps): any {
  return (
    <>
      {full ? (
        <div
          style={{
            display: "inline",
            cursor: "pointer",
            backgroundColor: color,
            fontSize: size,
            width: size,
          }}
          onClick={() => onRate(number)}
          onMouseEnter={() => handleTempRating(number)}
          onMouseLeave={() => handleTempRating(0)}
        >
          🌟
        </div>
      ) : (
        <div
          style={{ display: "inline", cursor: "pointer" }}
          onClick={() => onRate(number)}
          onMouseEnter={() => handleTempRating(number)}
          onMouseLeave={() => handleTempRating(0)}
        >
          ⭐
        </div>
      )}
    </>
  );
}

export default Star;
