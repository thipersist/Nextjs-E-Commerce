import { Google } from "iconsax-react";
import Image from "next/image";

export default function RegisterPage(){
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
                <div className="absolute inset-[5px] bg-gradient-to-r from-[#74ebd5] to-[#acb6e5] rounded-3xl z-[1000] font-semibold">
                    <form className="text-center max-w-xs mx-auto">
                        <input type="username" placeholder="username"/>
                        <input type="email" placeholder="email"/>
                        <input type="password" placeholder="password"/>
                        <input type="password" placeholder="confirm password"/>
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