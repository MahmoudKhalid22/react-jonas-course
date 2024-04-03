import { createStore } from "redux";

interface DepositAction {
  type: "account/deposit";
  payload: number;
}

interface WithdrawAction {
  type: "account/withdraw";
  payload: number;
}
interface Payload {
  amount: number;
  purpose: string;
}

interface RequestLoanAction {
  type: "account/requestLoan";
  payload: Payload;
}

interface PayLoanAction {
  type: "account/payLoan";
}
interface State {
  balance: number;
  loan: number;
  purpose: string;
}

const initialState: State = {
  balance: 0,
  loan: 0,
  purpose: "",
};

type Action =
  | DepositAction
  | WithdrawAction
  | RequestLoanAction
  | PayLoanAction;

function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance + action.payload };
    case "account/requestLoan":
      return {
        ...state,
        loan: action.payload.amount,
        balance: state.balance + action.payload.amount,
        purpose: action.payload.purpose,
      };
    case "account/payLoan":
      return { ...state, balance: state.balance - state.loan, purpose: "" };
    default:
      return state;
  }
}

const store = createStore(reducer);

console.log("hello redux");

store.dispatch({ type: "account/deposit", payload: 700 });
console.log(store.getState());
store.dispatch({ type: "account/withdraw", payload: 500 });
console.log(store.getState());

store.dispatch({ type: "account/payLoan", payload: 2000 });
console.log(store.getState());

store.dispatch({
  type: "account/requestLoan",
  payload: { amount: 5000, purpose: "Buy a car" },
});
console.log(store.getState());

store.dispatch({ type: "account/payLoan", payload: 5000 });
console.log(store.getState());
