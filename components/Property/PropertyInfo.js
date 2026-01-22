'use client';
import { useState, useRef, useEffect } from 'react';
import PropertyHeading from "../Forms/PropertyHeading";
import PropertyForm from "../Forms/PropertyForm";
import TrustBadges from '../Sections/TrustBadges';

export default function PropertyInfo() {
  const [showPropertyForm, setShowPropertyForm] = useState(false);
  const propertyFormRef = useRef(null);

  useEffect(() => {
    if (showPropertyForm && propertyFormRef.current) {
      // Small delay to ensure the component is rendered
      setTimeout(() => {
        const element = propertyFormRef.current;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        // Scroll to element with 35px offset (within 30-40px range)
        window.scrollTo({
          top: elementPosition - 35,
          behavior: 'smooth'
        });
      }, 100);
    }
  }, [showPropertyForm]);

  return (
    <div className="w-full flex flex-col pt-[18px]  pb-2  min-h-[524px] max-lg:max-w-[500px] max-lg:min-h-[400px] max-sm:max-w-full max-sm:min-h-[400px]">
      <PropertyHeading setShowPropertyForm={setShowPropertyForm} />
      {showPropertyForm && (
        <div ref={propertyFormRef}>
          <PropertyForm />
        </div>
      )}
      <TrustBadges />
    </div>
  );
}