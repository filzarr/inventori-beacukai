// components/columns/user-columns.ts
import { ColumnDef } from "@tanstack/react-table"

export type pengeluaran = {
    id: number
    jenis_dokumen: string
    no_pengajuan: string
    no_daftar: string
    tanggal_daftar: string
    no_bukti_penerimaan: string
    tanggal_lpb: string
    pemasok: string
    kode_barang: string
    nama_barang: string
    satuan: string
    jumlah: string
    mata_uang: string
    nilai_barang: string
}

export const pengeluaranColums: ColumnDef<pengeluaran>[] = [
    {
        accessorKey: "no",
        header: "No",
        cell: ({ row }) => row.index + 1,
    },
    {
        accessorKey: "jenis_dokumen",
        header: "Jenis Dokumen",
    },
    {
        accessorKey: "no_pengajuan",
        header: "No. Pengajuan",
    },
    {
        accessorKey: "no_daftar",
        header: "No. Daftar",
    },
    {
        accessorKey: "tanggal_daftar",
        header: "Tanggal Daftar",
    },
    {
        accessorKey: "no_bukti_penerimaan",
        header: "No. Bukti Penerimaan Barang",
    },
    {
        accessorKey: "tanggal_lpb",
        header: "Tanggal LPB",
    },
    {
        accessorKey: "pemasok",
        header: "Pemasok Pengirim",
    },
    {
        accessorKey: "kode_barang",
        header: "Kode Barang",
    },
    {
        accessorKey: "nama_barang",
        header: "Kode Barang",
    },
    {
        accessorKey: "satuan",
        header: "Satuan",
    },
    {
        accessorKey: "jumlah",
        header: "Jumlah",
    },
    {
        accessorKey: "mata_uang",
        header: "Mata Uang",
    },
    {
        accessorKey: "nilai_barang",
        header: "Nilai Barang",
    },
]
