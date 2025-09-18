import Button from "../../button/Button";
import Header from "./Header";
import Image from "./Image";

interface TherapyCardsProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

function TherapyCards({
  title = "Physiotherapy",
  subtitle = "Restoring Strength, One step at a time",
  description = "PhysioTherapy is a treatment through physical exercise and modalities. Physiotherapy enables individuals to develop, maintain, and restore maximum movement and function throughout life.",
}: TherapyCardsProps) {
  return (
    <div className="bg-white shadow-lg flex flex-col justify-center items-center rounded-lg w-full md:w-3/4 mx-auto p-6">
      <div className="w-full relative top-0 left-0">
        <Header title="Therapies" />
      </div>

      <div className="flex flex-col md:flex-row items-center gap-6 w-full">
        <Image />

        <div className="flex flex-col font-poppins w-full">
          <p className="text-orange-400 text-2xl font-bold">{title}</p>
          <p className="text-gray-400">{subtitle}</p>
          <p className="mt-2">{description}</p>

          <div className="mt-4">
            <Button title="BOOK NOW" textColor="white" bgColor="bg-yellow-500" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TherapyCards;
