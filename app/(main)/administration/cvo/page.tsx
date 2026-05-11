'use client';

import React, { useState } from 'react';
import { Save, Shield, Plus, Trash2 } from 'lucide-react';

interface CVOMember {
  slNo: string;
  name: string;
  responsibility: string;
  phone: string;
  email: string;
}

interface CVOData {
  // Hero Section
  heroHeading: string;
  heroSubheading: string;
  // CVO Section
  cvoHeading: string;
  cvoMembers: CVOMember[];
}

export default function CVOPage() {
  const [cvoData, setCvoData] = useState<CVOData>({
    // Hero Section
    heroHeading: 'Vigilance Corner',
    heroSubheading: 'Chief Vigilance Officer and Complaint Registration',
    // CVO Section
    cvoHeading: 'Chief Vigilance Officer',
    cvoMembers: [
      {
        slNo: '1',
        name: 'Prof. Ram Naresh Sharma',
        responsibility: 'Chief Vigilance Officer',
        phone: '254526',
        email: 'cvo@nith.ac.in',
      },
    ],
  });

  const handleSave = () => {
    alert('Changes saved successfully!');
    console.log(cvoData);
  };

  // CVO Member handlers
  const updateCVOMember = (
    index: number,
    field: keyof CVOMember,
    value: string
  ) => {
    const updated = [...cvoData.cvoMembers];
    updated[index] = { ...updated[index], [field]: value };
    setCvoData({ ...cvoData, cvoMembers: updated });
  };

  const addCVOMember = () => {
    setCvoData({
      ...cvoData,
      cvoMembers: [
        ...cvoData.cvoMembers,
        { slNo: '', name: '', responsibility: '', phone: '', email: '' },
      ],
    });
  };

  const removeCVOMember = (index: number) => {
    setCvoData({
      ...cvoData,
      cvoMembers: cvoData.cvoMembers.filter((_, i) => i !== index),
    });
  };

  return (
    <div className="space-y-4 sm:space-y-6 p-2 sm:p-4 lg:p-6">
      {/* Gradient Header */}
      <div className="bg-gradient-to-r from-[#631012] to-[#7a1214] rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 text-white">
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <Shield className="w-6 h-6 sm:w-8 sm:h-8" />
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
            Vigilance Corner
          </h1>
        </div>
        <p className="text-sm sm:text-base text-white/90">
          Manage Chief Vigilance Officer content
        </p>
      </div>

      {/* Action Bar */}
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="bg-[#631012]/10 p-2 sm:p-3 rounded-full text-[#631012] flex-shrink-0">
              <Shield className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#171717] break-words">
                CVO Editor
              </h1>
              <p className="text-sm sm:text-base text-[#171717]/60 mt-1">
                Edit Chief Vigilance Officer content
              </p>
            </div>
          </div>
          <button
            onClick={handleSave}
            className="bg-[#631012] hover:bg-[#7a1214] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg flex items-center gap-2 transition-colors shadow-md w-full sm:w-auto justify-center text-sm sm:text-base"
          >
            <Save className="w-4 h-4 sm:w-5 sm:h-5" />
            Save Changes
          </button>
        </div>
      </div>

      {/* Page Header Editor */}
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <h2 className="text-lg font-semibold text-[#171717] mb-4">
          Page Header
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-[#171717] mb-2">
              Page Heading
            </label>
            <input
              type="text"
              value={cvoData.heroHeading}
              onChange={(e) =>
                setCvoData({ ...cvoData, heroHeading: e.target.value })
              }
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
              placeholder="Vigilance Corner"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#171717] mb-2">
              Page Subheading
            </label>
            <input
              type="text"
              value={cvoData.heroSubheading}
              onChange={(e) =>
                setCvoData({ ...cvoData, heroSubheading: e.target.value })
              }
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
              placeholder="Chief Vigilance Officer and Complaint Registration"
            />
          </div>
        </div>
      </div>

      {/* CVO Members Editor */}
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <div className="flex items-center gap-2 mb-4 sm:mb-6">
          <Shield className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
          <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
            Chief Vigilance Officer
          </h2>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#171717] mb-2">
            Section Heading
          </label>
          <input
            type="text"
            value={cvoData.cvoHeading}
            onChange={(e) =>
              setCvoData({ ...cvoData, cvoHeading: e.target.value })
            }
            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base mb-4"
            placeholder="Chief Vigilance Officer"
          />
        </div>

        <div className="space-y-3">
          {cvoData.cvoMembers.map((member, index) => (
            <div
              key={index}
              className="p-4 border border-[#171717]/20 rounded-lg bg-[#F9F9F9]"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-medium text-[#171717]/60">
                  Member {index + 1}
                </span>
                <button
                  onClick={() => removeCVOMember(index)}
                  className="px-2 py-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                >
                  <Trash2 size={16} />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
                <input
                  type="text"
                  value={member.slNo}
                  onChange={(e) =>
                    updateCVOMember(index, 'slNo', e.target.value)
                  }
                  className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                  placeholder="Sl. No."
                />
                <input
                  type="text"
                  value={member.name}
                  onChange={(e) =>
                    updateCVOMember(index, 'name', e.target.value)
                  }
                  className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                  placeholder="Name"
                />
                <input
                  type="text"
                  value={member.responsibility}
                  onChange={(e) =>
                    updateCVOMember(index, 'responsibility', e.target.value)
                  }
                  className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                  placeholder="Responsibility"
                />
                <input
                  type="text"
                  value={member.phone}
                  onChange={(e) =>
                    updateCVOMember(index, 'phone', e.target.value)
                  }
                  className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                  placeholder="Phone No."
                />
                <input
                  type="text"
                  value={member.email}
                  onChange={(e) =>
                    updateCVOMember(index, 'email', e.target.value)
                  }
                  className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                  placeholder="Email"
                />
              </div>
            </div>
          ))}
          <button
            onClick={addCVOMember}
            className="flex items-center gap-2 px-3 sm:px-4 py-2 text-[#631012] hover:bg-[#631012]/10 rounded-lg transition-colors text-sm sm:text-base"
          >
            <Plus size={18} />
            Add Member
          </button>
        </div>

        {/* Preview */}
        <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
          <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
            Preview:
          </p>
          <div className="bg-white p-4 sm:p-6 rounded-lg">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-[#171717] mb-1">
                {cvoData.heroHeading}
              </h2>
              <p className="text-sm text-[#171717]/60">
                {cvoData.heroSubheading}
              </p>
            </div>

            <h3 className="text-xl font-bold text-[#171717] mb-4">
              {cvoData.cvoHeading}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-[#631012] text-white">
                  <tr>
                    <th className="px-3 py-2 text-left">Sl. No.</th>
                    <th className="px-3 py-2 text-left">Name</th>
                    <th className="px-3 py-2 text-left">Responsibility</th>
                    <th className="px-3 py-2 text-left">Phone No.</th>
                    <th className="px-3 py-2 text-left">Email</th>
                  </tr>
                </thead>
                <tbody>
                  {cvoData.cvoMembers.map((member, index) => (
                    <tr key={index} className="border-b">
                      <td className="px-3 py-2">{member.slNo}</td>
                      <td className="px-3 py-2 font-semibold text-[#171717]">
                        {member.name}
                      </td>
                      <td className="px-3 py-2">{member.responsibility}</td>
                      <td className="px-3 py-2">{member.phone}</td>
                      <td className="px-3 py-2 text-[#631012]">
                        {member.email}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
