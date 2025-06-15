// components/columns/user-columns.ts
import { ColumnDef } from "@tanstack/react-table"

export type RealisasiPemasukan = {
    id: number
    no_kontrak: string
    kode_barang: string
    nama_barang: string
    kategori: string
    jumlah_masuk: string
    jumlah_kontrak: string
}

export const realisasiPemasukanColumns: ColumnDef<RealisasiPemasukan>[] = [
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
        accessorKey: "kode_barang",
        header: "Kode Barang",
    },
    {
        accessorKey: "nama_barang",
        header: "Nama Barang",
    },
    {
        accessorKey: "jumlah_masuk",
        header: "Jumlah Masuk",
    },
    {
        accessorKey: "jumlah_kontrak",
        header: "jumlah_kontrak",
    },
    {
        accessorKey: "selisih",
        header: "Selisih",
        cell: ({ row }) => {
            const selisih = Number(row.getValue("jumlah_kontrak")) - Number(row.getValue("jumlah_masuk")) 
            return (
                <span>{selisih}</span>
            )
        },
    },

]
