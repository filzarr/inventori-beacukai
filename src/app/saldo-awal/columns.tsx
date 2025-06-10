// components/columns/user-columns.ts
import { ColumnDef } from "@tanstack/react-table"

export type SaldoAwal = {
  id: number
  kode_barang: string
  nama_barang: string
  saldo_awal: string
}

export const saldoAwalColumns: ColumnDef<SaldoAwal>[] = [ 
  {
    accessorKey: "no",
    header: "No",
    cell: ({ row }) => row.index + 1,
  },
  {
    accessorKey: "kode_barang",
    header: "Kode Barang",
  },
  {
    accessorKey: "nama_barang",
    header: "Nama Barang",
  },
  {
    accessorKey: "saldo_awal",
    header: "Saldo Awal",
  }
]
