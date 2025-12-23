export default function OperatingDaysSection() {
  return (
    <div className="flex justify-center pt-4 sm:pt-8 mb-8 sm:mb-16">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-[20px] w-full px-4">
        <p 
          className="font-barlow font-medium text-white text-base sm:text-[20px] px-4 sm:px-6 py-3 sm:py-4 w-full sm:w-auto text-center"
        >
          Operating Days
        </p>
        <p 
          className="font-barlow font-medium text-white text-base sm:text-[20px] bg-[#1E293B] rounded-lg px-4 sm:px-6 py-3 sm:py-4 w-full sm:w-auto text-center"
        >
          Monday to Friday
        </p>
      </div>
    </div>
  );
}