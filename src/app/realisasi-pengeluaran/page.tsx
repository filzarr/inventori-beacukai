"use client"
import React, { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { GenericTable } from "@/components/common/genericTable" 
import { getIncomeInventoriesProducts } from "../../../lib/api/api"
import { RealisasiPemasukan, realisasiPemasukanColumns } from "./columns"
import { getOutcomesInventoriesProducts } from "../../../lib/api/outcomeInventoriesProducts"

export default function realisasiPemasukanPage() {
    const [data, setData] = useState<RealisasiPemasukan[]>([])
    const [filter, setFilter] = useState("")
    const [page, setPage] = useState(1)
    const [pageCount, setPageCount] = useState(0)
    const paginate = 20

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getOutcomesInventoriesProducts({
                    page: page,
                    paginate: paginate,
                    q: filter
                })
                console.log(res.data)
                setData(res.data.items)
                setPageCount(res.data.totalPages || 0) 
            } catch (err) {
                console.error("Failed to fetch Realisasi Pemasukan: Realisasi Pemasukan", err)
            }
        }
        fetchData()
    }, [page, filter])

    return (
        <div className="bg-white p-8 rounded w-full">
            <div className="flex justify-end mb-4">
                <Link href="/realisasi-pengeluaran/create">
                    <Button>Tambah</Button>
                </Link>
            </div>

            <GenericTable<RealisasiPemasukan>
                data={data}
                columns={realisasiPemasukanColumns}
                page={page}
                pageCount={pageCount}
                setPage={setPage}
                filter={filter}
                setFilter={setFilter} />
        </div>
    )
}