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
import { createDocumentContract, getBcDocuments, getContracts } from "../../../../../lib/api/api";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { FormInput } from "@/components/common/formInput";
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

interface document_bc {
    kode_document: string
}
export default function IncomeInventoryCreatePage() {
    const [noKontrak, setNoKontrak] = useState(""); 
    const [kodeDocumentBc, setKodeDocumentBc] = useState("");
    const [noDocument, setNoDocument] = useState("");
    const [documentBc, setDocumentBc] = useState<document_bc[]>([]);
    const [tanggal, setTanggal] = useState<Date | undefined>();
    const [document, setDocument] = useState<document[]>([]);
    const [kontrakOptions, setKontrakOptions] = useState<KontrakOption[]>([]);
    const router = useRouter();

    useEffect(() => {
        const fetchInitialData = async () => {
            try {
                const [kontrakRes, documentRes] = await Promise.all([
                    getContracts({ document: true }),
                    getBcDocuments(),
                ]);
                setDocument(documentRes.data.items || []);
                setKontrakOptions(kontrakRes.data.items || []);
            } catch (err) {
                console.error("Failed to fetch initial data:", err);
            }
        };

        const fetchDocumentBc = async () => {
            try {
                const res = await getBcDocuments();
                setDocumentBc(res.data.items || []);
                console.log(documentBc)
            } catch (err) {
                console.log("Gagal Fetch Document", err)
            }
        }
        fetchDocumentBc();
        fetchInitialData();
    }, []);



    const handleSubmit = async () => {
        try {
            await createDocumentContract({
                no_kontrak: noKontrak,
                no_document: kodeDocumentBc,
                tanggal_document: tanggal
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
                <Label>Pilih Document BC</Label>
                <Select value={kodeDocumentBc} onValueChange={setKodeDocumentBc}>
                    <SelectTrigger><SelectValue placeholder="Pilih kode document" /></SelectTrigger>
                    <SelectContent>
                        {documentBc.map((p) => (
                            <SelectItem key={p.kode_document} value={p.kode_document}>{p.kode_document}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            <FormInput id="nodocument"
                label="Nomor Document"
                value={noDocument}
                onChange={(e) => setNoDocument(e.target.value)} />
            <div className="px-8 max-w-1/2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tanggal Document Bc
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
    );
}