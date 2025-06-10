"use client"
import React, { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { GenericTable } from "@/components/common/genericTable" 
import { transaksiPemasukan, transaksiPemasukanColumns } from "./columns"
import { getTransactionIncomes } from "../../../../lib/api/api"

export default function transaksiPemasukanPage() {
    const [data, setData] = useState<transaksiPemasukan[]>([])
    const [filter, setFilter] = useState("")
    const [page, setPage] = useState(1)
    const [pageCount, setPageCount] = useState(0)
    const paginate = 20

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getTransactionIncomes({
                    page: page,
                    paginate: paginate,
                    q: filter
                })
                console.log(res.data)
                setData(res.data.items)
                setPageCount(res.data.totalPages || 0) 
            } catch (err) {
                console.error("Failed to fetch Transaksi: Pemasukan", err)
            }
        }
        fetchData()
    }, [page, filter])

    return (
        <div className="bg-white p-8 rounded w-full">
            <div className="flex justify-end mb-4">
                <Link href="/transaksi/pemasukan/create">
                    <Button>Tambah</Button>
                </Link>
            </div>

            <GenericTable<transaksiPemasukan>
                data={data}
                columns={transaksiPemasukanColumns}
                page={page}
                pageCount={pageCount}
                setPage={setPage}
                filter={filter}
                setFilter={setFilter} />
        </div>
    )
}