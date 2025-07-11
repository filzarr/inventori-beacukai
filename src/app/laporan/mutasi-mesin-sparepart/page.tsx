"use client"
import React, { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { GenericTable } from "@/components/common/genericTable" 
import { mutasiBahanBaku, mutasiBahanBakuColumns } from "./columns"
import { getLaporanMutasi } from "../../../../lib/api/laporan"

export default function laporanMutasiPage() {
    const [data, setData] = useState<mutasiBahanBaku[]>([])
    const [filter, setFilter] = useState("")
    const [page, setPage] = useState(1)
    const [pageCount, setPageCount] = useState(0)
    const paginate = 20

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getLaporanMutasi({
                    page: page,
                    paginate: paginate,
                    q: filter,
                    kategori: "Mesin/Sparepart"
                })
                console.log(res.data)
                setData(res.data.items)
                setPageCount(res.data.totalPages || 0) 
            } catch (err) {
                console.error("Failed to fetch laporan: Mutasi Bahan", err)
            }
        }
        fetchData()
    }, [page, filter])

    return (
        <div className="bg-white p-8 rounded w-full">

            <GenericTable<mutasiBahanBaku>
                data={data}
                columns={mutasiBahanBakuColumns}
                page={page}
                pageCount={pageCount}
                setPage={setPage}
                filter={filter}
                setFilter={setFilter} />
        </div>
    )
}