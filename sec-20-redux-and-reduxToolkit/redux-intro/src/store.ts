import { createStore } from "redux";

interface NormalAction {
  type: string;
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

type Action = RequestLoanAction | NormalAction;

function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance + action.payload };
    case "account/requestLoan":
      return {
        ...state,
        loan: (action.payload as Payload)?.amount,
        balance: state.balance + (action.payload as Payload)?.amount,
        purpose: (action.payload as Payload)?.purpose,
      };
    case "account/payLoan":
      return { ...state, balance: state.balance - state.loan, purpose: "" };
    default:
      return state;
  }
}

const store = createStore(reducer);

// console.log("hello redux");

// store.dispatch({ type: "account/deposit", payload: 700 });
// console.log(store.getState());
// store.dispatch({ type: "account/withdraw", payload: 500 });
// console.log(store.getState());

// store.dispatch({ type: "account/payLoan", payload: 2000 });
// console.log(store.getState());

// store.dispatch({
//   type: "account/requestLoan",
//   payload: { amount: 5000, purpose: "Buy a car" },
// });
// console.log(store.getState());

// store.dispatch({ type: "account/payLoan", payload: 5000 });
// console.log(store.getState());

function deposit(amount: number): NormalAction {
  return { type: "account/deposit", payload: amount };
}
function withdraw(amount: number): NormalAction {
  return { type: "account/withdraw", payload: amount };
}
function requestLoan(amount: number, purpose: string): RequestLoanAction {
  return {
    type: "account/requestLoan",
    payload: { amount, purpose },
  };
}
function payLoan(amount: number): NormalAction {
  return { type: "account/payLoan", payload: amount };
}

store.dispatch(deposit(300));
console.log(store.getState());
store.dispatch(withdraw(500));
console.log(store.getState());

store.dispatch(requestLoan(500, "buy a car"));
console.log(store.getState());

store.dispatch(payLoan(700));
console.log(store.getState());
