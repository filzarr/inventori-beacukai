// components/columns/user-columns.ts
import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { Check } from "lucide-react"
import { updateStatusProductsMovement } from "../../../../lib/api/productsMovement"
import { useRouter } from "next/navigation"

export type Products = {
    id: number
    kode_barang: string
    nama_barang: string
    kategori: string
    satuan: string
    jumlah: string
}

export const productsColumns: ColumnDef<Products>[] = [
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
        header: "Stok",
    },
    {
        id: "ceklis",
        header: "Aksi",
        cell: ({ row }) => {
            const id = row.original.id
            const router = useRouter();
            
            const handleClick = async () => {
                const payload = {
                    id: id,
                    jumlah: row.original.jumlah,
                    kode_barang: row.original.kode_barang
                };

                try {
                    const res = await updateStatusProductsMovement(payload);
                    alert("Dokumen BC berhasil ditambahkan!");
                    router.refresh;
                } catch (err) {
                    console.error(err);
                    alert("Terjadi kesalahan saat menambahkan Dokumen BC.");
                }
            }

            return (
                <Button onClick={handleClick}>
                    <Check />

                </Button>
            )
        }
    }
]
