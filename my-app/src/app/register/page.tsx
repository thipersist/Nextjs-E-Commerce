"use client";
import React, { FC, useState } from "react";
import { Google, Message } from "iconsax-react";
import Link from "next/link";

export default function RegisterPage(){
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPasword] = useState('');
    const [passwordConfirm, setPaswordConfirm] =  useState('');
    const [creatingUser, setCreatingUser] = useState(false);
    const [userCreated, setUserCreated] = useState(false);
    const [error, setError] = useState(false)

    async function handleOnSubmit(ev:any) {
        try {
            ev.preventDefault()
            setCreatingUser(true);
                if(!password?.length || password.length < 5){
                    throw new Error ('Password must be at least 5 characters')
                } else if (passwordConfirm !== password) {
                    throw new Error('Password confirm not match')
                } else {
                    fetch('/api/register', {
                    method: 'POST',
                    body: JSON.stringify({username, email, password, passwordConfirm}),
                    headers: {'Content-Type':'application/json'},
                    });
                }
            setCreatingUser(true);
            setUserCreated(true);
        } catch (error) {
            setError(true)
        }
    }

    return (
        <section className="mt-8 text-center">
            <h1 className="text-primary text-4xl my-8">
                Register
            </h1>
            {userCreated && (
                <div className=" text-green-600 drop-shadow-lg my-4 ">
                    User created.<br/> Now you can <Link className="underline" href={'/login'}>Login &raquo;</Link>
                </div>
            )}
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
                    <form className="text-center max-w-xs mx-auto" onSubmit={handleOnSubmit}>
                        <input type="username" placeholder="username" value={username} onChange={ev => setUserName(ev.target.value)} required />
                        <input type="email" placeholder="email" value={email} onChange={ev => setEmail(ev.target.value)}/>
                        <input type="password" placeholder="password" value={password} onChange={ev => setPasword(ev.target.value)} required/>
                        <input type="password" placeholder="confirm password" value={passwordConfirm} onChange={ev => setPaswordConfirm(ev.target.value)} required/>
                        <button type="submit" className="
                            bg-primary
                            text-white
                            w-full
                            rounded-full
                            p-2
                            hover:shadow-md
                            hover:shadow-black/45
                        ">
                            Register
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