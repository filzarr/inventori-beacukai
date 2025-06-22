"use client"
import React, { useEffect, useState } from "react"
import {
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    useReactTable
} from "@tanstack/react-table"
import { GenericTable } from "@/components/common/genericTable"
import { Products, productsColumns } from "./columns"
import { getReadyProducts } from "../../../../lib/api/readyProducts"
import { getProducts } from "../../../../lib/api/products"

export default function barangPage() {
    const [data, setData] = useState<Products[]>([])
    const [filter, setFilter] = useState("")
    const [page, setPage] = useState(1)
    const [pageCount, setPageCount] = useState(0)
    const paginate = 20

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getProducts({
                    page: page,
                    paginate: paginate,
                    q: filter,
                    kategori: "Mesin/Sparepart",
                })
                console.log(res.data)
                setData(res.data.items)
                setPageCount(res.data.totalPages || 0)
            } catch (err) {
                console.error("Failed to fetch supliers: pagepembeli", err)
            }
        }
        fetchData()
    }, [page, filter])

    const table = useReactTable({
        data,
        columns: productsColumns,
        pageCount,
        manualPagination: true,
        state: {
            pagination: {
                pageIndex: page - 1,
                pageSize: paginate,
            },
        },
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onPaginationChange: (updater) => {
            const next = typeof updater === "function" ? updater({ pageIndex: page - 1, pageSize: paginate }) : updater
            setPage(next.pageIndex + 1)
        },
    })

    return (
        <div className="bg-white p-8 rounded w-full">
            <GenericTable<Products>
                data={data}
                columns={productsColumns}
                page={page}
                pageCount={pageCount}
                setPage={setPage}
                filter={filter}
                setFilter={setFilter} />
        </div>
    )
}