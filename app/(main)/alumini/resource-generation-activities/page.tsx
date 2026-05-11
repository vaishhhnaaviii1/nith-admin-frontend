import React from 'react';

export default function ResourceGenerationActivitiesPage() {
  return (
    <div className="space-y-4 sm:space-y-6 p-2 sm:p-4 lg:p-6">
      <div className="bg-gradient-to-r from-[#631012] to-[#7a1214] rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 text-white">
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
            Resource Generation Activities
          </h1>
        </div>
        <p className="text-sm sm:text-base text-white/90">
          Discover the resource generation activities led by the Alumni
          Association and NITH.
        </p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl font-semibold text-[#631012] mb-3">
          Overview
        </h2>
        <p className="text-[#171717] text-sm sm:text-base">
          Resource generation activities include fundraising, endowments, and
          collaborative projects to support the growth and development of the
          institute.
        </p>
      </div>
    </div>
  );
}
