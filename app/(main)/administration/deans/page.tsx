'use client';

import React, { useState } from 'react';
import { Save, User, Plus, Trash2, Users, UserCheck } from 'lucide-react';

interface DeanMember {
  slNo: string;
  name: string;
  designation: string;
  responsibility: string;
  phone: string;
  email: string;
}

interface DeansData {
  // Hero Section
  heroHeading: string;
  heroSubheading: string;
  // Deans Section
  deansHeading: string;
  deans: DeanMember[];
  // Associate Deans Section
  associateDeansHeading: string;
  associateDeans: DeanMember[];
}

// Tab Types
type TabType = 'deans' | 'associateDeans';

export default function DeansPage() {
  const [activeTab, setActiveTab] = useState<TabType>('deans');

  const [deansData, setDeansData] = useState<DeansData>({
    // Hero Section
    heroHeading: 'Deans & Associate Deans',
    heroSubheading:
      'Responsibilities, contacts, and roles — styled like Alumni List',
    // Deans Section
    deansHeading: 'Deans',
    deans: [
      {
        slNo: '1',
        name: 'Dr. Siddhartha Sharma',
        designation:
          'Associate Professor, Department of Mechanical Engineering',
        responsibility: 'Academic',
        phone: '254006',
        email: 'dac@nith.ac.in',
      },
      {
        slNo: '2',
        name: 'Prof. Sushil Chauhan',
        designation: 'Professor, Department of Electrical Engineering',
        responsibility: 'Faculty Welfare',
        phone: '254009',
        email: 'dfw@nith.ac.in',
      },
      {
        slNo: '3',
        name: 'Prof. Yogeshver Dutt Sharma',
        designation:
          'Professor, Department of Mathematics and Scientific Computing',
        responsibility: 'Student Welfare',
        phone: '254008',
        email: 'dsw@nith.ac.in',
      },
      {
        slNo: '4',
        name: 'Prof. Raman Parti',
        designation: 'Professor, Department of Civil Engineering',
        responsibility: 'Planning & Development',
        phone: '254005',
        email: 'dpd@nith.ac.in',
      },
      {
        slNo: '5',
        name: 'Prof. Rakesh Sehgal',
        designation: 'Professor (HAG), Department of Mechanical Engineering',
        responsibility: 'Research & Consultancy',
        phone: '254007',
        email: 'drc@nith.ac.in',
      },
      {
        slNo: '6',
        name: 'Prof. Ashwani Kumar',
        designation: 'Professor, Department of Electrical Engineering',
        responsibility: 'Alumni & Resources',
        phone: '254054',
        email: 'dar@nith.ac.in',
      },
    ],
    // Associate Deans Section
    associateDeansHeading: 'Associate Deans',
    associateDeans: [
      {
        slNo: '1',
        name: 'Dr. Subhash Chand',
        designation: '',
        responsibility: 'Faculty Recruitment & Discipline',
        phone: '254136',
        email: 'schand@nith.ac.in',
      },
      {
        slNo: '2',
        name: 'Dr. Hemant Kumar Vinayak',
        designation: '',
        responsibility: 'Civil Infrastructure & Maintenance',
        phone: '-',
        email: 'hkvced@nith.ac.in',
      },
      {
        slNo: '3',
        name: 'Dr. Bharat Bhushan Sharma',
        designation: '',
        responsibility: 'Electrical Infrastructure & Maintenance',
        phone: '254540',
        email: 'bhushan@nith.ac.in',
      },
      {
        slNo: '4',
        name: 'Dr. Ravinder Nath Sharma',
        designation: '',
        responsibility: 'UG-PG Establishment',
        phone: '254532',
        email: 'nath@nith.ac.in',
      },
      {
        slNo: '5',
        name: 'Dr. Rohit Dhiman',
        designation: '',
        responsibility: 'Examination & Evaluation',
        phone: '254601',
        email: 'ad-ee@nith.ac.in',
      },
      {
        slNo: '6',
        name: 'Dr. Naveen Chauhan',
        designation: '',
        responsibility: 'Faculty Activity & Support',
        phone: '-',
        email: 'naveen@nith.ac.in',
      },
      {
        slNo: '7',
        name: 'Dr. Pardeep Singh',
        designation: '',
        responsibility: 'Student Activities & Scholarships',
        phone: '254436',
        email: 'ad_sas@nith.ac.in',
      },
      {
        slNo: '8',
        name: 'Dr. Sunil Sharma',
        designation: '',
        responsibility: 'Student Discipline & Counselling',
        phone: '254316',
        email: 'sunils@nith.ac.in',
      },
      {
        slNo: '9',
        name: 'Dr. Philemon Daniel',
        designation: '',
        responsibility: 'Consultancy Projects and Testing',
        phone: '254650',
        email: 'phildani7@nith.ac.in',
      },
      {
        slNo: '10',
        name: 'Dr. Surinder Kumar Soni',
        designation: '',
        responsibility: 'Research Projects & Collaborations, Start-Up',
        phone: '254630',
        email: 'soni@nith.ac.in',
      },
      {
        slNo: '11',
        name: 'Dr. Gargi Khanna',
        designation: '',
        responsibility: 'Alumni & Resources',
        phone: '254536',
        email: 'gargi@nith.ac.in',
      },
      {
        slNo: '12',
        name: 'Dr. Somesh Kumar Sharma',
        designation: '',
        responsibility: 'Resource Generation & Industrialization',
        phone: '2544732',
        email: 'somesh@nith.ac.in',
      },
    ],
  });

  // Tabs Configuration
  const tabs = [
    {
      id: 'deans' as TabType,
      label: 'Deans',
      icon: <User size={18} />,
    },
    {
      id: 'associateDeans' as TabType,
      label: 'Associate Deans',
      icon: <UserCheck size={18} />,
    },
  ];

  const handleSave = () => {
    alert('Changes saved successfully!');
    console.log(deansData);
  };

  // Deans handlers
  const updateDean = (
    index: number,
    field: keyof DeanMember,
    value: string
  ) => {
    const updated = [...deansData.deans];
    updated[index] = { ...updated[index], [field]: value };
    setDeansData({ ...deansData, deans: updated });
  };

  const addDean = () => {
    setDeansData({
      ...deansData,
      deans: [
        ...deansData.deans,
        {
          slNo: '',
          name: '',
          designation: '',
          responsibility: '',
          phone: '',
          email: '',
        },
      ],
    });
  };

  const removeDean = (index: number) => {
    setDeansData({
      ...deansData,
      deans: deansData.deans.filter((_, i) => i !== index),
    });
  };

  // Associate Deans handlers
  const updateAssociateDean = (
    index: number,
    field: keyof DeanMember,
    value: string
  ) => {
    const updated = [...deansData.associateDeans];
    updated[index] = { ...updated[index], [field]: value };
    setDeansData({ ...deansData, associateDeans: updated });
  };

  const addAssociateDean = () => {
    setDeansData({
      ...deansData,
      associateDeans: [
        ...deansData.associateDeans,
        {
          slNo: '',
          name: '',
          designation: '',
          responsibility: '',
          phone: '',
          email: '',
        },
      ],
    });
  };

  const removeAssociateDean = (index: number) => {
    setDeansData({
      ...deansData,
      associateDeans: deansData.associateDeans.filter((_, i) => i !== index),
    });
  };

  return (
    <div className="space-y-4 sm:space-y-6 p-2 sm:p-4 lg:p-6">
      {/* Gradient Header */}
      <div className="bg-gradient-to-r from-[#631012] to-[#7a1214] rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 text-white">
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <Users className="w-6 h-6 sm:w-8 sm:h-8" />
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
            Deans & Associate Deans
          </h1>
        </div>
        <p className="text-sm sm:text-base text-white/90">
          Manage Deans and Associate Deans content
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
                Deans Editor
              </h1>
              <p className="text-sm sm:text-base text-[#171717]/60 mt-1">
                Edit Deans and Associate Deans content
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

      {/* Hero Section Editor */}
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
              value={deansData.heroHeading}
              onChange={(e) =>
                setDeansData({ ...deansData, heroHeading: e.target.value })
              }
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
              placeholder="Deans & Associate Deans"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#171717] mb-2">
              Page Subheading
            </label>
            <input
              type="text"
              value={deansData.heroSubheading}
              onChange={(e) =>
                setDeansData({ ...deansData, heroSubheading: e.target.value })
              }
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
              placeholder="Responsibilities, contacts, and roles"
            />
          </div>
        </div>
      </div>

      {/* Tabs Container */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="border-b border-[#171717]/10">
          <div className="flex overflow-x-auto scrollbar-thin scrollbar-thumb-[#631012]/30 scrollbar-track-gray-100">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-4 font-medium transition-colors whitespace-nowrap text-sm sm:text-base flex-shrink-0
                  ${
                    activeTab === tab.id
                      ? 'bg-[#631012] text-white border-b-2 border-[#631012]'
                      : 'text-[#171717]/70 hover:bg-[#F9F9F9] hover:text-[#171717]'
                  }
                `}
              >
                <span className="w-4 h-4 sm:w-5 sm:h-5">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="p-4 sm:p-6">
          {/* Deans Tab */}
          {activeTab === 'deans' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <User className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Deans
                </h2>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#171717] mb-2">
                  Section Heading
                </label>
                <input
                  type="text"
                  value={deansData.deansHeading}
                  onChange={(e) =>
                    setDeansData({ ...deansData, deansHeading: e.target.value })
                  }
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                  placeholder="Deans"
                />
              </div>

              <div className="space-y-3">
                {deansData.deans.map((dean, index) => (
                  <div
                    key={index}
                    className="p-4 border border-[#171717]/20 rounded-lg bg-[#F9F9F9]"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-medium text-[#171717]/60">
                        Dean {index + 1}
                      </span>
                      <button
                        onClick={() => removeDean(index)}
                        className="px-2 py-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      <input
                        type="text"
                        value={dean.slNo}
                        onChange={(e) =>
                          updateDean(index, 'slNo', e.target.value)
                        }
                        className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                        placeholder="Sl. No."
                      />
                      <input
                        type="text"
                        value={dean.name}
                        onChange={(e) =>
                          updateDean(index, 'name', e.target.value)
                        }
                        className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                        placeholder="Name"
                      />
                      <input
                        type="text"
                        value={dean.designation}
                        onChange={(e) =>
                          updateDean(index, 'designation', e.target.value)
                        }
                        className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                        placeholder="Designation"
                      />
                      <input
                        type="text"
                        value={dean.responsibility}
                        onChange={(e) =>
                          updateDean(index, 'responsibility', e.target.value)
                        }
                        className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                        placeholder="Responsibility"
                      />
                      <input
                        type="text"
                        value={dean.phone}
                        onChange={(e) =>
                          updateDean(index, 'phone', e.target.value)
                        }
                        className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                        placeholder="Phone No."
                      />
                      <input
                        type="text"
                        value={dean.email}
                        onChange={(e) =>
                          updateDean(index, 'email', e.target.value)
                        }
                        className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                ))}
                <button
                  onClick={addDean}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 text-[#631012] hover:bg-[#631012]/10 rounded-lg transition-colors text-sm sm:text-base"
                >
                  <Plus size={18} />
                  Add Dean
                </button>
              </div>

              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
                  Preview:
                </p>
                <div className="bg-white p-4 sm:p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#171717] mb-4">
                    {deansData.deansHeading}
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-[#631012] text-white">
                        <tr>
                          <th className="px-3 py-2 text-left">Sl. No.</th>
                          <th className="px-3 py-2 text-left">Name</th>
                          <th className="px-3 py-2 text-left">
                            Responsibility
                          </th>
                          <th className="px-3 py-2 text-left">Phone No.</th>
                          <th className="px-3 py-2 text-left">Email</th>
                        </tr>
                      </thead>
                      <tbody>
                        {deansData.deans.map((dean, index) => (
                          <tr key={index} className="border-b">
                            <td className="px-3 py-2">{dean.slNo}</td>
                            <td className="px-3 py-2">
                              <div>
                                <p className="font-semibold text-[#171717]">
                                  {dean.name}
                                </p>
                                {dean.designation && (
                                  <p className="text-xs text-[#171717]/60">
                                    {dean.designation}
                                  </p>
                                )}
                              </div>
                            </td>
                            <td className="px-3 py-2">{dean.responsibility}</td>
                            <td className="px-3 py-2">{dean.phone}</td>
                            <td className="px-3 py-2 text-[#631012]">
                              {dean.email}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Associate Deans Tab */}
          {activeTab === 'associateDeans' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <UserCheck className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Associate Deans
                </h2>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#171717] mb-2">
                  Section Heading
                </label>
                <input
                  type="text"
                  value={deansData.associateDeansHeading}
                  onChange={(e) =>
                    setDeansData({
                      ...deansData,
                      associateDeansHeading: e.target.value,
                    })
                  }
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                  placeholder="Associate Deans"
                />
              </div>

              <div className="space-y-3">
                {deansData.associateDeans.map((dean, index) => (
                  <div
                    key={index}
                    className="p-4 border border-[#171717]/20 rounded-lg bg-[#F9F9F9]"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-medium text-[#171717]/60">
                        Associate Dean {index + 1}
                      </span>
                      <button
                        onClick={() => removeAssociateDean(index)}
                        className="px-2 py-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      <input
                        type="text"
                        value={dean.slNo}
                        onChange={(e) =>
                          updateAssociateDean(index, 'slNo', e.target.value)
                        }
                        className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                        placeholder="Sl. No."
                      />
                      <input
                        type="text"
                        value={dean.name}
                        onChange={(e) =>
                          updateAssociateDean(index, 'name', e.target.value)
                        }
                        className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                        placeholder="Name"
                      />
                      <input
                        type="text"
                        value={dean.designation}
                        onChange={(e) =>
                          updateAssociateDean(
                            index,
                            'designation',
                            e.target.value
                          )
                        }
                        className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                        placeholder="Designation (optional)"
                      />
                      <input
                        type="text"
                        value={dean.responsibility}
                        onChange={(e) =>
                          updateAssociateDean(
                            index,
                            'responsibility',
                            e.target.value
                          )
                        }
                        className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                        placeholder="Responsibility"
                      />
                      <input
                        type="text"
                        value={dean.phone}
                        onChange={(e) =>
                          updateAssociateDean(index, 'phone', e.target.value)
                        }
                        className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                        placeholder="Phone No."
                      />
                      <input
                        type="text"
                        value={dean.email}
                        onChange={(e) =>
                          updateAssociateDean(index, 'email', e.target.value)
                        }
                        className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                ))}
                <button
                  onClick={addAssociateDean}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 text-[#631012] hover:bg-[#631012]/10 rounded-lg transition-colors text-sm sm:text-base"
                >
                  <Plus size={18} />
                  Add Associate Dean
                </button>
              </div>

              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
                  Preview:
                </p>
                <div className="bg-white p-4 sm:p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#171717] mb-4">
                    {deansData.associateDeansHeading}
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-[#631012] text-white">
                        <tr>
                          <th className="px-3 py-2 text-left">Sl. No.</th>
                          <th className="px-3 py-2 text-left">Name</th>
                          <th className="px-3 py-2 text-left">
                            Responsibility
                          </th>
                          <th className="px-3 py-2 text-left">Phone No.</th>
                          <th className="px-3 py-2 text-left">Email</th>
                        </tr>
                      </thead>
                      <tbody>
                        {deansData.associateDeans.map((dean, index) => (
                          <tr key={index} className="border-b">
                            <td className="px-3 py-2">{dean.slNo}</td>
                            <td className="px-3 py-2">
                              <div>
                                <p className="font-semibold text-[#171717]">
                                  {dean.name}
                                </p>
                                {dean.designation && (
                                  <p className="text-xs text-[#171717]/60">
                                    {dean.designation}
                                  </p>
                                )}
                              </div>
                            </td>
                            <td className="px-3 py-2">{dean.responsibility}</td>
                            <td className="px-3 py-2">{dean.phone}</td>
                            <td className="px-3 py-2 text-[#631012]">
                              {dean.email}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
