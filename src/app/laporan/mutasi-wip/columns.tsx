// components/columns/user-columns.ts
import { ColumnDef } from "@tanstack/react-table"

export type mutasiWip = {
    id: number
    kode_barang: string
    nama_barang: string
    satuan: string
    jumlah: string
}

export const mutasiWipColumns: ColumnDef<mutasiWip>[] = [
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
        header: "Jumlah WIP",
    },
]
