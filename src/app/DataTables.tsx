"use client";

import React from "react";
import DataTable from "@/components/data-table/data-table";
import { getTransactions, getEurRates } from "../utils";
import {
  transactionColumns,
  summaryColumns,
} from "@/components/data-table/columns";
import { useQueries } from "@tanstack/react-query";

import { calculateSummary } from "@/utils";

export default function DataTables() {
  const [
    {
      data: transactionsData,
      isLoading: isTransactionsLoading,
      isError: isTransactionsError,
    },
    {
      data: eurRatesData,
      isLoading: isEurRatesLoading,
      isError: isEurRatesError,
    },
  ] = useQueries({
    queries: [
      { queryKey: ["transactions"], queryFn: getTransactions },
      { queryKey: ["eurRates"], queryFn: getEurRates },
    ],
  });

  const summaryData = React.useMemo(
    () => calculateSummary(transactionsData, eurRatesData),
    [transactionsData, eurRatesData]
  );

  return (
    <div className="container py-10 mx-auto">
      <>
        <DataTable
          data={transactionsData?.transactions.map((transaction) => ({
            ...transaction,
            eur_equiv:
              transaction.currency && eurRatesData?.[transaction.currency]
                ? transaction.amount *
                  (eurRatesData[transaction.currency] as number)
                : "N/A",
          }))}
          loading={isTransactionsLoading}
          error={isTransactionsError}
          columns={transactionColumns}
        />
        <DataTable
          data={summaryData}
          loading={isEurRatesLoading}
          error={isEurRatesError}
          columns={summaryColumns}
        />
      </>
    </div>
  );
}
