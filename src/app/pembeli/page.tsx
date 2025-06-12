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
import { pembeliColumns, Supliers } from "./columns"
import { getBuyers } from "../../../lib/api/api"

export default function pembeliPage() {
    const [data, setData] = useState<Supliers[]>([])
    const [filter, setFilter] = useState("")
    const [page, setPage] = useState(1)
    const [pageCount, setPageCount] = useState(0)
    const paginate = 20

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getBuyers({
                    page: page,
                    paginate: paginate,
                    q: filter
                })
                console.log(res.data)
                setData(res.data.items)
                setPageCount(res.data.totalPages || 0) 
            } catch (err) {
                console.error("Failed to fetch supliers: Penjual", err)
            }
        }
        fetchData()
    }, [page, filter])

    return (
        <div className="bg-white p-8 rounded w-full">
            <div className="flex justify-end mb-4">
                <Link href="/pembeli/create">
                    <Button>Tambah</Button>
                </Link>
            </div>

            <GenericTable<Supliers>
                data={data}
                columns={pembeliColumns}
                page={page}
                pageCount={pageCount}
                setPage={setPage}
                filter={filter}
                setFilter={setFilter} />
        </div>
    )
}