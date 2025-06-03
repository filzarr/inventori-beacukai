import { AppSidebar } from "@/components/layouts/appSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"; 
import Image from "next/image";

export default function Dashboard() {
    return (
        <div className="bg-white p-4 rounded w-full relative h-[650px]">
            <Image fill src={'/flowchart.jpg'} alt="flowchart" />
        </div>
    )
}