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
export default function DateMutasi() {
    const [date, setDate] = React.useState<Date>()
    return (
        <div className="flex flex-col gap-4">
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
            <div className="flex gap-2">
                <Button>Preview</Button>
                <Button>Export Excel</Button>
                <Button>Export PDF</Button>
            </div>

        </div>
    )
}