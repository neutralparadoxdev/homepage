'use client';
import { FC } from "react";
import { usePathname } from "next/navigation";

import Link from 'next/link';

const TAB_SELECTED = "bg-blue-200 font-bold"

function isSelected(pathname: string, route: string): string {
    if(pathname == route) {
        return TAB_SELECTED;
    }
    return "";
}

export const Nav: FC<{}> = () => {
    const pathname = usePathname();
    return <>
        <nav className="h-64 pr-4">
          <ul className="flex flex-col h-full space-y-4">
            <li className={isSelected(pathname, "/") + " pl-4 pt-0.5 pb-0.5"}><Link href="/">Home</Link></li>
            <li className={isSelected(pathname, "/about") + " pl-4 pt-0.5 pb-0.5"}><Link href="/about">About</Link></li>
            <li className={isSelected(pathname, "/projects") + " pl-4 pt-0.5 pb-0.5"}><Link href="/projects">Projects</Link></li>
            <li className={isSelected(pathname, "/blog") + " pl-4 pt-0.5 pb-0.5"}><Link href="/blog">Blog</Link></li>
          </ul>
        </nav>
    </>
}