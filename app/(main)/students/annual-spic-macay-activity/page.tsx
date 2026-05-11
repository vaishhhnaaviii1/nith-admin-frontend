'use client';

import React, { useState } from 'react';
import {
  Save,
  Music2,
  Plus,
  Trash2,
  FileText,
  Calendar,
  Users,
  MapPin,
} from 'lucide-react';

interface Performance {
  id: number;
  artistName: string;
  artForm: string;
  date: string;
  venue: string;
  description: string;
}

interface SpicMacayData {
  heroHeading: string;
  heroDescription: string;
  aboutHeading: string;
  aboutDescription: string;
  objectives: string[];
  performancesHeading: string;
  performancesSubtitle: string;
  performances: Performance[];
  contactHeading: string;
  contactDescription: string;
}

type TabType = 'hero' | 'about' | 'performances' | 'contact';

export default function AnnualSpicMacayActivityPage() {
  const [activeTab, setActiveTab] = useState<TabType>('hero');

  const [spicData, setSpicData] = useState<SpicMacayData>({
    heroHeading: 'Annual SPIC MACAY Activity',
    heroDescription:
      'Society for the Promotion of Indian Classical Music And Culture Amongst Youth - Bringing the rich heritage of Indian classical arts to NIT Hamirpur.',
    aboutHeading: 'About SPIC MACAY',
    aboutDescription:
      'SPIC MACAY is a voluntary youth movement that promotes Indian classical music, classical dance, folk arts, yoga, and Indian crafts among the youth. At NIT Hamirpur, we organize regular programs featuring legendary artists.',
    objectives: [
      'Promote awareness about Indian classical music and dance',
      'Organize workshops and lecture demonstrations',
      'Provide platform for students to interact with maestros',
      'Preserve and propagate Indian cultural heritage',
      'Foster appreciation for traditional art forms',
    ],
    performancesHeading: 'Past Performances',
    performancesSubtitle: 'Memorable cultural events that enriched our campus',
    performances: [
      {
        id: 1,
        artistName: 'Pt. Vishwa Mohan Bhatt',
        artForm: 'Mohan Veena',
        date: '2024-09-15',
        venue: 'Main Auditorium',
        description: 'Grammy Award-winning artist performed mesmerizing ragas',
      },
      {
        id: 2,
        artistName: 'Vidushi Aruna Sairam',
        artForm: 'Carnatic Vocal',
        date: '2024-08-20',
        venue: 'Open Air Theatre',
        description: 'Enchanting evening of South Indian classical music',
      },
      {
        id: 3,
        artistName: 'Pt. Birju Maharaj Disciples',
        artForm: 'Kathak',
        date: '2024-07-10',
        venue: 'Main Auditorium',
        description: 'Spectacular Kathak dance performance',
      },
      {
        id: 4,
        artistName: 'Ustad Amjad Ali Khan',
        artForm: 'Sarod',
        date: '2024-03-05',
        venue: 'Convention Hall',
        description: 'Legendary sarod recital that captivated the audience',
      },
    ],
    contactHeading: 'Join SPIC MACAY',
    contactDescription:
      'Be part of this cultural movement. Contact the SPIC MACAY coordinator at NIT Hamirpur to participate in organizing events and volunteering.',
  });

  const tabs = [
    {
      id: 'hero' as TabType,
      label: 'Hero Section',
      icon: <FileText size={18} />,
    },
    {
      id: 'about' as TabType,
      label: 'About & Objectives',
      icon: <Users size={18} />,
    },
    {
      id: 'performances' as TabType,
      label: 'Performances',
      icon: <Music2 size={18} />,
    },
    { id: 'contact' as TabType, label: 'Contact', icon: <MapPin size={18} /> },
  ];

  const handleSave = () => {
    alert('Changes saved successfully!');
    console.log(spicData);
  };

  const addPerformance = () => {
    const newPerf: Performance = {
      id: Date.now(),
      artistName: '',
      artForm: '',
      date: '',
      venue: '',
      description: '',
    };
    setSpicData({
      ...spicData,
      performances: [...spicData.performances, newPerf],
    });
  };

  const removePerformance = (id: number) => {
    setSpicData({
      ...spicData,
      performances: spicData.performances.filter((p) => p.id !== id),
    });
  };

  const updatePerformance = (
    id: number,
    field: keyof Performance,
    value: string
  ) => {
    setSpicData({
      ...spicData,
      performances: spicData.performances.map((p) =>
        p.id === id ? { ...p, [field]: value } : p
      ),
    });
  };

  const addObjective = () =>
    setSpicData({ ...spicData, objectives: [...spicData.objectives, ''] });
  const removeObjective = (index: number) =>
    setSpicData({
      ...spicData,
      objectives: spicData.objectives.filter((_, i) => i !== index),
    });
  const updateObjective = (index: number, value: string) => {
    const updated = [...spicData.objectives];
    updated[index] = value;
    setSpicData({ ...spicData, objectives: updated });
  };

  return (
    <div className="space-y-4 sm:space-y-6 p-2 sm:p-4 lg:p-6">
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="bg-[#631012]/10 p-2 sm:p-3 rounded-full text-[#631012] flex-shrink-0">
              <Music2 className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#171717] break-words">
                SPIC MACAY Editor
              </h1>
              <p className="text-sm sm:text-base text-[#171717]/60 mt-1">
                Manage SPIC MACAY activities
              </p>
            </div>
          </div>
          <button
            onClick={handleSave}
            className="bg-[#631012] hover:bg-[#7a1214] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg flex items-center gap-2 transition-colors shadow-md w-full sm:w-auto justify-center"
          >
            <Save className="w-4 h-4 sm:w-5 sm:h-5" /> Save Changes
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
                className={`flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-4 font-medium transition-colors whitespace-nowrap text-sm sm:text-base flex-shrink-0 ${activeTab === tab.id ? 'bg-[#631012] text-white' : 'text-[#171717]/70 hover:bg-[#F9F9F9]'}`}
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
                <FileText className="text-[#631012]" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Hero Section
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Main Heading
                  </label>
                  <input
                    type="text"
                    value={spicData.heroHeading}
                    onChange={(e) =>
                      setSpicData({ ...spicData, heroHeading: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-[#171717]/20 rounded-lg focus:ring-2 focus:ring-[#631012] text-black"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Description
                  </label>
                  <textarea
                    value={spicData.heroDescription}
                    onChange={(e) =>
                      setSpicData({
                        ...spicData,
                        heroDescription: e.target.value,
                      })
                    }
                    rows={3}
                    className="w-full px-4 py-3 border border-[#171717]/20 rounded-lg focus:ring-2 focus:ring-[#631012] text-black"
                  />
                </div>
              </div>
              <div className="mt-8 p-6 bg-gradient-to-r from-[#631012] to-[#8B1538] rounded-xl text-white">
                <h3 className="text-2xl font-bold mb-2">
                  {spicData.heroHeading}
                </h3>
                <p className="text-white/80">{spicData.heroDescription}</p>
              </div>
            </div>
          )}

          {activeTab === 'about' && (
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <Users className="text-[#631012]" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  About & Objectives
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    About Heading
                  </label>
                  <input
                    type="text"
                    value={spicData.aboutHeading}
                    onChange={(e) =>
                      setSpicData({ ...spicData, aboutHeading: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-[#171717]/20 rounded-lg focus:ring-2 focus:ring-[#631012] text-black"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    About Description
                  </label>
                  <textarea
                    value={spicData.aboutDescription}
                    onChange={(e) =>
                      setSpicData({
                        ...spicData,
                        aboutDescription: e.target.value,
                      })
                    }
                    rows={4}
                    className="w-full px-4 py-3 border border-[#171717]/20 rounded-lg focus:ring-2 focus:ring-[#631012] text-black"
                  />
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-medium text-[#171717]">
                    Objectives
                  </label>
                  <button
                    onClick={addObjective}
                    className="text-[#631012] hover:text-[#7a1214] flex items-center gap-1 text-sm"
                  >
                    <Plus size={16} /> Add
                  </button>
                </div>
                <div className="space-y-2">
                  {spicData.objectives.map((obj, index) => (
                    <div key={index} className="flex gap-2">
                      <input
                        type="text"
                        value={obj}
                        onChange={(e) => updateObjective(index, e.target.value)}
                        className="flex-1 px-3 py-2 border border-[#171717]/20 rounded-lg text-black"
                      />
                      <button
                        onClick={() => removeObjective(index)}
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
                  {spicData.aboutHeading}
                </h3>
                <p className="text-[#171717]/70 mb-4">
                  {spicData.aboutDescription}
                </p>
                <h4 className="font-semibold text-[#631012] mb-2">
                  Our Objectives:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-[#171717]/70">
                  {spicData.objectives.map((obj, i) => (
                    <li key={i}>{obj}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'performances' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Music2 className="text-[#631012]" />
                  <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                    Performances
                  </h2>
                </div>
                <button
                  onClick={addPerformance}
                  className="bg-[#631012] hover:bg-[#7a1214] text-white px-4 py-2 rounded-lg flex items-center gap-2"
                >
                  <Plus size={18} /> Add Performance
                </button>
              </div>
              <div className="grid grid-cols-1 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Section Heading
                  </label>
                  <input
                    type="text"
                    value={spicData.performancesHeading}
                    onChange={(e) =>
                      setSpicData({
                        ...spicData,
                        performancesHeading: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-[#171717]/20 rounded-lg focus:ring-2 focus:ring-[#631012] text-black"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Section Subtitle
                  </label>
                  <input
                    type="text"
                    value={spicData.performancesSubtitle}
                    onChange={(e) =>
                      setSpicData({
                        ...spicData,
                        performancesSubtitle: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-[#171717]/20 rounded-lg focus:ring-2 focus:ring-[#631012] text-black"
                  />
                </div>
              </div>
              <div className="space-y-4">
                {spicData.performances.map((perf, index) => (
                  <div
                    key={perf.id}
                    className="border border-[#171717]/20 rounded-lg p-4 bg-[#F9F9F9]"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-semibold text-[#631012]">
                        Performance #{index + 1}
                      </span>
                      <button
                        onClick={() => removePerformance(perf.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#171717] mb-1">
                          Artist Name
                        </label>
                        <input
                          type="text"
                          value={perf.artistName}
                          onChange={(e) =>
                            updatePerformance(
                              perf.id,
                              'artistName',
                              e.target.value
                            )
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg text-black"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#171717] mb-1">
                          Art Form
                        </label>
                        <input
                          type="text"
                          value={perf.artForm}
                          onChange={(e) =>
                            updatePerformance(
                              perf.id,
                              'artForm',
                              e.target.value
                            )
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
                          value={perf.date}
                          onChange={(e) =>
                            updatePerformance(perf.id, 'date', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg text-black"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#171717] mb-1">
                          Venue
                        </label>
                        <input
                          type="text"
                          value={perf.venue}
                          onChange={(e) =>
                            updatePerformance(perf.id, 'venue', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg text-black"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-[#171717] mb-1">
                          Description
                        </label>
                        <input
                          type="text"
                          value={perf.description}
                          onChange={(e) =>
                            updatePerformance(
                              perf.id,
                              'description',
                              e.target.value
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {spicData.performances.map((perf) => (
                    <div
                      key={perf.id}
                      className="bg-white border border-[#171717]/10 rounded-lg p-4 shadow-sm"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-medium">
                          {perf.artForm}
                        </span>
                        <span className="text-xs text-[#171717]/50">
                          {perf.date}
                        </span>
                      </div>
                      <h4 className="font-semibold text-[#171717]">
                        {perf.artistName}
                      </h4>
                      <p className="text-sm text-[#171717]/70 mb-2">
                        {perf.description}
                      </p>
                      <p className="text-xs text-[#631012]">
                        <MapPin size={12} className="inline mr-1" />
                        {perf.venue}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'contact' && (
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="text-[#631012]" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Contact Section
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Contact Heading
                  </label>
                  <input
                    type="text"
                    value={spicData.contactHeading}
                    onChange={(e) =>
                      setSpicData({
                        ...spicData,
                        contactHeading: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-[#171717]/20 rounded-lg focus:ring-2 focus:ring-[#631012] text-black"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Contact Description
                  </label>
                  <textarea
                    value={spicData.contactDescription}
                    onChange={(e) =>
                      setSpicData({
                        ...spicData,
                        contactDescription: e.target.value,
                      })
                    }
                    rows={3}
                    className="w-full px-4 py-3 border border-[#171717]/20 rounded-lg focus:ring-2 focus:ring-[#631012] text-black"
                  />
                </div>
              </div>
              <div className="mt-8 p-6 bg-[#F9F9F9] rounded-xl border border-[#171717]/10">
                <h3 className="text-xl font-bold text-[#171717] mb-2">
                  {spicData.contactHeading}
                </h3>
                <p className="text-[#171717]/70">
                  {spicData.contactDescription}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
