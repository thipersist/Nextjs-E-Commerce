export default function RegisterPage(){
    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl">
                Register
            </h1>
            <div className="container relative rounded-3xl w-[350px] h-[500px] flex justify-center items-center bg-black/35 p-5">
                <div className="p-4 mx-auto shadow-2xl">
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