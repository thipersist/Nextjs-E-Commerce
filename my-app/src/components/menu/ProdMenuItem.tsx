export default function ProdMenuItem(){
    return(
        <div className="
                    backdrop-blur-md 
                    bg-white/35 
                    p-4 
                    rounded-lg 
                    text-center 
                    shadow-lg 
                    hover:shadow-2xl 
                    hover:-translate-y-5 duration-500 
                    hover: backdrop:blur-3xl hover:bg-white/95
                ">
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
    )
}