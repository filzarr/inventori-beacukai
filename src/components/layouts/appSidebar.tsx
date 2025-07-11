import {
    Book,
    ChevronRight,
    ChevronUp,
    User2,
} from "lucide-react"

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
} from "@/components/ui/sidebar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import Link from "next/link"
import { LucideIcon } from "../ui/icons"
type MenuItem = {
  label: string
  link: string
  icon: keyof typeof import("lucide-react")
  children?: MenuItem[] | null
}

type MenuGroup = {
  label: string
  child: MenuItem[]
}
const menus: MenuGroup[] = [
    {
        label: 'Core',
        child: [
            {
                label: 'Dashboard',
                link: '/dashboard',
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
                link: '/ganti-password',
                icon: 'LockKeyhole',
                children: null,
            },
        ]
    },
    {
        label: 'Master Data',
        child: [
            {
                label: 'Pembeli',
                link: '/pembeli',
                icon: 'Store'
            },
            {
                label: 'Penjual',
                link: '/penjual',
                icon: 'Gem'
            },
            {
                label: 'Barang',
                link: '/barang',
                icon: 'PackageSearch'
            },
            {
                label: 'Mata Uang',
                link: '/mata-uang',
                icon: 'CircleDollarSign'
            },
            {
                label: 'Dokumen BC',
                link: '/dokumen-bc',
                icon: 'Book'
            }, 
        ]
    },
    {
        label: "Kontrak",
        child: [
            {
                label: "Pembelian",
                link: '/kontrak/pembelian',
                icon: 'ShoppingBasket'
            },
            {
                label: "Penjualan",
                link: '/kontrak/penjualan',
                icon: 'ShoppingBag'
            },
            {
                label: "Cetak Kontrak",
                link: '/kontrak/cetak-kontrak',
                icon: 'Users'
            }
        ]
    },
    {
        label: "Inventory",
        child: [
            {
                label: "Realisasi Pemasukan (Timbangan Masuk)",
                link: '/realisasi-pemasukan',
                icon: 'ClipboardPlus'
            },
            {
                label: "Realisasi Pengeluaran (Timbangan Keluar)",
                link: '/realisasi-pengeluaran',
                icon: 'ClipboardMinus'
            }
        ]
    },
    {
        label: "Transaksi",
        child: [
            {
                label: "Pemasukan",
                link: '/transaksi/pemasukan',
                icon: 'ArrowLeftRight'
            },
            {
                label: "Pengeluaran",
                link: '/transaksi/pengeluaran',
                icon: 'ArrowRightLeft'
            }
        ]
    },
    {
        label: "Gudang",
        child: [
            {
                label: "Bahan Baku",
                link: '/gudang/bahan-baku',
                icon: 'DatabaseBackup'
            },
            {
                label: "Bahan Penolong",
                link: '/gudang/bahan-penolong',
                icon: 'DatabaseBackup'
            },
            {
                label: "Mesin/Sparepart",
                link: '/gudang/mesin-sparepart',
                icon: 'DatabaseBackup'
            },
            {
                label: "Barang Jadi",
                link: '/gudang/barang-jadi',
                icon: 'DatabaseBackup'
            },
            {
                label: "Produksi",
                link: '/gudang/produksi',
                icon: 'DatabaseBackup'
            }
        ]
    },
    {
        label: "Permintaan",
        child: [
            {
                label: "Bahan Baku",
                link: '/permintaan/bahan-baku',
                icon: 'GitPullRequest'
            },
            {
                label: "Bahan Penolong",
                link: '/gudang/bahan-penolong',
                icon: 'GitPullRequest'
            },
            {
                label: "Mesin/Sparepart",
                link: '/gudang/mesin-sparepart',
                icon: 'GitPullRequest'
            },
            {
                label: "Barang Jadi",
                link: '/gudang/barang-jadi',
                icon: 'GitPullRequest'
            },
            {
                label: "Produksi",
                link: '/gudang/produksi',
                icon: 'GitPullRequest'
            }
        ]
    },
    {
        label: 'Laporan',
        child: [
            {
                label: 'Mutasi Bahan Baku',
                link: '/laporan/mutasi-bahan-baku',
                icon: "FileText",
                children: null,
            },
            {
                label: 'Mutasi Scrap',
                link: '/laporan/mutasi-scrap',
                icon: "FileText",
                children: null,
            },
            {
                label: 'Mutasi WIP',
                link: '/laporan/mutasi-wip',
                icon: "FileText",
                children: null,
            },
            {
                label: 'Mutasi Bahan Penolong',
                link: '/laporan/mutasi-penolong',
                icon: "FileText",
                children: null,
            },
            {
                label: 'Mutasi Mesin/Sparepart',
                link: '/laporan/mutasi-mesin-sparepart',
                icon: "FileText",
                children: null,
            },
            {
                label: 'Pengeluaran',
                link: '/laporan/pengeluaran',
                icon: "FileText",
                children: null,
            },
            {
                label: 'Pemasukan',
                link: '/laporan/pemasukan',
                icon: "FileText",
                children: null,
            },
            {
                label: 'Mutasi Perjenis Dokumen',
                link: '/laporan/mutasi-perjenis-dokumen',
                icon: "FileText",
                children: null,
            },
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
                <SidebarMenu>
                    {menus.map((menu) => (
                        <SidebarGroup key={menu.label}>
                            <SidebarGroupLabel className="font-semibold text-lg">
                                {menu.label}
                            </SidebarGroupLabel>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    {menu.child.map((child) => (
                                        child.children ? (
                                            <Collapsible key={`${menu.label}-${child.label}`} className="group/collapsible">
                                                <CollapsibleTrigger asChild>
                                                    <SidebarMenuButton>
                                                        <Book className="text-xl" />
                                                        <span className="text-md text-black">{child.label}</span>
                                                        <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                                                    </SidebarMenuButton>
                                                </CollapsibleTrigger>
                                                <CollapsibleContent>
                                                    <SidebarMenuSub>
                                                        {child.children.map((grandchild) => (
                                                            <SidebarMenuSubItem key={grandchild.label}>
                                                                <Link href={grandchild.link} className="w-full">
                                                                    <SidebarMenuButton>
                                                                        <span className="text-sm">{grandchild.label}</span>
                                                                    </SidebarMenuButton>
                                                                </Link>
                                                            </SidebarMenuSubItem>
                                                        ))}
                                                    </SidebarMenuSub>
                                                </CollapsibleContent>
                                            </Collapsible>
                                        ) : (
                                            <SidebarMenuItem key={child.label}>
                                                <SidebarMenuButton asChild>
                                                    <Link href={child.link} className="flex items-center gap-2">
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
                    ))}
                </SidebarMenu>
            </SidebarContent>
            <SidebarFooter className="bg-gray-100">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton>
                                    <User2 /> Username
                                    <ChevronUp className="ml-auto" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-[200px]">
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