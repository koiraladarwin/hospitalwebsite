export default function ExpertDoctors({name,type,image}:{
    name:string,
    type:string,
    image: string
})
{

    return(
        <>
                <div className="font-poppins pt-20 pb-20">

                    <div className="flex flex-col items-center text-center">
                        <div className="rounded-full border-7 border-white p-1 flex items-center justify-center">
                            <div className="rounded-full border-4 border-orange-bg m-[-5px] ml-[-14px] mb-[-8px] ">
                                <img src={image} alt="" className="w-42 h-42 rounded-full object-cover" />
                            </div>
                        </div>
                        
                        
                        <h2 className=" font-bold text-lg">{name}</h2>
                        <p className="text-sm">{type}</p>

                    </div>
                </div> 
        </>
    )
} 
