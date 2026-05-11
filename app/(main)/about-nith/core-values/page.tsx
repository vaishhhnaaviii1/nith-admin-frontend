'use client';

import React, { useState } from 'react';
import {
  Save,
  Heart,
  Plus,
  Trash2,
  FileText,
  Shield,
  BookOpen,
} from 'lucide-react';

interface CoreValue {
  title: string;
  description: string;
}

interface CoreValuesData {
  heroHeading: string;
  heroDescription: string;
  pillarsLabel: string;
  pillarsHeading: string;
  pillarsSubtitle: string;
  coreValues: CoreValue[];
  practiceLabel: string;
  practiceHeading: string;
  practiceSubtitle: string;
  practiceParagraphs: string[];
}

type TabType = 'hero' | 'values' | 'practice';

export default function CoreValuesPage() {
  const [activeTab, setActiveTab] = useState<TabType>('hero');

  const [coreValuesData, setCoreValuesData] = useState<CoreValuesData>({
    heroHeading: 'Core Values',
    heroDescription:
      'The enduring principles that guide our commitment to excellence: Integrity, Excellence, Unity, Accountability, Inclusivity, and Empathy',
    pillarsLabel: 'Six Pillars',
    pillarsHeading: 'Our Guiding Principles',
    pillarsSubtitle:
      'The foundation of our institutional excellence and ethical leadership',
    coreValues: [
      {
        title: 'Integrity',
        description:
          'To be honest in intention, fair in evaluation, transparent in deeds, and adhere to the highest standards of ethics in all its activities.',
      },
      {
        title: 'Excellence',
        description:
          'A relentless commitment to continuous improvement, innovation, and pursuit of best practices in education, research, and institutional performance.',
      },
      {
        title: 'Unity',
        description:
          'Building capacity through trust, collaboration, and respect for others — fostering a culture of teamwork and inclusivity as the foundation of collective success.',
      },
      {
        title: 'Accountability',
        description:
          'To uphold responsibility in all academic and administrative processes, ensuring transparency, responsiveness, and reliability across the institutes functioning.',
      },
      {
        title: 'Inclusivity',
        description:
          'Embracing diversity by providing equal opportunities for all — irrespective of gender, culture, region, or background — fostering an environment of belonging and respect.',
      },
      {
        title: 'Empathy',
        description:
          'Encouraging compassion and understanding toward others, valuing well-being, and nurturing a supportive academic and social ecosystem.',
      },
    ],
    practiceLabel: 'In Practice',
    practiceHeading: 'Our Vision in Action',
    practiceSubtitle: 'How we bring these values to life every day',
    practiceParagraphs: [
      'At NIT Hamirpur, these core values are not just statements — they are the foundation of our daily academic and administrative life. They guide our decisions, shape our culture, and inspire our community to strive for excellence.',
      'From fostering innovation in research to creating an inclusive environment for students from diverse backgrounds, we integrate these principles into every aspect of institutional functioning.',
      'Our commitment to accountability ensures transparency in governance, while empathy drives us to support the holistic development of every member of our academic family.',
      'Together, these values create a vibrant, ethical, and progressive institution dedicated to shaping future leaders and innovators.',
    ],
  });

  const tabs = [
    {
      id: 'hero' as TabType,
      label: 'Hero Section',
      icon: <FileText size={18} />,
    },
    {
      id: 'values' as TabType,
      label: 'Core Values',
      icon: <Shield size={18} />,
    },
    {
      id: 'practice' as TabType,
      label: 'In Practice',
      icon: <BookOpen size={18} />,
    },
  ];

  const handleSave = () => {
    alert('Changes saved successfully!');
    console.log(coreValuesData);
  };

  const updateCoreValue = (
    index: number,
    field: 'title' | 'description',
    value: string
  ) => {
    const updated = [...coreValuesData.coreValues];
    updated[index] = { ...updated[index], [field]: value };
    setCoreValuesData({ ...coreValuesData, coreValues: updated });
  };

  const addCoreValue = () => {
    setCoreValuesData({
      ...coreValuesData,
      coreValues: [
        ...coreValuesData.coreValues,
        { title: '', description: '' },
      ],
    });
  };

  const removeCoreValue = (index: number) => {
    setCoreValuesData({
      ...coreValuesData,
      coreValues: coreValuesData.coreValues.filter((_, i) => i !== index),
    });
  };

  const updatePracticeParagraph = (index: number, value: string) => {
    const updated = [...coreValuesData.practiceParagraphs];
    updated[index] = value;
    setCoreValuesData({ ...coreValuesData, practiceParagraphs: updated });
  };

  const addPracticeParagraph = () => {
    setCoreValuesData({
      ...coreValuesData,
      practiceParagraphs: [...coreValuesData.practiceParagraphs, ''],
    });
  };

  const removePracticeParagraph = (index: number) => {
    setCoreValuesData({
      ...coreValuesData,
      practiceParagraphs: coreValuesData.practiceParagraphs.filter(
        (_, i) => i !== index
      ),
    });
  };

  return (
    <div className="space-y-4 sm:space-y-6 p-2 sm:p-4 lg:p-6">
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="bg-[#631012]/10 p-2 sm:p-3 rounded-full text-[#631012] flex-shrink-0">
              <Heart className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#171717] break-words">
                Core Values Editor
              </h1>
              <p className="text-sm sm:text-base text-[#171717]/60 mt-1">
                Edit core values and principles
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
                    value={coreValuesData.heroHeading}
                    onChange={(e) =>
                      setCoreValuesData({
                        ...coreValuesData,
                        heroHeading: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Core Values"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Description
                  </label>
                  <textarea
                    rows={4}
                    value={coreValuesData.heroDescription}
                    onChange={(e) =>
                      setCoreValuesData({
                        ...coreValuesData,
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
                    {coreValuesData.heroHeading}
                  </h3>
                  <p className="text-base sm:text-lg text-[#171717]/70">
                    {coreValuesData.heroDescription}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Core Values */}
          {activeTab === 'values' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Shield className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Core Values Section
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#171717] mb-2">
                      Pillars Label
                    </label>
                    <input
                      type="text"
                      value={coreValuesData.pillarsLabel}
                      onChange={(e) =>
                        setCoreValuesData({
                          ...coreValuesData,
                          pillarsLabel: e.target.value,
                        })
                      }
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                      placeholder="Six Pillars"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#171717] mb-2">
                      Section Heading
                    </label>
                    <input
                      type="text"
                      value={coreValuesData.pillarsHeading}
                      onChange={(e) =>
                        setCoreValuesData({
                          ...coreValuesData,
                          pillarsHeading: e.target.value,
                        })
                      }
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                      placeholder="Our Guiding Principles"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#171717] mb-2">
                      Section Subtitle
                    </label>
                    <input
                      type="text"
                      value={coreValuesData.pillarsSubtitle}
                      onChange={(e) =>
                        setCoreValuesData({
                          ...coreValuesData,
                          pillarsSubtitle: e.target.value,
                        })
                      }
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                      placeholder="The foundation of..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Core Values
                  </label>
                  <div className="space-y-3">
                    {coreValuesData.coreValues.map((value, index) => (
                      <div
                        key={index}
                        className="p-3 border border-[#171717]/20 rounded-lg bg-[#F9F9F9] space-y-2"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-[#171717]/60">
                            Value {index + 1}
                          </span>
                          <button
                            onClick={() => removeCoreValue(index)}
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
                            value={value.title}
                            onChange={(e) =>
                              updateCoreValue(index, 'title', e.target.value)
                            }
                            className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                            placeholder="Integrity"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-[#171717]/60 mb-1">
                            Description
                          </label>
                          <textarea
                            rows={2}
                            value={value.description}
                            onChange={(e) =>
                              updateCoreValue(
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
                      onClick={addCoreValue}
                      className="flex items-center gap-2 px-3 sm:px-4 py-2 text-[#631012] hover:bg-[#631012]/10 rounded-lg transition-colors text-sm sm:text-base"
                    >
                      <Plus size={18} />
                      Add Core Value
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
                    <span className="text-sm font-semibold text-[#631012] uppercase tracking-wide">
                      {coreValuesData.pillarsLabel}
                    </span>
                    <h3 className="text-2xl font-bold text-[#171717] mt-2 mb-2">
                      {coreValuesData.pillarsHeading}
                    </h3>
                    <p className="text-sm text-[#171717]/60">
                      {coreValuesData.pillarsSubtitle}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {coreValuesData.coreValues.map((value, index) => (
                      <div
                        key={index}
                        className="bg-[#F9F9F9] p-4 rounded-lg border border-[#171717]/10 hover:border-[#631012]/30 transition-colors"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-8 h-8 flex items-center justify-center bg-[#631012] text-white rounded-full">
                            <Heart size={14} />
                          </div>
                          <h5 className="text-base font-semibold text-[#171717]">
                            {value.title}
                          </h5>
                        </div>
                        <p className="text-sm text-[#171717]/70 leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* In Practice */}
          {activeTab === 'practice' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <BookOpen className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  In Practice Section
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#171717] mb-2">
                      Section Label
                    </label>
                    <input
                      type="text"
                      value={coreValuesData.practiceLabel}
                      onChange={(e) =>
                        setCoreValuesData({
                          ...coreValuesData,
                          practiceLabel: e.target.value,
                        })
                      }
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                      placeholder="In Practice"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#171717] mb-2">
                      Section Heading
                    </label>
                    <input
                      type="text"
                      value={coreValuesData.practiceHeading}
                      onChange={(e) =>
                        setCoreValuesData({
                          ...coreValuesData,
                          practiceHeading: e.target.value,
                        })
                      }
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                      placeholder="Our Vision in Action"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#171717] mb-2">
                      Section Subtitle
                    </label>
                    <input
                      type="text"
                      value={coreValuesData.practiceSubtitle}
                      onChange={(e) =>
                        setCoreValuesData({
                          ...coreValuesData,
                          practiceSubtitle: e.target.value,
                        })
                      }
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                      placeholder="How we bring these values..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Practice Paragraphs
                  </label>
                  <div className="space-y-3">
                    {coreValuesData.practiceParagraphs.map(
                      (paragraph, index) => (
                        <div key={index} className="flex gap-2">
                          <textarea
                            rows={3}
                            value={paragraph}
                            onChange={(e) =>
                              updatePracticeParagraph(index, e.target.value)
                            }
                            className="flex-1 px-3 sm:px-4 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                            placeholder={`Paragraph ${index + 1}`}
                          />
                          <button
                            onClick={() => removePracticeParagraph(index)}
                            className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors h-fit"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      )
                    )}
                    <button
                      onClick={addPracticeParagraph}
                      className="flex items-center gap-2 px-3 sm:px-4 py-2 text-[#631012] hover:bg-[#631012]/10 rounded-lg transition-colors text-sm sm:text-base"
                    >
                      <Plus size={18} />
                      Add Paragraph
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
                    <span className="text-sm font-semibold text-[#631012] uppercase tracking-wide">
                      {coreValuesData.practiceLabel}
                    </span>
                    <h3 className="text-2xl font-bold text-[#171717] mt-2 mb-2">
                      {coreValuesData.practiceHeading}
                    </h3>
                    <p className="text-sm text-[#171717]/60">
                      {coreValuesData.practiceSubtitle}
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-[#631012]/5 to-[#8B1518]/5 p-6 rounded-lg border border-[#631012]/20">
                    <div className="space-y-4">
                      {coreValuesData.practiceParagraphs.map(
                        (paragraph, index) => (
                          <p
                            key={index}
                            className="text-sm sm:text-base text-[#171717]/70 leading-relaxed"
                          >
                            {paragraph}
                          </p>
                        )
                      )}
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
