import { ColumnDef } from "@tanstack/react-table";
import { Transaction, Summary } from "@/types";

// Function to capitalize first letter
const capitalizeFirstLetter = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const transactionColumns: ColumnDef<Transaction>[] = [
  {
    header: "Timestamp",
    accessorKey: "timestamp",
    cell: ({ row }: { row: { original: Transaction } }) => (
      <div>{new Date(row.original.timestamp).toLocaleString()}</div>
    ),
  },
  {
    header: "Currency",
    accessorKey: "currency",
  },
  {
    header: "Amount",
    accessorKey: "amount",
  },
  {
    header: "EUR Equivalent",
    accessorKey: "eur_equiv",
  },
  {
    header: "Type",
    accessorKey: "type",
    cell: ({ row }: { row: { original: Transaction } }) => (
      <div>{capitalizeFirstLetter(row.original.type)}</div>
    ),
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: ({ row }: { row: { original: Transaction } }) => (
      <div>{capitalizeFirstLetter(row.original.status)}</div>
    ),
  },
];

export const summaryColumns: ColumnDef<Summary>[] = [
  {
    header: "Currency",
    accessorKey: "currency",
  },
  {
    header: "Total Completed Withdrawals",
    accessorKey: "total_completed_withdrawals",
  },
  {
    header: "Total Completed Deposits",
    accessorKey: "total_completed_deposits",
  },
  {
    header: "Total Pending Withdrawals",
    accessorKey: "total_pending_withdrawals",
  },
  {
    header: "Total Pending Deposits",
    accessorKey: "total_pending_deposits",
  },
  {
    header: "Total Balance",
    accessorKey: "total_balance",
    cell: ({ row }: { row: { original: Summary } }) => (
      <div>{row.original.total_balance.toFixed(2)}</div>
    ),
  },
  {
    header: "Total Balance EUR Equivalent",
    accessorKey: "total_balance_eur_equiv",
    cell: ({ row }: { row: { original: Summary } }) => (
      <div>
        {row.original.total_balance_eur_equiv
          ? row.original.total_balance_eur_equiv.toFixed(2)
          : "N/A"}
      </div>
    ),
  },
];
