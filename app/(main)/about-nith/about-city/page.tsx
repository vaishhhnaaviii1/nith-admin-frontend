'use client';

import React, { useState } from 'react';
import {
  Save,
  Building2,
  Plus,
  Trash2,
  MapPin,
  FileText,
  Info,
  List,
} from 'lucide-react';

interface CityInfoCard {
  label: string;
  value: string;
}

interface CityData {
  heading: string;
  introduction: string;
  overviewTitle: string;
  overviewSubtitle: string;
  infoCards: CityInfoCard[];
  descriptions: string[];
}

type TabType = 'hero' | 'overview' | 'descriptions';

export default function AboutCityPage() {
  const [activeTab, setActiveTab] = useState<TabType>('hero');

  const [cityData, setCityData] = useState<CityData>({
    heading: 'About Hamirpur',
    introduction:
      'Set in the peaceful hills of Himachal Pradesh, Hamirpur offers a clean, calm, and welcoming environment for all who visit NIT Hamirpur. With its friendly community and natural beauty, the city creates the perfect backdrop for learning, growth, and new beginnings.',
    overviewTitle: 'City Overview',
    overviewSubtitle:
      "Essential information about Hamirpur's location and characteristics",
    infoCards: [
      { label: 'Location', value: 'Himachal Pradesh, India' },
      { label: 'Altitude', value: '785 metres' },
      { label: 'Connectivity', value: 'NH-3 & NH-103' },
    ],
    descriptions: [
      'Hamirpur, the district headquarter, is situated at an altitude of 785 meters in the Himalayan State of Himachal Pradesh, India. Hamirpur is a clean and eco-friendly district and is famous for its high literacy rate.',
      'Hamirpur City is surrounded by pine tree forest and has a good city infrastructure ranging from Quality Educational Institutions including NIT, State Universities and Skill Learning Centres.',
      'During winter, the climate is cold but pleasant when woolens are required. During summer the maximum temperature is around 40 degrees Celsius and cottons are recommended.',
      'It is a major junction on National Highway 3 while National Highway 103 starts from here. The bulk of the population speaks Hindi, with English widely understood.',
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
      label: 'City Overview',
      icon: <Info size={18} />,
    },
    {
      id: 'descriptions' as TabType,
      label: 'Descriptions',
      icon: <List size={18} />,
    },
  ];

  const handleSave = () => {
    alert('Changes saved successfully!');
    console.log(cityData);
  };

  const updateInfoCard = (
    index: number,
    field: 'label' | 'value',
    value: string
  ) => {
    const updated = [...cityData.infoCards];
    updated[index] = { ...updated[index], [field]: value };
    setCityData({ ...cityData, infoCards: updated });
  };

  const addInfoCard = () => {
    setCityData({
      ...cityData,
      infoCards: [...cityData.infoCards, { label: '', value: '' }],
    });
  };

  const removeInfoCard = (index: number) => {
    setCityData({
      ...cityData,
      infoCards: cityData.infoCards.filter((_, i) => i !== index),
    });
  };

  const updateDescription = (index: number, value: string) => {
    const updated = [...cityData.descriptions];
    updated[index] = value;
    setCityData({ ...cityData, descriptions: updated });
  };

  const addDescription = () => {
    setCityData({
      ...cityData,
      descriptions: [...cityData.descriptions, ''],
    });
  };

  const removeDescription = (index: number) => {
    setCityData({
      ...cityData,
      descriptions: cityData.descriptions.filter((_, i) => i !== index),
    });
  };

  return (
    <div className="space-y-4 sm:space-y-6 p-2 sm:p-4 lg:p-6">
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="bg-[#631012]/10 p-2 sm:p-3 rounded-full text-[#631012] flex-shrink-0">
              <Building2 className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#171717] break-words">
                About City Editor
              </h1>
              <p className="text-sm sm:text-base text-[#171717]/60 mt-1">
                Edit Hamirpur city information
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
                    value={cityData.heading}
                    onChange={(e) =>
                      setCityData({ ...cityData, heading: e.target.value })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="About Hamirpur"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Introduction
                  </label>
                  <textarea
                    rows={4}
                    value={cityData.introduction}
                    onChange={(e) =>
                      setCityData({
                        ...cityData,
                        introduction: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Enter introduction"
                  />
                </div>
              </div>

              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
                  Preview:
                </p>
                <div className="bg-white p-4 sm:p-6 rounded-lg">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#171717] mb-3">
                    {cityData.heading}
                  </h3>
                  <p className="text-base sm:text-lg text-[#171717]/70">
                    {cityData.introduction}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* City Overview */}
          {activeTab === 'overview' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Info className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  City Overview Section
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#171717] mb-2">
                      Overview Title
                    </label>
                    <input
                      type="text"
                      value={cityData.overviewTitle}
                      onChange={(e) =>
                        setCityData({
                          ...cityData,
                          overviewTitle: e.target.value,
                        })
                      }
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                      placeholder="City Overview"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#171717] mb-2">
                      Overview Subtitle
                    </label>
                    <input
                      type="text"
                      value={cityData.overviewSubtitle}
                      onChange={(e) =>
                        setCityData({
                          ...cityData,
                          overviewSubtitle: e.target.value,
                        })
                      }
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                      placeholder="Essential information..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Information Cards
                  </label>
                  <div className="space-y-3">
                    {cityData.infoCards.map((card, index) => (
                      <div
                        key={index}
                        className="grid grid-cols-1 md:grid-cols-2 gap-3 p-3 border border-[#171717]/20 rounded-lg bg-[#F9F9F9]"
                      >
                        <div>
                          <label className="block text-xs text-[#171717]/60 mb-1">
                            Label
                          </label>
                          <input
                            type="text"
                            value={card.label}
                            onChange={(e) =>
                              updateInfoCard(index, 'label', e.target.value)
                            }
                            className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                            placeholder="Location"
                          />
                        </div>
                        <div className="flex gap-2">
                          <div className="flex-1">
                            <label className="block text-xs text-[#171717]/60 mb-1">
                              Value
                            </label>
                            <input
                              type="text"
                              value={card.value}
                              onChange={(e) =>
                                updateInfoCard(index, 'value', e.target.value)
                              }
                              className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                              placeholder="Himachal Pradesh, India"
                            />
                          </div>
                          <div className="flex items-end">
                            <button
                              onClick={() => removeInfoCard(index)}
                              className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                    <button
                      onClick={addInfoCard}
                      className="flex items-center gap-2 px-3 sm:px-4 py-2 text-[#631012] hover:bg-[#631012]/10 rounded-lg transition-colors text-sm sm:text-base"
                    >
                      <Plus size={18} />
                      Add Info Card
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
                  Preview:
                </p>
                <div className="bg-white p-4 sm:p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-[#171717] mb-1">
                    {cityData.overviewTitle}
                  </h4>
                  <p className="text-sm text-[#171717]/60 mb-4">
                    {cityData.overviewSubtitle}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {cityData.infoCards.map((card, index) => (
                      <div
                        key={index}
                        className="bg-[#F9F9F9] p-4 rounded-lg border border-[#171717]/10"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin size={16} className="text-[#631012]" />
                          <p className="text-xs font-medium text-[#171717]/60">
                            {card.label}
                          </p>
                        </div>
                        <p className="text-sm font-semibold text-[#171717]">
                          {card.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Descriptions */}
          {activeTab === 'descriptions' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <List className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Description Paragraphs
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Description Paragraphs
                  </label>
                  <div className="space-y-3">
                    {cityData.descriptions.map((desc, index) => (
                      <div key={index} className="flex gap-2">
                        <textarea
                          rows={3}
                          value={desc}
                          onChange={(e) =>
                            updateDescription(index, e.target.value)
                          }
                          className="flex-1 px-3 sm:px-4 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                          placeholder={`Description paragraph ${index + 1}`}
                        />
                        <button
                          onClick={() => removeDescription(index)}
                          className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors h-fit"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    ))}
                    <button
                      onClick={addDescription}
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
                <div className="bg-white p-4 sm:p-6 rounded-lg">
                  <div className="space-y-3">
                    {cityData.descriptions.map((desc, index) => (
                      <p
                        key={index}
                        className="text-sm text-[#171717]/70 leading-relaxed"
                      >
                        {desc}
                      </p>
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
