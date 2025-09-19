import Astha from "../../../assets/DrAsthaBK.png";
import Bishal from "../../../assets/DrBishalRai.png";
import Rejina from "../../../assets/DrRejinaRijal.png";

export default function ExpertDoctors()
{
    return(
        <>
                <div className="grid grid-cols-1 gap-10 py-10 text-white sm:grid-cols-2 lg:grid-cols-3 font-poppins">

                    <div className="flex flex-col items-center text-center ">
                        <div className="rounded-full border-7 border-white p-1 ">
                            <div className="rounded-full border-4 border-orange-bg m-[-5px] ml-[-14px] mb-[-8px]">
                                <img src={Bishal} alt="" className="w-32 h-32 rounded-full object-cover" />
                            </div>
                        </div>
                        
                        
                        <h2 className=" font-bold text-lg">Dr. Bishal Rai</h2>
                        <p className="text-sm">Physiotherapist</p>

                    </div>

                    <div className="flex flex-col items-center text-center ">
                        <div className="rounded-full border-7 border-white p-1 ">
                            <div className="rounded-full border-4 border-orange-bg m-[-5px] ml-[-14px] mb-[-8px]">
                                <img src={Astha} alt="" className="w-32 h-32 rounded-full object-cover" />
                            </div>
                        </div>
                        
                        
                        <h2 className=" font-bold text-lg">Dr. Astha B.K</h2>
                        <p className="text-sm">Physiotherapist-Physician</p>

                    </div>

                    <div className="flex flex-col items-center text-center ">
                        <div className="rounded-full border-7 border-white p-1 ">
                            <div className="rounded-full border-4 border-orange-bg m-[-5px] ml-[-14px] mb-[-8px]">
                                <img src={Rejina} alt="" className="w-32 h-32 rounded-full object-cover" />
                            </div>
                        </div>
                        
                        
                        <h2 className=" font-bold text-lg">Dr. Biswash Adhikari</h2>
                        <p className="text-sm">Physiotherapist</p>

                    </div>

                </div>
        </>
    )
} 