export interface Pizza {
  id: string;
  name: string;
  unitPrice: number;
  imageUrl: string;
  ingredients: string[];
  soldOut: boolean;
}
export interface Menu {
  status: string;
  data: Pizza[];
}

export interface Order {
  id: string;
  status: string;
  priority?: boolean | string;
  priorityPrice: number;
  orderPrice: number;
  estimatedDelivery: number;
  cart?: Item[] | undefined;
  phone: string;
}

export interface Style {
  primary: string;
  small: string;
  round: string;
  secondary: string;
}

export interface Item {
  pizzaId: string;
  quantity: number;
  name: string;
  totalPrice: number;
  unitPrice: number;
}

export interface FakeCart {
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface UserState {
  name: string;
  loading?: "idle" | "pending" | "succeeded" | "failed";
  position?: {
    latitude: number;
    longitude: number;
  };
  address: string;
  error?: string;
}
export interface CartState {
  cart: Item[];
}

export interface States {
  user?: UserState;
  cart?: CartState;
}

export interface Coords {
  latitude?: number;
  longitude?: number;
}
export interface PositionObj {
  coords?: Coords;
}
