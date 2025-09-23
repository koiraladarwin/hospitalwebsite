function AppointmentForm() {
  return (
    <div className="flex flex-col md:w-full font-poppins border-2 bg-white px-2 md:py-2 py-2   border-dark-green rounded-lg shadow-lg">

      <div className="bg-white justify-center items-center flex-1 px-3 md:flex">
        <h4 className="text-dark-green text-center text-md font-bold font-poppins">MAKE AN APPOINTMENT</h4>
      </div>

      <div className="flex  md:flex-row flex-2 md:px-5 px-2 py-2 justify-center md:gap-4 gap-1 items-center bg-white w-full  pb-5">
        <div className="flex flex-col md:gap-3 gap-1">
          <div>
            <label className="font-medium font-poppins text-[0.625rem] md:text-[0.75rem] "> Name</label>
            <input type="text" className="border-1 border-gray-300 placeholder-gray-500 py-1 md:py-2 px-2 outline-none text-sm w-full placeholder:text-[11px] rounded shadow-md bg-white" placeholder="Name*" />
          </div>
          <div>
            <label className="font-medium font-poppins text-[0.625rem] md:text-[0.75rem] ">Appointment Date</label>
            <input type="text" className="border-1 border-gray-300 placeholder-gray-500 py-1 md:py-2 px-2 outline-none text-sm w-full placeholder:text-[11px] rounded shadow-md" placeholder="Appointment Date* " />
          </div>
        </div>

        <div className="flex flex-col md:gap-3 gap-1">
          <div>
            <label className="font-medium font-poppins text-[0.625rem] md:text-[0.75rem] ">Mobile Number</label>
            <input type="text" className="border-1 border-gray-300 placeholder-gray-500 py-1 md:py-2 px-2 outline-none text-sm w-full placeholder:text-[11px] rounded shadow-md bg-white" placeholder="Mobile*" />
          </div>
          <div>
            <label className="font-medium font-poppins text-[0.625rem] md:text-[0.75rem] ">Appointment Time</label>
            <input type="text" className="border-1 border-gray-300 placeholder-gray-500 py-1 md:py-2 px-2 outline-none text-sm w-full placeholder:text-[11px] rounded shadow-md bg-white" placeholder="Appointment Time*" />
          </div>
        </div>

        <div className="flex flex-col md:gap-3 gap-1">
          <div>
            <label className="font-medium font-poppins text-[0.625rem] md:text-[0.75rem] ">Email</label>
            <input type="text" className="border-1 border-gray-300 placeholder-gray-500 py-1 md:py-2 px-2 outline-none text-sm w-full placeholder:text-[11px] rounded shadow-md bg-white" placeholder="Email*" />
          </div>

          <div>
            <label className="font-medium font-poppins text-[0.625rem] md:text-[0.75rem] ">Hospital Id</label>
            <input
              type="text"
              className="border-1 border-gray-300 placeholder-gray-500 py-1 md:py-2 px-2 outline-none text-sm w-full placeholder:text-[11px] rounded-md bg-white shadow-md"
              placeholder="Hospital Id(If any)*"
            />

          </div>
        </div>
      </div>


      <div className="flex justify-center">
        <button className="bg-dark-green text-white font-poppins px-8 py-2 rounded-lg hover:bg-green text-sm font-light">Submit</button>
      </div>
    </div>
  );
}

export default AppointmentForm;
