// components/columns/user-columns.ts
import { ColumnDef } from "@tanstack/react-table"

export type DocumentBc = {
  id: number
  no_document: string
  kategori: string
  kategori_barang: string
  tanggal: Date
}

export const documentBcColumns: ColumnDef<DocumentBc>[] = [ 
  {
    accessorKey: "no",
    header: "No",
    cell: ({ row }) => row.index + 1,
  },
  {
    accessorKey: "no_document",
    header: "Nomor Document",
  },
  {
    accessorKey: "kategori",
    header: "Kategori",
  },
  {
    accessorKey: "kategori_barang",
    header: "Kategori Barang",
  },
  {
    accessorKey: "tanggal",
    header: "Tanggal",
  }
]
