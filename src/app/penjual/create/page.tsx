"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { createSuplier } from "../../../../lib/api/api";
import { FormInput } from "@/components/common/formInput";

export default function pembeliCreatePage() {
    const [name, setName] = useState("");
    const [alamat, setAlamat] = useState("");
    const router = useRouter();


    const handleSubmit = async () => {
        const payload = {
            name,
            alamat,
        };

        try {
            const res = await createSuplier(payload);
            alert("Penjual berhasil ditambahkan!");
            router.push("/penjual");
        } catch (err) {
            console.error(err);
            alert("Terjadi kesalahan saat menambahkan penjual.");
        }
    };

    return (
        <div className="bg-white p-8 bg rounded w-full flex flex-col gap-8">
            <div className="text-center text-xl font-semibold">Tambah Penjual</div>
            <div className="flex flex-col gap-4">
                <FormInput id="name"
                    label="Nama"
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
                <FormInput id="alamat" label="Alamat" value={alamat} onChange={(e) => setAlamat(e.target.value)} />
                <div className="px-8">
                    <Button onClick={handleSubmit}>Submit</Button>
                </div>
            </div>
        </div>
    );
}