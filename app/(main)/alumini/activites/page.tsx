import React from 'react';
import { Info } from 'lucide-react';

export default function AlumniActivitiesPage() {
  return (
    <div className="space-y-4 sm:space-y-6 p-2 sm:p-4 lg:p-6">
      <div className="bg-gradient-to-r from-[#631012] to-[#7a1214] rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 text-white">
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <Info className="w-6 h-6 sm:w-8 sm:h-8" />
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
            Alumni Activities
          </h1>
        </div>
        <p className="text-sm sm:text-base text-white/90">
          Explore the various activities and initiatives organized by the Alumni
          Association of NITH.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl font-semibold text-[#631012] mb-3">
          Activities Overview
        </h2>
        <p className="text-[#171717] text-sm sm:text-base">
          The Alumni Association of NIT Hamirpur regularly organizes a variety
          of activities to foster connections among alumni, students, and the
          institute. These include alumni meets, mentorship programs, guest
          lectures, resource generation initiatives, and more. Stay tuned for
          updates on upcoming events and opportunities to engage with the NITH
          alumni community.
        </p>
      </div>
    </div>
  );
}
