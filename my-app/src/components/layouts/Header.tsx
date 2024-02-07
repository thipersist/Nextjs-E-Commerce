"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Header() {
    const session = useSession();
    console.log(session);
    const status = session.status;
    return (
        <header className="flex justify-between items-center">
            <nav className="flex gap-8 items-center text-gray-500 font-semibold ">
                <Link className="text-primary text-2xl font-semibold" href={"/"}>
                    TA COFFEE
                </Link>
                <Link href={"/"}>Home</Link>
                <Link href={""}>Menu</Link>
                <Link href={""}>About</Link>
                <Link href={""}>Contact</Link>
            </nav>
            <nav className="flex gap-8 text-gray-500 items-center font-semibold">
                {status === 'authenticated' && (
                    <button
                        onClick={() => signOut() }
                        className="bg-primary text-white rounded-full px-8 py-2"
                    >
                        Logout
                    </button>
                )}
                {status === 'unauthenticated' && (
                    <>
                        <Link href={"/login"}>Login</Link>
                        <Link
                            className="bg-primary text-white rounded-full px-8 py-2"
                            href={"/register"}>
                            Register
                        </Link>
                    </>
                )}
            </nav>
        </header>
    );
}
