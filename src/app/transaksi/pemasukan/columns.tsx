// components/columns/user-columns.ts
import { ColumnDef } from "@tanstack/react-table"

export type transaksiPemasukan = {
  id: number
  kategori: string
  no_document: string
  tanggal_document: string
  no_kontrak: string
  kategori_barang: string
  kode_barang: string
  nama_barang: string
  jumlah: string
}

export const transaksiPemasukanColumns: ColumnDef<transaksiPemasukan>[] = [
  {
    accessorKey: "no",
    header: "No",
    cell: ({ row }) => row.index + 1,
  },
  {
    accessorKey: "kategori",
    header: "Kategori Document BC",
  },
  {
    accessorKey: "kode_document",
    header: "Kode Document BC",
  },
  {
    accessorKey: "tanggal_document",
    header: "Tanggal Dokumen BC",
  },
  {
    accessorKey: "no_kontrak",
    header: "Nomor Kontrak",
  },
]
