"use client"
import React, { useEffect, useState } from "react"
import {
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    useReactTable
} from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { GenericTable } from "@/components/common/genericTable"
import { getCurrencies } from "../../../lib/api/api"
import { Currencies, currenciesColumns } from "./columns"

export default function pembeliPage() {
    const [data, setData] = useState<Currencies[]>([])
    const [filter, setFilter] = useState("")
    const [page, setPage] = useState(1)
    const [pageCount, setPageCount] = useState(0)
    const paginate = 20

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getCurrencies({
                    page: page,
                    paginate: paginate,
                    q: filter
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
        columns: currenciesColumns,
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
            <div className="flex justify-end mb-4">
                <Link href="/mata-uang/create">
                    <Button>Tambah</Button>
                </Link>
            </div>

            <GenericTable<Currencies>
                data={data}
                columns={currenciesColumns}
                page={page}
                pageCount={pageCount}
                setPage={setPage}
                filter={filter}
                setFilter={setFilter} />
        </div>
    )
}