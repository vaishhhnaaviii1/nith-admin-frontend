'use client';

import React, { useState } from 'react';
import {
  Save,
  Users,
  Plus,
  Trash2,
  FileText,
  Mail,
  Phone,
  Building2,
} from 'lucide-react';

interface Functionary {
  id: number;
  name: string;
  designation: string;
  department: string;
  email: string;
  phone: string;
  category: string;
}

interface FunctionariesData {
  heroHeading: string;
  heroDescription: string;
  functionariesHeading: string;
  functionariesSubtitle: string;
  functionaries: Functionary[];
  contactHeading: string;
  contactDescription: string;
}

type TabType = 'hero' | 'functionaries' | 'contact';

export default function FunctionariesPage() {
  const [activeTab, setActiveTab] = useState<TabType>('hero');

  const [functionariesData, setFunctionariesData] = useState<FunctionariesData>(
    {
      heroHeading: 'Student Functionaries',
      heroDescription:
        'Meet the dedicated team of student leaders and administrators who work tirelessly to ensure smooth functioning of student affairs at NIT Hamirpur.',
      functionariesHeading: 'Student Affairs Team',
      functionariesSubtitle:
        'Key personnel responsible for student welfare, activities, and administrative matters',
      functionaries: [
        {
          id: 1,
          name: 'Dr. Rajesh Kumar Sharma',
          designation: 'Dean of Student Welfare',
          department: 'Student Affairs',
          email: 'dsw@nith.ac.in',
          phone: '+91-1972-254001',
          category: 'Administration',
        },
        {
          id: 2,
          name: 'Dr. Priya Mehta',
          designation: 'Associate Dean (Student Activities)',
          department: 'Student Affairs',
          email: 'adsa@nith.ac.in',
          phone: '+91-1972-254002',
          category: 'Administration',
        },
        {
          id: 3,
          name: 'Amit Verma',
          designation: 'President, Student Council',
          department: 'B.Tech CSE, 4th Year',
          email: 'president.sc@nith.ac.in',
          phone: '+91-98765-43210',
          category: 'Student Council',
        },
        {
          id: 4,
          name: 'Sneha Gupta',
          designation: 'General Secretary, Cultural',
          department: 'B.Tech ECE, 3rd Year',
          email: 'cultural.gs@nith.ac.in',
          phone: '+91-98765-43211',
          category: 'Cultural Council',
        },
        {
          id: 5,
          name: 'Rohit Singh',
          designation: 'General Secretary, Technical',
          department: 'B.Tech ME, 3rd Year',
          email: 'technical.gs@nith.ac.in',
          phone: '+91-98765-43212',
          category: 'Technical Council',
        },
        {
          id: 6,
          name: 'Ananya Reddy',
          designation: 'General Secretary, Sports',
          department: 'B.Tech CE, 3rd Year',
          email: 'sports.gs@nith.ac.in',
          phone: '+91-98765-43213',
          category: 'Sports Council',
        },
      ],
      contactHeading: 'Get in Touch',
      contactDescription:
        'For any queries related to student affairs, feel free to reach out to our team.',
    }
  );

  const tabs = [
    {
      id: 'hero' as TabType,
      label: 'Hero Section',
      icon: <FileText size={18} />,
    },
    {
      id: 'functionaries' as TabType,
      label: 'Functionaries',
      icon: <Users size={18} />,
    },
    {
      id: 'contact' as TabType,
      label: 'Contact Info',
      icon: <Mail size={18} />,
    },
  ];

  const handleSave = () => {
    alert('Changes saved successfully!');
    console.log(functionariesData);
  };

  const addFunctionary = () => {
    const newFunctionary: Functionary = {
      id: Date.now(),
      name: '',
      designation: '',
      department: '',
      email: '',
      phone: '',
      category: 'Administration',
    };
    setFunctionariesData({
      ...functionariesData,
      functionaries: [...functionariesData.functionaries, newFunctionary],
    });
  };

  const removeFunctionary = (id: number) => {
    setFunctionariesData({
      ...functionariesData,
      functionaries: functionariesData.functionaries.filter((f) => f.id !== id),
    });
  };

  const updateFunctionary = (
    id: number,
    field: keyof Functionary,
    value: string
  ) => {
    setFunctionariesData({
      ...functionariesData,
      functionaries: functionariesData.functionaries.map((f) =>
        f.id === id ? { ...f, [field]: value } : f
      ),
    });
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Administration: 'bg-[#631012]/10 text-[#631012]',
      'Student Council': 'bg-blue-100 text-blue-800',
      'Cultural Council': 'bg-purple-100 text-purple-800',
      'Technical Council': 'bg-green-100 text-green-800',
      'Sports Council': 'bg-amber-100 text-amber-800',
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  const groupedFunctionaries = functionariesData.functionaries.reduce(
    (acc, func) => {
      if (!acc[func.category]) acc[func.category] = [];
      acc[func.category].push(func);
      return acc;
    },
    {} as Record<string, Functionary[]>
  );

  return (
    <div className="space-y-4 sm:space-y-6 p-2 sm:p-4 lg:p-6">
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="bg-[#631012]/10 p-2 sm:p-3 rounded-full text-[#631012] flex-shrink-0">
              <Users className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#171717] break-words">
                Functionaries Editor
              </h1>
              <p className="text-sm sm:text-base text-[#171717]/60 mt-1">
                Manage student functionaries and officials
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

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="border-b border-[#171717]/10">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-4 font-medium transition-colors whitespace-nowrap text-sm sm:text-base flex-shrink-0 ${
                  activeTab === tab.id
                    ? 'bg-[#631012] text-white border-b-2 border-[#631012]'
                    : 'text-[#171717]/70 hover:bg-[#F9F9F9] hover:text-[#171717]'
                }`}
              >
                <span className="w-4 h-4 sm:w-5 sm:h-5">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="p-4 sm:p-6">
          {activeTab === 'hero' && (
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Hero Section Content
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Main Heading
                  </label>
                  <input
                    type="text"
                    value={functionariesData.heroHeading}
                    onChange={(e) =>
                      setFunctionariesData({
                        ...functionariesData,
                        heroHeading: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] text-black"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Hero Description
                  </label>
                  <textarea
                    value={functionariesData.heroDescription}
                    onChange={(e) =>
                      setFunctionariesData({
                        ...functionariesData,
                        heroDescription: e.target.value,
                      })
                    }
                    rows={3}
                    className="w-full px-4 py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] text-black"
                  />
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-[#631012] to-[#8B1538] rounded-xl text-white">
                <h3 className="text-2xl font-bold mb-2">
                  {functionariesData.heroHeading}
                </h3>
                <p className="text-white/80">
                  {functionariesData.heroDescription}
                </p>
              </div>
            </div>
          )}

          {activeTab === 'functionaries' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Users className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                  <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                    Functionaries List
                  </h2>
                </div>
                <button
                  onClick={addFunctionary}
                  className="bg-[#631012] hover:bg-[#7a1214] text-white px-4 py-2 rounded-lg flex items-center gap-2"
                >
                  <Plus size={18} /> Add Functionary
                </button>
              </div>

              <div className="grid grid-cols-1 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Section Heading
                  </label>
                  <input
                    type="text"
                    value={functionariesData.functionariesHeading}
                    onChange={(e) =>
                      setFunctionariesData({
                        ...functionariesData,
                        functionariesHeading: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] text-black"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Section Subtitle
                  </label>
                  <input
                    type="text"
                    value={functionariesData.functionariesSubtitle}
                    onChange={(e) =>
                      setFunctionariesData({
                        ...functionariesData,
                        functionariesSubtitle: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] text-black"
                  />
                </div>
              </div>

              <div className="space-y-4">
                {functionariesData.functionaries.map((func, index) => (
                  <div
                    key={func.id}
                    className="border border-[#171717]/20 rounded-lg p-4 bg-[#F9F9F9]"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-semibold text-[#631012]">
                        Functionary #{index + 1}
                      </span>
                      <button
                        onClick={() => removeFunctionary(func.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#171717] mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          value={func.name}
                          onChange={(e) =>
                            updateFunctionary(func.id, 'name', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg text-black"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#171717] mb-1">
                          Designation
                        </label>
                        <input
                          type="text"
                          value={func.designation}
                          onChange={(e) =>
                            updateFunctionary(
                              func.id,
                              'designation',
                              e.target.value
                            )
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg text-black"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#171717] mb-1">
                          Department
                        </label>
                        <input
                          type="text"
                          value={func.department}
                          onChange={(e) =>
                            updateFunctionary(
                              func.id,
                              'department',
                              e.target.value
                            )
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg text-black"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#171717] mb-1">
                          Category
                        </label>
                        <select
                          value={func.category}
                          onChange={(e) =>
                            updateFunctionary(
                              func.id,
                              'category',
                              e.target.value
                            )
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg text-black"
                        >
                          <option value="Administration">Administration</option>
                          <option value="Student Council">
                            Student Council
                          </option>
                          <option value="Cultural Council">
                            Cultural Council
                          </option>
                          <option value="Technical Council">
                            Technical Council
                          </option>
                          <option value="Sports Council">Sports Council</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#171717] mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          value={func.email}
                          onChange={(e) =>
                            updateFunctionary(func.id, 'email', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg text-black"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#171717] mb-1">
                          Phone
                        </label>
                        <input
                          type="text"
                          value={func.phone}
                          onChange={(e) =>
                            updateFunctionary(func.id, 'phone', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg text-black"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-[#171717] mb-4">
                  Preview
                </h3>
                {Object.entries(groupedFunctionaries).map(
                  ([category, funcs]) => (
                    <div key={category} className="mb-6">
                      <h4 className="text-lg font-semibold text-[#631012] mb-3">
                        {category}
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {funcs.map((func) => (
                          <div
                            key={func.id}
                            className="bg-white border border-[#171717]/10 rounded-lg p-4 shadow-sm"
                          >
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(func.category)}`}
                            >
                              {func.category}
                            </span>
                            <h5 className="font-semibold text-[#171717] mt-2">
                              {func.name}
                            </h5>
                            <p className="text-sm text-[#631012] font-medium">
                              {func.designation}
                            </p>
                            <p className="text-sm text-[#171717]/60 mb-3">
                              {func.department}
                            </p>
                            <div className="space-y-1 text-xs text-[#171717]/70">
                              <p className="flex items-center gap-1">
                                <Mail size={12} />
                                {func.email}
                              </p>
                              <p className="flex items-center gap-1">
                                <Phone size={12} />
                                {func.phone}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          )}

          {activeTab === 'contact' && (
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <Mail className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Contact Section
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Section Heading
                  </label>
                  <input
                    type="text"
                    value={functionariesData.contactHeading}
                    onChange={(e) =>
                      setFunctionariesData({
                        ...functionariesData,
                        contactHeading: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] text-black"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Section Description
                  </label>
                  <textarea
                    value={functionariesData.contactDescription}
                    onChange={(e) =>
                      setFunctionariesData({
                        ...functionariesData,
                        contactDescription: e.target.value,
                      })
                    }
                    rows={3}
                    className="w-full px-4 py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] text-black"
                  />
                </div>
              </div>

              <div className="mt-8 p-6 bg-[#F9F9F9] rounded-xl border border-[#171717]/10">
                <h3 className="text-xl font-bold text-[#171717] mb-2">
                  {functionariesData.contactHeading}
                </h3>
                <p className="text-[#171717]/70">
                  {functionariesData.contactDescription}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
