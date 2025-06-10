// components/columns/user-columns.ts
import { ColumnDef } from "@tanstack/react-table"

export type Products = {
    id: number
    kode: string
    nama: string
    kategori: string
    jumlah: string
}

export const productsColumns: ColumnDef<Products>[] = [
    {
        accessorKey: "no",
        header: "No",
        cell: ({ row }) => row.index + 1,
    },
    {
        accessorKey: "kode",
        header: "Kode Barang",
    },
    {
        accessorKey: "nama",
        header: "Nama Barang",
    },
    {
        accessorKey: "kategori",
        header: "Kategori Barang",
    },
    {
        accessorKey: "jumlah",
        header: "Stok",
    }
]
