import { Transaction } from "@/types";
import { API_BASE_URL } from "@/config";

// Function to fetch transactions data
export async function getTransactions(): Promise<{
  transactions: Transaction[];
}> {
  const res = await fetch(`${API_BASE_URL}/transactions`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch transactions: ${res.statusText}`);
  }

  // Get the transactions data
  const data = await res.json();

  return data;
}
