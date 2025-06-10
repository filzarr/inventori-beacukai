// components/columns/user-columns.ts
import { ColumnDef } from "@tanstack/react-table"

export type mutasScrap = {
    id: number
    kode_barang: string
    nama_barang: string
    satuan: string
    saldo_awal: string
    pemasukan: string
    pengeluaran: string
    sisa: string
}

export const mutasiScrapColumns: ColumnDef<mutasScrap>[] = [
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
        accessorKey: "saldo_awal",
        header: "Saldo Awal",
    },
    {
        accessorKey: "pemasukan",
        header: "Pemasukan",
    },
    {
        accessorKey: "pengeluaran",
        header: "Pengeluaran",
    },
    {
        accessorKey: "sisa",
        header: "Sisa",
    },
]
