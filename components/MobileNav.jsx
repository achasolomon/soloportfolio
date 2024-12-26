"use client"

import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";


const links = [
    {
        name: "home",
        path: "/",
    },

    {
        name: "services",
        path: "/services",
    },

    {
        name: "resume",
        path: "/resume",
    },
    {
        name: "work",
        path: "/work",
    },
    {
        name: "contact",
        path: "/contact",
    },
]

const MobileNav = () => {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    return <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className="flex justify-content-center items-center">
            <Menu className="text-[32px] text-accent" />
        </SheetTrigger>
        <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        </SheetHeader>
            {/*logo */}
            <div className="mt-32 mb-40 text-center text-2xl">
                <Link href="/">
                    <h1 className="text-4xl font-semibold">Solomon<span className="text-accent">. </span></h1>
                </Link>
            </div>
            {/*nav */}
            <nav className="flex flex-col justify-center items-center gap-8">
                {links.map((link, index) => {
                    return <Link
                        href={link.path}
                        key={index}
                        onClick={() => setOpen(false)}
                        className={`${link.path === pathname && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all`}>
                        {link.name}
                    </Link>
                })}
            </nav>
        </SheetContent>
    </Sheet>

}

export default MobileNav