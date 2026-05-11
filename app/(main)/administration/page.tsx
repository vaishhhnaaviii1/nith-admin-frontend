'use client';

import React from 'react';
import { Briefcase } from 'lucide-react';

export default function AdministrationPage() {
  return (
    <div className="space-y-4 sm:space-y-6 p-4 sm:p-6 lg:p-8">
      <div className="bg-gradient-to-r from-[#631012] to-[#7a1214] rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 text-white">
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <Briefcase className="w-6 h-6 sm:w-8 sm:h-8" />
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
            Administration
          </h1>
        </div>
        <p className="text-sm sm:text-base text-white/90">
          Start editing by selecting a sidebar option to manage administrative
          personnel.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-[#171717] mb-4">
          Administrative Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 border border-[#171717]/20 rounded-lg hover:border-[#631012] transition-colors">
            <h3 className="font-semibold text-[#171717]">Chairperson</h3>
            <p className="text-sm text-[#171717]/60">
              Board of Governors Chairman
            </p>
          </div>
          <div className="p-4 border border-[#171717]/20 rounded-lg hover:border-[#631012] transition-colors">
            <h3 className="font-semibold text-[#171717]">Director</h3>
            <p className="text-sm text-[#171717]/60">Institute Director</p>
          </div>
          <div className="p-4 border border-[#171717]/20 rounded-lg hover:border-[#631012] transition-colors">
            <h3 className="font-semibold text-[#171717]">
              Deans & Assoc. Deans
            </h3>
            <p className="text-sm text-[#171717]/60">
              Academic and administrative deans
            </p>
          </div>
          <div className="p-4 border border-[#171717]/20 rounded-lg hover:border-[#631012] transition-colors">
            <h3 className="font-semibold text-[#171717]">HOD</h3>
            <p className="text-sm text-[#171717]/60">Heads of Departments</p>
          </div>
          <div className="p-4 border border-[#171717]/20 rounded-lg hover:border-[#631012] transition-colors">
            <h3 className="font-semibold text-[#171717]">Faculty Incharges</h3>
            <p className="text-sm text-[#171717]/60">
              Faculty with special responsibilities
            </p>
          </div>
          <div className="p-4 border border-[#171717]/20 rounded-lg hover:border-[#631012] transition-colors">
            <h3 className="font-semibold text-[#171717]">Registrar & Staff</h3>
            <p className="text-sm text-[#171717]/60">
              Administrative office staff
            </p>
          </div>
          <div className="p-4 border border-[#171717]/20 rounded-lg hover:border-[#631012] transition-colors">
            <h3 className="font-semibold text-[#171717]">Nodal Officers</h3>
            <p className="text-sm text-[#171717]/60">
              Officers for specific initiatives
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
