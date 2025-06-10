// components/columns/user-columns.ts
import { ColumnDef } from "@tanstack/react-table"

export type Kontrak = {
  id: number
  no_kontrak: string
  nama_pemasok: string
  alamat_pemasok: string
  kategori: string
  kode_barang: string
  nama_barang: string
  jumlah: string
  satuan: string
  harga_satuan: string
  kode_mata_uang: string
  nilai_barang_fog: string
  nilai_barang_rp: string
}

export const kontrakColumns: ColumnDef<Kontrak>[] = [ 
  {
    accessorKey: "no",
    header: "No",
    cell: ({ row }) => row.index + 1,
  },
  {
    accessorKey: "no_kontrak",
    header: "Nomor Kontrak",
  },
  {
    accessorKey: "nama_pemasok",
    header: "Nama Penjual/Pemasok",
  },
  {
    accessorKey: "alamat",
    header: "Alamat",
  },
  {
    accessorKey: "nama_barang",
    header: "Nama Barang",
  },
  {
    accessorKey: "kode_barang",
    header: "Kode Barang",
  },
  {
    accessorKey: "jumlah",
    header: "Jumlah Barang",
  },
  {
    accessorKey: "harga_satuan",
    header: "Harga Barang Satuan",
  },
  {
    accessorKey: "nilai_barang_fog",
    header: "Nilai Barang FOG",
  },
  {
    accessorKey: "nilai_barang_rp",
    header: "Nilai Barang RP",
  },
  
]
