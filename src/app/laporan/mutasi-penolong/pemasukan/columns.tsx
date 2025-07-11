// components/columns/user-columns.ts
import { ColumnDef } from "@tanstack/react-table"
import { Eye } from "lucide-react"
import Link from "next/link"

export type mutasiBahanBaku = {
    id: number
    no_kontrak: string
    no_dokumen: string
    kategori_dokumen: string
    kode_barang: string
    tanggal_dokumen: string
    jumlah: string
    satuan: string 
}

export const mutasiBahanBakuColumns: ColumnDef<mutasiBahanBaku>[] = [
    {
        accessorKey: "no",
        header: "No",
        cell: ({ row }) => row.index + 1,
    },
    {
        accessorKey: "no_kontrak",
        header: "No. Kontrak",
    },
    {
        accessorKey: "no_dokumen",
        header: "Nomor Dokumen BC",
    },
    {
        accessorKey: "kategori_dokumen",
        header: "Kode Dokumen BC",
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
        accessorKey: "tanggal_dokumen",
        header: "Tanggal",
    },
    {
        accessorKey: "jumlah",
        header: "Jumlah",
    },
    {
        accessorKey: "satuan",
        header: "Satuan",
    }, 
]
