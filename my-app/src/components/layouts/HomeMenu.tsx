/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import ProdMenuItem from "../menu/ProdMenuItem";

export default function HomeMenu(){
    return(
        <section>
            <div className="absolute left-0 right-0 w-full items-center">
                <div className="absolute left-0 -z-10">
                    <Image 
                        src={'/bn-l-2.png'} 
                        width={150}
                        height={195}
                        style={{objectFit:'contain', width: 'auto', height: 'auto'}} 
                        alt="banner_left"
                        priority={false} 
                    />
                </div>
                <div className="absolute right-0 -z-10">
                    <Image 
                        src={'/bn-r.png'} 
                        width={150}
                        height={195} 
                        style={{objectFit:'contain', width: 'auto', height: 'auto'}} 
                        alt="banner_right"
                        priority={false} 
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
                <ProdMenuItem />
                <ProdMenuItem />
                <ProdMenuItem />
                <ProdMenuItem />
            </div>
        </section>
    )
}