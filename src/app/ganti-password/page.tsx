"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { FormInput } from "@/components/common/formInput";

export default function PembeliCreatePage() {
  const [oldPassword, setOldPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  return (
    <div className="bg-white p-8 bg rounded w-full flex flex-col gap-8">
      <div className="text-center text-xl font-semibold">Tambah Barang</div>
      <div className="flex flex-col gap-4">
        <FormInput
          id="oldpassword"
          label="Password Lama"
          value={oldPassword}
          type="password"
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <FormInput
          id="newPassword"
          label="Password Baru"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <FormInput
          id="confirmPassword"
          label="Konfirmasi Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <div className="px-8">
          <Button onClick={() => {}}>Submit</Button>
        </div>
      </div>
    </div>
  );
}