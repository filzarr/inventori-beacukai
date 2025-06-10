"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { createSaldoAwal, createSuplier, getProducts } from "../../../../lib/api/api";
import { FormInput } from "@/components/common/formInput";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type Product = {
    kode: string;
    nama: string;
};

export default function PembeliCreatePage() {
    const [saldoAwal, setSaldoAwal] = useState("");
    const [selectedKodeBarang, setSelectedKodeBarang] = useState<string>("");
    const [products, setProducts] = useState<Product[]>([]);

    const router = useRouter();

    const handleSubmit = async () => {
        const payload = {
            kode_barang: selectedKodeBarang,
            saldo_awal: saldoAwal,
        };

        try {
            await createSaldoAwal(payload);
            alert("Saldo Awal berhasil ditambahkan!");
            router.push("/saldo-awal");
        } catch (err) {
            console.error(err);
            alert("Terjadi kesalahan saat menambahkan Saldo Awal.");
        }
    };



    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await getProducts(); 
                setProducts(res.data.items || res); 
                console.log(res)
                console.log(products)
            } catch (err) {
                console.error("Gagal fetch products:", err);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div className="bg-white p-8 rounded w-full flex flex-col gap-8">
            <div className="text-center text-xl font-semibold">Tambah Saldo Awal</div>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5 px-8">
                    <Label htmlFor="kode_barang">Pilih Produk</Label>
                    <Select value={selectedKodeBarang} onValueChange={setSelectedKodeBarang}>
                        <SelectTrigger id="kode_barang">
                            <SelectValue placeholder="Pilih kode barang" />
                        </SelectTrigger>
                        <SelectContent>
                            {products.map((p) => (
                                <SelectItem key={p.kode} value={p.kode}>
                                    {p.kode} - {p.nama}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                 <FormInput
                    id="saldoAwal"
                    label="Saldo Awal"
                    value={saldoAwal}
                    onChange={(e) => setSaldoAwal(e.target.value)}
                />
                <div className="px-8">
                    <Button onClick={handleSubmit}>Submit</Button>
                </div>
            </div>
        </div>
    );
}