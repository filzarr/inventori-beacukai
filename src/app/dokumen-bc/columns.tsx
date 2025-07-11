// components/columns/user-columns.ts
import { ColumnDef } from "@tanstack/react-table"

export type DocumentBc = {
  id: number
  kode_document: string
  kategori: string 
  tanggal: Date
}

export const documentBcColumns: ColumnDef<DocumentBc>[] = [ 
  {
    accessorKey: "no",
    header: "No",
    cell: ({ row }) => row.index + 1,
  },
  {
    accessorKey: "kode_document",
    header: "Kode Document",
  },
  {
    accessorKey: "kategori",
    header: "Kategori",
  }
]
