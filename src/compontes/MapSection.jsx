"use client";

import { useState } from "react";

const MapSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
          
          {/* YELLOW ACCENT BORDER */}
          <span className="absolute top-0 left-0 w-full h-full border border-[#F7A600] rounded-3xl pointer-events-none z-10" />

          {/* LOADER */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-20">
              <div className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 border-4 border-[#F7A600] border-t-transparent rounded-full animate-spin" />
                <p className="text-sm text-gray-600">Loading map...</p>
              </div>
            </div>
          )}

          {/* MAP */}
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Jaipur%20Rajasthan%20India&output=embed"
            className="w-full h-112.5 border-0"
            loading="lazy"
            onLoad={() => setIsLoading(false)}
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default MapSection;
