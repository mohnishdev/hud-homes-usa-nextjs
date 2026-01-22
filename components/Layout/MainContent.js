import PropertyInfo from "../Property/PropertyInfo";
import PropertyCard from "../Property/PropertyCard"
import PropertyInfoSections from "../Property/PropertyInfoSections";

export default function MainContainer() {
  return (
    <div className="flex items-start justify-center max-w-[1200px] mx-[20px] px-[15px] max-lg:flex-col max-lg:items-center max-lg:gap-0 max-lg:px-0 max-sm:px-0">
      {/* Left Div - PropertyInfo */}
      <div className="w-full max-w-[802px] pt-4 pb-8 max-lg:order-2 max-lg:pt-0 max-lg:pb-0 max-lg:max-w-full max-lg:px-[15px] max-sm:px-[10px]">
        <div className="bg-gray-100 rounded-lg text-center max-lg:w-full">
          <PropertyInfo/>
        </div>
      </div>

      {/* Right Div - PropertyCard + PropertyInfoSections */}
      <div className="w-full max-w-[802px] pt-4 mt-5 pb-8 max-lg:order-1 max-lg:mt-0 max-lg:pt-0 max-lg:pb-0 max-lg:max-w-full max-lg:px-[15px] max-sm:px-[10px]">
        <div className="bg-gray-100 rounded-lg text-center max-lg:w-full">
         <PropertyCard/>
         {/* Desktop: Show PropertyInfoSections here */}
         <div className="max-lg:hidden">
           <PropertyInfoSections/>
         </div>
        </div>
      </div>

      {/* Mobile/Tablet: PropertyInfoSections appears last */}
      <div className="w-full max-w-[802px] pb-8 lg:hidden max-lg:order-3 max-lg:pb-0 max-lg:max-w-full max-lg:px-[15px] max-sm:px-[10px]">
        <div className="bg-gray-100 rounded-lg text-center max-lg:w-full">
          <PropertyInfoSections/>
        </div>
      </div>
    </div>
  );
}