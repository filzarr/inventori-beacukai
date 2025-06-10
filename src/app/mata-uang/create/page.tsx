"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { createCurrency } from "../../../../lib/api/api";
import { FormInput } from "@/components/common/formInput";

export default function pembeliCreatePage() {
    const [kode, setKode] = useState("");
    const [mataUang, setMataUang] = useState("");
    const router = useRouter();


    const handleSubmit = async () => {
        const payload = {
            kode,
            mata_uang: mataUang,
        };

        try {
            const res = await createCurrency(payload);
            alert("Mata Uang berhasil ditambahkan!");
            router.push("/mata-uang");
        } catch (err) {
            console.error(err);
            alert("Terjadi kesalahan saat menambahkan Mata Uang.");
        }
    };

    return (
        <div className="bg-white p-8 bg rounded w-full flex flex-col gap-8">
            <div className="text-center text-xl font-semibold">Tambah Mata Uang</div>
            <div className="flex flex-col gap-4">
                <FormInput id="kode"
                    label="Kode Mata Uang"
                    value={kode}
                    onChange={(e) => setKode(e.target.value)} />
                <FormInput id="matauang" label="Mata Uang" value={mataUang} onChange={(e) => setMataUang(e.target.value)} />
                <div className="px-8">
                    <Button onClick={handleSubmit}>Submit</Button>
                </div>
            </div>
        </div>
    );
}