'use client';

import React, { useState } from 'react';
import { Save, Award, Plus, Trash2, FileText } from 'lucide-react';

interface AchievementItem {
  title: string;
  description: string;
  year: string;
  category: string;
}

interface AchievementsData {
  heading: string;
  subtitle: string;
  achievements: AchievementItem[];
  errorMessage: string;
}

type TabType = 'content' | 'achievements';

export default function AchievementsPage() {
  const [activeTab, setActiveTab] = useState<TabType>('content');

  const [achievementsData, setAchievementsData] = useState<AchievementsData>({
    heading: 'Achievements',
    subtitle: 'Our milestones and accomplishments',
    achievements: [
      {
        title: 'NIRF Ranking Improved',
        description: 'Secured better position in NIRF rankings',
        year: '2024',
        category: 'Ranking',
      },
      {
        title: 'Research Grant',
        description: 'Received major research funding from government',
        year: '2024',
        category: 'Research',
      },
      {
        title: 'National Award',
        description: 'Faculty received prestigious national recognition',
        year: '2023',
        category: 'Award',
      },
    ],
    errorMessage: 'Error fetching achievements',
  });

  const tabs = [
    {
      id: 'content' as TabType,
      label: 'Section Content',
      icon: <FileText size={18} />,
    },
    {
      id: 'achievements' as TabType,
      label: 'Achievements',
      icon: <Award size={18} />,
    },
  ];

  const handleSave = () => {
    alert('Changes saved successfully!');
    console.log(achievementsData);
  };

  const updateAchievement = (
    index: number,
    field: keyof AchievementItem,
    value: string
  ) => {
    const updated = [...achievementsData.achievements];
    updated[index] = { ...updated[index], [field]: value };
    setAchievementsData({ ...achievementsData, achievements: updated });
  };

  const addAchievement = () => {
    setAchievementsData({
      ...achievementsData,
      achievements: [
        ...achievementsData.achievements,
        { title: '', description: '', year: '', category: '' },
      ],
    });
  };

  const removeAchievement = (index: number) => {
    setAchievementsData({
      ...achievementsData,
      achievements: achievementsData.achievements.filter((_, i) => i !== index),
    });
  };

  return (
    <div className="space-y-4 sm:space-y-6 p-2 sm:p-4 lg:p-6">
      <div className="bg-gradient-to-r from-[#631012] to-[#7a1214] rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 text-white">
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <Award className="w-6 h-6 sm:w-8 sm:h-8" />
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
            Achievements
          </h1>
        </div>
        <p className="text-sm sm:text-base text-white/90">
          Manage achievements section content
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="bg-[#631012]/10 p-2 sm:p-3 rounded-full text-[#631012] flex-shrink-0">
              <Award className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#171717] break-words">
                Achievements Editor
              </h1>
              <p className="text-sm sm:text-base text-[#171717]/60 mt-1">
                Edit achievements content
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
          {/* Section Content */}
          {activeTab === 'content' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <FileText className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Section Content
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Heading
                  </label>
                  <input
                    type="text"
                    value={achievementsData.heading}
                    onChange={(e) =>
                      setAchievementsData({
                        ...achievementsData,
                        heading: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Achievements"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Subtitle
                  </label>
                  <input
                    type="text"
                    value={achievementsData.subtitle}
                    onChange={(e) =>
                      setAchievementsData({
                        ...achievementsData,
                        subtitle: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Our milestones"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Error Message
                  </label>
                  <input
                    type="text"
                    value={achievementsData.errorMessage}
                    onChange={(e) =>
                      setAchievementsData({
                        ...achievementsData,
                        errorMessage: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Error fetching achievements"
                  />
                </div>
              </div>

              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
                  Preview:
                </p>
                <div className="bg-white p-4 sm:p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-[#171717] mb-2">
                    {achievementsData.heading}
                  </h3>
                  <p className="text-sm text-[#171717]/60">
                    {achievementsData.subtitle}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Achievements */}
          {activeTab === 'achievements' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Award className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Achievements List
                </h2>
              </div>

              <div className="space-y-3">
                {achievementsData.achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="p-4 border border-[#171717]/20 rounded-lg bg-[#F9F9F9] space-y-3"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-[#171717]/60">
                        Achievement {index + 1}
                      </span>
                      <button
                        onClick={() => removeAchievement(index)}
                        className="px-2 py-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs text-[#171717]/60 mb-1">
                          Title
                        </label>
                        <input
                          type="text"
                          value={achievement.title}
                          onChange={(e) =>
                            updateAchievement(index, 'title', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                          placeholder="Achievement title"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-[#171717]/60 mb-1">
                          Year
                        </label>
                        <input
                          type="text"
                          value={achievement.year}
                          onChange={(e) =>
                            updateAchievement(index, 'year', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                          placeholder="2024"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs text-[#171717]/60 mb-1">
                        Category
                      </label>
                      <input
                        type="text"
                        value={achievement.category}
                        onChange={(e) =>
                          updateAchievement(index, 'category', e.target.value)
                        }
                        className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                        placeholder="Ranking, Research, Award"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-[#171717]/60 mb-1">
                        Description
                      </label>
                      <textarea
                        rows={2}
                        value={achievement.description}
                        onChange={(e) =>
                          updateAchievement(
                            index,
                            'description',
                            e.target.value
                          )
                        }
                        className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                        placeholder="Achievement description"
                      />
                    </div>
                  </div>
                ))}
                <button
                  onClick={addAchievement}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 text-[#631012] hover:bg-[#631012]/10 rounded-lg transition-colors text-sm sm:text-base"
                >
                  <Plus size={18} />
                  Add Achievement
                </button>
              </div>

              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
                  Preview:
                </p>
                <div className="bg-white p-4 sm:p-6 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {achievementsData.achievements.map((achievement, index) => (
                      <div
                        key={index}
                        className="bg-[#F9F9F9] p-4 rounded-lg border border-[#171717]/10"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-xs bg-[#631012]/10 text-[#631012] px-2 py-1 rounded">
                            {achievement.category}
                          </span>
                          <span className="text-xs text-[#171717]/60">
                            {achievement.year}
                          </span>
                        </div>
                        <h4 className="text-base font-semibold text-[#171717] mb-2">
                          {achievement.title}
                        </h4>
                        <p className="text-sm text-[#171717]/70">
                          {achievement.description}
                        </p>
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
