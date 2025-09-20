import { BsCalendar2EventFill } from "react-icons/bs";

function AppointmentForm() {
  return (
    <div className="flex flex-col md:flex-row md:w-full font-poppins">
      <div className="flex w-full md:w-auto bg-orange-bg justify-center items-center flex-1 md:px-3 px-1 py-1 md:py-0">
        <div className="flex flex-col gap-1 items-center justify-center">
          <BsCalendar2EventFill color='white' size={24} />
          <p className="text-center text-white whitespace-nowrap text-sm hidden md:block font-poppins">Make an Appoinment</p>
        </div>
      </div>


      <div className="flex md:flex-row flex-2 md:px-5 px-2 py-2 justify-center md:gap-4 gap-1 items-center bg-white w-full overflow-x-auto">
        <div className="flex flex-col md:gap-3 gap-1">
          <input type="text" className="border placeholder-gray-500 py-1 md:py-2 px-2 outline-none text-sm w-full placeholder:text-[11px]" placeholder="Name*" />
          <input type="text" className="border placeholder-gray-500 py-1 md:py-2 px-2 outline-none text-sm w-full placeholder:text-[11px]" placeholder="Appointment Date* " />
        </div>

        <div className="flex flex-col md:gap-3 gap-1">
          <input type="text" className="border placeholder-gray-500 py-1 md:py-2 px-2 outline-none text-sm w-full placeholder:text-[11px]" placeholder="Mobile*" />
          <input type="text" className="border placeholder-gray-500 py-1 md:py-2 px-2 outline-none text-sm w-full placeholder:text-[11px]" placeholder="Appointment Time*" />
        </div>

        <div className="flex flex-col md:gap-3 gap-1">
          <input type="text" className="border placeholder-gray-500 py-1 md:py-2 px-2 outline-none text-sm w-full placeholder:text-[11px] " placeholder="Email*" />
          <input
            type="text"
            className="border placeholder-gray-500 py-1 md:py-2 px-2 outline-none text-sm w-full placeholder:text-[11px]"
            placeholder="Hospital Id(If any)*"
          />
        </div>


      </div>
      <div className="bg-orange-bg justify-center items-center flex-1 px-2 md:hidden w-full  py-1">
        <h4 className="text-white text-center text-[10px] sm:text-xs font-poppins">MAKE APPOINMENT</h4>
      </div>


      <div className="bg-orange-bg justify-center items-center flex-1 px-3 hidden md:flex">
        <h4 className="text-white text-center text-sm font-poppins">MAKE APPOINMENT</h4>
      </div>
    </div>
  );
}

export default AppointmentForm;
