import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCustomer } from "./customerSlice";
import { CustomerAction } from "../../types";
import { Dispatch } from "redux";

function Customer() {
  const [fullName, setFullName] = useState<string>("");
  const [nationalId, setNationalId] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const dispatch: Dispatch<CustomerAction> = useDispatch();

  function handleClick() {
    setError(false);
    if (!fullName || !nationalId) {
      setError(true);
      return;
    }
    dispatch(createCustomer(fullName, nationalId) as any);
  }

  return (
    <div>
      <h2>Create new customer</h2>
      <div className="inputs">
        <div>
          <label>Customer full name</label>
          <input
            className={error ? "error" : ""}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label>National ID</label>
          <input
            className={error ? "error" : ""}
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
          />
        </div>
        <button onClick={handleClick}>Create new customer</button>
      </div>
    </div>
  );
}

export default Customer;
