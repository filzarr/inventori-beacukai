// components/columns/user-columns.ts
import { ColumnDef } from "@tanstack/react-table"

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
    stok_akhir: number
}

export const mutasiBahanBakuColumns: ColumnDef<mutasiBahanBaku>[] = [
    {
        accessorKey: "no",
        header: "No",
        cell: ({ row }) => row.index + 1,
    },
    {
        accessorKey: "kode_dokumen",
        header: "Kode Document BC",
    },
    {
        accessorKey: "no_dokumen",
        header: "Nomor Document BC",
    },
    {
        accessorKey: "tanggal_dokumen",
        header: "Tanggal Dokumen BC",
    },
    {
        accessorKey: "no_kontrak",
        header: "Nomor Kontrak",
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
            const selisih = Number(row.getValue("saldo_awal")) - Number(row.getValue("pemasukan"))
            return (
                <span>{selisih}</span>
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
    }
]
