'use client';

import React, { useState } from 'react';
import {
  Save,
  TrendingUp,
  Plus,
  Trash2,
  FileText,
  Building2,
} from 'lucide-react';

interface StatItem {
  value: string;
  label: string;
}

interface PlacementsData {
  heading: string;
  subtitle: string;
  stats: StatItem[];
  recruitersHeading: string;
  recruitersDescription: string;
  topRecruiters: string[];
}

type TabType = 'stats' | 'recruiters';

export default function PlacementsPage() {
  const [activeTab, setActiveTab] = useState<TabType>('stats');

  const [placementsData, setPlacementsData] = useState<PlacementsData>({
    heading: 'Placement Statistics',
    subtitle: 'Our placement track record',
    stats: [
      { value: '95%', label: 'Placement Rate' },
      { value: '₹12L', label: 'Avg Package' },
    ],
    recruitersHeading: 'Top Recruiters',
    recruitersDescription:
      'Leading companies from various sectors visit our campus for recruitment including technology giants, consulting firms, and core engineering companies.',
    topRecruiters: [
      'Google',
      'Microsoft',
      'Amazon',
      'Adobe',
      'Flipkart',
      'Goldman Sachs',
    ],
  });

  const tabs = [
    {
      id: 'stats' as TabType,
      label: 'Statistics',
      icon: <TrendingUp size={18} />,
    },
    {
      id: 'recruiters' as TabType,
      label: 'Top Recruiters',
      icon: <Building2 size={18} />,
    },
  ];

  const handleSave = () => {
    alert('Changes saved successfully!');
    console.log(placementsData);
  };

  const updateStat = (index: number, field: keyof StatItem, value: string) => {
    const updated = [...placementsData.stats];
    updated[index] = { ...updated[index], [field]: value };
    setPlacementsData({ ...placementsData, stats: updated });
  };

  const addStat = () => {
    setPlacementsData({
      ...placementsData,
      stats: [...placementsData.stats, { value: '', label: '' }],
    });
  };

  const removeStat = (index: number) => {
    setPlacementsData({
      ...placementsData,
      stats: placementsData.stats.filter((_, i) => i !== index),
    });
  };

  const updateRecruiter = (index: number, value: string) => {
    const updated = [...placementsData.topRecruiters];
    updated[index] = value;
    setPlacementsData({ ...placementsData, topRecruiters: updated });
  };

  const addRecruiter = () => {
    setPlacementsData({
      ...placementsData,
      topRecruiters: [...placementsData.topRecruiters, ''],
    });
  };

  const removeRecruiter = (index: number) => {
    setPlacementsData({
      ...placementsData,
      topRecruiters: placementsData.topRecruiters.filter((_, i) => i !== index),
    });
  };

  return (
    <div className="space-y-4 sm:space-y-6 p-2 sm:p-4 lg:p-6">
      <div className="bg-gradient-to-r from-[#631012] to-[#7a1214] rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 text-white">
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8" />
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
            Placements
          </h1>
        </div>
        <p className="text-sm sm:text-base text-white/90">
          Manage placement statistics and recruiters
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="bg-[#631012]/10 p-2 sm:p-3 rounded-full text-[#631012] flex-shrink-0">
              <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#171717] break-words">
                Placements Editor
              </h1>
              <p className="text-sm sm:text-base text-[#171717]/60 mt-1">
                Edit placement data
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
          {/* Statistics */}
          {activeTab === 'stats' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <TrendingUp className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Placement Statistics
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#171717] mb-2">
                      Heading
                    </label>
                    <input
                      type="text"
                      value={placementsData.heading}
                      onChange={(e) =>
                        setPlacementsData({
                          ...placementsData,
                          heading: e.target.value,
                        })
                      }
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                      placeholder="Placement Statistics"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#171717] mb-2">
                      Subtitle
                    </label>
                    <input
                      type="text"
                      value={placementsData.subtitle}
                      onChange={(e) =>
                        setPlacementsData({
                          ...placementsData,
                          subtitle: e.target.value,
                        })
                      }
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                      placeholder="Our placement track record"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Statistics
                  </label>
                  <div className="space-y-3">
                    {placementsData.stats.map((stat, index) => (
                      <div
                        key={index}
                        className="p-3 border border-[#171717]/20 rounded-lg bg-[#F9F9F9]"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-[#171717]/60">
                            Stat {index + 1}
                          </span>
                          <button
                            onClick={() => removeStat(index)}
                            className="px-2 py-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          <div>
                            <label className="block text-xs text-[#171717]/60 mb-1">
                              Value
                            </label>
                            <input
                              type="text"
                              value={stat.value}
                              onChange={(e) =>
                                updateStat(index, 'value', e.target.value)
                              }
                              className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                              placeholder="95%"
                            />
                          </div>
                          <div>
                            <label className="block text-xs text-[#171717]/60 mb-1">
                              Label
                            </label>
                            <input
                              type="text"
                              value={stat.label}
                              onChange={(e) =>
                                updateStat(index, 'label', e.target.value)
                              }
                              className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                              placeholder="Placement Rate"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                    <button
                      onClick={addStat}
                      className="flex items-center gap-2 px-3 sm:px-4 py-2 text-[#631012] hover:bg-[#631012]/10 rounded-lg transition-colors text-sm sm:text-base"
                    >
                      <Plus size={18} />
                      Add Stat
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
                  Preview:
                </p>
                <div className="bg-white p-4 sm:p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-[#171717] mb-4">
                    {placementsData.heading}
                  </h3>
                  <div className="flex gap-6">
                    {placementsData.stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <p className="text-3xl font-bold text-[#631012]">
                          {stat.value}
                        </p>
                        <p className="text-sm text-[#171717]/60">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Top Recruiters */}
          {activeTab === 'recruiters' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Building2 className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Top Recruiters
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Heading
                  </label>
                  <input
                    type="text"
                    value={placementsData.recruitersHeading}
                    onChange={(e) =>
                      setPlacementsData({
                        ...placementsData,
                        recruitersHeading: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Top Recruiters"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Description
                  </label>
                  <textarea
                    rows={3}
                    value={placementsData.recruitersDescription}
                    onChange={(e) =>
                      setPlacementsData({
                        ...placementsData,
                        recruitersDescription: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Description"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Company Names
                  </label>
                  <div className="space-y-2">
                    {placementsData.topRecruiters.map((company, index) => (
                      <div key={index} className="flex gap-2">
                        <input
                          type="text"
                          value={company}
                          onChange={(e) =>
                            updateRecruiter(index, e.target.value)
                          }
                          className="flex-1 px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                          placeholder="Company name"
                        />
                        <button
                          onClick={() => removeRecruiter(index)}
                          className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ))}
                    <button
                      onClick={addRecruiter}
                      className="flex items-center gap-2 px-3 sm:px-4 py-2 text-[#631012] hover:bg-[#631012]/10 rounded-lg transition-colors text-sm sm:text-base"
                    >
                      <Plus size={18} />
                      Add Company
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
                  Preview:
                </p>
                <div className="bg-white p-4 sm:p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#171717] mb-2">
                    {placementsData.recruitersHeading}
                  </h3>
                  <p className="text-sm text-[#171717]/70 mb-4">
                    {placementsData.recruitersDescription}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {placementsData.topRecruiters.map((company, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-[#631012]/10 text-[#631012] rounded-full text-sm font-medium"
                      >
                        {company}
                      </span>
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
