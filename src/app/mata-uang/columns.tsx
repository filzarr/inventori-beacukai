// components/columns/user-columns.ts
import { ColumnDef } from "@tanstack/react-table"

export type Currencies = {
  id: number
  kode: string
  mata_uang: string
}

export const currenciesColumns: ColumnDef<Currencies>[] = [ 
  {
    accessorKey: "no",
    header: "No",
    cell: ({ row }) => row.index + 1,
  },
  {
    accessorKey: "kode",
    header: "Kode Mata Uang",
  },
  {
    accessorKey: "mata_uang",
    header: "Mata Uang",
  }
]
