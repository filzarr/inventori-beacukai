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
    const [noDocument, setNoDocument] = useState("");
    const [kategoribc, setKategoribc] = useState("");
    const [kategoriBarang, setKategoriBarang] = useState("");
    const [tanggal, setTanggal] = useState<Date | undefined>();
    const router = useRouter();


    const handleSubmit = async () => {
        const payload = {
            kategori: kategoribc,
            kategori_barang: kategoriBarang,
            no_document: noDocument,
            tanggal: tanggal,
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
                <FormInput id="no_document"
                    label="Nomor Dokument"
                    value={noDocument}
                    onChange={(e) => setNoDocument(e.target.value)} />
                <div className="px-8 max-w-1/2">
                    <Select value={kategoribc} onValueChange={setKategoribc}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Pilih Kategori BC" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="BC 23">BC 23</SelectItem>
                            <SelectItem value="BC 27 In">BC 27 In</SelectItem>
                            <SelectItem value="BC 262">BC 262</SelectItem>
                            <SelectItem value="BC 40">BC 40</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="px-8 max-w-1/2">
                    <Select value={kategoriBarang} onValueChange={setKategoriBarang}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Pilih Kategori Barang" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Bahan Baku">Bahan Baku</SelectItem>
                            <SelectItem value="Bahan Penolong">Bahan Penolong</SelectItem>
                            <SelectItem value="Mesin/Sparepart">Mesin/Sparepart</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="px-8 max-w-1/2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Tanggal Dokumen
                    </label>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                className={cn(
                                    "w-full justify-start text-left font-normal",
                                    !tanggal && "text-muted-foreground"
                                )}
                            >
                                {tanggal ? format(tanggal, "PPP") : "Pilih tanggal"}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar
                                mode="single"
                                selected={tanggal}
                                onSelect={setTanggal}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                </div>
                <div className="px-8">
                    <Button onClick={handleSubmit}>Submit</Button>
                </div>
            </div>
        </div>
    );
}