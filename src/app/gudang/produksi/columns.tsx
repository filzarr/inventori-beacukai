// components/columns/user-columns.ts
import { ColumnDef } from "@tanstack/react-table"

export type Products = {
    id: number
    kode_barang: string
    nama_barang: string
    kategori: string
    satuan: string
    jumlah: string
}

export const productsColumns: ColumnDef<Products>[] = [
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
        accessorKey: "satuan",
        header: "Satuan",
    },
    {
        accessorKey: "jumlah",
        header: "Stok",
    }
]
