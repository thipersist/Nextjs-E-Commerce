import Image from "next/image";

export default function HomeMenu(){
    return(
        <section>
            <div className="absolute left-0 right-0 w-full items-center">
                <div className="absolute left-0 -z-10">
                    <Image 
                        src={'/bn-l-2.png'} 
                        width={207}
                        height={305}
                        style={{objectFit:'contain'}} 
                        alt="banner_left"
                        priority={false} 
                    />
                </div>
                <div className="absolute right-0 -z-10">
                    <Image 
                        src={'/bn-r.png'} 
                        width={207}
                        height={305} 
                        style={{objectFit:'contain'}} 
                        alt="banner_right"
                        priority={false} 
                        sizes="(max-width: auto), (max-heght: auto)"
                    />
                </div>
            </div>
            <div className="text-center mb-4">
                <h3 className="uppercase text-gray-500 font-semibold leading-4">
                    Check out
                </h3>
                <h2 className="text-primary italic font-bold text-4xl">
                    Menu
                </h2>
            </div>
            <div className="grid grid-cols-4 gap-4">
                <div className="bg-gray-200 p-4 rounded-lg text-center ">
                    <img
                        src="/capuchinu.png" 
                        alt="capuchinu" 
                    />
                    <h4 className="tex-xl font-semibold my-2">
                        Capuchinu Coffee
                    </h4>
                    <p className="text-sm text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Nam, magnam molestias aperiam impedit iure libero ab voluptatem culpa ipsam unde explicabo
                    </p>
                    <button className="mt-4 bg-primary text-white rounded-full px-8 py-2">
                        Add to cart 2$
                    </button>
                </div>
            </div>
        </section>
    )
}