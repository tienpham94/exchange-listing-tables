import { EurRates } from "@/types";
import { API_BASE_URL } from "@/config";

// Function to fetch EUR rates
export async function getEurRates(): Promise<EurRates> {
  const res = await fetch(`${API_BASE_URL}/eur-rates`, {});

  if (!res.ok) {
    throw new Error(`Failed to fetch EUR rates: ${res.statusText}`);
  }

  // Get the EUR rates data
  const data = await res.json();

  return data;
}
