import Image from "next/image";

export default function HomeMenu(){
    return(
        <section>
            <div className="absolute left-0 right-0 w-full">
                <div className="absolute h-48 w-48 left-0 -z-10">
                    <Image 
                        src={'/cf-bn-l.png'} 
                        fill 
                        style={{objectFit:'contain'}} 
                        alt="banner_left"
                        priority={false} 
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
                <div className="absolute h-48 w-48 right-0 -z-10">
                    <Image 
                        src={'/cf-bn-r.png'} 
                        fill 
                        style={{objectFit:'contain'}} 
                        alt="banner_right"
                        priority={false} 
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                <div className="bg-gray-300 p-4 rounded-lg">
                    <Image
                        src={'/capuchinu.png'} 
                        fill
                        alt="capuchinu" 
                    />
                </div>
            </div>
        </section>
    )
}