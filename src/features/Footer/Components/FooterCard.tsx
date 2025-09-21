import { FaPhone, FaFacebookF, FaInstagram, FaYoutube, FaLinkedin, FaTiktok, FaX,FaRegClock } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import HospitaLogo from "../../../assets/HospitalLogo.svg";

export default function FooterCard() {
  return (
    <footer className="relative bg-orange-bg text-white pb-5">

      {/* Contact Section */}
      <div className="flex flex-col md:flex-row md:justify-between gap-8 p-10 md:px-40">
        {/* Phone */}
        <div className="flex gap-3 items-start">
          <FaPhone className="flex-none text-orange-bg rounded-full bg-white w-12 h-12 p-3" />
          <div>
            <h2 className="font-semibold text-lg">Call</h2>
            <p className="text-sm">+977-0104577909, 4573545</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex gap-3 items-start">
          <MdOutlineMail className="flex-none text-orange-bg rounded-full bg-white w-12 h-12 p-3" />
          <div>
            <h2 className="font-semibold text-lg">Email</h2>
            <p className="text-sm">sushwasthahospital@gmail.com</p>
          </div>
        </div>

        {/* Address */}
        <div className="flex gap-3 items-start">
          <IoLocationOutline className="flex-none text-orange-bg rounded-full bg-white w-12 h-12 p-3" />
          <div>
            <h2 className="font-semibold text-lg">Address</h2>
            <p className="text-sm">NK Singh Marga, Kathmandu</p>
          </div>
        </div>
        {/* Opening Hours */}
        <div className="flex gap-3 items-start">
          <FaRegClock className="flex-none text-orange-bg rounded-full bg-white w-12 h-12 p-3" />
          <div>
            <h2 className="font-semibold text-lg">Opening Hours</h2>
            <p className="text-sm">10am-6pm</p>
          </div>
        </div>
      </div>


      {/* Links Section */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 gap-8 p-10 md:px-40">

        <div className="max-sm:col-span-2 mb-10">
          <h3 className="font-semibold mb-2 ">CAMP AND EVENTS</h3>
          <div className="w-full h-full bg-white grid grid-cols-2 grid-rows-2 gap-2 p-2 rounded-md">
            <div className="bg-black"></div>
            <div className="bg-blue-200"></div>
            <div className="bg-green-200"></div>
            <div className="bg-orange-200"></div>
          </div>
        </div>
        {/* Excersice */}
        <div className="flex w-full  md:items-center md:justify-start flex-col">
          <div>
            <h3 className="font-semibold mb-2">EXCERSICE</h3>
            <ul className="space-y-1 text-sm">
              <li>Neck Pain</li>
              <li>Shoulder Pain</li>
              <li>Low Back Pain</li>
              <li>OA knee Pain</li>
              <li>Nerve Contraction</li>
            </ul>

          </div>
        </div>
        {/* Therapies */}
        <div className="flex w-full  md:items-center md:justify-start flex-col">
          <div>
            <h3 className="font-semibold mb-2">THERAPIES</h3>
            <ul className="space-y-1 text-sm">
              <li>Acupuncture</li>
              <li>Ayurveda</li>
              <li>Naturopathy</li>
              <li>Physiotherapy</li>
              <li>Yoga</li>
            </ul>
          </div>
        </div>


        {/* Company */}
        <div className="flex w-full  md:items-center md:justify-start flex-col">
          <div>
            <h3 className="font-semibold mb-2">COMPANY</h3>
            <ul className="space-y-1 text-sm">
              <li>Our Focus</li>
              <li>Therapies</li>
              <li>Facilities</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        {/* About Us */}
        <div className="flex w-full  md:items-center md:justify-start flex-col">
          <div>
            <h3 className="font-semibold mb-2">ABOUT US</h3>
            <ul className="space-y-1 text-sm">
              <li>Our story</li>
              <li>Our team</li>
              <li>Join Us</li>
            </ul>

          </div>
        </div>

        {/* Social / Connect */}
        <div>
          <h3 className="font-semibold mb-2">LET’S GET CONNECTED</h3>
          <div className="flex gap-3">
            <a href="#" aria-label="Facebook">
              <FaFacebookF className="w-8 h-8 p-2 bg-white text-orange-bg rounded-full" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram className="w-8 h-8 p-2 bg-white text-orange-bg rounded-full" />
            </a>
            <a href="#" aria-label="YouTube">
              <FaYoutube className="w-8 h-8 p-2 bg-white text-orange-bg rounded-full" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedin className="w-8 h-8 p-2 bg-white text-orange-bg rounded-full" />
            </a>
            <a href="#" aria-label="Tiktok">
              <FaTiktok className="w-8 h-8 p-2 bg-white text-orange-bg rounded-full" />
            </a>
            <a href="#" aria-label="X">
              <FaX className="w-8 h-8 p-2 bg-white text-orange-bg rounded-full" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

