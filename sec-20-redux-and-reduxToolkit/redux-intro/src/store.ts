import { combineReducers, createStore } from "redux";

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

interface AccountState {
  balance: number;
  loan: number;
  purpose: string;
}

const initialStateAccount: AccountState = {
  balance: 0,
  loan: 0,
  purpose: "",
};

interface CustomerState {
  fullName: string;
  nationalID?: string;
  createdAt?: string;
}

const initialStateCustomer: CustomerState = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

interface CustomerAction {
  type: string;
  payload: CustomerState;
}

type Action = RequestLoanAction | NormalAction;

function accountReducer(
  state: AccountState = initialStateAccount,
  action: Action
): AccountState {
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
function customerReducer(
  state: CustomerState = initialStateCustomer,
  action: CustomerAction
): CustomerState {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return {
        ...state,
        fullName: action.payload.fullName,
      };

    default:
      return state;
  }
}

const reducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

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

function createCustomer(name: string, id: string): CustomerAction {
  return {
    type: "customer/createCustomer",
    payload: {
      fullName: name,
      nationalID: id,
      createdAt: new Date().toISOString(),
    },
  };
}
function updateName(name: string): CustomerAction {
  return {
    type: "customer/updateName",
    payload: {
      fullName: name,
    },
  };
}

store.dispatch(createCustomer("Mahmoud Khalid", "123"));
console.log(store.getState());
store.dispatch(updateName("MKhalid"));
console.log(store.getState());
