'use client';

import React, { useState } from 'react';
import {
  Save,
  FileText,
  Plus,
  Trash2,
  BookOpen,
  Download,
  ExternalLink,
  Calendar,
} from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  description: string;
  date: string;
  downloadUrl: string;
  readMoreUrl: string;
}

interface CPDARulesData {
  heroHeading: string;
  heroDescription: string;
  newsItems: NewsItem[];
}

type TabType = 'hero' | 'news';

export default function CPDARulesPage() {
  const [activeTab, setActiveTab] = useState<TabType>('hero');

  const [cpdaData, setCpdaData] = useState<CPDARulesData>({
    heroHeading: 'CPDA Rules',
    heroDescription:
      'Latest news, announcements, and updates from the NITH CPDA community.',
    newsItems: [
      {
        id: 1,
        title: 'NITH Association Announces Annual Meet 2025',
        description:
          'The NIT Hamirpur Association is pleased to announce the Annual Meet scheduled for March 2025. All registered are cordially invited to participate in this grand event celebrating our shared legacy.',
        date: 'January 15, 2025',
        downloadUrl: '/documents/annual-meet-2025.pdf',
        readMoreUrl: '/news/annual-meet-2025',
      },
      {
        id: 2,
        title: 'Distinguished Award Nominations Open',
        description:
          'Nominations are now open for the Distinguished Award 2025. The award recognizes outstanding contributions by NITH in their respective fields. Submit your nominations before the deadline.',
        date: 'January 12, 2025',
        downloadUrl: '/documents/distinguished-award-2025.pdf',
        readMoreUrl: '/news/distinguished-award-2025',
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
      id: 'news' as TabType,
      label: 'Rules & News',
      icon: <BookOpen size={18} />,
    },
  ];

  const handleSave = () => {
    alert('Changes saved successfully!');
    console.log(cpdaData);
  };

  // News Items
  const updateNewsItem = (id: number, field: keyof NewsItem, value: string) => {
    setCpdaData({
      ...cpdaData,
      newsItems: cpdaData.newsItems.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      ),
    });
  };

  const addNewsItem = () => {
    const newId =
      cpdaData.newsItems.length > 0
        ? Math.max(...cpdaData.newsItems.map((n) => n.id)) + 1
        : 1;
    setCpdaData({
      ...cpdaData,
      newsItems: [
        ...cpdaData.newsItems,
        {
          id: newId,
          title: '',
          description: '',
          date: '',
          downloadUrl: '',
          readMoreUrl: '',
        },
      ],
    });
  };

  const removeNewsItem = (id: number) => {
    setCpdaData({
      ...cpdaData,
      newsItems: cpdaData.newsItems.filter((n) => n.id !== id),
    });
  };

  return (
    <div className="space-y-4 sm:space-y-6 p-2 sm:p-4 lg:p-6">
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="bg-[#631012]/10 p-2 sm:p-3 rounded-full text-[#631012] flex-shrink-0">
              <BookOpen className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#171717] break-words">
                CPDA Rules Editor
              </h1>
              <p className="text-sm sm:text-base text-[#171717]/60 mt-1">
                Manage CPDA rules, news, and announcements
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
                    value={cpdaData.heroHeading}
                    onChange={(e) =>
                      setCpdaData({
                        ...cpdaData,
                        heroHeading: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="CPDA Rules"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Description
                  </label>
                  <textarea
                    rows={3}
                    value={cpdaData.heroDescription}
                    onChange={(e) =>
                      setCpdaData({
                        ...cpdaData,
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
                    {cpdaData.heroHeading}
                  </h3>
                  <p className="text-base sm:text-lg text-[#171717]/70">
                    {cpdaData.heroDescription}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Rules & News */}
          {activeTab === 'news' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <BookOpen className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Rules & News Management
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div className="p-4 bg-[#F9F9F9] rounded-lg border border-[#171717]/10">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-semibold text-[#171717]">
                      News Items ({cpdaData.newsItems.length})
                    </h3>
                    <button
                      onClick={addNewsItem}
                      className="flex items-center gap-2 px-3 py-1.5 bg-[#631012] text-white text-sm rounded-lg hover:bg-[#7a1214] transition-colors"
                    >
                      <Plus size={16} />
                      Add News Item
                    </button>
                  </div>

                  <div className="space-y-3 max-h-[600px] overflow-y-auto">
                    {cpdaData.newsItems.map((item, index) => (
                      <div
                        key={item.id}
                        className="p-3 border border-[#171717]/20 rounded-lg bg-white"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-[#171717]/60">
                            News Item {index + 1}
                          </span>
                          <button
                            onClick={() => removeNewsItem(item.id)}
                            className="px-2 py-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <div className="grid grid-cols-1 gap-3">
                          <div>
                            <label className="block text-xs text-[#171717]/60 mb-1">
                              Title
                            </label>
                            <input
                              type="text"
                              value={item.title}
                              onChange={(e) =>
                                updateNewsItem(item.id, 'title', e.target.value)
                              }
                              className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                              placeholder="News Title"
                            />
                          </div>
                          <div>
                            <label className="block text-xs text-[#171717]/60 mb-1">
                              Description
                            </label>
                            <textarea
                              rows={3}
                              value={item.description}
                              onChange={(e) =>
                                updateNewsItem(
                                  item.id,
                                  'description',
                                  e.target.value
                                )
                              }
                              className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                              placeholder="News description"
                            />
                          </div>
                          <div>
                            <label className="block text-xs text-[#171717]/60 mb-1">
                              Date
                            </label>
                            <input
                              type="text"
                              value={item.date}
                              onChange={(e) =>
                                updateNewsItem(item.id, 'date', e.target.value)
                              }
                              className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                              placeholder="January 15, 2025"
                            />
                          </div>
                          <div>
                            <label className="block text-xs text-[#171717]/60 mb-1">
                              Download URL
                            </label>
                            <input
                              type="text"
                              value={item.downloadUrl}
                              onChange={(e) =>
                                updateNewsItem(
                                  item.id,
                                  'downloadUrl',
                                  e.target.value
                                )
                              }
                              className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                              placeholder="/documents/file.pdf"
                            />
                          </div>
                          <div>
                            <label className="block text-xs text-[#171717]/60 mb-1">
                              Read More URL
                            </label>
                            <input
                              type="text"
                              value={item.readMoreUrl}
                              onChange={(e) =>
                                updateNewsItem(
                                  item.id,
                                  'readMoreUrl',
                                  e.target.value
                                )
                              }
                              className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                              placeholder="/news/news-item"
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
                  {/* Stats */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-lg font-semibold text-[#171717]">
                      Total Rules: {cpdaData.newsItems.length}
                    </div>
                    <div className="text-sm text-[#171717]/60">
                      Showing {cpdaData.newsItems.length} of{' '}
                      {cpdaData.newsItems.length} news items
                    </div>
                  </div>

                  {/* News Items */}
                  <div className="space-y-4">
                    {cpdaData.newsItems.map((item) => (
                      <div
                        key={item.id}
                        className="bg-white border border-[#171717]/20 rounded-lg p-6 hover:shadow-md transition-shadow"
                      >
                        <h3 className="text-xl font-bold text-[#171717] mb-3">
                          {item.title}
                        </h3>
                        <p className="text-sm text-[#171717]/70 mb-4 leading-relaxed">
                          {item.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-[#171717]/60">
                            <Calendar size={16} className="text-[#631012]" />
                            <span>{item.date}</span>
                          </div>
                          <div className="flex gap-2">
                            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
                              <Download size={16} />
                              Download
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 bg-[#631012] text-white text-sm rounded-lg hover:bg-[#7a1214] transition-colors">
                              Read More
                              <ExternalLink size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
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
