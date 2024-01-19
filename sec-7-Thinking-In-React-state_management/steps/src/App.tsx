import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handlePrevious = (): void => {
    if (step > 1) setStep(step - 1);
  };
  const handleNext = (): void => {
    if (step < 3) setStep(step + 1);
  };

  return (
    <>
      <button
        className="close"
        onClick={() => setIsOpen(false)}
        style={{ display: `${isOpen ? "block" : "none"}` }}
      >
        &#10008;
      </button>
      <button
        className="close"
        onClick={() => setIsOpen(true)}
        style={{ display: `${isOpen ? "none" : "block"}` }}
      >
        &#10003;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            step {step}: {messages[step - 1]}{" "}
          </p>
          <div className="buttons">
            <Button bgColor="#7950f2" color="#fff" onClick={handlePrevious}>
              <span>👈</span>
              <span>Previous</span>
            </Button>
            <Button bgColor="#7950f2" color="#fff" onClick={handleNext}>
              <span>Next</span>
              <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ bgColor, color, onClick, children }: any) {
  return (
    <button
      style={{
        backgroundColor: bgColor,
        color: color,
        display: "flex",
        alignItems: "center",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
