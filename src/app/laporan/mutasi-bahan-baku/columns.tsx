// components/columns/user-columns.ts
import { ColumnDef } from "@tanstack/react-table"
import { Eye } from "lucide-react"
import Link from "next/link"

export type mutasiBahanBaku = {
    id: number
    kode_dokumen: string
    no_dokumen: string
    tanggal_dokumen: string
    no_kontrak: string
    kode_barang: string
    nama_barang: string
    satuan: string
    saldo_awal: number
    pemasukan: number
    penyesuaian: number
    stok_opname: number
}

export const mutasiBahanBakuColumns: ColumnDef<mutasiBahanBaku>[] = [
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
        cell: ({ row }) => {

            return (
                <span>0</span>
            )
        },
    },
    {
        accessorKey: "penyesuaian",
        header: "Penyesuaian",
        cell: ({ row }) => {
            const selisih = Number(row.getValue("saldo_awal")) + Number(row.getValue("pemasukan"))
            return (
                <span>0</span>
            )
        },
    },
    {
        accessorKey: "stok_opname",
        header: "Stok Opname",
    },
    {
        accessorKey: "stok_akhir",
        header: "Stok Akhir",
        cell: ({ row }) => {
            const stokAkhir = Number(row.getValue("stok_opname"))
            return (
                <span>{stokAkhir}</span>
            )
        },
    },
    {
        accessorKey: "action",
        header: "Action",
        cell: ({ row }) => {
            const kodeBarang = row.getValue("kode_barang")
            return (
                <div className="flex justify-center">
                    <Link href={`/laporan/mutasi-bahan-baku/${kodeBarang}`} className="bg-yellow-300 px-1 rounded-4xl" >
                        <Eye className=" text-white text-sm" width={18} />
                    </Link>
                </div>

            )
        }
    }
]
