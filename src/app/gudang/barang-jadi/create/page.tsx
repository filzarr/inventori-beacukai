"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { FormInput } from "@/components/common/formInput";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { createReadyProduct } from "../../../../../lib/api/readyProducts";

export default function pembeliCreatePage() {
    const [kode, setKode] = useState("");
    const [nama, setNama] = useState("");
    const [satuan, setSatuan] = useState("");
    const [kategori, setKategori] = useState("");
    const [jumlah, setJumlah] = useState("");
    const router = useRouter();


    const handleSubmit = async () => {
        const payload = {
            kode,
            nama,
            satuan,
            jumlah: Number(jumlah),
        };

        try {
            const res = await createReadyProduct(payload);
            alert("Barang berhasil ditambahkan!");
            router.push("/gudang/barang-jadi");
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
                <FormInput id="satuan"
                    label="Satuan"
                    value={satuan}
                    onChange={(e) => setSatuan(e.target.value)} /> 

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