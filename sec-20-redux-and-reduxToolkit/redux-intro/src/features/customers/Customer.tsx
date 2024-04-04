import { useSelector } from "react-redux";
import { States } from "../../types";

function Customer() {
  const name = useSelector((data: States) => data.customer.fullName);
  return <h2>👋 Welcome, {name}</h2>;
}

export default Customer;
