import { ArrowRight2 } from "iconsax-react";
import Image from "next/image";

export default function Banner(){
    return(
        <section className="banner">
            <div className="py-12">
                <h1 className="text-4xl font-semibold">
                    Everything <br/> 
                    is better <br/>
                    with a&nbsp; 
                    <span className="text-primary">
                        coffee
                    </span>
                </h1>
                <p className="my-4 text-gray-500">
                    Coffee is the missing piece that makes every day complete,
                    a simple yet delicious joy in life
                </p>
                <div className="flex gap-4">
                    <button className="flex gap-2 items-center uppercase text-sm bg-primary text-white px-4 py-2 rounded-full font-semibold">
                        Order now
                        <ArrowRight2 size="24" color="white" variant="Outline"/>
                    </button>
                    <button className="flex gap-2 py-2 items-center text-gray-600 font-semibold">
                        Learn more
                        <ArrowRight2 size="24" variant="Outline"/>
                    </button>
                </div>
            </div>
            <div className="relative">
                <Image src={'/icon-bn.png'} fill style={{objectFit: "contain"}} alt="Icon_Banner_Coffee" />
            </div>
        </section>
    )
}