'use client';

import React, { useState } from 'react';
import { Save, Users, Plus, Trash2 } from 'lucide-react';

interface Coordinator {
  slNo: string;
  name: string;
  responsibility: string;
  phone: string;
  email: string;
}

interface CoordinatorsData {
  // Hero Section
  heroHeading: string;
  heroSubheading: string;
  // Coordinators Section
  coordinatorsHeading: string;
  coordinators: Coordinator[];
}

export default function InstituteCoordinatorsPage() {
  const [coordinatorsData, setCoordinatorsData] = useState<CoordinatorsData>({
    // Hero Section
    heroHeading: 'Institute Coordinators',
    heroSubheading:
      'Coordinators for various academic and institutional programs',
    // Coordinators Section
    coordinatorsHeading: 'Institute Coordinators',
    coordinators: [
      {
        slNo: '1',
        name: 'Dr. Ravinder Nath Sharma',
        responsibility: 'National Educational Policy (NEP)',
        phone: '254532',
        email: 'nath@nith.ac.in',
      },
      {
        slNo: '2',
        name: 'Prof. Yog Raj Sood',
        responsibility: 'NBA',
        phone: '254522',
        email: 'yrsood@nith.ac.in',
      },
      {
        slNo: '3',
        name: 'Dr. Arvind Kumar Gautam',
        responsibility: 'DASA/ICCR/MEA',
        phone: '-',
        email: 'akgautam@nith.ac.in',
      },
      {
        slNo: '4',
        name: 'Dr. Venu Shree',
        responsibility: 'MOOCs under Swayam',
        phone: '254922',
        email: 'venushree@nith.ac.in',
      },
      {
        slNo: '5',
        name: 'Dr. Ramesh Kumar',
        responsibility: 'Quality Improvement Programme',
        phone: '254108',
        email: 'rkvats@nith.ac.in',
      },
      {
        slNo: '6',
        name: 'Dr. Richa Joshi',
        responsibility: 'AISHE',
        phone: '254150',
        email: 'richajoshi@nith.ac.in',
      },
      {
        slNo: '7',
        name: 'Dr. Kalyan Sunder Ghosh',
        responsibility: 'Coordinator (NISP)',
        phone: '254104',
        email: 'kalyan@nith.ac.in',
      },
      {
        slNo: '8',
        name: 'Dr. Mohd. Adil',
        responsibility: 'Coordinator (Innovation)',
        phone: '254150',
        email: 'adil.dms@nith.ac.in',
      },
      {
        slNo: '9',
        name: 'Dr. Jai Prakash',
        responsibility: 'Coordinator (Incubation)',
        phone: '254102',
        email: 'jaip@nith.ac.in',
      },
      {
        slNo: '10',
        name: 'Dr. Amit Kaul',
        responsibility: 'Coordinator (Start-Up)',
        phone: '254544',
        email: 'amitkaul@nith.ac.in',
      },
      {
        slNo: '11',
        name: 'Dr. Neetu Kapoor',
        responsibility: 'Coordinator (Start-Up)',
        phone: '254930',
        email: 'neetu@nith.ac.in',
      },
      {
        slNo: '12',
        name: 'Dr. Puneet Sharma',
        responsibility: 'Coordinator (Social Media)',
        phone: '254926',
        email: 'architect.puneet@nith.ac.in',
      },
    ],
  });

  const handleSave = () => {
    alert('Changes saved successfully!');
    console.log(coordinatorsData);
  };

  // Coordinator handlers
  const updateCoordinator = (
    index: number,
    field: keyof Coordinator,
    value: string
  ) => {
    const updated = [...coordinatorsData.coordinators];
    updated[index] = { ...updated[index], [field]: value };
    setCoordinatorsData({ ...coordinatorsData, coordinators: updated });
  };

  const addCoordinator = () => {
    setCoordinatorsData({
      ...coordinatorsData,
      coordinators: [
        ...coordinatorsData.coordinators,
        { slNo: '', name: '', responsibility: '', phone: '', email: '' },
      ],
    });
  };

  const removeCoordinator = (index: number) => {
    setCoordinatorsData({
      ...coordinatorsData,
      coordinators: coordinatorsData.coordinators.filter((_, i) => i !== index),
    });
  };

  return (
    <div className="space-y-4 sm:space-y-6 p-2 sm:p-4 lg:p-6">
      {/* Gradient Header */}
      <div className="bg-gradient-to-r from-[#631012] to-[#7a1214] rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 text-white">
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <Users className="w-6 h-6 sm:w-8 sm:h-8" />
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
            Institute Coordinators
          </h1>
        </div>
        <p className="text-sm sm:text-base text-white/90">
          Manage Institute Coordinators content
        </p>
      </div>

      {/* Action Bar */}
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="bg-[#631012]/10 p-2 sm:p-3 rounded-full text-[#631012] flex-shrink-0">
              <Users className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#171717] break-words">
                Coordinators Editor
              </h1>
              <p className="text-sm sm:text-base text-[#171717]/60 mt-1">
                Edit Institute Coordinators content
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
              value={coordinatorsData.heroHeading}
              onChange={(e) =>
                setCoordinatorsData({
                  ...coordinatorsData,
                  heroHeading: e.target.value,
                })
              }
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
              placeholder="Institute Coordinators"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#171717] mb-2">
              Page Subheading
            </label>
            <input
              type="text"
              value={coordinatorsData.heroSubheading}
              onChange={(e) =>
                setCoordinatorsData({
                  ...coordinatorsData,
                  heroSubheading: e.target.value,
                })
              }
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
              placeholder="Coordinators for various academic and institutional programs"
            />
          </div>
        </div>
      </div>

      {/* Coordinators Editor */}
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <div className="flex items-center gap-2 mb-4 sm:mb-6">
          <Users className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
          <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
            Coordinators List
          </h2>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#171717] mb-2">
            Section Heading
          </label>
          <input
            type="text"
            value={coordinatorsData.coordinatorsHeading}
            onChange={(e) =>
              setCoordinatorsData({
                ...coordinatorsData,
                coordinatorsHeading: e.target.value,
              })
            }
            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base mb-4"
            placeholder="Institute Coordinators"
          />
        </div>

        <div className="space-y-3">
          {coordinatorsData.coordinators.map((coordinator, index) => (
            <div
              key={index}
              className="p-4 border border-[#171717]/20 rounded-lg bg-[#F9F9F9]"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-medium text-[#171717]/60">
                  Coordinator {index + 1}
                </span>
                <button
                  onClick={() => removeCoordinator(index)}
                  className="px-2 py-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                >
                  <Trash2 size={16} />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
                <input
                  type="text"
                  value={coordinator.slNo}
                  onChange={(e) =>
                    updateCoordinator(index, 'slNo', e.target.value)
                  }
                  className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                  placeholder="Sl. No."
                />
                <input
                  type="text"
                  value={coordinator.name}
                  onChange={(e) =>
                    updateCoordinator(index, 'name', e.target.value)
                  }
                  className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                  placeholder="Name"
                />
                <input
                  type="text"
                  value={coordinator.responsibility}
                  onChange={(e) =>
                    updateCoordinator(index, 'responsibility', e.target.value)
                  }
                  className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                  placeholder="Responsibility"
                />
                <input
                  type="text"
                  value={coordinator.phone}
                  onChange={(e) =>
                    updateCoordinator(index, 'phone', e.target.value)
                  }
                  className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                  placeholder="Phone No."
                />
                <input
                  type="text"
                  value={coordinator.email}
                  onChange={(e) =>
                    updateCoordinator(index, 'email', e.target.value)
                  }
                  className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                  placeholder="Email"
                />
              </div>
            </div>
          ))}
          <button
            onClick={addCoordinator}
            className="flex items-center gap-2 px-3 sm:px-4 py-2 text-[#631012] hover:bg-[#631012]/10 rounded-lg transition-colors text-sm sm:text-base"
          >
            <Plus size={18} />
            Add Coordinator
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
                {coordinatorsData.heroHeading}
              </h2>
              <p className="text-sm text-[#171717]/60">
                {coordinatorsData.heroSubheading}
              </p>
            </div>

            <h3 className="text-xl font-bold text-[#171717] mb-4">
              {coordinatorsData.coordinatorsHeading}
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
                  {coordinatorsData.coordinators.map((coordinator, index) => (
                    <tr key={index} className="border-b">
                      <td className="px-3 py-2">{coordinator.slNo}</td>
                      <td className="px-3 py-2 font-semibold text-[#171717]">
                        {coordinator.name}
                      </td>
                      <td className="px-3 py-2">
                        {coordinator.responsibility}
                      </td>
                      <td className="px-3 py-2">{coordinator.phone}</td>
                      <td className="px-3 py-2 text-[#631012]">
                        {coordinator.email}
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
