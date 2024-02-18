import Link from "next/link";
export default function header() {
    return (
        <header className="flex justify-between">
            <Link className="text-primary font-semibold text-3xl" href="">SpiceDelight</Link>
            <nav className="listfont">
                <Link href={''}>Home</Link>
                <Link href={''}>Menu</Link>
                <Link href={''}>About</Link>
                <Link href={''}>Contact</Link>
                <Link href={''} className="bg-primary text-white px-4 py-2 rounded-full">Login</Link>
            </nav>
        </header>
    );
}