import { useSelector } from "react-redux";
import { States } from "../../types";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay() {
  const account = useSelector((state: States) => state.account);

  return <div className="balance">{formatCurrency(account.balance)}</div>;
}

export default BalanceDisplay;
