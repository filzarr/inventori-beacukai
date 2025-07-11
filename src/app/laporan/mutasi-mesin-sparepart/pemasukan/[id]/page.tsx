"use client"
import React, { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { GenericTable } from "@/components/common/genericTable"
import { pemasukan, pemasukanColumns } from "./columns"
import { useParams } from "next/navigation"
import { getLaporanMutasiPemasukan } from "../../../../../../lib/api/laporan"

export default function laporanMutasiPage() {
    const [data, setData] = useState<pemasukan[]>([])
    const [filter, setFilter] = useState("")
    const [page, setPage] = useState(1)
    const [pageCount, setPageCount] = useState(0)
    const paginate = 20
    const params = useParams(); // return type: { id: string }

    const id = params.id;
        useEffect(() => {
            const fetchData = async () => {
                try {
                    const res = await getLaporanMutasiPemasukan({
                        page: page,
                        paginate: paginate,
                        q: filter,
                        kode_barang: id,
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

            <GenericTable<pemasukan>
                data={data}
                columns={pemasukanColumns}
                page={page}
                pageCount={pageCount}
                setPage={setPage}
                filter={filter}
                setFilter={setFilter} />
        </div>
    )
}