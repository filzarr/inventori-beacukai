
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "../ui/navigation-menu";
import { SidebarTrigger } from "../ui/sidebar"; 
import DynamicBreadcrumb from "./breadcrumb";

export default function Navbar() {
    return (
        <div className="  bg-white p-4 border-b flex justify-between items-center" style={{justifyContent: 'space-between'}}>
            {/* <DropdownMenu */}
            <div className="flex gap-2 items-center">
                <SidebarTrigger />
                <DynamicBreadcrumb />
            </div>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div className="cursor-pointer">
                        <Avatar>
                            <AvatarImage />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end" className="mt-2">
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

        </div>
    )
}