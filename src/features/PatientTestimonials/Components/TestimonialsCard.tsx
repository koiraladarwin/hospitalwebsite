import cardLogo from "../../../assets/cardLogo.png";
import cardImage from "../../../assets/cardImage.png";


export default function TestimonialsCard()
{
    return(
        <div className="w-full py-[5rem] px-10 flex items-center justify-center">
            <div className="max-w-[1240px] grid md:grid-cols-3 gap-2">
              
                <div className="relative ">  
                
                <div className="w-full flex flex-col justify-between p-5 rounded-xl  border border-orange-bg shadow-2xl h-[450px] bg-white">

                    <div>
                        <img src={cardLogo} alt="" className="h-10 w-10" />
                        <p className="mt-5">Sushwastha Hospital provided exceptional care from start to finish. The staff was compassionate, 
                        the doctors were highly skilled, and the facilities were clean advanced
                        well equipped. I felt truly supported throughout my treatment. Highly recommended!

                        </p>
                    </div>
                    
                    
                    <div>
                        <hr className="mt-2 text-grey-text"/>

                        <div className="flex gap-5 mt-10">
                            <img src={cardImage} alt="" className="rounded-full w-15 h-15" />
                            <div className="mt-2 ">
                                <h2 className="text-orange-bg font-bold">Laxmi Kumari Pradhan</h2>
                                <p>Kalopul, Kathmandu</p>
                            </div>
                            
                        </div>
                        
                    </div>
                    <div className="absolute -bottom-2 left-[50%] -translate-x-1/2 left- w-[95%] text-center h-2 bg-gray-200 rounded-b-xl z-0"></div>  
                </div>
                </div>


                <div className="relative">  
                
                <div className="w-full flex flex-col justify-between p-5 rounded-xl  border border-orange-bg shadow-2xl h-[450px] bg-white">

                    <div>
                        <img src={cardLogo} alt="" className="h-10 w-10" />
                        <p className="mt-5">Sushwastha Hospital provided exceptional care from start to finish. The staff was compassionate, 
                        the doctors were highly skilled, and the facilities were clean advanced
                        well equipped. I felt truly supported throughout my treatment.

                        </p>
                    </div>
                    
                    
                    <div >
                        <hr className="mt-2 text-grey-text"/>

                        <div className="flex gap-5 mt-10">
                            <img src={cardImage} alt="" className="rounded-full w-15 h-15" />
                            <div className="mt-2">
                                <h2 className="text-orange-bg font-bold">Bikash Pokhrel</h2>
                                <p>Balkumari, Lalitpur</p>
                            </div>
                            
                        </div>
                        
                    </div>

                    <div className="absolute -bottom-2 left-[50%] -translate-x-1/2 left- w-[95%] text-center h-2 bg-gray-200 rounded-b-xl z-0"></div>  

                </div>
                </div>


                <div className="relative">  
                
                <div className="w-full flex flex-col justify-between p-5 rounded-xl  border border-orange-bg shadow-2xl h-[450px] bg-white">

                    <div>
                        <img src={cardLogo} alt="" className="h-10 w-10" />
                        <p className="mt-5">Exceeded y expectations. The staff was kind, the environment was clean and calm, and the quality of care was truly exceptional.
                            I'm grateful for their dedication.

                        </p>
                    </div>
                    
                    
                    <div>
                        <hr className="mt-2 text-grey-text"/>

                        <div className="flex gap-5 mt-10">
                            <img src={cardImage} alt="" className="rounded-full w-15 h-15" />
                            <div className="mt-2">
                                <h2 className="text-orange-bg font-bold">Meena Rai</h2>
                                <p>Anamnagar, Kathmandu</p>
                            </div>
                            
                        </div>
                        
                    </div>
                    <div className="absolute -bottom-2 left-[50%] -translate-x-1/2 left- w-[95%] text-center h-2 bg-gray-200 rounded-b-xl z-0"></div>  

                </div>
                </div>
              
            </div>
        </div>
    )
}