import cardLogo from "../../../assets/cardLogo.png";
import cardImage from "../../../assets/cardImage.png";


export default function TestimonialsCard({text, name, location}:{
    text:string;
    name:string;
    location:string;
})
{
    return(
        <div>
            <div className="w-full py-[5rem] px-2 flex items-stretch justify-center">
            <div className="max-w-[1240px] w-full">
              
                <div className="relative h-full">  
                
                <div className="w-full h-[400px] flex flex-col justify-between p-5 rounded-xl  border border-orange-bg shadow-2xl bg-white">

                    <div>
                        <img src={cardLogo} alt="" className="h-10 w-10" />
                        <p className="mt-5">
                            {text}
                        </p>
                    </div>
                    
                    
                    <div>
                        <hr className="mt-2 text-grey-text"/>

                        <div className="flex gap-5 mt-10">
                            <img src={cardImage} alt="" className="rounded-full w-15 h-15" />
                            <div className="mt-2 ">
                                <h2 className="text-orange-bg font-bold">{name}</h2>
                                <p>{location}</p>
                            </div>
                            
                        </div>
                        
                    </div>
                    <div className="absolute -bottom-2 left-[50%] -translate-x-1/2 left- w-[95%] text-center h-2 bg-gray-200 rounded-b-xl z-0"></div>  
                </div>
                </div>
              
            </div>
        </div>
        </div>
        
    )
}