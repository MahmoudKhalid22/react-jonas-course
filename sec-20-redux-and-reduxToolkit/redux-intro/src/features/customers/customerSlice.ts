import { CustomerAction, CustomerState } from "../../types";

const initialStateCustomer: CustomerState = {
  fullName: "",
  createdAt: "",
  nationalID: "",
};

export default function customerReducer(
  state: CustomerState = initialStateCustomer,
  action: CustomerAction
): CustomerState {
  switch (action.type) {
    case "customer/createCustomer": {
      console.log(action.payload);

      return {
        ...state,
        fullName: action.payload?.fullName,
        nationalID: action.payload?.nationalID,
        createdAt: action.payload?.createdAt,
      };
    }
    case "customer/updateName":
      return {
        ...state,
        fullName: action.payload?.fullName,
      };

    default:
      return state;
  }
}

export function createCustomer(name: string, id: string): CustomerAction {
  return {
    type: "customer/createCustomer",
    payload: {
      fullName: name,
      nationalID: id,
      createdAt: new Date().toISOString(),
    },
  };
}
export function updateName(name: string): CustomerAction {
  return {
    type: "customer/updateName",
    payload: {
      fullName: name,
    },
  };
}
