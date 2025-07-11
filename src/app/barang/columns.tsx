// components/columns/user-columns.ts
import { ColumnDef } from "@tanstack/react-table"

export type Products = {
    id: number
    kode: string
    nama: string
    kategori: string
    satuan: string
    saldo_awal: string
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
        accessorKey: "satuan",
        header: "Satuan",
    },
    {
        accessorKey: "saldo_awal",
        header: "Saldo Awal",
    }
]
