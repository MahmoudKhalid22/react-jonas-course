// import { useState } from "react";

import {
  ActionFunctionArgs,
  Form,
  redirect,
  useActionData,
  useNavigation,
} from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import { Order, States } from "../../utilities/types";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart, getTotalCartPrice } from "../cart/cartSlice";
import EmptyCart from "../cart/EmptyCart";
import store from "../../store";
import { formatCurrency } from "../../utilities/helpers";
import { useState } from "react";
import { fetchAddress } from "../user/userSlice";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str: string): boolean =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

function CreateOrder() {
  const [withPriority, setWithPriority] = useState<boolean>(false);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const username = useSelector((state: States) => state.user?.name);
  const cart = useSelector(getCart);
  const finalPrice: number = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? 0.2 * finalPrice : 0;
  const totalFinalPrice = finalPrice + priorityPrice;

  const formErrors: { phone: string } = useActionData() as { phone: string };
  const dispatch = useDispatch();
  if (cart?.length === 0) return <EmptyCart />;

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>

      <button onClick={(): any => dispatch(fetchAddress() as any)}>
        GET POSITION
      </button>

      {/* <Form method="POST" action="/order/new"> THIS WORKS AS WELL SUCCESSSFULLY */}
      <Form method="POST">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input
            defaultValue={username}
            className="input grow"
            type="text"
            name="customer"
            required
          />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input className="input w-full" type="tel" name="phone" required />
          </div>
          {formErrors?.phone && (
            <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
              {formErrors.phone}
            </p>
          )}
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              className="input w-full"
              type="text"
              name="address"
              required
            />
          </div>
        </div>

        <div className="mb-12 flex items-center gap-5">
          <input
            className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label className="font-medium" htmlFor="priority">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <input name="cart" value={JSON.stringify(cart)} type="hidden" />
          <Button type="primary" disabled={isSubmitting}>
            {isSubmitting
              ? "Placing order..."
              : `Order now for ${formatCurrency(totalFinalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const data: Order = Object.fromEntries(formData) as unknown as Order;

  const order: Order = {
    ...data,
    cart: JSON.parse(data?.cart as any),
    priority: data.priority === "true",
  };

  const errors: { phone: string } = {
    phone: "",
  };

  const isValid = isValidPhone(order?.phone);
  if (!isValid) {
    errors.phone = "please give us your correct number. we neet to contact you";
  }
  if (errors.phone.length > 0) return errors;

  const newOrder = await createOrder(order);

  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
