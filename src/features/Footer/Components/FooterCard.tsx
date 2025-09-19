import {FaPhone} from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import HospitaLogo from "../../../assets/HospitalLogo.svg"

export default function FooterCard()
{
    return(
        <div className="relative bg-orange-bg text-white">

            {/* Triangle Logo */}

            <div className="absolute left-1/2 -translate-x-1/2 -top-30 w-[160px] h-[500px] bg-orange-bg clip-footer "></div>


            <div className="flex justify-center absolute left-1/2 -translate-x-1/2 -top-14 mt-3">
                <div className="flex  bg-white rounded-full w-20 h-20 items-center justify-center m-1">
                    <img
                    src={HospitaLogo}
                    alt="Logo"
                    className="w-12 h-12 object-contain"
                    />
                </div>           
            </div>
    
      
            <div className="flex flex-col md:flex-row md:justify-between gap-10  p-10 px-5  justify-between  md:px-40">
                <div className="flex gap-2">
                    <FaPhone className="flex-none text-orange-bg rounded-full bg-white w-12 h-12 p-3 " />
                    <div>
                        <h1>Call</h1>
                        <p>+977-0104577909, 4573545</p>
                    </div>
                    
                </div>

                <div className="flex gap-2">
                    <MdOutlineMail className="flex-none text-orange-bg rounded-full bg-white w-12 h-12 p-3 "/>
                    <div>
                        <h1>Email</h1>
                        <p>sushwasthahospital@gmail.com</p>
                    </div>
                    
                </div>

                <div className="flex gap-2">
                    <IoLocationOutline className="flex-none text-orange-bg rounded-full bg-white w-12 h-12 p-3 " />
                    <div>
                        <h1>Address</h1>
                        <p>NK Singh Marga</p>
                        <p>Minbhawan Ukalo, Kathmandu, Nepal</p>
                    </div>
                    
                </div>
            </div>
            



            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 p-10 px-5  justify-between md:px-40 ">
                <div>
                    <h1 className="font-semibold">ABOUT US</h1>
                    <p>Our story</p>
                    <p>Our team</p>
                    <p>Join Us</p>
                </div>

                <div>
                    <h1 className="font-semibold">COMPANY</h1>
                    <p>Our Focus</p>
                    <p>Therapies</p>
                    <p>Facilities</p>
                    <p>Contact</p>
                </div>

                <div>
                    <h1 className="font-semibold">THERAPIES</h1>
                    <p>Acupenture</p>
                    <p>Ayurveda</p>
                    <p>Naturopathy</p>
                    <p>Physiotherapy</p>
                    <p>Yoga</p>
                </div>

                <div>
                    <h1 className="font-semibold">LETS GET CONNECTED</h1>
                </div>

                <div>
                    <h1 className="font-semibold">SUBSCRIBE</h1>
                    <input type="text" placeholder="Email Address"  className="bg-white h-10 px-3 placeholder:text-grey-text"  />
                    <p>get digital marketing updates in your mailbox</p>
                </div>
            </div>
        </div>
    )
}