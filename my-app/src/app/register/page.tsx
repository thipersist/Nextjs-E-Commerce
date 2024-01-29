"use client";
import React, { FC, useState } from "react";
import { Google } from "iconsax-react";
import { json } from "stream/consumers";

export default function RegisterPage(){
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPasword] = useState('');
    const [passwordConfirm, setPaswordConfirm] =  useState('');

    function handleOnSubmit(ev:any) {
        ev.preventDefault()
        fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify({username, email, password, passwordConfirm}),
            headers: {'Content-Type':'application/json'},
        });
    }

    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl my-8">
                Register
            </h1>
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
                        <button type="submit" className="bg-primary text-white shadow-sm backdrop:shadow-md w-full rounded-full p-2">Register</button>
                        <div className="text-gray-500 my-4">
                            or login with provider
                        </div>
                        <button type="submit" className=" flex justify-center gap-2 items-center border border-primary p-2 rounded-full w-full text-primary">
                            <Google size="25" color="#FF8A65"/>
                            Login with google
                        </button>
                    </form>
                </div>     
            </div>
        </section>
    )
}