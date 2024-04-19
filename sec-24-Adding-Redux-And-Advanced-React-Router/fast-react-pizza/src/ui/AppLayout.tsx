import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";
import { useSelector } from "react-redux";
import { States } from "../utilities/types";

const AppLayout = () => {
  const navigation = useNavigation();
  const cart = useSelector((state: States) => state.cart?.cart);

  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />
      <div className="overflow-y-scroll">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>
      {cart?.length && <CartOverview />}
    </div>
  );
};

export default AppLayout;
