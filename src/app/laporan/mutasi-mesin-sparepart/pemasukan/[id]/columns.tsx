// components/columns/user-columns.ts
import { ColumnDef } from "@tanstack/react-table"
import { Eye } from "lucide-react"
import Link from "next/link"

export type pemasukan = {
    id: number
    kategori: string
    no_document: string
    no_kontrak: string
    tanggal: string
    kode_barang: string
    nama_barang: string
    jumlah: string
    satuan: string
}

export const pemasukanColumns: ColumnDef<pemasukan>[] = [
    {
        accessorKey: "no",
        header: "No",
        cell: ({ row }) => row.index + 1,
    },
    {
        accessorKey: "kategori",
        header: "Kategori Dokumen BC",
    },
    {
        accessorKey: "kode_document",
        header: "Kode Dokumen",
    },
    
    {
        accessorKey: "tanggal",
        header: "Tanggal Dokumen BC",
    },
    {
        accessorKey: "no_kontrak",
        header: "No. Kontrak",
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
        accessorKey: "jumlah",
        header: "Jumlah Masuk",
    },
    {
        accessorKey: "satuan",
        header: "Satuan",
    },
]
