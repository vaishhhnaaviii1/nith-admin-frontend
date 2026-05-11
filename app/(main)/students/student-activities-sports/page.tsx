'use client';

import React, { useState } from 'react';
import {
  Save,
  Trophy,
  Plus,
  Trash2,
  FileText,
  Target,
  Award,
  Users,
} from 'lucide-react';

interface SportCategory {
  id: number;
  name: string;
  description: string;
  facilities: string[];
  achievements: string[];
}

interface ActivitiesData {
  heroHeading: string;
  heroDescription: string;
  overviewHeading: string;
  overviewDescription: string;
  stats: { label: string; value: string }[];
  categoriesHeading: string;
  categoriesSubtitle: string;
  categories: SportCategory[];
}

type TabType = 'hero' | 'overview' | 'categories';

export default function StudentActivitiesSportsPage() {
  const [activeTab, setActiveTab] = useState<TabType>('hero');

  const [activitiesData, setActivitiesData] = useState<ActivitiesData>({
    heroHeading: 'Student Activities & Sports',
    heroDescription:
      'NIT Hamirpur offers a comprehensive sports program that promotes physical fitness, team spirit, and competitive excellence among students.',
    overviewHeading: 'Sports at NITH',
    overviewDescription:
      'Our world-class sports facilities and dedicated coaching staff help students achieve excellence in various sports disciplines. We believe in holistic development through sports and physical activities.',
    stats: [
      { label: 'Sports Facilities', value: '15+' },
      { label: 'Annual Events', value: '25+' },
      { label: 'Student Athletes', value: '1000+' },
      { label: 'National Winners', value: '50+' },
    ],
    categoriesHeading: 'Sports Categories',
    categoriesSubtitle: 'Explore our diverse range of sports and activities',
    categories: [
      {
        id: 1,
        name: 'Team Sports',
        description: 'Cricket, Football, Basketball, Volleyball, Hockey',
        facilities: [
          'Cricket Ground',
          'Football Field',
          'Basketball Court',
          'Volleyball Court',
        ],
        achievements: [
          'Inter-NIT Cricket Champions 2024',
          'North Zone Football Runners-up 2024',
        ],
      },
      {
        id: 2,
        name: 'Individual Sports',
        description: 'Athletics, Swimming, Badminton, Table Tennis, Tennis',
        facilities: [
          'Athletic Track',
          'Swimming Pool',
          'Indoor Stadium',
          'Tennis Courts',
        ],
        achievements: [
          'State Athletics Gold 2024',
          'National Badminton Bronze 2024',
        ],
      },
      {
        id: 3,
        name: 'Fitness & Wellness',
        description: 'Gym, Yoga, Aerobics, Martial Arts',
        facilities: ['Modern Gymnasium', 'Yoga Hall', 'Aerobics Studio'],
        achievements: ['Best Fitness Program Award 2024'],
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
      id: 'overview' as TabType,
      label: 'Overview & Stats',
      icon: <Target size={18} />,
    },
    {
      id: 'categories' as TabType,
      label: 'Sports Categories',
      icon: <Trophy size={18} />,
    },
  ];

  const handleSave = () => {
    alert('Changes saved successfully!');
    console.log(activitiesData);
  };

  const addCategory = () => {
    const newCategory: SportCategory = {
      id: Date.now(),
      name: '',
      description: '',
      facilities: [''],
      achievements: [''],
    };
    setActivitiesData({
      ...activitiesData,
      categories: [...activitiesData.categories, newCategory],
    });
  };

  const removeCategory = (id: number) => {
    setActivitiesData({
      ...activitiesData,
      categories: activitiesData.categories.filter((c) => c.id !== id),
    });
  };

  const updateCategory = (
    id: number,
    field: keyof SportCategory,
    value: string | string[]
  ) => {
    setActivitiesData({
      ...activitiesData,
      categories: activitiesData.categories.map((c) =>
        c.id === id ? { ...c, [field]: value } : c
      ),
    });
  };

  const updateStat = (
    index: number,
    field: 'label' | 'value',
    value: string
  ) => {
    const updated = [...activitiesData.stats];
    updated[index] = { ...updated[index], [field]: value };
    setActivitiesData({ ...activitiesData, stats: updated });
  };

  const addStat = () => {
    setActivitiesData({
      ...activitiesData,
      stats: [...activitiesData.stats, { label: '', value: '' }],
    });
  };

  const removeStat = (index: number) => {
    setActivitiesData({
      ...activitiesData,
      stats: activitiesData.stats.filter((_, i) => i !== index),
    });
  };

  return (
    <div className="space-y-4 sm:space-y-6 p-2 sm:p-4 lg:p-6">
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="bg-[#631012]/10 p-2 sm:p-3 rounded-full text-[#631012] flex-shrink-0">
              <Trophy className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#171717] break-words">
                Activities & Sports Editor
              </h1>
              <p className="text-sm sm:text-base text-[#171717]/60 mt-1">
                Manage student activities and sports content
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
                    value={activitiesData.heroHeading}
                    onChange={(e) =>
                      setActivitiesData({
                        ...activitiesData,
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
                    value={activitiesData.heroDescription}
                    onChange={(e) =>
                      setActivitiesData({
                        ...activitiesData,
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
                  {activitiesData.heroHeading}
                </h3>
                <p className="text-white/80">
                  {activitiesData.heroDescription}
                </p>
              </div>
            </div>
          )}

          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <Target className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Overview & Statistics
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Overview Heading
                  </label>
                  <input
                    type="text"
                    value={activitiesData.overviewHeading}
                    onChange={(e) =>
                      setActivitiesData({
                        ...activitiesData,
                        overviewHeading: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] text-black"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Overview Description
                  </label>
                  <textarea
                    value={activitiesData.overviewDescription}
                    onChange={(e) =>
                      setActivitiesData({
                        ...activitiesData,
                        overviewDescription: e.target.value,
                      })
                    }
                    rows={3}
                    className="w-full px-4 py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] text-black"
                  />
                </div>
              </div>

              <div className="mt-6">
                <div className="flex items-center justify-between mb-4">
                  <label className="block text-sm font-medium text-[#171717]">
                    Statistics
                  </label>
                  <button
                    onClick={addStat}
                    className="text-[#631012] hover:text-[#7a1214] flex items-center gap-1 text-sm"
                  >
                    <Plus size={16} /> Add Stat
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activitiesData.stats.map((stat, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-[#F9F9F9] p-3 rounded-lg"
                    >
                      <input
                        type="text"
                        value={stat.value}
                        onChange={(e) =>
                          updateStat(index, 'value', e.target.value)
                        }
                        className="w-20 px-2 py-1 border border-[#171717]/20 rounded text-black font-bold"
                        placeholder="Value"
                      />
                      <input
                        type="text"
                        value={stat.label}
                        onChange={(e) =>
                          updateStat(index, 'label', e.target.value)
                        }
                        className="flex-1 px-2 py-1 border border-[#171717]/20 rounded text-black"
                        placeholder="Label"
                      />
                      <button
                        onClick={() => removeStat(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 p-6 bg-[#F9F9F9] rounded-xl border border-[#171717]/10">
                <h3 className="text-xl font-bold text-[#171717] mb-3">
                  {activitiesData.overviewHeading}
                </h3>
                <p className="text-[#171717]/70 mb-6">
                  {activitiesData.overviewDescription}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {activitiesData.stats.map((stat, index) => (
                    <div
                      key={index}
                      className="text-center p-4 bg-white rounded-lg shadow-sm"
                    >
                      <p className="text-2xl font-bold text-[#631012]">
                        {stat.value}
                      </p>
                      <p className="text-sm text-[#171717]/60">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'categories' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Trophy className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                  <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                    Sports Categories
                  </h2>
                </div>
                <button
                  onClick={addCategory}
                  className="bg-[#631012] hover:bg-[#7a1214] text-white px-4 py-2 rounded-lg flex items-center gap-2"
                >
                  <Plus size={18} /> Add Category
                </button>
              </div>

              <div className="grid grid-cols-1 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Section Heading
                  </label>
                  <input
                    type="text"
                    value={activitiesData.categoriesHeading}
                    onChange={(e) =>
                      setActivitiesData({
                        ...activitiesData,
                        categoriesHeading: e.target.value,
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
                    value={activitiesData.categoriesSubtitle}
                    onChange={(e) =>
                      setActivitiesData({
                        ...activitiesData,
                        categoriesSubtitle: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] text-black"
                  />
                </div>
              </div>

              <div className="space-y-4">
                {activitiesData.categories.map((category, index) => (
                  <div
                    key={category.id}
                    className="border border-[#171717]/20 rounded-lg p-4 bg-[#F9F9F9]"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-semibold text-[#631012]">
                        Category #{index + 1}
                      </span>
                      <button
                        onClick={() => removeCategory(category.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#171717] mb-1">
                          Category Name
                        </label>
                        <input
                          type="text"
                          value={category.name}
                          onChange={(e) =>
                            updateCategory(category.id, 'name', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg text-black"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#171717] mb-1">
                          Description
                        </label>
                        <textarea
                          value={category.description}
                          onChange={(e) =>
                            updateCategory(
                              category.id,
                              'description',
                              e.target.value
                            )
                          }
                          rows={2}
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg text-black"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#171717] mb-1">
                          Facilities (comma-separated)
                        </label>
                        <input
                          type="text"
                          value={category.facilities.join(', ')}
                          onChange={(e) =>
                            updateCategory(
                              category.id,
                              'facilities',
                              e.target.value.split(', ')
                            )
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg text-black"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#171717] mb-1">
                          Achievements (comma-separated)
                        </label>
                        <input
                          type="text"
                          value={category.achievements.join(', ')}
                          onChange={(e) =>
                            updateCategory(
                              category.id,
                              'achievements',
                              e.target.value.split(', ')
                            )
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {activitiesData.categories.map((category) => (
                    <div
                      key={category.id}
                      className="bg-white border border-[#171717]/10 rounded-lg p-4 shadow-sm"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <Trophy className="text-[#631012]" size={20} />
                        <h4 className="font-semibold text-[#171717]">
                          {category.name}
                        </h4>
                      </div>
                      <p className="text-sm text-[#171717]/70 mb-3">
                        {category.description}
                      </p>
                      <div className="mb-3">
                        <p className="text-xs font-medium text-[#631012] mb-1">
                          Facilities:
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {category.facilities.map((f, i) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 bg-[#631012]/10 text-[#631012] rounded text-xs"
                            >
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-green-700 mb-1">
                          Achievements:
                        </p>
                        <ul className="text-xs text-[#171717]/60 list-disc list-inside">
                          {category.achievements.map((a, i) => (
                            <li key={i}>{a}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
