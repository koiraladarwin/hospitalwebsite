import Button from "../../button/Button";
import Header from "../../focus/components/Header";
import TherapyImage from "./TherapyImage";

interface TherapyCardsProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

function TherapyCards({
  title = "Physiotherapy",
  subtitle = "Restoring Strength, One step at a time",
  description = "PhysioTherapy is a treatment through physical exercise and\n electrical modalities.Physiotherapy enables individuals to\n develop, maintain, and restore maximum movement and function\n throughout life.",
}: TherapyCardsProps) {
  return (
    <div className="bg-white shadow-xl flex flex-col  px-24 py-6  w-full ">
      <div className=" w-full flex justify-center items-center">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-16 w-full lg:w-[80%]">
          <TherapyImage />

          <div className="flex flex-col font-poppins w-full">
            <p className="text-orange-gradient text-2xl font-semibold pb-2">{title}</p>
            <p className="text-gray-400 text-lg">{subtitle}</p>
            <p className="mt-2 text-sm leading-8 ">{description}</p>

            <div className="mt-4">
              <Button title="BOOK NOW" textColor="text-white" bgColor="bg-yellow-500" hoverColor="hover:bg-yellow-400" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default TherapyCards;
