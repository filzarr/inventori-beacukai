"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { FormInput } from "@/components/common/formInput";

const normalizeWhitespace = (text: string) => text.replace(/\s+/g, " ").trim();

export default function PembeliCreatePage() {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");

  useEffect(() => {
    const nameLocal = localStorage.getItem("name");
    const emailLocal = localStorage.getItem("email");

    setName(normalizeWhitespace(nameLocal || ""));
    setEmail(normalizeWhitespace(emailLocal || ""));
  }, []);

  return (
    <div className="bg-white p-8 bg rounded w-full flex flex-col gap-8">
      <div className="text-center text-xl font-semibold">Tambah Barang</div>
      <div className="flex flex-col gap-4">
        <FormInput
          id="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          id="name"
          label="UserName"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="px-8">
          <Button onClick={() => console.log({ email, name })}>Submit</Button>
        </div>
      </div>
    </div>
  );
}