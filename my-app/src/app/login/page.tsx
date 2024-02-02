"use client"
import { Google } from "iconsax-react";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPasword] = useState('');
    const [passwordConfirm, setPaswordConfirm] = useState('');
    const [loginInProgress, setLoginInProgress] = useState(false);
    const [error, setError] = useState(false)

    async function handleOnSubmit(ev:any) {
        ev.preventDefault();
        setLoginInProgress(true);
        const { ok } = await fetch('/login/auth', {
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
        })
        if (ok) {
            
        } else {

        }
        setLoginInProgress(false)
    }

    return (
        <section className="mt-8 text-center">
            <h1 className="text-primary text-4xl my-8">
                Login
            </h1>
            {error && (
                <div className=" text-orange-500 drop-shadow-lg my-4 ">
                    An error has occurred.<br />
                    Please try again later
                </div>
            )}
            <div className="
                container
                relative 
                shadow-2xl
                rounded-3xl 
                w-[350px]
                h-[500px]
                mx-auto 
                flex 
                justify-center 
                items-center 
                overflow-hidden">
                <div className="absolute inset-[5px] bg-gradient-to-r from-[#74ebd5] to-[#acb6e5] rounded-3xl z-[1000]">
                    <form className="text-center max-w-xs mx-auto" method="POST" action="/api/auth">
                        <input
                            type="username"
                            placeholder="username or email"
                            disabled={loginInProgress}
                            value={username}
                            onChange={ev => setUserName(ev.target.value)}
                            required />
                        <input
                            type="password"
                            placeholder="password"
                            disabled={loginInProgress}
                            value={password}
                            onChange={ev => setPasword(ev.target.value)}
                            required /> 
                        <button type="submit" className="
                            bg-primary
                            text-white
                            w-full
                            rounded-full
                            p-2
                            hover:shadow-md
                            hover:shadow-black/45
                        ">
                            Sign In
                        </button>
                        <div className="text-gray-500 my-4">
                            or login with provider
                        </div>
                        <button type="submit" className=" 
                            flex 
                            justify-center 
                            gap-2 
                            items-center 
                            border 
                            border-primary 
                            p-2 
                            rounded-full 
                            w-full 
                            text-primary
                            hover:shadow-md
                            hover:shadow-primary/50
                            ">
                            <Google size="24" color="#FF8A65"/>
                            Login with google
                        </button>
                    </form>
                </div>     
            </div>
        </section>
    )
}