"use client"
import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils"
// import { format } from "date-fns"
import { DateRange } from "react-day-picker"
import { addDays, format } from "date-fns"
import { Calendar } from "@/components/ui/calendar";
import { FormLabel } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { SidebarTrigger } from "@/components/ui/sidebar";
import MutasiBahanBakuBreadcrumb from "./breadcrumb";
export default function MutasiBahanBaku() {
    const [date, setDate] = React.useState<Date>()
    return (
        <>
            <div className="p-4 bg-white rounded flex gap-4 items-center">
                <SidebarTrigger />
                <MutasiBahanBakuBreadcrumb />
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md w-full min-h-[650px] space-y-6">
                <h1 className="text-2xl font-bold text-gray-800">📊 Laporan Mutasi Bahan Baku</h1>
                <div className="">
                    <Label className="text-sm text-gray-600">Periode</Label>

                    <div className="flex flex-wrap gap-3.5 items-stretch">
                        <div className="flex flex-1 flex-col space-y-2">
                            <Popover>
                                <PopoverTrigger className="w-full" asChild>
                                    <Button
                                        variant={"outline"}
                                        className={cn(
                                            "w-full justify-start text-left font-normal",
                                            !date && "text-muted-foreground"
                                        )}
                                    >
                                        <CalendarIcon />
                                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={date}
                                        onSelect={setDate}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                        <div className="">
                            <span>-</span>
                        </div>
                        <div className="flex flex-1 flex-col space-y-2">
                            <Popover>
                                <PopoverTrigger className="w-full" asChild>
                                    <Button
                                        variant={"outline"}
                                        className={cn(
                                            "w-full justify-start text-left font-normal",
                                            !date && "text-muted-foreground"
                                        )}
                                    >
                                        <CalendarIcon />
                                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={date}
                                        onSelect={setDate}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                    </div>
                </div>
                <Button>Preview</Button>

            </div>
        </>
    )
}