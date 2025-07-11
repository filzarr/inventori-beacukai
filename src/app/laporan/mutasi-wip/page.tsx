"use client"
import React, { useEffect, useState } from "react"
import { GenericTable } from "@/components/common/genericTable" 
import { mutasiWip, mutasiWipColumns } from "./columns"
import { getProductsMovements } from "../../../../lib/api/productsMovement"

export default function laporanMutasiPage() {
    const [data, setData] = useState<mutasiWip[]>([])
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
                    q: filter
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

            <GenericTable<mutasiWip>
                data={data}
                columns={mutasiWipColumns}
                page={page}
                pageCount={pageCount}
                setPage={setPage}
                filter={filter}
                setFilter={setFilter} />
        </div>
    )
}