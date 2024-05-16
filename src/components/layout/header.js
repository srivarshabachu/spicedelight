'use Client'
import { SessionProvider } from "next-auth/react";
import Link from "next/link";
import { useState } from 'react';
export default function Header() {
    const session = SessionProvider();
    const status = session.status;
    return (
        <header className="flex justify-between">
            <nav className="list">
                <Link className="roboto text-primary font-semibold text-3xl" href="/">SpiceDelight</Link>
                <Link className="listfont" href={'/'}>Home</Link>
                <Link className="listfont"  href={''}>Menu</Link>
                <Link className="listfont"  href={''}>About</Link>
                <Link className="listfont" href={''}>Contact</Link>
            </nav>
            <nav className="list">
                {status === 'authenticated' && (
                    <Link href={'/register'} className="listfont bg-primary text-white px-4 py-2 rounded-full">Logout</Link>
                )}
                {status !== 'authenticated' && (
                    <>
                        <Link href={'/login'} className="listfont text-primary px-4 py-2 rounded-full">Login</Link>
                        <Link href={'/register'} className="listfont bg-primary text-white px-4 py-2 rounded-full">Register</Link>   </>
               
                )}
            </nav>
        </header>
    );
}