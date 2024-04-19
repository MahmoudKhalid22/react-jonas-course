import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreasingAmount, increasingAmount } from "./cartSlice";

function UpdateItemQuantity({
  pizzaId,
  currentQuantity,
}: {
  pizzaId: string;
  currentQuantity: number;
}) {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-1 md:gap-4 items-center">
      <Button type="round" onClick={() => dispatch(decreasingAmount(pizzaId))}>
        -
      </Button>
      <span>{currentQuantity}</span>
      <Button type="round" onClick={() => dispatch(increasingAmount(pizzaId))}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
