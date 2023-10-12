import { TransactionData, EurRates, Summary } from "@/types";

export function calculateSummary(
  transactionsData: TransactionData | undefined,
  eurRatesData: EurRates | undefined
): Summary[] {
  if (!transactionsData || !eurRatesData) {
    return [];
  }

  const summary: { [key: string]: Summary } =
    transactionsData.transactions.reduce<{ [key: string]: Summary }>(
      (acc, transaction) => {
        const rate = eurRatesData[transaction.currency] || "N/A";
        // Set it to "N/A" if rate is not available.
        const eurEquiv = rate !== "N/A" ? transaction.amount * rate : "N/A";

        const summaryItem = acc[transaction.currency] || {
          currency: transaction.currency,
          total_completed_withdrawals: 0,
          total_completed_deposits: 0,
          total_pending_withdrawals: 0,
          total_pending_deposits: 0,
          total_balance: 0,
          total_balance_eur_equiv: 0,
        };

        const updatedSummaryItem = { ...summaryItem };

        // Update summary item based on the transaction type and status.
        if (transaction.type === "deposit") {
          if (transaction.status === "completed") {
            updatedSummaryItem.total_completed_deposits =
              summaryItem.total_completed_deposits + transaction.amount;
            updatedSummaryItem.total_balance =
              summaryItem.total_balance + transaction.amount;
          } else {
            updatedSummaryItem.total_pending_deposits =
              summaryItem.total_pending_deposits + transaction.amount;
          }
        } else {
          if (transaction.status === "completed") {
            updatedSummaryItem.total_completed_withdrawals =
              summaryItem.total_completed_withdrawals + transaction.amount;
            updatedSummaryItem.total_balance =
              summaryItem.total_balance - transaction.amount;
          } else {
            updatedSummaryItem.total_pending_withdrawals =
              summaryItem.total_pending_withdrawals + transaction.amount;
          }
        }

        // Update the EUR equiv if it's a number.
        if (typeof eurEquiv === "number") {
          updatedSummaryItem.total_balance_eur_equiv =
            (summaryItem.total_balance_eur_equiv || 0) + eurEquiv;
        }

        return { ...acc, [transaction.currency]: updatedSummaryItem };
      },
      {}
    );

  return Object.values(summary);
}
