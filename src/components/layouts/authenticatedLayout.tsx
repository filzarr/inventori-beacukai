'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layouts/appSidebar";
import Navbar from "@/components/layouts/navbar";

interface Props {
  children: React.ReactNode;
}

export default function AuthenticatedLayout({ children }: Props) {
  const [tokenChecked, setTokenChecked] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = document.cookie
      .split('; ')
      .find(row => row.startsWith('token='))
      ?.split('=')[1];

    if (!token) {
      router.replace("/login"); // atau "/" jika ingin ke landing
    } else {
      setTokenChecked(true);
    }
  }, [router]);

  if (!tokenChecked) return null;

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="bg-gray-100 flex-1 w-full overflow-hidden">
        <Navbar />
        <div className="p-2 flex flex-col gap-8">
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
}