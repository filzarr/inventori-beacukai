"use client"
import React, { useEffect, useState } from "react"
import { GenericTable } from "@/components/common/genericTable" 
import { mutasiBahanBaku, mutasiBahanBakuColumns } from "../mutasi-bahan-baku/columns"

export default function laporanMutasiPenolongPage() {
    const [data, setData] = useState<mutasiBahanBaku[]>([])
    const [filter, setFilter] = useState("")
    const [page, setPage] = useState(1)
    const [pageCount, setPageCount] = useState(0)
    const paginate = 20


    return (
        <div className="bg-white p-8 rounded w-full">
 
        </div>
    )
}