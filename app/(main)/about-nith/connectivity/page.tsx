'use client';

import React, { useState } from 'react';
import {
  Save,
  MapPin,
  Plus,
  Trash2,
  FileText,
  Train,
  Plane,
  Car,
} from 'lucide-react';

interface TravelOption {
  icon: string;
  title: string;
  nearestPointLabel: string;
  nearestPointValue: string;
  distanceLabel: string;
  distanceValue: string;
  travelTime: string;
  servicesLabel: string;
  servicesParagraphs: string[];
}

interface ConnectivityData {
  heroHeading: string;
  heroDescription: string;
  travelOptionsLabel: string;
  travelOptionsHeading: string;
  travelOptionsSubtitle: string;
  travelOptions: TravelOption[];
}

type TabType = 'hero' | 'travel';

export default function ConnectivityPage() {
  const [activeTab, setActiveTab] = useState<TabType>('hero');

  const [connectivityData, setConnectivityData] = useState<ConnectivityData>({
    heroHeading: 'Connectivity',
    heroDescription:
      'Well connected to all major cities through rail, air, and road networks — situated amidst serene hills while offering excellent accessibility',
    travelOptionsLabel: 'Travel Options',
    travelOptionsHeading: 'How to Reach',
    travelOptionsSubtitle: 'Multiple convenient options to reach our campus',
    travelOptions: [
      {
        icon: 'train',
        title: 'By Rail',
        nearestPointLabel: 'Nearest Point:',
        nearestPointValue: 'Una Railway Station (Himachal Pradesh)',
        distanceLabel: 'Distance:',
        distanceValue: 'Approximately 80 km',
        travelTime: '~2-3 hours',
        servicesLabel: 'Services Available:',
        servicesParagraphs: [
          'Una is well-linked to all parts of the country. Regular bus and taxi services are available from Una to Hamirpur.',
          'Trains from Delhi, Chandigarh, and Ambala connect to Una, from where road transport to Hamirpur takes around 2–3 hours.',
        ],
      },
      {
        icon: 'plane',
        title: 'By Air',
        nearestPointLabel: 'Nearest Point:',
        nearestPointValue: 'Dharamshala Airport (Gaggal, District Kangra)',
        distanceLabel: 'Distance:',
        distanceValue: 'About 75 km',
        travelTime: '~2 hours',
        servicesLabel: 'Services Available:',
        servicesParagraphs: [
          'Chandigarh International Airport — approximately 200 km (~4 hours). Both airports have taxi and cab facilities.',
          'Both airports have taxi and cab facilities directly to Hamirpur, with scenic routes through the Himalayan foothills.',
        ],
      },
      {
        icon: 'car',
        title: 'By Road',
        nearestPointLabel: 'Nearest Point:',
        nearestPointValue: 'National Highways NH-3',
        distanceLabel: 'Distance:',
        distanceValue: '450 km from Delhi | 200 km from Chandigarh',
        travelTime: '~5 hours from Chandigarh',
        servicesLabel: 'Services Available:',
        servicesParagraphs: [
          'Frequent HRTC and private bus services connect Hamirpur to Delhi, Chandigarh, Shimla, Dharamshala, and other major cities.',
          'The campus is just 4 km from the main bus stand on the Hamirpur–Tauni Devi road.',
        ],
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
      id: 'travel' as TabType,
      label: 'Travel Options',
      icon: <MapPin size={18} />,
    },
  ];

  const handleSave = () => {
    alert('Changes saved successfully!');
    console.log(connectivityData);
  };

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'train':
        return <Train size={20} />;
      case 'plane':
        return <Plane size={20} />;
      case 'car':
        return <Car size={20} />;
      default:
        return <MapPin size={20} />;
    }
  };

  const updateTravelOption = (
    index: number,
    field: keyof Omit<TravelOption, 'servicesParagraphs'>,
    value: string
  ) => {
    const updated = [...connectivityData.travelOptions];
    updated[index] = { ...updated[index], [field]: value };
    setConnectivityData({ ...connectivityData, travelOptions: updated });
  };

  const updateServiceParagraph = (
    optionIndex: number,
    paragraphIndex: number,
    value: string
  ) => {
    const updated = [...connectivityData.travelOptions];
    const paragraphs = [...updated[optionIndex].servicesParagraphs];
    paragraphs[paragraphIndex] = value;
    updated[optionIndex] = {
      ...updated[optionIndex],
      servicesParagraphs: paragraphs,
    };
    setConnectivityData({ ...connectivityData, travelOptions: updated });
  };

  const addServiceParagraph = (optionIndex: number) => {
    const updated = [...connectivityData.travelOptions];
    updated[optionIndex] = {
      ...updated[optionIndex],
      servicesParagraphs: [...updated[optionIndex].servicesParagraphs, ''],
    };
    setConnectivityData({ ...connectivityData, travelOptions: updated });
  };

  const removeServiceParagraph = (
    optionIndex: number,
    paragraphIndex: number
  ) => {
    const updated = [...connectivityData.travelOptions];
    updated[optionIndex] = {
      ...updated[optionIndex],
      servicesParagraphs: updated[optionIndex].servicesParagraphs.filter(
        (_, i) => i !== paragraphIndex
      ),
    };
    setConnectivityData({ ...connectivityData, travelOptions: updated });
  };

  const addTravelOption = () => {
    setConnectivityData({
      ...connectivityData,
      travelOptions: [
        ...connectivityData.travelOptions,
        {
          icon: 'car',
          title: '',
          nearestPointLabel: 'Nearest Point:',
          nearestPointValue: '',
          distanceLabel: 'Distance:',
          distanceValue: '',
          travelTime: '',
          servicesLabel: 'Services Available:',
          servicesParagraphs: [''],
        },
      ],
    });
  };

  const removeTravelOption = (index: number) => {
    setConnectivityData({
      ...connectivityData,
      travelOptions: connectivityData.travelOptions.filter(
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
              <MapPin className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#171717] break-words">
                Connectivity Editor
              </h1>
              <p className="text-sm sm:text-base text-[#171717]/60 mt-1">
                Edit travel options and connectivity
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
                    value={connectivityData.heroHeading}
                    onChange={(e) =>
                      setConnectivityData({
                        ...connectivityData,
                        heroHeading: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Connectivity"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Description
                  </label>
                  <textarea
                    rows={4}
                    value={connectivityData.heroDescription}
                    onChange={(e) =>
                      setConnectivityData({
                        ...connectivityData,
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
                    {connectivityData.heroHeading}
                  </h3>
                  <p className="text-base sm:text-lg text-[#171717]/70">
                    {connectivityData.heroDescription}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Travel Options */}
          {activeTab === 'travel' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <MapPin className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Travel Options Section
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
                      value={connectivityData.travelOptionsLabel}
                      onChange={(e) =>
                        setConnectivityData({
                          ...connectivityData,
                          travelOptionsLabel: e.target.value,
                        })
                      }
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                      placeholder="Travel Options"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#171717] mb-2">
                      Section Heading
                    </label>
                    <input
                      type="text"
                      value={connectivityData.travelOptionsHeading}
                      onChange={(e) =>
                        setConnectivityData({
                          ...connectivityData,
                          travelOptionsHeading: e.target.value,
                        })
                      }
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                      placeholder="How to Reach"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#171717] mb-2">
                      Section Subtitle
                    </label>
                    <input
                      type="text"
                      value={connectivityData.travelOptionsSubtitle}
                      onChange={(e) =>
                        setConnectivityData({
                          ...connectivityData,
                          travelOptionsSubtitle: e.target.value,
                        })
                      }
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                      placeholder="Multiple convenient options..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Travel Options
                  </label>
                  <div className="space-y-4">
                    {connectivityData.travelOptions.map((option, index) => (
                      <div
                        key={index}
                        className="p-4 border border-[#171717]/20 rounded-lg bg-[#F9F9F9] space-y-3"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-[#171717]/60">
                            Travel Option {index + 1}
                          </span>
                          <button
                            onClick={() => removeTravelOption(index)}
                            className="px-2 py-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs text-[#171717]/60 mb-1">
                              Icon (train/plane/car)
                            </label>
                            <select
                              value={option.icon}
                              onChange={(e) =>
                                updateTravelOption(
                                  index,
                                  'icon',
                                  e.target.value
                                )
                              }
                              className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                            >
                              <option value="train">Train</option>
                              <option value="plane">Plane</option>
                              <option value="car">Car/Road</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs text-[#171717]/60 mb-1">
                              Title
                            </label>
                            <input
                              type="text"
                              value={option.title}
                              onChange={(e) =>
                                updateTravelOption(
                                  index,
                                  'title',
                                  e.target.value
                                )
                              }
                              className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                              placeholder="By Rail"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs text-[#171717]/60 mb-1">
                              Nearest Point Value
                            </label>
                            <input
                              type="text"
                              value={option.nearestPointValue}
                              onChange={(e) =>
                                updateTravelOption(
                                  index,
                                  'nearestPointValue',
                                  e.target.value
                                )
                              }
                              className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                              placeholder="Una Railway Station"
                            />
                          </div>
                          <div>
                            <label className="block text-xs text-[#171717]/60 mb-1">
                              Distance Value
                            </label>
                            <input
                              type="text"
                              value={option.distanceValue}
                              onChange={(e) =>
                                updateTravelOption(
                                  index,
                                  'distanceValue',
                                  e.target.value
                                )
                              }
                              className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                              placeholder="Approximately 80 km"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs text-[#171717]/60 mb-1">
                            Travel Time
                          </label>
                          <input
                            type="text"
                            value={option.travelTime}
                            onChange={(e) =>
                              updateTravelOption(
                                index,
                                'travelTime',
                                e.target.value
                              )
                            }
                            className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                            placeholder="~2-3 hours"
                          />
                        </div>

                        <div>
                          <label className="block text-xs text-[#171717]/60 mb-1">
                            Services Paragraphs
                          </label>
                          <div className="space-y-2">
                            {option.servicesParagraphs.map(
                              (paragraph, pIndex) => (
                                <div key={pIndex} className="flex gap-2">
                                  <textarea
                                    rows={2}
                                    value={paragraph}
                                    onChange={(e) =>
                                      updateServiceParagraph(
                                        index,
                                        pIndex,
                                        e.target.value
                                      )
                                    }
                                    className="flex-1 px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                                    placeholder="Service description"
                                  />
                                  <button
                                    onClick={() =>
                                      removeServiceParagraph(index, pIndex)
                                    }
                                    className="px-2 py-1 text-red-600 hover:bg-red-50 rounded transition-colors h-fit"
                                  >
                                    <Trash2 size={14} />
                                  </button>
                                </div>
                              )
                            )}
                            <button
                              onClick={() => addServiceParagraph(index)}
                              className="flex items-center gap-1 px-2 py-1 text-[#631012] hover:bg-[#631012]/10 rounded transition-colors text-sm"
                            >
                              <Plus size={14} />
                              Add Service Info
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                    <button
                      onClick={addTravelOption}
                      className="flex items-center gap-2 px-3 sm:px-4 py-2 text-[#631012] hover:bg-[#631012]/10 rounded-lg transition-colors text-sm sm:text-base"
                    >
                      <Plus size={18} />
                      Add Travel Option
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
                      {connectivityData.travelOptionsLabel}
                    </span>
                    <h3 className="text-2xl font-bold text-[#171717] mt-2 mb-2">
                      {connectivityData.travelOptionsHeading}
                    </h3>
                    <p className="text-sm text-[#171717]/60">
                      {connectivityData.travelOptionsSubtitle}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {connectivityData.travelOptions.map((option, index) => (
                      <div
                        key={index}
                        className="bg-[#F9F9F9] p-5 rounded-lg border border-[#171717]/10 hover:border-[#631012]/30 transition-colors"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 flex items-center justify-center bg-[#631012] text-white rounded-full">
                            {getIconComponent(option.icon)}
                          </div>
                          <h4 className="text-lg font-semibold text-[#171717]">
                            {option.title}
                          </h4>
                        </div>

                        <div className="space-y-3">
                          <div>
                            <p className="text-xs font-medium text-[#171717]/60">
                              {option.nearestPointLabel}
                            </p>
                            <p className="text-sm font-semibold text-[#171717]">
                              {option.nearestPointValue}
                            </p>
                          </div>

                          <div>
                            <p className="text-xs font-medium text-[#171717]/60">
                              {option.distanceLabel}
                            </p>
                            <p className="text-sm font-semibold text-[#171717]">
                              {option.distanceValue}
                            </p>
                          </div>

                          <div className="inline-block px-3 py-1 bg-[#631012]/10 text-[#631012] rounded-full text-sm font-medium">
                            {option.travelTime}
                          </div>

                          <div>
                            <p className="text-xs font-medium text-[#171717]/60 mb-2">
                              {option.servicesLabel}
                            </p>
                            <div className="space-y-2">
                              {option.servicesParagraphs.map((para, pIdx) => (
                                <p
                                  key={pIdx}
                                  className="text-sm text-[#171717]/70 leading-relaxed"
                                >
                                  {para}
                                </p>
                              ))}
                            </div>
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
