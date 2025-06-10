"use client"
import React, { useEffect, useState } from "react"
import { GenericTable } from "@/components/common/genericTable" 
import { mutasiScrapColumns, mutasScrap } from "./columns"

export default function laporanMutasiPage() {
    const [data, setData] = useState<mutasScrap[]>([])
    const [filter, setFilter] = useState("")
    const [page, setPage] = useState(1)
    const [pageCount, setPageCount] = useState(0)
    const paginate = 20


    return (
        <div className="bg-white p-8 rounded w-full">

            <GenericTable<mutasScrap>
                data={data}
                columns={mutasiScrapColumns}
                page={page}
                pageCount={pageCount}
                setPage={setPage}
                filter={filter}
                setFilter={setFilter} />
        </div>
    )
}