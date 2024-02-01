export default function ProdMenuItem(){
    return(
        <div className="
                    backdrop-blur-md 
                    bg-white/35 
                    p-4 
                    rounded-lg 
                    text-center 
                    shadow-lg 
                    transition-all
                    hover:shadow-black/30 
                    hover:-translate-y-3 duration-500 
                    hover: backdrop:blur-3xl hover:bg-white/95
                ">
                    <div className="text-center">
                        <img
                            src="/capuchinu.png" 
                            alt="capuchinu"
                            className="m-h-auto max-h-28 block mx-auto" 
                        />
                    </div>
                    <h4 className="tex-xl font-semibold my-2">
                        Capuchinu Coffee
                    </h4>
                    <p className="text-sm text-gray-500 font-semibold">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    </p>
                    <button className="mt-4 bg-primary text-white rounded-full px-8 py-2">
                        Add to cart 2$
                    </button>
                </div>
    )
}