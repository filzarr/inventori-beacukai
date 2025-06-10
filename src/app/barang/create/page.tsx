"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { createProduct } from "../../../../lib/api/api";
import { FormInput } from "@/components/common/formInput";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function pembeliCreatePage() {
    const [kode, setKode] = useState("");
    const [nama, setNama] = useState("");
    const [kategori, setKategori] = useState("");
    const [jumlah, setJumlah] = useState("");
    const router = useRouter();


    const handleSubmit = async () => {
        const payload = {
            kode,
            nama,
            kategori,
            jumlah: Number(jumlah),
        };

        try {
            const res = await createProduct(payload);
            alert("Barang berhasil ditambahkan!");
            router.push("/barang");
        } catch (err) {
            console.error(err);
            alert("Terjadi kesalahan saat menambahkan barang.");
        }
    };

    return (
        <div className="bg-white p-8 bg rounded w-full flex flex-col gap-8">
            <div className="text-center text-xl font-semibold">Tambah Barang</div>
            <div className="flex flex-col gap-4">
                <FormInput id="kodeBarang"
                    label="Kode Barang"
                    value={kode}
                    onChange={(e) => setKode(e.target.value)} />
                <FormInput id="nama"
                    label="Nama Barang"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)} />
                <div className="px-8 max-w-1/2">
                    <Select value={kategori} onValueChange={setKategori}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Pilih Kategori Produk" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Bahan Baku">Bahan Baku</SelectItem>
                            <SelectItem value="Bahan Penolong">Bahan Penolong</SelectItem>
                            <SelectItem value="Mesin/Sparepart">Mesin/Sparepart</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <FormInput id="jumlah"
                    label="Jumlah"
                    value={jumlah}
                    type="number"
                    onChange={(e) => setJumlah(e.target.value)} />
                <div className="px-8">
                    <Button onClick={handleSubmit}>Submit</Button>
                </div>
            </div>
        </div>
    );
}