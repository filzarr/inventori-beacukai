"use client"

import * as React from "react"
import {
    ColumnDef,
    ColumnFiltersState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
    VisibilityState,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import DateMutasi from "./dateMutasi"
import MutasiBahanBakuBulananBreadcrumb from "./breadcrumb"
import { SidebarTrigger } from "@/components/ui/sidebar"

const data: Payment[] = [
    {
        no: 1,
        kodeBarang: "BRG001",
        namaBarang: "Tepung Terigu",
        satuan: "kg",
        saldoAwal: 100,
        pemasukan: 50,
        pengeluaran: 30,
        penyesuaian: 0,
        saldoAkhir: 120,
        stokOpname: 115,
        selisih: -5,
        keterangan: "Stok kurang 5 kg",
        tanggal: "2025-05-01",
    },
    {
        no: 2,
        kodeBarang: "BRG002",
        namaBarang: "Gula Pasir",
        satuan: "kg",
        saldoAwal: 80,
        pemasukan: 20,
        pengeluaran: 10,
        penyesuaian: 5,
        saldoAkhir: 95,
        stokOpname: 95,
        selisih: 0,
        keterangan: "Sesuai",
        tanggal: "2025-05-01",
    },
    {
        no: 3,
        kodeBarang: "BRG003",
        namaBarang: "Minyak Goreng",
        satuan: "liter",
        saldoAwal: 60,
        pemasukan: 40,
        pengeluaran: 50,
        penyesuaian: -5,
        saldoAkhir: 45,
        stokOpname: 48,
        selisih: 3,
        keterangan: "Selisih positif",
        tanggal: "2025-05-01",
    },
]

export type Payment = {
    no: number
    kodeBarang: string
    namaBarang: string
    satuan: string
    saldoAwal: number
    pemasukan: number
    pengeluaran: number
    penyesuaian: number
    saldoAkhir: number
    stokOpname: number
    selisih: number
    keterangan: string
    tanggal: string
}

export const columns: ColumnDef<Payment>[] = [
    {
        id: "search",
        header: () => null,
        cell: () => null,
        meta: {
            isVirtual: true,
        },
        enableSorting: false,
        enableHiding: false,
        filterFn: (row, columnId, value) => {
            const nama = row.original.namaBarang?.toLowerCase() || ""
            const kode = row.original.kodeBarang?.toLowerCase() || ""
            return (
                nama.includes(value.toLowerCase()) || kode.includes(value.toLowerCase())
            )
        },
    },
    {
        accessorKey: "no",
        header: "No",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("no")}</div>
        ),
    },
    {
        accessorKey: "kodeBarang",
        header: "Kode Barang",
        cell: ({ row }) => <div className="lowercase">{row.getValue("kodeBarang")}</div>,
    },
    {
        accessorKey: "namaBarang",
        header: "Nama Barang",
        cell: ({ row }) => <div className="lowercase">{row.getValue("namaBarang")}</div>,
    },
    {
        accessorKey: "satuan",
        header: "Satuan",
        cell: ({ row }) => <div className="lowercase">{row.getValue("satuan")}</div>,
    },
    {
        accessorKey: "saldoAwal",
        header: "Saldo Awal",
        cell: ({ row }) => <div className="lowercase">{row.getValue("saldoAwal")}</div>,
    },
    {
        accessorKey: "pemasukan",
        header: "Pemasukan",
        cell: ({ row }) => <div className="lowercase">{row.getValue("pemasukan")}</div>,
    },
    {
        accessorKey: "pengeluaran",
        header: "Pengeluaran",
        cell: ({ row }) => <div className="lowercase">{row.getValue("pengeluaran")}</div>,
    },
    {
        accessorKey: "penyesuaian",
        header: "Penyesuaian",
        cell: ({ row }) => <div className="lowercase">{row.getValue("penyesuaian")}</div>,
    },
    {
        accessorKey: "saldoAkhir",
        header: "Saldo Akhir",
        cell: ({ row }) => <div className="lowercase">{row.getValue("saldoAkhir")}</div>,
    },
    {
        accessorKey: "stokOpname",
        header: "Stok Opname",
        cell: ({ row }) => <div className="lowercase">{row.getValue("stokOpname")}</div>,
    },
    {
        accessorKey: "selisih",
        header: "Selisih",
        cell: ({ row }) => <div className="lowercase">{row.getValue("selisih")}</div>,
    },
    {
        accessorKey: "keterangan",
        header: "Keterangan",
        cell: ({ row }) => <div className="lowercase">{row.getValue("keterangan")}</div>,
    },
    {
        accessorKey: "tanggal",
        header: "Tanggal",
        cell: ({ row }) => <div className="lowercase">{row.getValue("tanggal")}</div>,
    },
]

export default function MutasiBahanBakuBulanan() {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({ search: false })
    const [rowSelection, setRowSelection] = React.useState({})

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    })

    return (
        <> 
            <div className="bg-white p-8  bg rounded w-full">
                <DateMutasi />
                <div className="flex items-center py-4">
                    <Input
                        placeholder="Filter nama atau kode barang..."
                        value={(table.getColumn("search")?.getFilterValue() as string) ?? ""}
                        onChange={(event) =>
                            table.getColumn("search")?.setFilterValue(event.target.value)
                        }
                        className="max-w-sm"
                    />
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="ml-auto">
                                Columns <ChevronDown />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            {table
                                .getAllColumns()
                                .filter((column) => column.getCanHide())
                                .map((column) => {
                                    return (
                                        <DropdownMenuCheckboxItem
                                            key={column.id}
                                            className="capitalize"
                                            checked={column.getIsVisible()}
                                            onCheckedChange={(value) =>
                                                column.toggleVisibility(!!value)
                                            }
                                        >
                                            {column.id}
                                        </DropdownMenuCheckboxItem>
                                    )
                                })}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <div className="  border-collapse">
                    <Table className=" border  rounded-md">
                        <TableHeader className="bg-gray-100 border-collapse">
                            {table.getHeaderGroups().map((headerGroup) => (
                                <TableRow key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => {
                                        return (
                                            <TableHead className={"border-x overflow-hidden "} key={header.id}>
                                                {header.isPlaceholder
                                                    ? null
                                                    : flexRender(
                                                        header.column.columnDef.header,
                                                        header.getContext()
                                                    )}
                                            </TableHead>
                                        )
                                    })}
                                </TableRow>
                            ))}
                        </TableHeader>
                        <TableBody>
                            {table.getRowModel().rows?.length ? (
                                table.getRowModel().rows.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        data-state={row.getIsSelected() && "selected"}
                                    >
                                        {row.getVisibleCells().map((cell) => (
                                            <TableCell key={cell.id}>
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell
                                        colSpan={columns.length}
                                        className="h-24 text-center"
                                    >
                                        No results.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
                <div className="flex items-center justify-end space-x-2 py-4">
                    <div className="text-muted-foreground flex-1 text-sm">
                        {table.getFilteredSelectedRowModel().rows.length} of{" "}
                        {table.getFilteredRowModel().rows.length} row(s) selected.
                    </div>
                    <div className="space-x-2">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => table.previousPage()}
                            disabled={!table.getCanPreviousPage()}
                        >
                            Previous
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => table.nextPage()}
                            disabled={!table.getCanNextPage()}
                        >
                            Next
                        </Button>
                    </div>
                </div>
            </div>
        </>

    )
}
