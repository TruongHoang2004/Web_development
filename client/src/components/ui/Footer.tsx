import React from "react";
import { Lobster } from 'next/font/google'
import { Kanit } from 'next/font/google'
import { Separator } from "@/components/ui/separator"

const lobster = Lobster({
    subsets: ['latin'],
    weight: ['400'],
});
const kanit = Kanit({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
})

const Header: React.FC = () => {
    return (
       <footer className="w-full border-t border-slate-500 pt-8 bg-black text-white">
            FOOTER HERE
       </footer>
    )
}

export default Header;
