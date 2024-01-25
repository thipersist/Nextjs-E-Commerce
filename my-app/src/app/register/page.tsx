export default function RegisterPage(){
    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl">
                Register
            </h1>
            <div className="
                relative 
                z-[1000] 
                shadow-xl 
                rounded-3xl 
                w-[350px]
                h-[340px]
                mx-auto 
                flex 
                justify-center 
                items-center 
                overflow-hidden">
                <div className="container absolute inset-2 rounded-3xl overflow-hidden">
                    {/* <form className="text-center font-semibold">
                        <input type="username" placeholder="username"/>
                        <input type="email" placeholder="email"/>
                        <input type="password" placeholder="password"/>
                        <input type="password" placeholder="confirm password"/>
                        <button className="submit">Register</button>
                    </form> */}
                </div>     
            </div>
        </section>
    )
}