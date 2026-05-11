import React from 'react';

export default function AlumniAssistPage() {
  return (
    <div className="space-y-4 sm:space-y-6 p-2 sm:p-4 lg:p-6">
      <div className="bg-gradient-to-r from-[#631012] to-[#7a1214] rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 text-white">
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
            Alumni Assist
          </h1>
        </div>
        <p className="text-sm sm:text-base text-white/90">
          Discover how the Alumni Association supports students and alumni
          through various assistive programs.
        </p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl font-semibold text-[#631012] mb-3">
          Overview
        </h2>
        <p className="text-[#171717] text-sm sm:text-base">
          Alumni Assist programs include mentorship, career guidance,
          scholarships, and other initiatives to help students and graduates
          succeed.
        </p>
      </div>
    </div>
  );
}
