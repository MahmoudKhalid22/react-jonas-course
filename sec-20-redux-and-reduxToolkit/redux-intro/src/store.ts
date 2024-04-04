import { combineReducers, createStore } from "redux";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

const reducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(reducer);

export default store;

// store.dispatch(deposit(300));
// console.log(store.getState());
// store.dispatch(withdraw(500));
// console.log(store.getState());

// store.dispatch(requestLoan(500, "buy a car"));
// console.log(store.getState());

// store.dispatch(payLoan(700));
// console.log(store.getState());

// store.dispatch(createCustomer("Mahmoud Khalid", "123"));
// console.log(store.getState());
// store.dispatch(updateName("MKhalid"));
// console.log(store.getState());
