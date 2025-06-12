"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { getBcDocuments, getContracts } from "../../../../../lib/api/api";
import { createTransactionIncome } from "../../../../../lib/api/api";

interface ContractProduct {
    kode_barang: string;
    nama_barang: string;
    stok: number;
    jumlah: number;
    jumlah_diterima: number;
}

interface KontrakOption {
    id: string;
    no_kontrak: string;
}
interface document {
    no_document: string;
}
export default function IncomeInventoryCreatePage() {
    const [noKontrak, setNoKontrak] = useState("");
    const [noDocument, setNoDocument] = useState("");
    const [document, setDocument] = useState<document[]>([]);
    const [kontrakOptions, setKontrakOptions] = useState<KontrakOption[]>([]);
    const router = useRouter();

    useEffect(() => {
        const fetchInitialData = async () => {
            try {
                const [kontrakRes, documentRes] = await Promise.all([
                    getContracts(),
                    getBcDocuments(),
                ]);
                setDocument(documentRes.data.items || []);
                setKontrakOptions(kontrakRes.data.items || []);
            } catch (err) {
                console.error("Failed to fetch initial data:", err);
            }
        };
        fetchInitialData();
    }, []);



    const handleSubmit = async () => {
        try {
            await createTransactionIncome({
                no_kontrak: noKontrak,
                no_document: noDocument,
            });

            alert("Data berhasil disimpan!");
            router.push("/transaksi/pemasukan");
        } catch (err) {
            console.error(err);
            alert("Gagal menyimpan data pemasukan.");
        }
    };

    return (
        <div className="bg-white p-8 rounded w-full flex flex-col gap-8">
            <div className="text-center text-xl font-semibold">Tambah Transaksi Pemasukan</div>

            <div className="px-8">
                <Label>No Kontrak</Label>
                <Select value={noKontrak} onValueChange={setNoKontrak}>
                    <SelectTrigger><SelectValue placeholder="Pilih No Kontrak" /></SelectTrigger>
                    <SelectContent>
                        {kontrakOptions.map(k => (
                            <SelectItem key={k.id} value={k.no_kontrak}>{k.no_kontrak}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            <div className="px-8">
                <Label>Nomor Document</Label>
                <Select value={noDocument} onValueChange={setNoDocument}>
                    <SelectTrigger><SelectValue placeholder="Pilih No Document" /></SelectTrigger>
                    <SelectContent>
                        {document.map(k => (
                            <SelectItem key={k.no_document} value={k.no_document}>{k.no_document}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>


            <div className="px-8">
                <Button onClick={handleSubmit}>Submit</Button>
            </div>
        </div>
    );
}