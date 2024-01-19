import Link from "next/link";

export default function Header() {
    return (
        <header className="flex justify-between items-center">
            <Link className="text-primary text-2xl font-semibold" href={""}>
                TA COFFEE
            </Link>
            <nav className="flex gap-8 items-center text-gray-500 font-semibold ">
                <Link href={""}>Home</Link>
                <Link href={""}>Menu</Link>
                <Link href={""}>About</Link>
                <Link href={""}>Contact</Link>
                <Link
                    className="bg-primary text-white rounded-full px-8 py-2"
                    href={""}>
                    Login
                </Link>
            </nav>
        </header>
    );
}
