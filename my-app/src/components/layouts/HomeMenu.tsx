import Image from "next/image";

export default function HomeMenu(){
    return(
        <section>
            <div className="absolute left-0 right-0 w-full">
                <div className="absolute h-48 w-48 left-0">
                    <Image src={'/cf-bn-l.png'} fill style={{objectFit:'contain'}} alt="banner_left" />
                </div>
                <div className="absolute h-48 w-48 right-0">
                    <Image src={'/cf-bn-r.png'} fill style={{objectFit:'contain'}} alt="banner_right" />
                </div>
            </div>
        </section>
    )
}