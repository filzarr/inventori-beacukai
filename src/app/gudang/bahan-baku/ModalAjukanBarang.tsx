"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { Products } from "./columns"
import { createTransferProduct } from "../../../../lib/api/transfers_products"
import { useRouter } from "next/navigation"
interface Props {
  open: boolean
  onClose: () => void
  selectedItems: Products[]
  onSubmit: (data: { kode_barang: string; jumlah: number }[]) => void
}

export default function ModalAjukanBarang({ open, onClose, selectedItems, onSubmit }: Props) {
    const router = useRouter()
  const [values, setValues] = useState<Record<string, number>>({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (open) {
      const resetValues: Record<string, number> = {}
      selectedItems.forEach(item => {
        resetValues[item.kode] = 0
      })
      setValues(resetValues)
    }
  }, [open, selectedItems])

  const handleChange = (kode: string, val: string) => {
    const parsed = parseInt(val)
    setValues((prev) => ({
      ...prev,
      [kode]: isNaN(parsed) ? 0 : parsed
    }))
  }

  const handleSubmit = async () => {
    const result = selectedItems
      .map((item) => ({
        kode_barang: item.kode,
        jumlah: values[item.kode] || 0,
      }))
      .filter((item) => item.jumlah > 0)

    if (result.length === 0) {
      alert("Mohon isi jumlah minimal satu barang.")
      return
    }

    setLoading(true)
    try {
      for (const item of result) {
        console.log(item)
        await createTransferProduct(item)
      }
      alert("Pengajuan berhasil dikirim.")
      onSubmit(result)
      onClose()
      router.refresh()
    } catch (err) {
      console.error("Gagal mengirim salah satu pengajuan:", err)
      alert("Terjadi kesalahan saat mengirim pengajuan.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Ajukan Barang</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4 max-h-[400px] overflow-auto">
          {selectedItems.map((item) => (
            <div key={item.kode} className="flex justify-between items-center gap-2">
              <span className="w-2/3 truncate">{item.nama}</span>
              <Input
                type="number"
                placeholder="Jumlah"
                min={0}
                className="w-1/3"
                value={values[item.kode] ?? ""}
                onChange={(e) => handleChange(item.kode, e.target.value)}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-end pt-4 gap-2">
          <Button variant="secondary" onClick={onClose} disabled={loading}>
            Batal
          </Button>
          <Button onClick={handleSubmit} disabled={loading}>
            {loading ? "Mengirim..." : "Ajukan"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}