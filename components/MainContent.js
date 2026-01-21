import RegistrationForm from './RegistrationForm'
import PropertyCard from './PropertyCard'
import PropertyInfo from './PropertyInfo'

export default function MainContent() {
  return (
    <div className="flex items-start justify-center gap-[30px] max-w-[1200px] mx-auto px-4 lg:flex-col lg:items-center lg:gap-10 sm:px-2.5">
      <div className="lg:order-2 lg:w-full w-full">
        <RegistrationForm />
      </div>
      
      <div className="lg:order-1 lg:w-full lg:contents w-full max-w-[394px] self-start flex flex-col items-center px-4 lg:max-w-[500px] sm:max-w-full">
        <PropertyCard />
        <PropertyInfo />
      </div>
    </div>
  );
}