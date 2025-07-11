"use client"
import React, { useEffect, useState } from "react"
import {
    getCoreRowModel,
    getPaginationRowModel,
    useReactTable
} from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { GenericTable } from "@/components/common/genericTable" 
import { Products, productsColumns } from "./columns"
import { getProductions } from "../../../../lib/api/productions"
import { getProductsMovements } from "../../../../lib/api/productsMovement"

export default function pembeliPage() {
    const [data, setData] = useState<Products[]>([])
    const [filter, setFilter] = useState("")
    const [page, setPage] = useState(1)
    const [pageCount, setPageCount] = useState(0)
    const paginate = 20

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getProductsMovements({
                    page: page,
                    paginate: paginate,
                    q: filter,
                    status: 'Diminta'
                })
                console.log(res.data)
                setData(res.data.items)
                setPageCount(res.data.totalPages || 0) 
            } catch (err) {
                console.error("Failed to fetch supliers: Dokumen BC", err)
            }
        }
        fetchData()
    }, [page, filter])

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