"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Asterisk, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { CgMenuRight } from "react-icons/cg"
import { IoCarSportSharp } from "react-icons/io5"
import { MdSlowMotionVideo } from "react-icons/md"

export default function MobileNav() {
    const [isSheetOpen, setSheetOpen] = useState(false);
    return (
        <Sheet open={isSheetOpen} onClose={() => setSheetOpen(false)} onOpenChange={() => setSheetOpen(!isSheetOpen)}>
            {/* <SheetTrigger asChild>
                <Button variant="none" className='bg-gradient-to-b from-[#445c73] via-[#1E1F40] to-[#445c73] text-white px-5 py-3 rounded-full flex md:hidden items-center gap-x-2'>
                    <Menu />
                </Button>
            </SheetTrigger> */}

            <button className='px-0 lg:px-4 flex flex-col gap-y-2' onClick={() => setSheetOpen(true)}>
                <CgMenuRight className='text-4xl text-neutral-200' />
            </button>

            <SheetContent side="left" className="bg-[#222222] border-none">
                <SheetHeader>
                    <SheetTitle>

                    </SheetTitle>
                    <SheetDescription>

                    </SheetDescription>

                    <Link href={"/"} className='flex items-start text-neutral-400 gap-x-2 w-fit'>
                        <div className='text-white text-2xl flex items-center gap-x-4'>
                            <IoCarSportSharp className='text-4xl' />

                            ktuning
                        </div>
                    </Link>

                    <div className="flex flex-col gap-y-4 items-start pt-10 px-0">
                        <Link href="/" onClick={() => setSheetOpen(false)} className="text-2xl text-neutral-400">HOME</Link>
                        <Link href="/services" onClick={() => setSheetOpen(false)} className="text-2xl text-neutral-400">SERVICES</Link>
                        <Link href="/prices" onClick={() => setSheetOpen(false)} className="text-2xl text-neutral-400">PRICES</Link>
                        <Link href="/about-us" onClick={() => setSheetOpen(false)} className="text-2xl text-neutral-400">ABOUT</Link>
                        <SheetTrigger asChild>
                            <Button onClick={() => setSheetOpen(false)} variant="none" className="p-0 font-normal">
                                <Link href="/contact-us" className="text-2xl text-neutral-400">
                                    CONTACT US
                                </Link>
                            </Button>
                        </SheetTrigger>
                        <Button onClick={() => setSheetOpen(false)} variant="none" className="p-0 font-normal">
                            <Link href="/#faqs" className="text-2xl text-neutral-400">
                                FAQs
                            </Link>
                        </Button>
                    </div>
                </SheetHeader>

                {/* <SheetFooter>
                    <SheetClose asChild>
                        <Button type="submit">Save changes</Button>
                    </SheetClose>
                </SheetFooter> */}
            </SheetContent>
        </Sheet>
    )
}
