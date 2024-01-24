export default function RegisterPage(){
    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl">
                Register
            </h1>
            <div className="absolute mx-auto items-center">
                <div className="relative w-[350px] h-[340px] rounded-3xl shadow-2xl">
                    <form>
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