import { Book, BookOpen, Calendar, ChevronRight, ChevronUp, Home, Icon, Inbox, NotepadText, Search, Settings, User2 } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubItem,
    SidebarProvider,
} from "@/components/ui/sidebar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import Link from "next/link"
import { LucideIcon } from "../ui/icons"

const menus = [
    {
        label: 'Core',
        child: [
            {
                label: 'Dashboard',
                link: '/',
                icon: 'Activity',
                children: null,
            }
        ]
    },
    {
        label: 'User',
        child: [
            {
                label: 'Manajemen Pengguna',
                link: '/manajemen-pengguna',
                icon: 'Users'
            },
            {
                label: 'Profile',
                link: '/profile',
                icon: 'UserRound',
                children: null
            },
            {
                label: 'Ganti Password',
                link: '/mutasi-bahan-baku/bulanan',
                icon: 'LockKeyhole',
                children: null,
            },
        ]
    },
    {
        label: 'Pembatalan',
        child: [
            {
                label: 'Pemasukan',
                link: '/pembatalan-pemasukan',
                icon: "NotepadText",
                children: null,
            },
            {
                label: 'Pengeluaran',
                link: '/pembatalan-pengeluaran',
                icon: "NotepadText",
                children: null,
            }
        ]
    },
    {
        label: 'Laporan',
        child: [
            {
                label: 'Mutasi Bahan Baku',
                link: null,
                icon: "BookOpen",
                children: [
                    {
                        label: 'Bulanan',
                        link: '/mutasi-bahan-baku/bulanan'
                    }
                ]
            },
            {
                label: 'Mutasi Bahan Jadi',
                link: null,
                icon: "BookOpen",
                children: [
                    {
                        label: 'Bulanan',
                        link: '/mutasi-bahan-jadi/bulanan'
                    }
                ]
            },
            {
                label: 'Mutasi Barang Sisa dan Scrap',
                link: null,
                icon: "BookOpen",
                children: [
                    {
                        label: 'Bulanan',
                        link: '/mutasi-barang-sisa-dan-scrap/bulanan'
                    }
                ]
            },
            {
                label: 'Mutasi Mesin & Sparepart',
                link: null,
                icon: "BookOpen",
                children: [
                    {
                        label: 'Bulanan',
                        link: '/mutasi-mesin-&-sparepart/bulanan'
                    }
                ]
            },
            {
                label: 'Posisi WIP',
                link: null,
                icon: "BookOpen",
                children: [
                    {
                        label: 'Bulanan',
                        link: '/mutasi-mesin-&-sparepart/bulanan'
                    }
                ]
            }
        ]
    },
    {
        label: 'Log',
        child: [
            {
                label: 'Activity',
                link: '/pembatalan-pemasukan',
                icon: "NotepadText",
                children: null,
            }
        ]
    },
]

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader />
            <SidebarContent>
                <SidebarMenu key={'content'}>
                    {menus.map((menu) => (
                        <SidebarMenuItem key={menu.label}>
                            <SidebarGroup>
                                <SidebarGroupLabel className="font-semibold text-lg">
                                    {menu.label}
                                </SidebarGroupLabel>
                                <SidebarGroupContent>
                                    <SidebarMenu key={menu.label + "3"}>
                                        {menu.child.map((child) => (
                                            child.children ? (
                                                <Collapsible key={`${menu.label}-${child.label}`} className="group/collapsible">
                                                    <SidebarMenuItem key={`${menu.label}-${child.label}`}>
                                                        <CollapsibleTrigger asChild>
                                                            <SidebarMenuButton>
                                                                <Book className="text-xl w-60" size={64} />
                                                                <p className=" text-md text-black">{child.label}</p>
                                                                <ChevronRight className="ml-auto transition-transform  transform group-data-[state=open]/collapsible:rotate-90
                                    " />
                                                            </SidebarMenuButton>
                                                        </CollapsibleTrigger>
                                                        <CollapsibleContent>
                                                            <SidebarMenuSub>
                                                                {child.children.map((granchild) => (
                                                                    <SidebarMenuSubItem>
                                                                        <Link href={granchild.link} className="min-w-full">
                                                                            <SidebarMenuButton>
                                                                                <span className="text-sm">{granchild.label}</span>
                                                                            </SidebarMenuButton>
                                                                        </Link>
                                                                    </SidebarMenuSubItem>
                                                                ))}

                                                            </SidebarMenuSub>
                                                        </CollapsibleContent>
                                                    </SidebarMenuItem>
                                                </Collapsible>
                                            ) : (
                                                <SidebarMenuItem key={child.label}>
                                                    <SidebarMenuButton asChild>
                                                        <Link href={child.link}>
                                                            <LucideIcon name={child.icon} />
                                                            <span>{child.label}</span>
                                                        </Link>
                                                    </SidebarMenuButton>
                                                </SidebarMenuItem>
                                            )
                                        ))}
                                    </SidebarMenu>
                                </SidebarGroupContent>
                            </SidebarGroup>
                        </SidebarMenuItem>
                    ))}

                </SidebarMenu>
            </SidebarContent>
            <SidebarFooter className="bg-gray-100">
                <SidebarMenu key={'footer'}>
                    <SidebarMenuItem key={'user'}>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton>
                                    <User2 /> Username
                                    <ChevronUp className="ml-auto " />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                className="w-[200px]"
                            >
                                <DropdownMenuItem>
                                    <span>Account</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <span>Billing</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <span>Sign out</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}


