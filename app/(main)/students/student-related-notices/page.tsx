'use client';

import React, { useState } from 'react';
import {
  Save,
  Bell,
  Plus,
  Trash2,
  FileText,
  Calendar,
  AlertCircle,
  Download,
  Eye,
} from 'lucide-react';

interface Notice {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  priority: string;
  attachmentUrl: string;
}

interface NoticesData {
  heroHeading: string;
  heroDescription: string;
  noticesHeading: string;
  noticesSubtitle: string;
  notices: Notice[];
  archiveHeading: string;
  archiveDescription: string;
}

type TabType = 'hero' | 'notices' | 'archive';

export default function StudentRelatedNoticesPage() {
  const [activeTab, setActiveTab] = useState<TabType>('hero');

  const [noticesData, setNoticesData] = useState<NoticesData>({
    heroHeading: 'Student Related Notices',
    heroDescription:
      'Stay updated with the latest announcements, circulars, and important notices for students at NIT Hamirpur.',
    noticesHeading: 'Latest Notices',
    noticesSubtitle: 'Important announcements and circulars for students',
    notices: [
      {
        id: 1,
        title: 'End Semester Examination Schedule - Spring 2025',
        description:
          'The end semester examination for Spring 2025 will commence from May 15, 2025. All students are advised to check the detailed schedule.',
        date: '2025-04-01',
        category: 'Examination',
        priority: 'High',
        attachmentUrl: '/notices/exam-schedule-spring-2025.pdf',
      },
      {
        id: 2,
        title: 'Hostel Room Allotment for Session 2025-26',
        description:
          'Applications for hostel room allotment for the upcoming academic session are now open. Last date to apply is April 30, 2025.',
        date: '2025-03-25',
        category: 'Hostel',
        priority: 'Medium',
        attachmentUrl: '/notices/hostel-allotment-2025.pdf',
      },
      {
        id: 3,
        title: 'Scholarship Application Deadline Extended',
        description:
          'The deadline for submitting scholarship applications has been extended to April 15, 2025. Eligible students are encouraged to apply.',
        date: '2025-03-20',
        category: 'Scholarship',
        priority: 'High',
        attachmentUrl: '/notices/scholarship-extension.pdf',
      },
      {
        id: 4,
        title: 'Campus Placement Drive - TechCorp India',
        description:
          'TechCorp India will be conducting campus placements on April 10, 2025. Eligible students should register by April 5, 2025.',
        date: '2025-03-18',
        category: 'Placement',
        priority: 'Medium',
        attachmentUrl: '/notices/techcorp-placement.pdf',
      },
      {
        id: 5,
        title: 'Library Book Return Reminder',
        description:
          'All students are reminded to return borrowed library books before the end of the semester to avoid late fees.',
        date: '2025-03-15',
        category: 'General',
        priority: 'Low',
        attachmentUrl: '',
      },
    ],
    archiveHeading: 'Notice Archive',
    archiveDescription:
      'Access previous notices and circulars from the archive section.',
  });

  const tabs = [
    {
      id: 'hero' as TabType,
      label: 'Hero Section',
      icon: <FileText size={18} />,
    },
    { id: 'notices' as TabType, label: 'Notices', icon: <Bell size={18} /> },
    {
      id: 'archive' as TabType,
      label: 'Archive',
      icon: <Calendar size={18} />,
    },
  ];

  const handleSave = () => {
    alert('Changes saved successfully!');
    console.log(noticesData);
  };

  const addNotice = () => {
    const newNotice: Notice = {
      id: Date.now(),
      title: '',
      description: '',
      date: new Date().toISOString().split('T')[0],
      category: 'General',
      priority: 'Medium',
      attachmentUrl: '',
    };
    setNoticesData({
      ...noticesData,
      notices: [...noticesData.notices, newNotice],
    });
  };

  const removeNotice = (id: number) => {
    setNoticesData({
      ...noticesData,
      notices: noticesData.notices.filter((n) => n.id !== id),
    });
  };

  const updateNotice = (id: number, field: keyof Notice, value: string) => {
    setNoticesData({
      ...noticesData,
      notices: noticesData.notices.map((n) =>
        n.id === id ? { ...n, [field]: value } : n
      ),
    });
  };

  const getPriorityColor = (priority: string) => {
    const colors: Record<string, string> = {
      High: 'bg-red-100 text-red-800',
      Medium: 'bg-amber-100 text-amber-800',
      Low: 'bg-green-100 text-green-800',
    };
    return colors[priority] || 'bg-gray-100 text-gray-800';
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Examination: 'bg-blue-100 text-blue-800',
      Hostel: 'bg-purple-100 text-purple-800',
      Scholarship: 'bg-green-100 text-green-800',
      Placement: 'bg-amber-100 text-amber-800',
      General: 'bg-gray-100 text-gray-800',
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
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
                Student Notices Editor
              </h1>
              <p className="text-sm sm:text-base text-[#171717]/60 mt-1">
                Manage student notices and announcements
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
                    value={noticesData.heroHeading}
                    onChange={(e) =>
                      setNoticesData({
                        ...noticesData,
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
                    value={noticesData.heroDescription}
                    onChange={(e) =>
                      setNoticesData({
                        ...noticesData,
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
                  {noticesData.heroHeading}
                </h3>
                <p className="text-white/80">{noticesData.heroDescription}</p>
              </div>
            </div>
          )}

          {activeTab === 'notices' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Bell className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                  <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                    Notices List
                  </h2>
                </div>
                <button
                  onClick={addNotice}
                  className="bg-[#631012] hover:bg-[#7a1214] text-white px-4 py-2 rounded-lg flex items-center gap-2"
                >
                  <Plus size={18} /> Add Notice
                </button>
              </div>

              <div className="grid grid-cols-1 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Section Heading
                  </label>
                  <input
                    type="text"
                    value={noticesData.noticesHeading}
                    onChange={(e) =>
                      setNoticesData({
                        ...noticesData,
                        noticesHeading: e.target.value,
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
                    value={noticesData.noticesSubtitle}
                    onChange={(e) =>
                      setNoticesData({
                        ...noticesData,
                        noticesSubtitle: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] text-black"
                  />
                </div>
              </div>

              <div className="space-y-4">
                {noticesData.notices.map((notice, index) => (
                  <div
                    key={notice.id}
                    className="border border-[#171717]/20 rounded-lg p-4 bg-[#F9F9F9]"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-semibold text-[#631012]">
                        Notice #{index + 1}
                      </span>
                      <button
                        onClick={() => removeNotice(notice.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-[#171717] mb-1">
                          Title
                        </label>
                        <input
                          type="text"
                          value={notice.title}
                          onChange={(e) =>
                            updateNotice(notice.id, 'title', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg text-black"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#171717] mb-1">
                          Date
                        </label>
                        <input
                          type="date"
                          value={notice.date}
                          onChange={(e) =>
                            updateNotice(notice.id, 'date', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg text-black"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#171717] mb-1">
                          Category
                        </label>
                        <select
                          value={notice.category}
                          onChange={(e) =>
                            updateNotice(notice.id, 'category', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg text-black"
                        >
                          <option value="Examination">Examination</option>
                          <option value="Hostel">Hostel</option>
                          <option value="Scholarship">Scholarship</option>
                          <option value="Placement">Placement</option>
                          <option value="General">General</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#171717] mb-1">
                          Priority
                        </label>
                        <select
                          value={notice.priority}
                          onChange={(e) =>
                            updateNotice(notice.id, 'priority', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg text-black"
                        >
                          <option value="High">High</option>
                          <option value="Medium">Medium</option>
                          <option value="Low">Low</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#171717] mb-1">
                          Attachment URL
                        </label>
                        <input
                          type="text"
                          value={notice.attachmentUrl}
                          onChange={(e) =>
                            updateNotice(
                              notice.id,
                              'attachmentUrl',
                              e.target.value
                            )
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg text-black"
                          placeholder="/notices/filename.pdf"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-[#171717] mb-1">
                          Description
                        </label>
                        <textarea
                          value={notice.description}
                          onChange={(e) =>
                            updateNotice(
                              notice.id,
                              'description',
                              e.target.value
                            )
                          }
                          rows={2}
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
                <div className="space-y-3">
                  {noticesData.notices.map((notice) => (
                    <div
                      key={notice.id}
                      className="bg-white border border-[#171717]/10 rounded-lg p-4 shadow-sm"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(notice.category)}`}
                            >
                              {notice.category}
                            </span>
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getPriorityColor(notice.priority)}`}
                            >
                              <AlertCircle size={10} />
                              {notice.priority}
                            </span>
                            <span className="text-xs text-[#171717]/50">
                              {notice.date}
                            </span>
                          </div>
                          <h4 className="font-semibold text-[#171717] mb-1">
                            {notice.title}
                          </h4>
                          <p className="text-sm text-[#171717]/70">
                            {notice.description}
                          </p>
                        </div>
                        {notice.attachmentUrl && (
                          <div className="flex gap-2">
                            <button className="p-2 text-[#631012] hover:bg-[#631012]/10 rounded-lg">
                              <Eye size={16} />
                            </button>
                            <button className="p-2 text-[#631012] hover:bg-[#631012]/10 rounded-lg">
                              <Download size={16} />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'archive' && (
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Archive Section
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Section Heading
                  </label>
                  <input
                    type="text"
                    value={noticesData.archiveHeading}
                    onChange={(e) =>
                      setNoticesData({
                        ...noticesData,
                        archiveHeading: e.target.value,
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
                    value={noticesData.archiveDescription}
                    onChange={(e) =>
                      setNoticesData({
                        ...noticesData,
                        archiveDescription: e.target.value,
                      })
                    }
                    rows={3}
                    className="w-full px-4 py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] text-black"
                  />
                </div>
              </div>

              <div className="mt-8 p-6 bg-[#F9F9F9] rounded-xl border border-[#171717]/10">
                <h3 className="text-xl font-bold text-[#171717] mb-2">
                  {noticesData.archiveHeading}
                </h3>
                <p className="text-[#171717]/70">
                  {noticesData.archiveDescription}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
