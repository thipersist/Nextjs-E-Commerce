export default function RegisterPage(){
    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl">
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
                    <form className="text-center font-semibold">
                        <input type="username" placeholder="username"/>
                        <input type="email" placeholder="email"/>
                        <input type="password" placeholder="password"/>
                        <input type="password" placeholder="confirm password"/>
                        <button className="submit">Register</button>
                    </form>
                </div>     
            </div>
        </section>
    )
}