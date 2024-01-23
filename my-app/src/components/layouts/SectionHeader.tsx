interface props {
    mainHeader: string;
    subHeader: string;
}

export default function SectionHeader({mainHeader, subHeader}: props){
    return(
        <div className="text-center mb-4 my-8">
            <h3 className="uppercase text-gray-500 font-semibold leading-4">
                {mainHeader}
            </h3>
            <h2 className="text-primary italic font-bold text-4xl">
                {subHeader}
            </h2>
        </div>
    )
}