import { Checkbox } from "@/components/ui/checkbox"
import { ColumnDef } from "@tanstack/react-table"

export type Products = {
  kode: string
  nama: string
  kategori: string
  satuan: string
  jumlah: number
}

export const productsColumns = (
  selectedKodeList: string[],
  toggleSelect: (kode: string) => void
): ColumnDef<Products>[] => [
  {
    id: "select",
    header: ({ table }) => null,
    cell: ({ row }) => {
      const kode = row.original.kode
      return (
        <Checkbox
          checked={selectedKodeList.includes(kode)}
          onCheckedChange={() => toggleSelect(kode)}
        />
      )
    },
    enableSorting: false,
    enableHiding: false,
  },
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
    accessorKey: "satuan",
    header: "Satuan",
  },
  {
    accessorKey: "jumlah",
    header: "Stok",
  }
]