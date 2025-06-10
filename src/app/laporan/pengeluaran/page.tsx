"use client"
import React, { useEffect, useState } from "react"
import { GenericTable } from "@/components/common/genericTable" 
import { pengeluaran, pengeluaranColums } from "../pemasukan/columns"

export default function laporanMutasiPage() {
    const [data, setData] = useState<pengeluaran[]>([])
    const [filter, setFilter] = useState("")
    const [page, setPage] = useState(1)
    const [pageCount, setPageCount] = useState(0)
    const paginate = 20


    return (
        <div className="bg-white p-8 rounded w-full">

            <GenericTable<pengeluaran>
                data={data}
                columns={pengeluaranColums}
                page={page}
                pageCount={pageCount}
                setPage={setPage}
                filter={filter}
                setFilter={setFilter} />
        </div>
    )
}