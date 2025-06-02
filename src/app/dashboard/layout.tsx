
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layouts/appSidebar";
import DashboardBreadcrumb from "./breadcrumb";
import Navbar from "@/components/layouts/navbar";


export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className=" bg-gray-100 flex-1">
                <Navbar />
                <div className="p-8 flex flex-col gap-8">
                    <div className="p-4 bg-white rounded flex gap-4 items-center">
                        <SidebarTrigger />
                        <DashboardBreadcrumb />
                    </div>
                    {children}
                </div>
            </main>
        </SidebarProvider>
    );
}
