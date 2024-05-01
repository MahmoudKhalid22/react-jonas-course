import { ActionFunction, useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

function UpdateOrder() {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make Priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

type MyParams = {
  id: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any, react-refresh/only-export-components
export const action: ActionFunction<MyParams> = async ({ params }: any) => {
  const data = { priority: true };
  await updateOrder(params!.id, data);
  return null;
};
