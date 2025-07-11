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
import { createIncomeInventoriesProduct, createIncomeInventory, getContractProducts, getContracts, getContractsNotRequired, getSupliers } from "../../../../lib/api/api"; 
interface ContractProduct {
    kode_barang: string;
    nama_barang: string;
    stok: number;
    jumlah: number;
    lokasi: string;
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
                    getContractsNotRequired({ document: true }),
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
    const handleChangeLokasi = (index: number, value: string) => {
        setItems((prev) => {
            const updated = [...prev];
            updated[index].lokasi = value;
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
                    lokasi: item.lokasi,
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
            <div className="text-center text-xl font-semibold">Tambah Realisasi Pemasukan Inventori</div>

            <div className="px-8 flex flex-col gap-4">
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
            {noKontrak !== "" && (
                <>
                    <div className="">
                        <h2 className="text-lg px-8 font-semibold mt-6 mb-2">Daftar Barang</h2>
                        {items.map((item, index) => (
                            <div key={index} className="grid grid-cols-7 mb-4 items-center">
                                <FormInput className="max-w-full" id="kodeBarang" onChange={() => { }} label="Kode Barang" value={item.kode_barang} disabled />
                                <FormInput className="max-w-full" id="namaBarang" onChange={() => { }} label="Nama Barang" value={item.nama_barang} disabled />
                                <FormInput className="max-w-full" id="stok" label="Stok" onChange={() => { }} value={item.stok.toString()} disabled />
                                <FormInput className="max-w-full" id="jumlahKontrak" label="Jumlah Kontrak" onChange={() => { }} value={item.jumlah.toString()} disabled />
                                <FormInput className="max-w-full col-span-2" id="lokasiPenyimpanan" label="Lokasi Penyimpanan" onChange={(e) => handleChangeLokasi(index, e.target.value)} value={item.lokasi} />
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
                </>
            )
            }

        </div>
    );
}