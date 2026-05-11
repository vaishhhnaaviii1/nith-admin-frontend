'use client';

import React, { useState } from 'react';
import {
  Save,
  Target,
  Plus,
  Trash2,
  FileText,
  Compass,
  Map,
  Megaphone,
} from 'lucide-react';

interface GoalItem {
  title: string;
  description: string;
  linkText: string;
}

interface ActionStep {
  number: string;
  title: string;
  description: string;
}

interface CallToAction {
  buttonText: string;
}

interface GoalsData {
  heroHeading: string;
  heroDescription: string;
  goalsHeading: string;
  goalsSubtitle: string;
  goals: GoalItem[];
  tagline: string;
  taglineDescription: string;
  strategyHeading: string;
  strategySubheading: string;
  strategyDescription: string;
  actionSteps: ActionStep[];
  ctaHeading: string;
  ctaDescription: string;
  ctaButtons: CallToAction[];
}

type TabType = 'hero' | 'goals' | 'strategy' | 'cta';

export default function GoalsPage() {
  const [activeTab, setActiveTab] = useState<TabType>('hero');

  const [goalsData, setGoalsData] = useState<GoalsData>({
    heroHeading: 'Our Goals',
    heroDescription:
      'Defining our long-term vision of excellence in education, research, and societal growth through innovation, sustainability, and inclusive development.',
    goalsHeading: 'Institutional Goals',
    goalsSubtitle:
      'Eight pillars driving our commitment to excellence, innovation, and sustainable growth',
    goals: [
      {
        title: 'Academic Excellence',
        description:
          'To strengthen academic programs through innovation in pedagogy, curriculum modernization, and outcome-based education.',
        linkText: 'Learn more',
      },
      {
        title: 'Research and Innovation',
        description:
          'To encourage interdisciplinary research and technological advancements that contribute to societal and industrial progress.',
        linkText: 'Learn more',
      },
      {
        title: 'Global Collaboration',
        description:
          'To establish partnerships with reputed international universities, research bodies, and industries to promote global knowledge exchange.',
        linkText: 'Learn more',
      },
      {
        title: 'Sustainability & Environment',
        description:
          'To embed sustainable practices in campus life, infrastructure, and research, ensuring eco-conscious growth and green initiatives.',
        linkText: 'Learn more',
      },
      {
        title: 'Student Development',
        description:
          'To nurture leadership, entrepreneurship, and ethics among students through holistic education and experiential learning.',
        linkText: 'Learn more',
      },
      {
        title: 'Social Responsibility',
        description:
          'To apply science and technology for addressing community needs and driving inclusive development at regional and national levels.',
        linkText: 'Learn more',
      },
      {
        title: 'Infrastructure & Digital Growth',
        description:
          'To continuously upgrade infrastructure and embrace digital transformation to enhance academic and administrative efficiency.',
        linkText: 'Learn more',
      },
      {
        title: 'Faculty Empowerment',
        description:
          'To promote continuous faculty training, research opportunities, and academic freedom for enhanced teaching and mentorship quality.',
        linkText: 'Learn more',
      },
    ],
    tagline: 'Empowering minds today to lead the innovations of tomorrow',
    taglineDescription:
      'Building a future where knowledge meets purpose, excellence becomes tradition, and every idea has the power to transform the world.',
    strategyHeading: 'Implementation Strategy',
    strategySubheading: 'Our Action Plan',
    strategyDescription:
      'A strategic roadmap guiding our journey towards excellence and sustained growth',
    actionSteps: [
      {
        number: '1',
        title: 'Strengthening Teaching-Learning Framework',
        description:
          'Regular curriculum revision and inclusion of modern technologies to enhance learning outcomes.',
      },
      {
        number: '2',
        title: 'Enhancing Research Infrastructure',
        description:
          'Developing state-of-the-art laboratories and research centers to foster cutting-edge innovation.',
      },
      {
        number: '3',
        title: 'Building Industry Linkages',
        description:
          'Establishing strong partnerships with leading industries for internships, placements, and collaborative research.',
      },
      {
        number: '4',
        title: 'Promoting Global Exposure',
        description:
          'Facilitating international collaborations, student exchange programs, and faculty development initiatives.',
      },
      {
        number: '5',
        title: 'Ensuring Continuous Quality Improvement',
        description:
          'Implementing robust quality assurance mechanisms and accreditation standards for sustained excellence.',
      },
    ],
    ctaHeading: 'Join Us in Achieving Our Vision',
    ctaDescription:
      'Collaborate, Innovate, Inspire — Together we build a brighter future',
    ctaButtons: [
      { buttonText: 'Explore Admissions' },
      { buttonText: 'Research Opportunities' },
    ],
  });

  const tabs = [
    {
      id: 'hero' as TabType,
      label: 'Hero Section',
      icon: <FileText size={18} />,
    },
    {
      id: 'goals' as TabType,
      label: 'Institutional Goals',
      icon: <Compass size={18} />,
    },
    {
      id: 'strategy' as TabType,
      label: 'Strategy',
      icon: <Map size={18} />,
    },
    {
      id: 'cta' as TabType,
      label: 'Call to Action',
      icon: <Megaphone size={18} />,
    },
  ];

  const handleSave = () => {
    alert('Changes saved successfully!');
    console.log(goalsData);
  };

  const updateGoal = (
    index: number,
    field: 'title' | 'description' | 'linkText',
    value: string
  ) => {
    const updated = [...goalsData.goals];
    updated[index] = { ...updated[index], [field]: value };
    setGoalsData({ ...goalsData, goals: updated });
  };

  const addGoal = () => {
    setGoalsData({
      ...goalsData,
      goals: [
        ...goalsData.goals,
        { title: '', description: '', linkText: 'Learn more' },
      ],
    });
  };

  const removeGoal = (index: number) => {
    setGoalsData({
      ...goalsData,
      goals: goalsData.goals.filter((_, i) => i !== index),
    });
  };

  const updateActionStep = (
    index: number,
    field: 'number' | 'title' | 'description',
    value: string
  ) => {
    const updated = [...goalsData.actionSteps];
    updated[index] = { ...updated[index], [field]: value };
    setGoalsData({ ...goalsData, actionSteps: updated });
  };

  const addActionStep = () => {
    setGoalsData({
      ...goalsData,
      actionSteps: [
        ...goalsData.actionSteps,
        {
          number: String(goalsData.actionSteps.length + 1),
          title: '',
          description: '',
        },
      ],
    });
  };

  const removeActionStep = (index: number) => {
    setGoalsData({
      ...goalsData,
      actionSteps: goalsData.actionSteps.filter((_, i) => i !== index),
    });
  };

  const updateCtaButton = (index: number, value: string) => {
    const updated = [...goalsData.ctaButtons];
    updated[index] = { buttonText: value };
    setGoalsData({ ...goalsData, ctaButtons: updated });
  };

  const addCtaButton = () => {
    setGoalsData({
      ...goalsData,
      ctaButtons: [...goalsData.ctaButtons, { buttonText: '' }],
    });
  };

  const removeCtaButton = (index: number) => {
    setGoalsData({
      ...goalsData,
      ctaButtons: goalsData.ctaButtons.filter((_, i) => i !== index),
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
                Goals Editor
              </h1>
              <p className="text-sm sm:text-base text-[#171717]/60 mt-1">
                Edit institutional goals and strategy
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
                    value={goalsData.heroHeading}
                    onChange={(e) =>
                      setGoalsData({
                        ...goalsData,
                        heroHeading: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Our Goals"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Description
                  </label>
                  <textarea
                    rows={4}
                    value={goalsData.heroDescription}
                    onChange={(e) =>
                      setGoalsData({
                        ...goalsData,
                        heroDescription: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Enter description"
                  />
                </div>

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
                        value={goalsData.tagline}
                        onChange={(e) =>
                          setGoalsData({
                            ...goalsData,
                            tagline: e.target.value,
                          })
                        }
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                        placeholder="Empowering minds today..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#171717] mb-2">
                        Tagline Description
                      </label>
                      <textarea
                        rows={3}
                        value={goalsData.taglineDescription}
                        onChange={(e) =>
                          setGoalsData({
                            ...goalsData,
                            taglineDescription: e.target.value,
                          })
                        }
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                        placeholder="Description"
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
                  <div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#171717] mb-3">
                      {goalsData.heroHeading}
                    </h3>
                    <p className="text-base sm:text-lg text-[#171717]/70">
                      {goalsData.heroDescription}
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-[#631012]/5 to-[#8B1518]/5 p-6 rounded-lg border border-[#631012]/20 text-center">
                    <h4 className="text-xl sm:text-2xl font-bold text-[#171717] mb-3">
                      {goalsData.tagline}
                    </h4>
                    <p className="text-sm sm:text-base text-[#171717]/70">
                      {goalsData.taglineDescription}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Institutional Goals */}
          {activeTab === 'goals' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Compass className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Institutional Goals
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#171717] mb-2">
                      Section Heading
                    </label>
                    <input
                      type="text"
                      value={goalsData.goalsHeading}
                      onChange={(e) =>
                        setGoalsData({
                          ...goalsData,
                          goalsHeading: e.target.value,
                        })
                      }
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                      placeholder="Institutional Goals"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#171717] mb-2">
                      Section Subtitle
                    </label>
                    <input
                      type="text"
                      value={goalsData.goalsSubtitle}
                      onChange={(e) =>
                        setGoalsData({
                          ...goalsData,
                          goalsSubtitle: e.target.value,
                        })
                      }
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                      placeholder="Eight pillars..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Goal Items
                  </label>
                  <div className="space-y-3">
                    {goalsData.goals.map((goal, index) => (
                      <div
                        key={index}
                        className="p-3 border border-[#171717]/20 rounded-lg bg-[#F9F9F9] space-y-2"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-[#171717]/60">
                            Goal {index + 1}
                          </span>
                          <button
                            onClick={() => removeGoal(index)}
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
                            value={goal.title}
                            onChange={(e) =>
                              updateGoal(index, 'title', e.target.value)
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
                            rows={2}
                            value={goal.description}
                            onChange={(e) =>
                              updateGoal(index, 'description', e.target.value)
                            }
                            className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                            placeholder="Description"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-[#171717]/60 mb-1">
                            Link Text
                          </label>
                          <input
                            type="text"
                            value={goal.linkText}
                            onChange={(e) =>
                              updateGoal(index, 'linkText', e.target.value)
                            }
                            className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                            placeholder="Learn more"
                          />
                        </div>
                      </div>
                    ))}
                    <button
                      onClick={addGoal}
                      className="flex items-center gap-2 px-3 sm:px-4 py-2 text-[#631012] hover:bg-[#631012]/10 rounded-lg transition-colors text-sm sm:text-base"
                    >
                      <Plus size={18} />
                      Add Goal
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
                    <h3 className="text-2xl font-bold text-[#171717] mb-2">
                      {goalsData.goalsHeading}
                    </h3>
                    <p className="text-sm text-[#171717]/60">
                      {goalsData.goalsSubtitle}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {goalsData.goals.map((goal, index) => (
                      <div
                        key={index}
                        className="bg-[#F9F9F9] p-4 rounded-lg border border-[#171717]/10 hover:border-[#631012]/30 transition-colors"
                      >
                        <h5 className="text-base font-semibold text-[#171717] mb-2">
                          {goal.title}
                        </h5>
                        <p className="text-sm text-[#171717]/70 leading-relaxed mb-3">
                          {goal.description}
                        </p>
                        <span className="text-sm text-[#631012] font-medium">
                          {goal.linkText} →
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Strategy */}
          {activeTab === 'strategy' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Map className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Implementation Strategy
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#171717] mb-2">
                      Strategy Heading
                    </label>
                    <input
                      type="text"
                      value={goalsData.strategyHeading}
                      onChange={(e) =>
                        setGoalsData({
                          ...goalsData,
                          strategyHeading: e.target.value,
                        })
                      }
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                      placeholder="Implementation Strategy"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#171717] mb-2">
                      Strategy Subheading
                    </label>
                    <input
                      type="text"
                      value={goalsData.strategySubheading}
                      onChange={(e) =>
                        setGoalsData({
                          ...goalsData,
                          strategySubheading: e.target.value,
                        })
                      }
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                      placeholder="Our Action Plan"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Strategy Description
                  </label>
                  <textarea
                    rows={3}
                    value={goalsData.strategyDescription}
                    onChange={(e) =>
                      setGoalsData({
                        ...goalsData,
                        strategyDescription: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="A strategic roadmap..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Action Steps
                  </label>
                  <div className="space-y-3">
                    {goalsData.actionSteps.map((step, index) => (
                      <div
                        key={index}
                        className="grid grid-cols-1 md:grid-cols-12 gap-3 p-3 border border-[#171717]/20 rounded-lg bg-[#F9F9F9]"
                      >
                        <div className="md:col-span-1">
                          <label className="block text-xs text-[#171717]/60 mb-1">
                            #
                          </label>
                          <input
                            type="text"
                            value={step.number}
                            onChange={(e) =>
                              updateActionStep(index, 'number', e.target.value)
                            }
                            className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm text-center"
                            placeholder="1"
                          />
                        </div>
                        <div className="md:col-span-4">
                          <label className="block text-xs text-[#171717]/60 mb-1">
                            Title
                          </label>
                          <input
                            type="text"
                            value={step.title}
                            onChange={(e) =>
                              updateActionStep(index, 'title', e.target.value)
                            }
                            className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                            placeholder="Step title"
                          />
                        </div>
                        <div className="md:col-span-6">
                          <label className="block text-xs text-[#171717]/60 mb-1">
                            Description
                          </label>
                          <input
                            type="text"
                            value={step.description}
                            onChange={(e) =>
                              updateActionStep(
                                index,
                                'description',
                                e.target.value
                              )
                            }
                            className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                            placeholder="Step description"
                          />
                        </div>
                        <div className="md:col-span-1 flex items-end justify-center">
                          <button
                            onClick={() => removeActionStep(index)}
                            className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    ))}
                    <button
                      onClick={addActionStep}
                      className="flex items-center gap-2 px-3 sm:px-4 py-2 text-[#631012] hover:bg-[#631012]/10 rounded-lg transition-colors text-sm sm:text-base"
                    >
                      <Plus size={18} />
                      Add Action Step
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
                      {goalsData.strategyHeading}
                    </span>
                    <h3 className="text-2xl font-bold text-[#171717] mt-2 mb-2">
                      {goalsData.strategySubheading}
                    </h3>
                    <p className="text-sm text-[#171717]/60">
                      {goalsData.strategyDescription}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {goalsData.actionSteps.map((step, index) => (
                      <div
                        key={index}
                        className="flex gap-4 items-start p-4 bg-[#F9F9F9] rounded-lg border border-[#171717]/10"
                      >
                        <div className="w-10 h-10 flex items-center justify-center bg-[#631012] text-white rounded-full font-bold flex-shrink-0">
                          {step.number}
                        </div>
                        <div>
                          <h5 className="text-base font-semibold text-[#171717] mb-1">
                            {step.title}
                          </h5>
                          <p className="text-sm text-[#171717]/70">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Call to Action */}
          {activeTab === 'cta' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Megaphone className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Call to Action Section
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    CTA Heading
                  </label>
                  <input
                    type="text"
                    value={goalsData.ctaHeading}
                    onChange={(e) =>
                      setGoalsData({
                        ...goalsData,
                        ctaHeading: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Join Us in Achieving Our Vision"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    CTA Description
                  </label>
                  <textarea
                    rows={3}
                    value={goalsData.ctaDescription}
                    onChange={(e) =>
                      setGoalsData({
                        ...goalsData,
                        ctaDescription: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Collaborate, Innovate, Inspire..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    CTA Buttons
                  </label>
                  <div className="space-y-3">
                    {goalsData.ctaButtons.map((button, index) => (
                      <div key={index} className="flex gap-2">
                        <input
                          type="text"
                          value={button.buttonText}
                          onChange={(e) =>
                            updateCtaButton(index, e.target.value)
                          }
                          className="flex-1 px-3 sm:px-4 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                          placeholder="Button text"
                        />
                        <button
                          onClick={() => removeCtaButton(index)}
                          className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    ))}
                    <button
                      onClick={addCtaButton}
                      className="flex items-center gap-2 px-3 sm:px-4 py-2 text-[#631012] hover:bg-[#631012]/10 rounded-lg transition-colors text-sm sm:text-base"
                    >
                      <Plus size={18} />
                      Add Button
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
                  Preview:
                </p>
                <div className="bg-gradient-to-r from-[#631012] to-[#8B1518] p-6 sm:p-8 rounded-lg text-center text-white">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3">
                    {goalsData.ctaHeading}
                  </h3>
                  <p className="text-sm sm:text-base text-white/90 mb-6">
                    {goalsData.ctaDescription}
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    {goalsData.ctaButtons.map((button, index) => (
                      <button
                        key={index}
                        className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                          index === 0
                            ? 'bg-white text-[#631012] hover:bg-gray-100'
                            : 'border border-white text-white hover:bg-white/10'
                        }`}
                      >
                        {button.buttonText}
                      </button>
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
