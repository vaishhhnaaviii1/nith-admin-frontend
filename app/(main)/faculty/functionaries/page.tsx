'use client';

import React, { useState } from 'react';
import {
  Save,
  Users,
  Plus,
  Trash2,
  FileText,
  Filter,
  Mail,
  IdCard,
  Calendar,
  Briefcase,
} from 'lucide-react';

interface Functionary {
  id: number;
  category: string;
  categoryDescription: string;
  role: string;
  name: string;
  department: string;
  email: string;
  facultyId: string;
  sinceDate: string;
}

interface FunctionariesData {
  heroHeading: string;
  heroDescription: string;
  filterHeading: string;
  categories: string[];
  functionaries: Functionary[];
}

type TabType = 'hero' | 'functionaries';

export default function FacultyFunctionariesPage() {
  const [activeTab, setActiveTab] = useState<TabType>('hero');
  const [selectedCategory, setSelectedCategory] =
    useState<string>('All Categories');

  const [functionariesData, setFunctionariesData] = useState<FunctionariesData>(
    {
      heroHeading: 'FACULTY ROLE ASSIGNMENTS',
      heroDescription:
        'Dedicated faculty members serving in various administrative and functional roles across the institute.',
      filterHeading: 'Filter by Category',
      categories: [
        'All Categories',
        'Academics',
        'Student Welfare',
        'Faculty Welfare',
        'Cultural Activities',
        'Technical Activities',
      ],
      functionaries: [
        {
          id: 1,
          category: 'Academics',
          categoryDescription:
            'Faculty members entrusted with academics responsibilities.',
          role: 'Dean',
          name: 'Dr. Rohan Mehta',
          department: 'Mechanical Engineering',
          email: 'dean.academics@nitth.ac.in',
          facultyId: 'FI03',
          sinceDate: 'August 15, 2023',
        },
        {
          id: 2,
          category: 'Academics',
          categoryDescription:
            'Faculty members entrusted with academics responsibilities.',
          role: 'Associate Dean',
          name: 'Dr. Anjali Sharma',
          department: 'Computer Science Engineering',
          email: 'ad.academics@nitth.ac.in',
          facultyId: 'FI04',
          sinceDate: 'August 15, 2023',
        },
        {
          id: 3,
          category: 'Student Welfare',
          categoryDescription:
            'Faculty members entrusted with student welfare responsibilities.',
          role: 'Dean',
          name: 'Dr. Neeraj Gupta',
          department: 'Electrical Engineering',
          email: 'dean.sw@nitth.ac.in',
          facultyId: 'SW01',
          sinceDate: 'July 10, 2022',
        },
        {
          id: 4,
          category: 'Student Welfare',
          categoryDescription:
            'Faculty members entrusted with student welfare responsibilities.',
          role: 'Associate Dean',
          name: 'Dr. Priya Verma',
          department: 'Civil Engineering',
          email: 'ad.sw@nitth.ac.in',
          facultyId: 'SW02',
          sinceDate: 'July 10, 2022',
        },
        {
          id: 5,
          category: 'Faculty Welfare',
          categoryDescription:
            'Faculty members entrusted with faculty welfare responsibilities.',
          role: 'Dean',
          name: 'Dr. Sushil Chauhan',
          department: 'Faculty Welfare Office',
          email: 'dean.fw@nitth.ac.in',
          facultyId: 'FW01',
          sinceDate: 'January 01, 2024',
        },
        {
          id: 6,
          category: 'Faculty Welfare',
          categoryDescription:
            'Faculty members entrusted with faculty welfare responsibilities.',
          role: 'Associate Dean',
          name: 'Dr. Naveen Chauhan',
          department: 'Faculty Activity & Support',
          email: 'ad.fw@nitth.ac.in',
          facultyId: 'FW02',
          sinceDate: 'January 01, 2024',
        },
        {
          id: 7,
          category: 'Cultural Activities',
          categoryDescription:
            'Faculty members entrusted with cultural activities responsibilities.',
          role: 'Coordinator',
          name: 'Dr. Neetu Kapoor',
          department: 'Faculty Incharge (Cultural Activities)',
          email: 'culture@nitth.ac.in',
          facultyId: 'CA01',
          sinceDate: 'March 01, 2023',
        },
        {
          id: 8,
          category: 'Cultural Activities',
          categoryDescription:
            'Faculty members entrusted with cultural activities responsibilities.',
          role: 'Coordinator',
          name: 'Dr. Arjun Rao',
          department: 'Humanities & Social Sciences',
          email: 'culture2@nitth.ac.in',
          facultyId: 'CA02',
          sinceDate: 'March 01, 2023',
        },
        {
          id: 9,
          category: 'Technical Activities',
          categoryDescription:
            'Faculty members entrusted with technical activities responsibilities.',
          role: 'Coordinator',
          name: 'Dr. Mehak Bansal',
          department: 'Computer Science & Engineering',
          email: 'technical@nitth.ac.in',
          facultyId: 'TA01',
          sinceDate: 'November 01, 2022',
        },
        {
          id: 10,
          category: 'Technical Activities',
          categoryDescription:
            'Faculty members entrusted with technical activities responsibilities.',
          role: 'Coordinator',
          name: 'Dr. Vivek Sharma',
          department: 'Electronics & Communication',
          email: 'technical2@nitth.ac.in',
          facultyId: 'TA02',
          sinceDate: 'November 01, 2022',
        },
      ],
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
  ];

  const handleSave = () => {
    alert('Changes saved successfully!');
    console.log(functionariesData);
  };

  // Functionaries
  const updateFunctionary = (
    id: number,
    field: keyof Functionary,
    value: string
  ) => {
    setFunctionariesData({
      ...functionariesData,
      functionaries: functionariesData.functionaries.map((func) =>
        func.id === id ? { ...func, [field]: value } : func
      ),
    });
  };

  const addFunctionary = () => {
    const newId =
      functionariesData.functionaries.length > 0
        ? Math.max(...functionariesData.functionaries.map((f) => f.id)) + 1
        : 1;
    setFunctionariesData({
      ...functionariesData,
      functionaries: [
        ...functionariesData.functionaries,
        {
          id: newId,
          category: 'Academics',
          categoryDescription: '',
          role: 'Dean',
          name: '',
          department: '',
          email: '',
          facultyId: '',
          sinceDate: '',
        },
      ],
    });
  };

  const removeFunctionary = (id: number) => {
    setFunctionariesData({
      ...functionariesData,
      functionaries: functionariesData.functionaries.filter((f) => f.id !== id),
    });
  };

  // Categories
  const updateCategory = (index: number, value: string) => {
    const updated = [...functionariesData.categories];
    updated[index] = value;
    setFunctionariesData({ ...functionariesData, categories: updated });
  };

  const addCategory = () => {
    setFunctionariesData({
      ...functionariesData,
      categories: [...functionariesData.categories, ''],
    });
  };

  const removeCategory = (index: number) => {
    setFunctionariesData({
      ...functionariesData,
      categories: functionariesData.categories.filter((_, i) => i !== index),
    });
  };

  // Filter functionaries
  const filteredFunctionaries =
    selectedCategory === 'All Categories'
      ? functionariesData.functionaries
      : functionariesData.functionaries.filter(
          (func) => func.category === selectedCategory
        );

  // Group by category
  const groupedFunctionaries = filteredFunctionaries.reduce(
    (acc, func) => {
      if (!acc[func.category]) {
        acc[func.category] = [];
      }
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
                Faculty Functionaries Editor
              </h1>
              <p className="text-sm sm:text-base text-[#171717]/60 mt-1">
                Manage faculty role assignments and responsibilities
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
          {/* Hero Section */}
          {activeTab === 'hero' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <FileText className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Hero Section Content
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Heading
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
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="FACULTY ROLE ASSIGNMENTS"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Description
                  </label>
                  <textarea
                    rows={3}
                    value={functionariesData.heroDescription}
                    onChange={(e) =>
                      setFunctionariesData({
                        ...functionariesData,
                        heroDescription: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Enter description"
                  />
                </div>
              </div>

              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
                  Preview:
                </p>
                <div className="bg-white p-4 sm:p-6 rounded-lg">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#171717] mb-3">
                    {functionariesData.heroHeading}
                  </h3>
                  <p className="text-base sm:text-lg text-[#171717]/70">
                    {functionariesData.heroDescription}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Functionaries */}
          {activeTab === 'functionaries' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Users className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Functionaries Management
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div className="p-4 bg-[#F9F9F9] rounded-lg border border-[#171717]/10">
                  <h3 className="text-lg font-semibold text-[#171717] mb-3">
                    Filter Categories
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-[#171717] mb-2">
                        Filter Heading
                      </label>
                      <input
                        type="text"
                        value={functionariesData.filterHeading}
                        onChange={(e) =>
                          setFunctionariesData({
                            ...functionariesData,
                            filterHeading: e.target.value,
                          })
                        }
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                        placeholder="Filter by Category"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="block text-sm font-medium text-[#171717]">
                          Categories
                        </label>
                        <button
                          onClick={addCategory}
                          className="flex items-center gap-1 px-2 py-1 bg-[#631012] text-white text-xs rounded hover:bg-[#7a1214] transition-colors"
                        >
                          <Plus size={14} />
                          Add Category
                        </button>
                      </div>
                      <div className="space-y-2">
                        {functionariesData.categories.map((category, index) => (
                          <div key={index} className="flex gap-2">
                            <input
                              type="text"
                              value={category}
                              onChange={(e) =>
                                updateCategory(index, e.target.value)
                              }
                              className="flex-1 px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                              placeholder={`Category ${index + 1}`}
                            />
                            {index > 0 && (
                              <button
                                onClick={() => removeCategory(index)}
                                className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                              >
                                <Trash2 size={16} />
                              </button>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-[#F9F9F9] rounded-lg border border-[#171717]/10">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-semibold text-[#171717]">
                      Functionaries ({functionariesData.functionaries.length})
                    </h3>
                    <button
                      onClick={addFunctionary}
                      className="flex items-center gap-2 px-3 py-1.5 bg-[#631012] text-white text-sm rounded-lg hover:bg-[#7a1214] transition-colors"
                    >
                      <Plus size={16} />
                      Add Functionary
                    </button>
                  </div>

                  <div className="space-y-3 max-h-[600px] overflow-y-auto">
                    {functionariesData.functionaries.map(
                      (functionary, index) => (
                        <div
                          key={functionary.id}
                          className="p-3 border border-[#171717]/20 rounded-lg bg-white"
                        >
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-[#171717]/60">
                              Functionary {index + 1}
                            </span>
                            <button
                              onClick={() => removeFunctionary(functionary.id)}
                              className="px-2 py-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div>
                              <label className="block text-xs text-[#171717]/60 mb-1">
                                Category
                              </label>
                              <select
                                value={functionary.category}
                                onChange={(e) =>
                                  updateFunctionary(
                                    functionary.id,
                                    'category',
                                    e.target.value
                                  )
                                }
                                className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                              >
                                {functionariesData.categories
                                  .filter((cat) => cat !== 'All Categories')
                                  .map((cat, idx) => (
                                    <option key={idx} value={cat}>
                                      {cat}
                                    </option>
                                  ))}
                              </select>
                            </div>
                            <div>
                              <label className="block text-xs text-[#171717]/60 mb-1">
                                Role
                              </label>
                              <select
                                value={functionary.role}
                                onChange={(e) =>
                                  updateFunctionary(
                                    functionary.id,
                                    'role',
                                    e.target.value
                                  )
                                }
                                className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                              >
                                <option value="Dean">Dean</option>
                                <option value="Associate Dean">
                                  Associate Dean
                                </option>
                                <option value="Coordinator">Coordinator</option>
                              </select>
                            </div>
                            <div className="md:col-span-2">
                              <label className="block text-xs text-[#171717]/60 mb-1">
                                Category Description
                              </label>
                              <textarea
                                rows={2}
                                value={functionary.categoryDescription}
                                onChange={(e) =>
                                  updateFunctionary(
                                    functionary.id,
                                    'categoryDescription',
                                    e.target.value
                                  )
                                }
                                className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                                placeholder="Category description"
                              />
                            </div>
                            <div>
                              <label className="block text-xs text-[#171717]/60 mb-1">
                                Name
                              </label>
                              <input
                                type="text"
                                value={functionary.name}
                                onChange={(e) =>
                                  updateFunctionary(
                                    functionary.id,
                                    'name',
                                    e.target.value
                                  )
                                }
                                className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                                placeholder="Dr. John Doe"
                              />
                            </div>
                            <div>
                              <label className="block text-xs text-[#171717]/60 mb-1">
                                Department
                              </label>
                              <input
                                type="text"
                                value={functionary.department}
                                onChange={(e) =>
                                  updateFunctionary(
                                    functionary.id,
                                    'department',
                                    e.target.value
                                  )
                                }
                                className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                                placeholder="Computer Science"
                              />
                            </div>
                            <div>
                              <label className="block text-xs text-[#171717]/60 mb-1">
                                Email
                              </label>
                              <input
                                type="email"
                                value={functionary.email}
                                onChange={(e) =>
                                  updateFunctionary(
                                    functionary.id,
                                    'email',
                                    e.target.value
                                  )
                                }
                                className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                                placeholder="email@nitth.ac.in"
                              />
                            </div>
                            <div>
                              <label className="block text-xs text-[#171717]/60 mb-1">
                                Faculty ID
                              </label>
                              <input
                                type="text"
                                value={functionary.facultyId}
                                onChange={(e) =>
                                  updateFunctionary(
                                    functionary.id,
                                    'facultyId',
                                    e.target.value
                                  )
                                }
                                className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                                placeholder="FI01"
                              />
                            </div>
                            <div className="md:col-span-2">
                              <label className="block text-xs text-[#171717]/60 mb-1">
                                Since Date
                              </label>
                              <input
                                type="text"
                                value={functionary.sinceDate}
                                onChange={(e) =>
                                  updateFunctionary(
                                    functionary.id,
                                    'sinceDate',
                                    e.target.value
                                  )
                                }
                                className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                                placeholder="August 15, 2023"
                              />
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
                  Preview:
                </p>
                <div className="bg-white p-4 sm:p-6 rounded-lg space-y-6">
                  {/* Filter Section */}
                  <div className="flex items-center gap-2 mb-4">
                    <Filter className="text-[#631012] w-5 h-5" />
                    <h3 className="text-lg font-semibold text-[#171717]">
                      {functionariesData.filterHeading}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {functionariesData.categories.map((category, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          selectedCategory === category
                            ? 'bg-[#631012] text-white'
                            : 'bg-[#F9F9F9] text-[#171717] hover:bg-[#631012]/10'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>

                  {/* Functionaries by Category */}
                  {Object.entries(groupedFunctionaries).map(
                    ([category, funcs]) => (
                      <div key={category} className="mb-6">
                        <h3 className="text-xl font-bold text-[#631012] mb-2">
                          {category}
                        </h3>
                        {funcs[0]?.categoryDescription && (
                          <p className="text-sm text-[#171717]/70 mb-4">
                            {funcs[0].categoryDescription}
                          </p>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {funcs.map((func) => (
                            <div
                              key={func.id}
                              className="bg-white border border-[#171717]/20 rounded-lg p-4 hover:shadow-md transition-shadow"
                            >
                              <div className="flex items-start gap-3">
                                <div className="bg-[#631012]/10 p-2 rounded-full">
                                  <Briefcase className="w-5 h-5 text-[#631012]" />
                                </div>
                                <div className="flex-1">
                                  <div className="text-xs font-semibold text-[#631012] uppercase mb-1">
                                    {func.role}
                                  </div>
                                  <div className="text-lg font-bold text-[#171717] mb-1">
                                    {func.name}
                                  </div>
                                  <div className="text-sm text-[#171717]/70 mb-3">
                                    {func.department}
                                  </div>

                                  <div className="space-y-2 text-sm">
                                    <div className="flex items-center gap-2 text-[#171717]/70">
                                      <Mail
                                        size={14}
                                        className="text-[#631012]"
                                      />
                                      <span className="font-medium">
                                        Email:
                                      </span>
                                      <a
                                        href={`mailto:${func.email}`}
                                        className="text-[#631012] hover:underline"
                                      >
                                        {func.email}
                                      </a>
                                    </div>
                                    <div className="flex items-center gap-2 text-[#171717]/70">
                                      <IdCard
                                        size={14}
                                        className="text-[#631012]"
                                      />
                                      <span className="font-medium">
                                        Faculty ID:
                                      </span>
                                      <span>{func.facultyId}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-[#171717]/70">
                                      <Calendar
                                        size={14}
                                        className="text-[#631012]"
                                      />
                                      <span className="font-medium">Since</span>
                                      <span>{func.sinceDate}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
