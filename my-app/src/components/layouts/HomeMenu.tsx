/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import ProdMenuItem from "../menu/ProdMenuItem";
import SectionHeader from "./SectionHeader";

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
            <SectionHeader 
                mainHeader={"Check Out"}
                subHeader={"Menu"}
            />
            <div className="grid grid-cols-4 gap-4 my-12">
                <ProdMenuItem />
                <ProdMenuItem />
                <ProdMenuItem />
                <ProdMenuItem />
            </div>
        </section>
    )
}