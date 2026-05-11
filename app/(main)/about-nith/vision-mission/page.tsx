'use client';

import React, { useState } from 'react';
import { Save, Target, Plus, Trash2, Eye, Compass, Award } from 'lucide-react';

interface MissionPillar {
  title: string;
  description: string;
}

interface LegacyStat {
  value: string;
  label: string;
  description: string;
}

interface VisionMissionData {
  guidingPrinciplesHeading: string;
  guidingPrinciplesDescription: string;
  visionHeading: string;
  visionSubtitle: string;
  visionDescription: string;
  strategicObjectivesHeading: string;
  missionHeading: string;
  missionSubtitle: string;
  missionPillars: MissionPillar[];
  tagline: string;
  taglineDescription: string;
  legacyHeading: string;
  legacySubheading: string;
  legacyStats: LegacyStat[];
}

type TabType = 'vision' | 'mission' | 'legacy';

export default function VisionMissionPage() {
  const [activeTab, setActiveTab] = useState<TabType>('vision');

  const [visionMissionData, setVisionMissionData] = useState<VisionMissionData>(
    {
      guidingPrinciplesHeading: 'Guiding Principles',
      guidingPrinciplesDescription:
        'Our vision and mission define our commitment to academic excellence, research innovation, and holistic human development',
      visionHeading: 'Our Vision',
      visionSubtitle: "Building Tomorrow's Leaders",
      visionDescription:
        'To build a center of excellence in technical education and research that fosters innovation, critical thinking, and societal growth — empowering students to lead with vision, wisdom, and integrity.',
      strategicObjectivesHeading: 'Strategic Objectives',
      missionHeading: 'Our Mission',
      missionSubtitle:
        'Five core pillars that guide our institutional excellence',
      missionPillars: [
        {
          title: 'Academic Excellence',
          description:
            'To provide high-quality technical education and foster an environment that encourages curiosity, creativity, and lifelong learning.',
        },
        {
          title: 'Research & Innovation',
          description:
            'To promote cutting-edge research and innovation that contributes to sustainable technological and social development.',
        },
        {
          title: 'Holistic Development',
          description:
            'To cultivate ethical values, leadership qualities, and teamwork among students for personal and professional excellence.',
        },
        {
          title: 'Social Contribution',
          description:
            'To leverage technology and knowledge in service of society, addressing real-world challenges with compassion and responsibility.',
        },
        {
          title: 'Global Competence',
          description:
            'To build collaborations with academic and research institutions globally for knowledge exchange and innovation.',
        },
      ],
      tagline: 'Innovation. Integrity. Impact.',
      taglineDescription:
        'Empowering minds, building futures, and advancing humanity through technology.',
      legacyHeading: 'Our Legacy',
      legacySubheading: 'At a Glance',
      legacyStats: [
        {
          value: '1986',
          label: 'Established',
          description: 'Legacy of Excellence',
        },
        {
          value: '5000+',
          label: 'Students',
          description: 'Bright Minds Learning',
        },
        {
          value: '200+',
          label: 'Faculty Members',
          description: 'Expert Educators',
        },
        {
          value: '20+',
          label: 'Departments',
          description: 'Diverse Disciplines',
        },
      ],
    }
  );

  const tabs = [
    {
      id: 'vision' as TabType,
      label: 'Vision Section',
      icon: <Eye size={18} />,
    },
    {
      id: 'mission' as TabType,
      label: 'Mission Section',
      icon: <Compass size={18} />,
    },
    {
      id: 'legacy' as TabType,
      label: 'Legacy Section',
      icon: <Award size={18} />,
    },
  ];

  const handleSave = () => {
    alert('Changes saved successfully!');
    console.log(visionMissionData);
  };

  const updateMissionPillar = (
    index: number,
    field: 'title' | 'description',
    value: string
  ) => {
    const updated = [...visionMissionData.missionPillars];
    updated[index] = { ...updated[index], [field]: value };
    setVisionMissionData({ ...visionMissionData, missionPillars: updated });
  };

  const addMissionPillar = () => {
    setVisionMissionData({
      ...visionMissionData,
      missionPillars: [
        ...visionMissionData.missionPillars,
        { title: '', description: '' },
      ],
    });
  };

  const removeMissionPillar = (index: number) => {
    setVisionMissionData({
      ...visionMissionData,
      missionPillars: visionMissionData.missionPillars.filter(
        (_, i) => i !== index
      ),
    });
  };

  const updateLegacyStat = (
    index: number,
    field: 'value' | 'label' | 'description',
    value: string
  ) => {
    const updated = [...visionMissionData.legacyStats];
    updated[index] = { ...updated[index], [field]: value };
    setVisionMissionData({ ...visionMissionData, legacyStats: updated });
  };

  const addLegacyStat = () => {
    setVisionMissionData({
      ...visionMissionData,
      legacyStats: [
        ...visionMissionData.legacyStats,
        { value: '', label: '', description: '' },
      ],
    });
  };

  const removeLegacyStat = (index: number) => {
    setVisionMissionData({
      ...visionMissionData,
      legacyStats: visionMissionData.legacyStats.filter((_, i) => i !== index),
    });
  };

  return (
    <div className="space-y-4 sm:space-y-6 p-2 sm:p-4 lg:p-6">
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="bg-[#631012]/10 p-2 sm:p-3 rounded-full text-[#631012] flex-shrink-0">
              <Target className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#171717] break-words">
                Vision & Mission Editor
              </h1>
              <p className="text-sm sm:text-base text-[#171717]/60 mt-1">
                Edit vision, mission, and legacy content
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
          {/* Vision Section */}
          {activeTab === 'vision' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Eye className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Vision Section Content
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div className="p-4 bg-[#F9F9F9] rounded-lg border border-[#171717]/10">
                  <h3 className="text-lg font-semibold text-[#171717] mb-3">
                    Guiding Principles Section
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-[#171717] mb-2">
                        Heading
                      </label>
                      <input
                        type="text"
                        value={visionMissionData.guidingPrinciplesHeading}
                        onChange={(e) =>
                          setVisionMissionData({
                            ...visionMissionData,
                            guidingPrinciplesHeading: e.target.value,
                          })
                        }
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                        placeholder="Guiding Principles"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#171717] mb-2">
                        Description
                      </label>
                      <textarea
                        rows={3}
                        value={visionMissionData.guidingPrinciplesDescription}
                        onChange={(e) =>
                          setVisionMissionData({
                            ...visionMissionData,
                            guidingPrinciplesDescription: e.target.value,
                          })
                        }
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                        placeholder="Description"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-[#F9F9F9] rounded-lg border border-[#171717]/10">
                  <h3 className="text-lg font-semibold text-[#171717] mb-3">
                    Our Vision Section
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-[#171717] mb-2">
                        Vision Heading
                      </label>
                      <input
                        type="text"
                        value={visionMissionData.visionHeading}
                        onChange={(e) =>
                          setVisionMissionData({
                            ...visionMissionData,
                            visionHeading: e.target.value,
                          })
                        }
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                        placeholder="Our Vision"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#171717] mb-2">
                        Vision Subtitle
                      </label>
                      <input
                        type="text"
                        value={visionMissionData.visionSubtitle}
                        onChange={(e) =>
                          setVisionMissionData({
                            ...visionMissionData,
                            visionSubtitle: e.target.value,
                          })
                        }
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                        placeholder="Building Tomorrow's Leaders"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#171717] mb-2">
                        Vision Description
                      </label>
                      <textarea
                        rows={4}
                        value={visionMissionData.visionDescription}
                        onChange={(e) =>
                          setVisionMissionData({
                            ...visionMissionData,
                            visionDescription: e.target.value,
                          })
                        }
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                        placeholder="Vision description"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
                  Preview:
                </p>
                <div className="bg-white p-4 sm:p-6 rounded-lg space-y-6">
                  <div className="text-center">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#171717] mb-2">
                      {visionMissionData.guidingPrinciplesHeading}
                    </h3>
                    <p className="text-sm sm:text-base text-[#171717]/70">
                      {visionMissionData.guidingPrinciplesDescription}
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-[#631012]/5 to-[#8B1518]/5 p-6 rounded-lg border border-[#631012]/20">
                    <h4 className="text-lg font-semibold text-[#631012] mb-2">
                      {visionMissionData.visionHeading}
                    </h4>
                    <h5 className="text-2xl font-bold text-[#171717] mb-3">
                      {visionMissionData.visionSubtitle}
                    </h5>
                    <p className="text-sm sm:text-base text-[#171717]/70 leading-relaxed">
                      {visionMissionData.visionDescription}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Mission Section */}
          {activeTab === 'mission' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Compass className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Mission Section Content
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Strategic Objectives Heading
                  </label>
                  <input
                    type="text"
                    value={visionMissionData.strategicObjectivesHeading}
                    onChange={(e) =>
                      setVisionMissionData({
                        ...visionMissionData,
                        strategicObjectivesHeading: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Strategic Objectives"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#171717] mb-2">
                      Mission Heading
                    </label>
                    <input
                      type="text"
                      value={visionMissionData.missionHeading}
                      onChange={(e) =>
                        setVisionMissionData({
                          ...visionMissionData,
                          missionHeading: e.target.value,
                        })
                      }
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                      placeholder="Our Mission"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#171717] mb-2">
                      Mission Subtitle
                    </label>
                    <input
                      type="text"
                      value={visionMissionData.missionSubtitle}
                      onChange={(e) =>
                        setVisionMissionData({
                          ...visionMissionData,
                          missionSubtitle: e.target.value,
                        })
                      }
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                      placeholder="Five core pillars..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Mission Pillars
                  </label>
                  <div className="space-y-3">
                    {visionMissionData.missionPillars.map((pillar, index) => (
                      <div
                        key={index}
                        className="p-3 border border-[#171717]/20 rounded-lg bg-[#F9F9F9] space-y-2"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-[#171717]/60">
                            Pillar {index + 1}
                          </span>
                          <button
                            onClick={() => removeMissionPillar(index)}
                            className="px-2 py-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <div>
                          <label className="block text-xs text-[#171717]/60 mb-1">
                            Title
                          </label>
                          <input
                            type="text"
                            value={pillar.title}
                            onChange={(e) =>
                              updateMissionPillar(
                                index,
                                'title',
                                e.target.value
                              )
                            }
                            className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                            placeholder="Academic Excellence"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-[#171717]/60 mb-1">
                            Description
                          </label>
                          <textarea
                            rows={3}
                            value={pillar.description}
                            onChange={(e) =>
                              updateMissionPillar(
                                index,
                                'description',
                                e.target.value
                              )
                            }
                            className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                            placeholder="Description"
                          />
                        </div>
                      </div>
                    ))}
                    <button
                      onClick={addMissionPillar}
                      className="flex items-center gap-2 px-3 sm:px-4 py-2 text-[#631012] hover:bg-[#631012]/10 rounded-lg transition-colors text-sm sm:text-base"
                    >
                      <Plus size={18} />
                      Add Mission Pillar
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
                  Preview:
                </p>
                <div className="bg-white p-4 sm:p-6 rounded-lg space-y-6">
                  <div className="text-center">
                    <h3 className="text-lg sm:text-xl font-semibold text-[#631012] mb-4">
                      {visionMissionData.strategicObjectivesHeading}
                    </h3>
                  </div>

                  <div>
                    <h4 className="text-2xl font-bold text-[#171717] mb-1">
                      {visionMissionData.missionHeading}
                    </h4>
                    <p className="text-sm text-[#171717]/60 mb-6">
                      {visionMissionData.missionSubtitle}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {visionMissionData.missionPillars.map((pillar, index) => (
                        <div
                          key={index}
                          className="bg-[#F9F9F9] p-4 rounded-lg border border-[#171717]/10 hover:border-[#631012]/30 transition-colors"
                        >
                          <h5 className="text-base font-semibold text-[#171717] mb-2 flex items-center gap-2">
                            <span className="w-6 h-6 flex items-center justify-center bg-[#631012] text-white rounded-full text-xs">
                              {index + 1}
                            </span>
                            {pillar.title}
                          </h5>
                          <p className="text-sm text-[#171717]/70 leading-relaxed">
                            {pillar.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Legacy Section */}
          {activeTab === 'legacy' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Award className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Legacy Section Content
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div className="p-4 bg-[#F9F9F9] rounded-lg border border-[#171717]/10">
                  <h3 className="text-lg font-semibold text-[#171717] mb-3">
                    Tagline Section
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-[#171717] mb-2">
                        Tagline
                      </label>
                      <input
                        type="text"
                        value={visionMissionData.tagline}
                        onChange={(e) =>
                          setVisionMissionData({
                            ...visionMissionData,
                            tagline: e.target.value,
                          })
                        }
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                        placeholder="Innovation. Integrity. Impact."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#171717] mb-2">
                        Tagline Description
                      </label>
                      <textarea
                        rows={3}
                        value={visionMissionData.taglineDescription}
                        onChange={(e) =>
                          setVisionMissionData({
                            ...visionMissionData,
                            taglineDescription: e.target.value,
                          })
                        }
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                        placeholder="Description"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#171717] mb-2">
                      Legacy Heading
                    </label>
                    <input
                      type="text"
                      value={visionMissionData.legacyHeading}
                      onChange={(e) =>
                        setVisionMissionData({
                          ...visionMissionData,
                          legacyHeading: e.target.value,
                        })
                      }
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                      placeholder="Our Legacy"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#171717] mb-2">
                      Legacy Subheading
                    </label>
                    <input
                      type="text"
                      value={visionMissionData.legacySubheading}
                      onChange={(e) =>
                        setVisionMissionData({
                          ...visionMissionData,
                          legacySubheading: e.target.value,
                        })
                      }
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                      placeholder="At a Glance"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Legacy Statistics
                  </label>
                  <div className="space-y-3">
                    {visionMissionData.legacyStats.map((stat, index) => (
                      <div
                        key={index}
                        className="grid grid-cols-1 md:grid-cols-3 gap-3 p-3 border border-[#171717]/20 rounded-lg bg-[#F9F9F9]"
                      >
                        <div>
                          <label className="block text-xs text-[#171717]/60 mb-1">
                            Value
                          </label>
                          <input
                            type="text"
                            value={stat.value}
                            onChange={(e) =>
                              updateLegacyStat(index, 'value', e.target.value)
                            }
                            className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                            placeholder="1986"
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
                              updateLegacyStat(index, 'label', e.target.value)
                            }
                            className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                            placeholder="Established"
                          />
                        </div>
                        <div className="flex gap-2">
                          <div className="flex-1">
                            <label className="block text-xs text-[#171717]/60 mb-1">
                              Description
                            </label>
                            <input
                              type="text"
                              value={stat.description}
                              onChange={(e) =>
                                updateLegacyStat(
                                  index,
                                  'description',
                                  e.target.value
                                )
                              }
                              className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                              placeholder="Legacy of Excellence"
                            />
                          </div>
                          <div className="flex items-end">
                            <button
                              onClick={() => removeLegacyStat(index)}
                              className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                    <button
                      onClick={addLegacyStat}
                      className="flex items-center gap-2 px-3 sm:px-4 py-2 text-[#631012] hover:bg-[#631012]/10 rounded-lg transition-colors text-sm sm:text-base"
                    >
                      <Plus size={18} />
                      Add Legacy Statistic
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
                  Preview:
                </p>
                <div className="bg-white p-4 sm:p-6 rounded-lg space-y-6">
                  <div className="text-center bg-gradient-to-r from-[#631012]/5 to-[#8B1518]/5 p-6 rounded-lg">
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#171717] mb-3">
                      {visionMissionData.tagline}
                    </h3>
                    <p className="text-sm sm:text-base text-[#171717]/70">
                      {visionMissionData.taglineDescription}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-2xl font-bold text-[#171717] mb-1 text-center">
                      {visionMissionData.legacyHeading}
                    </h4>
                    <p className="text-sm text-[#171717]/60 mb-6 text-center">
                      {visionMissionData.legacySubheading}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {visionMissionData.legacyStats.map((stat, index) => (
                        <div
                          key={index}
                          className="bg-[#F9F9F9] p-4 rounded-lg border border-[#171717]/10 text-center hover:border-[#631012]/30 transition-colors"
                        >
                          <div className="text-3xl font-bold text-[#631012] mb-2">
                            {stat.value}
                          </div>
                          <div className="text-sm font-semibold text-[#171717] mb-1">
                            {stat.label}
                          </div>
                          <div className="text-xs text-[#171717]/60">
                            {stat.description}
                          </div>
                        </div>
                      ))}
                    </div>
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
