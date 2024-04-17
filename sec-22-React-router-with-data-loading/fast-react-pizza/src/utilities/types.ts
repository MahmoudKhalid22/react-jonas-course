export interface Pizza {
  id: number;
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
  secondary: string;
}

export interface Item {
  id: string;
  quantity: number;
  name: string;
  totalPrice: number;
}

export interface FakeCart {
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}
