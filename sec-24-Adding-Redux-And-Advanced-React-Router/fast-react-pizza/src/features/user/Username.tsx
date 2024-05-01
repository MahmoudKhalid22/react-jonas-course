import { useSelector } from "react-redux";
import { States } from "../../utilities/types";

function Username() {
  const username = useSelector((state: States) => state.user?.name);
  if (!username) return null;
  return (
    <div className="hidden text-sm font-semibold md:block">{username}</div>
  );
}

export default Username;
