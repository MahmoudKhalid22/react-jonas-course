import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Coords, PositionObj, UserState } from "../../utilities/types";
import { getAddress } from "../../services/apiGeocoding";

function getPosition(): Promise<GeolocationPosition> {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

const initialState: UserState = {
  name: "",
  loading: "idle",
  error: "",
  position: {
    latitude: 0,
    longitude: 0,
  },
  address: "",
};

export const fetchAddress = createAsyncThunk(
  "user/fetchAddress",
  async function () {
    const positionObj: PositionObj = (await getPosition()) as PositionObj;
    const position: Coords = {
      latitude: positionObj.coords?.latitude,
      longitude: positionObj.coords?.longitude,
    } as Coords;

    // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
    const addressObj = await getAddress({
      latitude: position.latitude,
      longitude: position.longitude,
    });
    const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

    // 3) Then we return an object with the data that we are interested in
    return { position, address };
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    updateName(state, action) {
      state.name = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddress.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.position!.latitude = action.payload.position.latitude as number;
        state.position!.longitude = action.payload.position.longitude as number;
        state.address = action.payload.address;
        state.loading = "idle";
      })
      .addCase(fetchAddress.rejected, (state) => {
        state.loading = "failed";
        state.error =
          "There was a problem getting your address. Make sure to fill this field";
      });
  },
});

export const { updateName } = userSlice.actions;

export default userSlice.reducer;
