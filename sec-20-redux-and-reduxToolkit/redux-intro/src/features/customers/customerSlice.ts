import { createSlice } from "@reduxjs/toolkit";
import { CustomerState } from "../../types";

const initialStateCustomer: CustomerState = {
  fullName: "",
  createdAt: "",
  nationalID: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState: initialStateCustomer,
  reducers: {
    createCustomer: {
      prepare(fullName, nationalID): any {
        return {
          payload: {
            fullName: fullName,
            nationalID: nationalID,
            createdAt: new Date().toISOString(),
          },
        };
      },

      reducer(state, action) {
        state.fullName = action.payload?.fullName;
        state.nationalID = action.payload?.nationalID;
        state.createdAt = new Date().toISOString();
      },
    },
    updateName(state, action) {
      state.fullName = action.payload;
    },
  },
});

export const { createCustomer, updateName } = customerSlice.actions;

export default customerSlice.reducer;

// export default function customerReducer(
//   state: CustomerState = initialStateCustomer,
//   action: CustomerAction
// ): CustomerState {
//   switch (action.type) {
//     case "customer/createCustomer": {
//       return {
//         ...state,
//         fullName: action.payload?.fullName,
//         nationalID: action.payload?.nationalID,
//         createdAt: action.payload?.createdAt,
//       };
//     }
//     case "customer/updateName":
//       return {
//         ...state,
//         fullName: action.payload?.fullName,
//       };

//     default:
//       return state;
//   }
// }

// export function createCustomer(name: string, id: string): CustomerAction {
//   return {
//     type: "customer/createCustomer",
//     payload: {
//       fullName: name,
//       nationalID: id,
//       createdAt: new Date().toISOString(),
//     },
//   };
// }
// export function updateName(name: string): CustomerAction {
//   return {
//     type: "customer/updateName",
//     payload: {
//       fullName: name,
//     },
//   };
// }
