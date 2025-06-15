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
import { createContract, createContractProduct, getCurrencies, getProducts, getReadyProducts, getSupliers } from "../../../../../lib/api/api";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
interface Product {
    kode: string;
    nama: string;
}

interface ContractProduct {
    kode_barang: string;
    jumlah: number;
    harga_satuan: number;
    kode_mata_uang: string;
    nilai_barang_fog: number;
    nilai_barang_rp: number;
}

interface Supliers {
    id: string
    name: string
}

interface mata_uang {
    id: string
    kode: string
}

export default function KontrakPenjualanCreatePage() {
    const [noKontrak, setNoKontrak] = useState("");
    const [kategori, setKategori] = useState("");
    const [supliersId, setSupliearsId] = useState("");
    const [tanggal, setTanggal] = useState<Date | undefined>();
    const [products, setProducts] = useState<Product[]>([]);
    const [items, setItems] = useState<ContractProduct[]>([]);
    const [supliers, setSupliears] = useState<Supliers[]>([]);
    const [mataUang, setMataUang] = useState<mata_uang[]>([]);
    const router = useRouter();

    const addItem = () => {
        setItems((prev) => [
            ...prev,
            {
                kode_barang: "",
                jumlah: 0,
                harga_satuan: 0,
                kode_mata_uang: "",
                nilai_barang_fog: 0,
                nilai_barang_rp: 0,
            },
        ]);
    };

    const updateItem = <K extends keyof ContractProduct>(
        index: number,
        field: K,
        value: ContractProduct[K]
    ) => {
        setItems((prev) => {
            const updated = [...prev];
            updated[index] = {
                ...updated[index],
                [field]: value,
            };
            return updated;
        });
    };

    const handleSubmit = async () => {
        try {
            const contractRes = await createContract({
                no_kontrak: noKontrak,
                kategori: "Penjualan",
                supliers: supliersId,
                tanggal: tanggal,
            });
            const kontrakId = contractRes.id;

            for (const item of items) {
                await createContractProduct({
                    no_kontrak: noKontrak,
                    ...item,
                });
            }

            alert("Kontrak dan barang berhasil ditambahkan!");
            router.push("/kontrak/pembelian");
        } catch (err) {
            console.error(err);
            alert("Gagal menyimpan data kontrak.");
        }
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                if (kategori == "Barang Jadi") {
                    const res = await getReadyProducts();
                    setProducts(res.data.items || []);
                } else {
                    const res = await getProducts({ kategori: kategori });
                    setProducts(res.data.items || []);
                }
            } catch (err) {
                console.error("Gagal fetch products:", err);
            }
        };
        const fetchSupliers = async () => {
            try {
                const res = await getSupliers();
                setSupliears(res.data.items || []);
            } catch (err) {
                console.error("Gagal fetch supliers:", err);
            }
        };
        const fetchMataUang = async () => {
            try {
                const res = await getCurrencies();
                setMataUang(res.data.items || []);
            } catch (err) {
                console.error("Gagal fetch currencies:", err);
            }
        };
        fetchProducts();
        fetchSupliers();
        fetchMataUang();
    }, [kategori]);

    return (
        <div className="bg-white p-8 rounded w-full flex flex-col gap-8">
            <div className="text-center text-xl font-semibold">Tambah Kontrak Penjualan</div>

            <FormInput id="no_kontrak" label="No Kontrak" value={noKontrak} onChange={(e) => setNoKontrak(e.target.value)} />
            <div className="px-8 max-w-1/2">
                <Select value={kategori} onValueChange={setKategori}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Pilih Kategori Produk" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Bahan Baku">Bahan Baku</SelectItem>
                        <SelectItem value="Bahan Penolong">Bahan Penolong</SelectItem>
                        <SelectItem value="Mesin/Sparepart">Mesin/Sparepart</SelectItem>
                        <SelectItem value="Barang Jadi">Barang Jadi</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="px-8">
                <Label>Pilih Suplier</Label>
                <Select value={supliersId} onValueChange={setSupliearsId}>
                    <SelectTrigger><SelectValue placeholder="Pilih kode barang" /></SelectTrigger>
                    <SelectContent>
                        {supliers.map((p) => (
                            <SelectItem key={p.id} value={p.id}>{p.name}</SelectItem>
                        ))}
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

            <div className=" col-span-2 flex px-8 justify-between items-center">
                <h2 className="text-lg font-semibold">Daftar Barang</h2>
                <Button onClick={addItem}>Tambah Barang</Button>
            </div>
            {items.map((item, index) => (
                <div key={index} className="grid grid-cols-2 gap-4">
                    <div className="px-8">
                        <Label>Pilih Barang</Label>
                        <Select value={item.kode_barang} onValueChange={(val) => updateItem(index, "kode_barang", val)}>
                            <SelectTrigger><SelectValue placeholder="Pilih kode barang" /></SelectTrigger>
                            <SelectContent>
                                {products.map((p) => (
                                    <SelectItem key={p.kode} value={p.kode}>{p.nama} ({p.kode})</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <FormInput
                        id="jumlah"
                        label="Jumlah"
                        value={item.jumlah.toString()}
                        type="number"
                        onChange={(e) => updateItem(index, "jumlah", Number(e.target.value))}
                    />
                    <FormInput
                        id="hargaSatuan"
                        label="Harga Satuan"
                        value={item.harga_satuan.toString()}
                        type="number"
                        onChange={(e) => updateItem(index, "harga_satuan", Number(e.target.value))}
                    />
                    <div className="px-8">
                        <Label>Kode Mata Uang</Label>
                        <Select value={item.kode_mata_uang} onValueChange={(val) => updateItem(index, "kode_mata_uang", val)}>
                            <SelectTrigger><SelectValue placeholder="Pilih kode barang" /></SelectTrigger>
                            <SelectContent>
                                {mataUang.map((p) => (
                                    <SelectItem key={p.kode} value={p.kode}>{p.kode}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <FormInput
                        id="fog"
                        label="Nilai Barang FOG"
                        value={item.nilai_barang_fog.toString()}
                        type="number"
                        onChange={(e) => updateItem(index, "nilai_barang_fog", Number(e.target.value))}
                    />
                    <FormInput
                        id="rp"
                        label="Nilai Barang Rp"
                        value={item.nilai_barang_rp.toString()}
                        type="number"
                        onChange={(e) => updateItem(index, "nilai_barang_rp", Number(e.target.value))}
                    />
                </div>
            ))}



            <div className="px-8">
                <Button onClick={handleSubmit}>Submit</Button>
            </div>
        </div>
    );
}