export interface NormalAction {
  type: string;
  payload?: number;
}

export interface Payload {
  amount: number;
  purpose: string;
}

export interface RequestLoanAction {
  type: "account/requestLoan";
  payload?: Payload;
}

export interface AccountState {
  balance: number;
  loan: number;
  purpose: string;
  isLoading: boolean;
}
export interface CustomerState {
  fullName?: string;
  nationalID?: string;
  createdAt?: string;
}
export interface CustomerAction {
  type: string;
  payload?: CustomerState;
}

export interface States {
  customer: CustomerState;
  account: AccountState;
}
