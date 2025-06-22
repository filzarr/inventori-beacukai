"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { FormInput } from "@/components/common/formInput";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { createIncomeInventoriesProduct, createIncomeInventory, getContractProducts, getContracts, getSupliers } from "../../../../lib/api/api";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";


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

interface SuplierOption {
    id: string;
    name: string;
}

interface CurrencyOption {
    kode: string;
}

export default function IncomeInventoryCreatePage() {
    const [noKontrak, setNoKontrak] = useState("");
    const [kategori, setKategori] = useState("");
    const [tanggal, setTanggal] = useState<Date | undefined>();
    const [supliers, setSupliers] = useState<SuplierOption[]>([]);
    const [supliersId, setSupliersId] = useState("");
    const [kontrakOptions, setKontrakOptions] = useState<KontrakOption[]>([]);
    const [items, setItems] = useState<ContractProduct[]>([]);
    const router = useRouter();

    useEffect(() => {
        const fetchInitialData = async () => {
            try {
                const [kontrakRes, suplierRes] = await Promise.all([
                    getContracts({ document: true }),
                    getSupliers(),
                ]);
                setKontrakOptions(kontrakRes.data.items || []);
                setSupliers(suplierRes.data.items || []);
            } catch (err) {
                console.error("Failed to fetch initial data:", err);
            }
        };
        fetchInitialData();
    }, []);

    useEffect(() => {
        if (!noKontrak) return;
        const fetchContractItems = async () => {
            try {
                const res = await getContractProducts({
                    page: 1,
                    paginate: 100,
                    noKontrak: noKontrak,
                    kategori: "Pembelian",
                    q: "", // tambahkan q karena required
                });
                const enrichedItems = (res.data.items || []).map((item: ContractProduct) => ({
                    ...item,
                    jumlah_diterima: 0,
                }));
                setItems(enrichedItems);
            } catch (err) {
                console.error("Failed to fetch contract products:", err);
            }
        };
        fetchContractItems();
    }, [noKontrak]);

    const handleChangeJumlahDiterima = (index: number, value: number) => {
        setItems((prev) => {
            const updated = [...prev];
            updated[index].jumlah_diterima = value;
            return updated;
        });
    };

    const handleSubmit = async () => {
        try {

            for (const item of items) {
                await createIncomeInventoriesProduct({
                    no_kontrak: noKontrak,
                    kode_barang: item.kode_barang,
                    saldo_awal: item.jumlah,
                    tanggal: tanggal,
                    jumlah: item.jumlah_diterima,
                });
            }

            alert("Data berhasil disimpan!");
            router.push("/realisasi-pemasukan");
        } catch (err) {
            console.error(err);
            alert("Gagal menyimpan data pemasukan.");
        }
    };

    return (
        <div className="bg-white p-8 rounded w-full flex flex-col gap-8">
            <div className="text-center text-xl font-semibold">Tambah Pemasukan Inventori</div>

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
                <Label>Kategori</Label>
                <Select value={kategori} onValueChange={setKategori}>
                    <SelectTrigger><SelectValue placeholder="Pilih Kategori Produk" /></SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Bahan Baku">Bahan Baku</SelectItem>
                        <SelectItem value="Bahan Penolong">Bahan Penolong</SelectItem>
                        <SelectItem value="Mesin/Sparepart">Mesin/Sparepart</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="px-8 max-w-1/2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tanggal Kontrak
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
            <div className="">
                <h2 className="text-lg px-8 font-semibold mt-6 mb-2">Daftar Barang</h2>
                {items.map((item, index) => (
                    <div key={index} className="grid grid-cols-5 gap-2 mb-4">
                        <FormInput className="max-w-full" id="kodeBarang" onChange={() => { }} label="Kode Barang" value={item.kode_barang} disabled />
                        <FormInput className="max-w-full" id="namaBarang" onChange={() => { }} label="Nama Barang" value={item.nama_barang} disabled />
                        <FormInput className="max-w-full" id="stok" label="Stok" onChange={() => { }} value={item.stok.toString()} disabled />
                        <FormInput className="max-w-full" id="jumlahKontrak" label="Jumlah Kontrak" onChange={() => { }} value={item.jumlah.toString()} disabled />
                        <FormInput className="max-w-full" id="jumlahDiterima"
                            label="Jumlah Diterima"
                            type="number"
                            value={item.jumlah_diterima.toString()}
                            onChange={(e) => handleChangeJumlahDiterima(index, Number(e.target.value))}
                        />
                    </div>
                ))}
            </div>


            <div className="px-8">
                <Button onClick={handleSubmit}>Submit</Button>
            </div>
        </div>
    );
}