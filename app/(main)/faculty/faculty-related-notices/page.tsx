'use client';

import React, { useState } from 'react';
import {
  Save,
  Bell,
  Plus,
  Trash2,
  FileText,
  Filter,
  Calendar,
  Download,
  Eye,
  AlertCircle,
} from 'lucide-react';

interface Notice {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
  priority: string;
  viewUrl: string;
  downloadUrl: string;
}

interface NoticesData {
  heroHeading: string;
  heroDescription: string;
  filterHeading: string;
  categories: string[];
  noticesTableHeading: string;
  notices: Notice[];
}

type TabType = 'hero' | 'notices';

export default function FacultyRelatedNoticesPage() {
  const [activeTab, setActiveTab] = useState<TabType>('hero');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const [noticesData, setNoticesData] = useState<NoticesData>({
    heroHeading: 'Faculty Related Notices',
    heroDescription:
      'Important notices, circulars, and announcements for faculty members regarding academic, administrative, and institutional matters.',
    filterHeading: 'Filter by Category:',
    categories: [
      'All',
      'Academic',
      'Administrative',
      'Recruitment',
      'Promotions',
      'Leave & Benefits',
      'General',
    ],
    noticesTableHeading: 'Faculty Notices',
    notices: [
      {
        id: 1,
        title: 'Faculty Performance Appraisal Submission Deadline',
        description:
          'All faculty members are requested to submit their annual performance appraisal reports by the stipulated deadline for the academic year 2024-25.',
        category: 'Academic',
        date: 'January 10, 2025',
        priority: 'High',
        viewUrl: '/documents/performance-appraisal-notice',
        downloadUrl: '/documents/performance-appraisal-notice.pdf',
      },
      {
        id: 2,
        title: 'Revised Leave Rules for Faculty Members',
        description:
          'Notification regarding revised leave rules and entitlements for regular and contractual faculty members effective from January 2025.',
        category: 'Leave & Benefits',
        date: 'January 8, 2025',
        priority: 'Medium',
        viewUrl: '/documents/revised-leave-rules',
        downloadUrl: '/documents/revised-leave-rules.pdf',
      },
      {
        id: 3,
        title: 'Faculty Recruitment Drive 2025',
        description:
          'Advertisement for faculty positions across various departments. Eligible candidates may apply through the official recruitment portal.',
        category: 'Recruitment',
        date: 'January 5, 2025',
        priority: 'High',
        viewUrl: '/documents/faculty-recruitment-2025',
        downloadUrl: '/documents/faculty-recruitment-2025.pdf',
      },
      {
        id: 4,
        title: 'CAS Promotion Guidelines Updated',
        description:
          'Updated guidelines for Career Advancement Scheme (CAS) promotions as per UGC regulations. Faculty members are advised to review the new criteria.',
        category: 'Promotions',
        date: 'January 3, 2025',
        priority: 'High',
        viewUrl: '/documents/cas-promotion-guidelines',
        downloadUrl: '/documents/cas-promotion-guidelines.pdf',
      },
      {
        id: 5,
        title: 'Administrative Process Digitization',
        description:
          'Notice regarding digitization of administrative processes. Faculty members are requested to complete their digital profile updates.',
        category: 'Administrative',
        date: 'December 28, 2024',
        priority: 'Medium',
        viewUrl: '/documents/digitization-notice',
        downloadUrl: '/documents/digitization-notice.pdf',
      },
      {
        id: 6,
        title: 'Annual Faculty Meeting Schedule',
        description:
          'Schedule for the annual faculty meeting to discuss academic planning, research initiatives, and institutional development for 2025.',
        category: 'General',
        date: 'December 20, 2024',
        priority: 'Low',
        viewUrl: '/documents/faculty-meeting-schedule',
        downloadUrl: '/documents/faculty-meeting-schedule.pdf',
      },
    ],
  });

  const tabs = [
    {
      id: 'hero' as TabType,
      label: 'Hero Section',
      icon: <FileText size={18} />,
    },
    {
      id: 'notices' as TabType,
      label: 'Notices',
      icon: <Bell size={18} />,
    },
  ];

  const handleSave = () => {
    alert('Changes saved successfully!');
    console.log(noticesData);
  };

  // Notices
  const updateNotice = (id: number, field: keyof Notice, value: string) => {
    setNoticesData({
      ...noticesData,
      notices: noticesData.notices.map((notice) =>
        notice.id === id ? { ...notice, [field]: value } : notice
      ),
    });
  };

  const addNotice = () => {
    const newId =
      noticesData.notices.length > 0
        ? Math.max(...noticesData.notices.map((n) => n.id)) + 1
        : 1;
    setNoticesData({
      ...noticesData,
      notices: [
        ...noticesData.notices,
        {
          id: newId,
          title: '',
          description: '',
          category: 'General',
          date: '',
          priority: 'Medium',
          viewUrl: '',
          downloadUrl: '',
        },
      ],
    });
  };

  const removeNotice = (id: number) => {
    setNoticesData({
      ...noticesData,
      notices: noticesData.notices.filter((n) => n.id !== id),
    });
  };

  // Categories
  const updateCategory = (index: number, value: string) => {
    const updated = [...noticesData.categories];
    updated[index] = value;
    setNoticesData({ ...noticesData, categories: updated });
  };

  const addCategory = () => {
    setNoticesData({
      ...noticesData,
      categories: [...noticesData.categories, ''],
    });
  };

  const removeCategory = (index: number) => {
    setNoticesData({
      ...noticesData,
      categories: noticesData.categories.filter((_, i) => i !== index),
    });
  };

  // Filter notices
  const filteredNotices =
    selectedCategory === 'All'
      ? noticesData.notices
      : noticesData.notices.filter(
          (notice) => notice.category === selectedCategory
        );

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'bg-red-100 text-red-800';
      case 'Medium':
        return 'bg-amber-100 text-amber-800';
      case 'Low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
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
                Faculty Notices Editor
              </h1>
              <p className="text-sm sm:text-base text-[#171717]/60 mt-1">
                Manage faculty-related notices and announcements
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
                    placeholder="Faculty Related Notices"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Description
                  </label>
                  <textarea
                    rows={3}
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
              </div>

              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
                  Preview:
                </p>
                <div className="bg-white p-4 sm:p-6 rounded-lg">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#171717] mb-3">
                    {noticesData.heroHeading}
                  </h3>
                  <p className="text-base sm:text-lg text-[#171717]/70">
                    {noticesData.heroDescription}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Notices */}
          {activeTab === 'notices' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Bell className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Notices Management
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
                        value={noticesData.filterHeading}
                        onChange={(e) =>
                          setNoticesData({
                            ...noticesData,
                            filterHeading: e.target.value,
                          })
                        }
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                        placeholder="Filter by Category:"
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
                        {noticesData.categories.map((category, index) => (
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
                      Notices ({noticesData.notices.length})
                    </h3>
                    <button
                      onClick={addNotice}
                      className="flex items-center gap-2 px-3 py-1.5 bg-[#631012] text-white text-sm rounded-lg hover:bg-[#7a1214] transition-colors"
                    >
                      <Plus size={16} />
                      Add Notice
                    </button>
                  </div>

                  <div className="space-y-3 max-h-[600px] overflow-y-auto">
                    {noticesData.notices.map((notice, index) => (
                      <div
                        key={notice.id}
                        className="p-3 border border-[#171717]/20 rounded-lg bg-white"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-[#171717]/60">
                            Notice {index + 1}
                          </span>
                          <button
                            onClick={() => removeNotice(notice.id)}
                            className="px-2 py-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div className="md:col-span-2">
                            <label className="block text-xs text-[#171717]/60 mb-1">
                              Title
                            </label>
                            <input
                              type="text"
                              value={notice.title}
                              onChange={(e) =>
                                updateNotice(notice.id, 'title', e.target.value)
                              }
                              className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                              placeholder="Notice Title"
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
                                updateNotice(
                                  notice.id,
                                  'description',
                                  e.target.value
                                )
                              }
                              className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                              placeholder="Notice description"
                            />
                          </div>
                          <div>
                            <label className="block text-xs text-[#171717]/60 mb-1">
                              Category
                            </label>
                            <select
                              value={notice.category}
                              onChange={(e) =>
                                updateNotice(
                                  notice.id,
                                  'category',
                                  e.target.value
                                )
                              }
                              className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                            >
                              {noticesData.categories
                                .filter((cat) => cat !== 'All')
                                .map((cat, idx) => (
                                  <option key={idx} value={cat}>
                                    {cat}
                                  </option>
                                ))}
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs text-[#171717]/60 mb-1">
                              Date
                            </label>
                            <input
                              type="text"
                              value={notice.date}
                              onChange={(e) =>
                                updateNotice(notice.id, 'date', e.target.value)
                              }
                              className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                              placeholder="January 10, 2025"
                            />
                          </div>
                          <div className="md:col-span-2">
                            <label className="block text-xs text-[#171717]/60 mb-1">
                              Priority
                            </label>
                            <select
                              value={notice.priority}
                              onChange={(e) =>
                                updateNotice(
                                  notice.id,
                                  'priority',
                                  e.target.value
                                )
                              }
                              className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                            >
                              <option value="High">High</option>
                              <option value="Medium">Medium</option>
                              <option value="Low">Low</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs text-[#171717]/60 mb-1">
                              View URL
                            </label>
                            <input
                              type="text"
                              value={notice.viewUrl}
                              onChange={(e) =>
                                updateNotice(
                                  notice.id,
                                  'viewUrl',
                                  e.target.value
                                )
                              }
                              className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                              placeholder="/documents/notice"
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
                                updateNotice(
                                  notice.id,
                                  'downloadUrl',
                                  e.target.value
                                )
                              }
                              className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                              placeholder="/documents/notice.pdf"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
                  Preview:
                </p>
                <div className="bg-white p-4 sm:p-6 rounded-lg space-y-4">
                  {/* Filter Section */}
                  <div className="flex items-center gap-2 mb-4">
                    <Filter className="text-[#631012] w-5 h-5" />
                    <h3 className="text-lg font-semibold text-[#171717]">
                      {noticesData.filterHeading}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {noticesData.categories.map((category, idx) => (
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

                  <div className="text-sm text-[#171717]/60 mb-2">
                    Showing {filteredNotices.length} of{' '}
                    {noticesData.notices.length} notices
                  </div>

                  <div className="text-base font-semibold text-[#171717] mb-3">
                    Total: {filteredNotices.length} notices
                  </div>

                  {/* Notices Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-[#F9F9F9] border-b border-[#171717]/10">
                          <th className="px-4 py-3 text-left text-xs font-semibold text-[#171717] uppercase tracking-wider">
                            Date
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-[#171717] uppercase tracking-wider">
                            Notice Title
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-[#171717] uppercase tracking-wider">
                            Category
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-[#171717] uppercase tracking-wider">
                            Priority
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-[#171717] uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-[#171717]/10">
                        {filteredNotices.map((notice) => (
                          <tr
                            key={notice.id}
                            className="hover:bg-[#F9F9F9] transition-colors"
                          >
                            <td className="px-4 py-3 text-sm text-[#171717] font-medium">
                              <div className="flex items-center gap-2">
                                <Calendar
                                  size={14}
                                  className="text-[#631012]"
                                />
                                {notice.date}
                              </div>
                            </td>
                            <td className="px-4 py-3">
                              <div className="text-sm font-semibold text-[#171717]">
                                {notice.title}
                              </div>
                              <div className="text-xs text-[#171717]/60 mt-1">
                                {notice.description}
                              </div>
                            </td>
                            <td className="px-4 py-3 text-sm text-[#171717]">
                              <span className="inline-flex px-2 py-1 rounded bg-[#631012]/10 text-[#631012] font-medium text-xs">
                                {notice.category}
                              </span>
                            </td>
                            <td className="px-4 py-3 text-sm">
                              <span
                                className={`inline-flex items-center gap-1 px-2 py-1 rounded font-medium text-xs ${getPriorityColor(
                                  notice.priority
                                )}`}
                              >
                                <AlertCircle size={12} />
                                {notice.priority}
                              </span>
                            </td>
                            <td className="px-4 py-3 text-sm">
                              <div className="flex gap-2">
                                <button className="flex items-center gap-1 px-3 py-1 bg-[#631012] text-white text-xs rounded hover:bg-[#7a1214] transition-colors">
                                  <Eye size={14} />
                                  View
                                </button>
                                <button className="flex items-center gap-1 px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 transition-colors">
                                  <Download size={14} />
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
