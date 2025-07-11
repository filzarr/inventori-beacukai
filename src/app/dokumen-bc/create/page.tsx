"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { createBcDocument, createCurrency } from "../../../../lib/api/api";
import { FormInput } from "@/components/common/formInput";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils"; // jika belum ada, pastikan `cn` helper tersedia
export default function pembeliCreatePage() {
    const [kodeDocument, setKodeDocument] = useState("");
    const [kategoribc, setKategoribc] = useState("");
    const [tanggal, setTanggal] = useState<Date | undefined>();
    const router = useRouter();


    const handleSubmit = async () => {
        const payload = {
            kategori: kategoribc,
            kode_document: kodeDocument
        };

        try {
            const res = await createBcDocument(payload);
            alert("Dokumen BC berhasil ditambahkan!");
            router.push("/dokumen-bc");
        } catch (err) {
            console.error(err);
            alert("Terjadi kesalahan saat menambahkan Dokumen BC.");
        }
    };

    return (
        <div className="bg-white p-8 bg rounded w-full flex flex-col gap-8">
            <div className="text-center text-xl font-semibold">Tambah Dokumen BC</div>
            <div className="flex flex-col gap-4">
                <FormInput id="kategori"
                    label="Kategori"
                    value={kategoribc}
                    onChange={(e) => setKategoribc(e.target.value)} />
                <FormInput id="kode_document"
                    label="Kode Document"
                    value={kodeDocument}
                    onChange={(e) => setKodeDocument(e.target.value)} />
                <div className="px-8">
                    <Button onClick={handleSubmit}>Submit</Button>
                </div>
            </div>
        </div>
    );
}