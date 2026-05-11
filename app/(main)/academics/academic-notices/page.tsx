'use client';

import React, { useState } from 'react';
import { Save, Bell, Plus, Trash2, FileText, List, Info } from 'lucide-react';

interface Notice {
  slNo: string;
  title: string;
  description: string;
  category: string;
  date: string;
  viewUrl: string;
  downloadUrl: string;
}

interface AcademicNoticesData {
  heroHeading: string;
  heroDescription: string;
  showingText: string;
  filterLatestText: string;
  searchPlaceholder: string;
  filterAllText: string;
  notices: Notice[];
  aboutHeading: string;
  aboutDescription: string;
}

type TabType = 'hero' | 'notices' | 'about';

export default function AcademicNoticesPage() {
  const [activeTab, setActiveTab] = useState<TabType>('hero');

  const [noticesData, setNoticesData] = useState<AcademicNoticesData>({
    heroHeading: 'Academics Notices',
    heroDescription:
      'Official academic notices, circulars, and updates issued by the Institute.',
    showingText: 'Showing 5 notice(s)',
    filterLatestText: 'Latest',
    searchPlaceholder: 'Search notices...',
    filterAllText: 'All',
    notices: [
      {
        slNo: '1',
        title: 'End Semester Examination Schedule — Even Semester 2025',
        description:
          'Detailed examination timetable for undergraduate and postgraduate programs for Even Semester 2025.',
        category: 'Examination',
        date: 'December 18, 2025',
        viewUrl: '#',
        downloadUrl: '#',
      },
      {
        slNo: '2',
        title: 'Academic Calendar Update — Academic Year 2025-26',
        description:
          'Revised academic calendar including registration deadlines and holiday list.',
        category: 'Calendar',
        date: 'November 30, 2025',
        viewUrl: '#',
        downloadUrl: '#',
      },
      {
        slNo: '3',
        title: 'Registration Instructions for Semester Enrollment',
        description:
          'Step by step guide for online registration and fee payment.',
        category: 'Registration',
        date: 'October 12, 2025',
        viewUrl: '#',
        downloadUrl: '#',
      },
      {
        slNo: '4',
        title: 'Result Declaration — PG/UG Even Semester',
        description:
          'Results published for all programs. Check via student portal.',
        category: 'Result',
        date: 'September 20, 2025',
        viewUrl: '#',
        downloadUrl: '#',
      },
      {
        slNo: '5',
        title: 'Miscellaneous Academic Policy Update',
        description:
          'A brief administrative update relevant to academic stakeholders.',
        category: 'Others',
        date: 'May 1, 2025',
        viewUrl: '#',
        downloadUrl: '#',
      },
    ],
    aboutHeading: 'About Academics Notices',
    aboutDescription:
      'This section provides authoritative academic notices issued by NIT Hamirpur — including examination schedules, registration guidelines, academic calendar updates, results, circulars, and related academic communications.',
  });

  const tabs = [
    {
      id: 'hero' as TabType,
      label: 'Hero Section',
      icon: <FileText size={18} />,
    },
    {
      id: 'notices' as TabType,
      label: 'Notices List',
      icon: <List size={18} />,
    },
    {
      id: 'about' as TabType,
      label: 'About Section',
      icon: <Info size={18} />,
    },
  ];

  const handleSave = () => {
    alert('Changes saved successfully!');
    console.log(noticesData);
  };

  const updateNotice = (index: number, field: keyof Notice, value: string) => {
    const updated = [...noticesData.notices];
    updated[index] = { ...updated[index], [field]: value };
    setNoticesData({ ...noticesData, notices: updated });
  };

  const addNotice = () => {
    setNoticesData({
      ...noticesData,
      notices: [
        ...noticesData.notices,
        {
          slNo: String(noticesData.notices.length + 1),
          title: '',
          description: '',
          category: '',
          date: '',
          viewUrl: '#',
          downloadUrl: '#',
        },
      ],
    });
  };

  const removeNotice = (index: number) => {
    setNoticesData({
      ...noticesData,
      notices: noticesData.notices.filter((_, i) => i !== index),
    });
  };

  return (
    <div className="space-y-4 sm:space-y-6 p-2 sm:p-4 lg:p-6">
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="bg-[#631012]/10 p-2 sm:p-3 rounded-full text-[#631012] flex-shrink-0">
              <Bell className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#171717] break-words">
                Academic Notices Editor
              </h1>
              <p className="text-sm sm:text-base text-[#171717]/60 mt-1">
                Edit academic notices, circulars, and updates
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
                    value={noticesData.heroHeading}
                    onChange={(e) =>
                      setNoticesData({
                        ...noticesData,
                        heroHeading: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Academics Notices"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Description
                  </label>
                  <textarea
                    rows={4}
                    value={noticesData.heroDescription}
                    onChange={(e) =>
                      setNoticesData({
                        ...noticesData,
                        heroDescription: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Enter description"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#171717] mb-2">
                      Showing Text
                    </label>
                    <input
                      type="text"
                      value={noticesData.showingText}
                      onChange={(e) =>
                        setNoticesData({
                          ...noticesData,
                          showingText: e.target.value,
                        })
                      }
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                      placeholder="Showing 5 notice(s)"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#171717] mb-2">
                      Search Placeholder
                    </label>
                    <input
                      type="text"
                      value={noticesData.searchPlaceholder}
                      onChange={(e) =>
                        setNoticesData({
                          ...noticesData,
                          searchPlaceholder: e.target.value,
                        })
                      }
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                      placeholder="Search notices..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#171717] mb-2">
                      Filter Text
                    </label>
                    <input
                      type="text"
                      value={noticesData.filterLatestText}
                      onChange={(e) =>
                        setNoticesData({
                          ...noticesData,
                          filterLatestText: e.target.value,
                        })
                      }
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                      placeholder="Latest"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
                  Preview:
                </p>
                <div className="bg-white p-4 sm:p-6 rounded-lg space-y-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#171717] mb-3">
                      {noticesData.heroHeading}
                    </h3>
                    <p className="text-base sm:text-lg text-[#171717]/70">
                      {noticesData.heroDescription}
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                    <span className="text-sm text-[#171717]/60">
                      {noticesData.showingText}
                    </span>
                    <div className="flex gap-2 w-full sm:w-auto">
                      <input
                        type="text"
                        placeholder={noticesData.searchPlaceholder}
                        className="flex-1 sm:flex-none px-3 py-2 border border-[#171717]/20 rounded-lg text-sm"
                        disabled
                      />
                      <button className="px-4 py-2 border border-[#631012] text-[#631012] rounded-lg text-sm">
                        {noticesData.filterLatestText}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Notices List */}
          {activeTab === 'notices' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <List className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Notices List
                </h2>
              </div>

              <div className="space-y-3">
                {noticesData.notices.map((notice, index) => (
                  <div
                    key={index}
                    className="p-4 border border-[#171717]/20 rounded-lg bg-[#F9F9F9] space-y-3"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-[#171717]/60">
                        Notice {index + 1}
                      </span>
                      <button
                        onClick={() => removeNotice(index)}
                        className="px-2 py-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="md:col-span-2">
                        <label className="block text-xs text-[#171717]/60 mb-1">
                          Sl. No.
                        </label>
                        <input
                          type="text"
                          value={notice.slNo}
                          onChange={(e) =>
                            updateNotice(index, 'slNo', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                          placeholder="1"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-xs text-[#171717]/60 mb-1">
                          Title
                        </label>
                        <input
                          type="text"
                          value={notice.title}
                          onChange={(e) =>
                            updateNotice(index, 'title', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                          placeholder="Notice title"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-xs text-[#171717]/60 mb-1">
                          Description
                        </label>
                        <textarea
                          rows={2}
                          value={notice.description}
                          onChange={(e) =>
                            updateNotice(index, 'description', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                          placeholder="Description"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-[#171717]/60 mb-1">
                          Category
                        </label>
                        <input
                          type="text"
                          value={notice.category}
                          onChange={(e) =>
                            updateNotice(index, 'category', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                          placeholder="Examination"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-[#171717]/60 mb-1">
                          Date
                        </label>
                        <input
                          type="text"
                          value={notice.date}
                          onChange={(e) =>
                            updateNotice(index, 'date', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                          placeholder="December 18, 2025"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-[#171717]/60 mb-1">
                          View URL
                        </label>
                        <input
                          type="text"
                          value={notice.viewUrl}
                          onChange={(e) =>
                            updateNotice(index, 'viewUrl', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                          placeholder="https://..."
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-[#171717]/60 mb-1">
                          Download URL
                        </label>
                        <input
                          type="text"
                          value={notice.downloadUrl}
                          onChange={(e) =>
                            updateNotice(index, 'downloadUrl', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                          placeholder="https://..."
                        />
                      </div>
                    </div>
                  </div>
                ))}
                <button
                  onClick={addNotice}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 text-[#631012] hover:bg-[#631012]/10 rounded-lg transition-colors text-sm sm:text-base"
                >
                  <Plus size={18} />
                  Add Notice
                </button>
              </div>

              <div className="mt-6 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
                  Preview:
                </p>
                <div className="bg-white p-4 sm:p-6 rounded-lg overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-[#F9F9F9]">
                      <tr>
                        <th className="px-3 py-2 text-left text-xs font-semibold text-[#171717] border border-[#171717]/20">
                          Sl. No.
                        </th>
                        <th className="px-3 py-2 text-left text-xs font-semibold text-[#171717] border border-[#171717]/20">
                          Notice Title
                        </th>
                        <th className="px-3 py-2 text-left text-xs font-semibold text-[#171717] border border-[#171717]/20">
                          Category
                        </th>
                        <th className="px-3 py-2 text-left text-xs font-semibold text-[#171717] border border-[#171717]/20">
                          Date
                        </th>
                        <th className="px-3 py-2 text-left text-xs font-semibold text-[#171717] border border-[#171717]/20">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {noticesData.notices.map((notice, index) => (
                        <tr key={index} className="hover:bg-[#F9F9F9]/50">
                          <td className="px-3 py-3 text-xs text-[#171717] border border-[#171717]/20">
                            {notice.slNo}
                          </td>
                          <td className="px-3 py-3 border border-[#171717]/20">
                            <div className="space-y-1">
                              <p className="text-sm font-semibold text-[#171717]">
                                {notice.title}
                              </p>
                              <p className="text-xs text-[#171717]/60">
                                {notice.description}
                              </p>
                            </div>
                          </td>
                          <td className="px-3 py-3 border border-[#171717]/20">
                            <span className="inline-block px-2 py-1 bg-[#631012]/10 text-[#631012] rounded text-xs font-medium">
                              {notice.category}
                            </span>
                          </td>
                          <td className="px-3 py-3 text-xs text-[#171717] border border-[#171717]/20">
                            {notice.date}
                          </td>
                          <td className="px-3 py-3 border border-[#171717]/20">
                            <div className="flex flex-col gap-1">
                              <button className="px-3 py-1 text-xs text-[#631012] hover:bg-[#631012]/10 rounded transition-colors">
                                View
                              </button>
                              <button className="px-3 py-1 text-xs text-[#631012] hover:bg-[#631012]/10 rounded transition-colors">
                                Download
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* About Section */}
          {activeTab === 'about' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Info className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  About Section
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    About Heading
                  </label>
                  <input
                    type="text"
                    value={noticesData.aboutHeading}
                    onChange={(e) =>
                      setNoticesData({
                        ...noticesData,
                        aboutHeading: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="About Academics Notices"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    About Description
                  </label>
                  <textarea
                    rows={4}
                    value={noticesData.aboutDescription}
                    onChange={(e) =>
                      setNoticesData({
                        ...noticesData,
                        aboutDescription: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Description"
                  />
                </div>
              </div>

              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
                  Preview:
                </p>
                <div className="bg-white p-4 sm:p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#171717] mb-3">
                    {noticesData.aboutHeading}
                  </h3>
                  <p className="text-sm text-[#171717]/70">
                    {noticesData.aboutDescription}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
