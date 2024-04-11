import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
import { Pizza } from "../../utilities/types";

function Menu() {
  const menu: Pizza[] = useLoaderData() as Pizza[];
  console.log(menu);

  return (
    <ul>
      {menu?.map((pizza: Pizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export async function loader(): Promise<any> {
  const menu = await getMenu();
  return menu;
}

export default Menu;
