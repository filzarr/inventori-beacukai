
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layouts/appSidebar";
import MutasiBahanBakuBreadcrumb from "./breadcrumb";
import Navbar from "@/components/layouts/navbar";


export default function BahanBaku({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="  flex-1">
                <Navbar />
                <div className="flex flex-col gap-8">
                    
                    {children}
                </div>
            </main>
        </SidebarProvider>
    );
}
