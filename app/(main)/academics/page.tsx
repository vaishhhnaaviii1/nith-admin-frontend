'use client';

import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function AcademicsPage() {
  return (
    <div className="space-y-4 sm:space-y-6 p-4 sm:p-6 lg:p-8">
      <div className="bg-gradient-to-r from-[#631012] to-[#7a1214] rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 text-white">
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8" />
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
            Academics
          </h1>
        </div>
        <p className="text-sm sm:text-base text-white/90">
          Start editing by selecting a sidebar option to manage academic
          information.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-[#171717] mb-4">
          Academic Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 border border-[#171717]/20 rounded-lg hover:border-[#631012] transition-colors">
            <h3 className="font-semibold text-[#171717]">
              Bachelor Programmes
            </h3>
            <p className="text-sm text-[#171717]/60">
              Undergraduate courses and curriculum
            </p>
          </div>
          <div className="p-4 border border-[#171717]/20 rounded-lg hover:border-[#631012] transition-colors">
            <h3 className="font-semibold text-[#171717]">Master Programmes</h3>
            <p className="text-sm text-[#171717]/60">
              Postgraduate courses and curriculum
            </p>
          </div>
          <div className="p-4 border border-[#171717]/20 rounded-lg hover:border-[#631012] transition-colors">
            <h3 className="font-semibold text-[#171717]">
              Doctoral Programmes
            </h3>
            <p className="text-sm text-[#171717]/60">
              PhD and research programs
            </p>
          </div>
          <div className="p-4 border border-[#171717]/20 rounded-lg hover:border-[#631012] transition-colors">
            <h3 className="font-semibold text-[#171717]">
              Admissions & Registrations
            </h3>
            <p className="text-sm text-[#171717]/60">
              Enrollment and registration details
            </p>
          </div>
          <div className="p-4 border border-[#171717]/20 rounded-lg hover:border-[#631012] transition-colors">
            <h3 className="font-semibold text-[#171717]">
              Examinations & Evaluation
            </h3>
            <p className="text-sm text-[#171717]/60">
              Exam schedules and evaluation criteria
            </p>
          </div>
          <div className="p-4 border border-[#171717]/20 rounded-lg hover:border-[#631012] transition-colors">
            <h3 className="font-semibold text-[#171717]">Academic Calender</h3>
            <p className="text-sm text-[#171717]/60">
              Important dates and schedules
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
