export interface Transaction {
  timestamp: string;
  currency: string;
  amount: number;
  type: "deposit" | "withdrawal";
  status: "completed" | "pending";
}

export interface TransactionData {
  transactions: Transaction[];
}

export interface EurRates {
  [currency: string]: number | null;
}

export interface Summary {
  currency: string;
  total_completed_withdrawals: number;
  total_completed_deposits: number;
  total_pending_withdrawals: number;
  total_pending_deposits: number;
  total_balance: number;
  total_balance_eur_equiv: number | null;
}
