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
  cart?: string | undefined;
  phone: string;
}
