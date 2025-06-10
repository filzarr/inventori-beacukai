// components/columns/user-columns.ts
import { ColumnDef } from "@tanstack/react-table"

export type Supliers = {
  id: number
  name: string
  alamat: string
}

export const pembeliColumns: ColumnDef<Supliers>[] = [ 
  {
    accessorKey: "no",
    header: "No",
    cell: ({ row }) => row.index + 1,
  },
  {
    accessorKey: "name",
    header: "Nama",
  },
  {
    accessorKey: "alamat",
    header: "Alamat",
  }
]
