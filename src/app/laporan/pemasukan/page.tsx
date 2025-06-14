"use client"
import React, { useEffect, useState } from "react"
import { GenericTable } from "@/components/common/genericTable"
import { pengeluaran, pengeluaranColums } from "./columns"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { getProducts } from "../../../../lib/api/products"


interface Product {
    kode: string;
    nama: string;
}
export default function laporanMutasiPage() {
    const [data, setData] = useState<pengeluaran[]>([])
    const [filter, setFilter] = useState("")
    const [page, setPage] = useState(1)
    const [barang, setBarang] = useState("")
    const [pageCount, setPageCount] = useState(0)
    const [products, setProducts] = useState<Product[]>([]);

    const paginate = 20
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await getProducts();
                setProducts(res.data.items || []);
            } catch (err) {
                console.error("Gagal fetch products:", err);
            }
        };
        fetchProducts();
    }, []);

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