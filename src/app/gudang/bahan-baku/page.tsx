"use client"

import React, { useEffect, useState } from "react"
import {
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  getFilteredRowModel,
  getSortedRowModel
} from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { GenericTable } from "@/components/common/genericTable"
import { Products, productsColumns } from "./columns"
import { getProducts } from "../../../../lib/api/products"
import ModalAjukanBarang from "./ModalAjukanBarang"

export default function BarangPage() {
  const [data, setData] = useState<Products[]>([])
  const [filter, setFilter] = useState("")
  const [page, setPage] = useState(1)
  const [pageCount, setPageCount] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedKodes, setSelectedKodes] = useState<string[]>([])
  const paginate = 20

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getProducts({
          page,
          paginate,
          q: filter,
          kategori: "Bahan Baku",
        })
        setData(res.data.items)
        setPageCount(res.data.totalPages || 0)
      } catch (err) {
        console.error("Failed to fetch products", err)
      }
    }
    fetchData()
  }, [page, filter])

  const toggleSelect = (kode: string) => {
    setSelectedKodes((prev) =>
      prev.includes(kode) ? prev.filter((k) => k !== kode) : [...prev, kode]
    )
  }

  const table = useReactTable({
    data,
    columns: productsColumns(selectedKodes, toggleSelect),
    pageCount,
    manualPagination: true,
    state: {
      pagination: {
        pageIndex: page - 1,
        pageSize: paginate,
      },
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  const selectedItems = data.filter((item) =>
    selectedKodes.includes(item.kode)
  )

  const handleAjukan = (payload: { kode_barang: string; jumlah: number }[]) => {
    console.log("Pengajuan dikirim:", payload)
    // Submit ke API, misal:
    // await submitPengajuanBarang(payload)
    setSelectedKodes([])
  }

  return (
    <div className="bg-white p-8 rounded w-full">
      <div className="flex justify-end mb-4 gap-2">
        <Button
          disabled={selectedItems.length === 0}
          onClick={() => setModalOpen(true)}
        >
          Ajukan Barang
        </Button>
      </div>
      <GenericTable<Products>
        data={data}
        columns={productsColumns(selectedKodes, toggleSelect)}
        page={page}
        pageCount={pageCount}
        setPage={setPage}
        filter={filter}
        setFilter={setFilter}
      />
      <ModalAjukanBarang
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedItems={selectedItems}
        onSubmit={handleAjukan}
      />
    </div>
  )
}