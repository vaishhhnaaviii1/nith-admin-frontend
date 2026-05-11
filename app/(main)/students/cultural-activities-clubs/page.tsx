'use client';

import React, { useState } from 'react';
import {
  Save,
  Music,
  Plus,
  Trash2,
  FileText,
  Users,
  Star,
  Calendar,
} from 'lucide-react';

interface Club {
  id: number;
  name: string;
  category: string;
  description: string;
  coordinator: string;
  email: string;
  memberCount: string;
  achievements: string[];
}

interface CulturalData {
  heroHeading: string;
  heroDescription: string;
  overviewHeading: string;
  overviewDescription: string;
  clubsHeading: string;
  clubsSubtitle: string;
  clubs: Club[];
  eventsHeading: string;
  eventsDescription: string;
}

type TabType = 'hero' | 'overview' | 'clubs' | 'events';

export default function CulturalActivitiesClubsPage() {
  const [activeTab, setActiveTab] = useState<TabType>('hero');

  const [culturalData, setCulturalData] = useState<CulturalData>({
    heroHeading: 'Cultural Activities & Clubs',
    heroDescription:
      'Discover the vibrant cultural life at NIT Hamirpur through our diverse clubs and activities that nurture creativity, talent, and artistic expression.',
    overviewHeading: 'Cultural Life at NITH',
    overviewDescription:
      'NIT Hamirpur boasts a rich cultural ecosystem with numerous clubs catering to music, dance, drama, fine arts, literary activities, and more. Our students showcase their talents through various events and competitions throughout the year.',
    clubsHeading: 'Cultural Clubs',
    clubsSubtitle:
      'Explore our diverse range of cultural clubs and organizations',
    clubs: [
      {
        id: 1,
        name: 'Dhwani - Music Club',
        category: 'Music',
        description:
          'The official music club promoting Indian and Western music through performances and workshops.',
        coordinator: 'Prof. Ankit Sharma',
        email: 'dhwani@nith.ac.in',
        memberCount: '150+',
        achievements: [
          'Best Music Society Award 2024',
          'Inter-NIT Band Competition Winners',
        ],
      },
      {
        id: 2,
        name: 'Nrityam - Dance Club',
        category: 'Dance',
        description:
          'Celebrating various dance forms from classical to contemporary and folk traditions.',
        coordinator: 'Dr. Kavita Rao',
        email: 'nrityam@nith.ac.in',
        memberCount: '120+',
        achievements: [
          'National Dance Competition Finalists',
          'Best Choreography Award 2024',
        ],
      },
      {
        id: 3,
        name: 'Rangmanch - Drama Club',
        category: 'Theatre',
        description:
          'Fostering theatrical arts through plays, street performances, and workshops.',
        coordinator: 'Prof. Rajesh Verma',
        email: 'rangmanch@nith.ac.in',
        memberCount: '80+',
        achievements: [
          'Best Play Award - North Zone Drama Festival',
          'Street Play Champions 2024',
        ],
      },
      {
        id: 4,
        name: 'Kala - Fine Arts Club',
        category: 'Fine Arts',
        description:
          'Platform for artists to explore painting, sketching, sculpture, and digital art.',
        coordinator: 'Ms. Priya Singh',
        email: 'kala@nith.ac.in',
        memberCount: '100+',
        achievements: [
          'Art Exhibition Excellence Award',
          'Best Installation - Hillffair 2024',
        ],
      },
      {
        id: 5,
        name: 'Sahitya - Literary Club',
        category: 'Literary',
        description:
          'Promoting literature through poetry, creative writing, debates, and publications.',
        coordinator: 'Dr. Amit Kumar',
        email: 'sahitya@nith.ac.in',
        memberCount: '90+',
        achievements: [
          'National Debate Competition Winners',
          'Best College Magazine Award',
        ],
      },
    ],
    eventsHeading: 'Major Cultural Events',
    eventsDescription:
      "Our clubs organize various events throughout the year including Hill'ffair (Annual Cultural Festival), SPIC MACAY concerts, inter-hostel competitions, and more.",
  });

  const tabs = [
    {
      id: 'hero' as TabType,
      label: 'Hero Section',
      icon: <FileText size={18} />,
    },
    { id: 'overview' as TabType, label: 'Overview', icon: <Star size={18} /> },
    { id: 'clubs' as TabType, label: 'Clubs', icon: <Users size={18} /> },
    { id: 'events' as TabType, label: 'Events', icon: <Calendar size={18} /> },
  ];

  const handleSave = () => {
    alert('Changes saved successfully!');
    console.log(culturalData);
  };

  const addClub = () => {
    const newClub: Club = {
      id: Date.now(),
      name: '',
      category: 'Music',
      description: '',
      coordinator: '',
      email: '',
      memberCount: '',
      achievements: [''],
    };
    setCulturalData({
      ...culturalData,
      clubs: [...culturalData.clubs, newClub],
    });
  };

  const removeClub = (id: number) => {
    setCulturalData({
      ...culturalData,
      clubs: culturalData.clubs.filter((c) => c.id !== id),
    });
  };

  const updateClub = (
    id: number,
    field: keyof Club,
    value: string | string[]
  ) => {
    setCulturalData({
      ...culturalData,
      clubs: culturalData.clubs.map((c) =>
        c.id === id ? { ...c, [field]: value } : c
      ),
    });
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Music: 'bg-purple-100 text-purple-800',
      Dance: 'bg-pink-100 text-pink-800',
      Theatre: 'bg-amber-100 text-amber-800',
      'Fine Arts': 'bg-blue-100 text-blue-800',
      Literary: 'bg-green-100 text-green-800',
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="space-y-4 sm:space-y-6 p-2 sm:p-4 lg:p-6">
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="bg-[#631012]/10 p-2 sm:p-3 rounded-full text-[#631012] flex-shrink-0">
              <Music className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#171717] break-words">
                Cultural Activities Editor
              </h1>
              <p className="text-sm sm:text-base text-[#171717]/60 mt-1">
                Manage cultural clubs and activities
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
                className={`flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-4 font-medium transition-colors whitespace-nowrap text-sm sm:text-base flex-shrink-0 ${activeTab === tab.id ? 'bg-[#631012] text-white border-b-2 border-[#631012]' : 'text-[#171717]/70 hover:bg-[#F9F9F9] hover:text-[#171717]'}`}
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
                    value={culturalData.heroHeading}
                    onChange={(e) =>
                      setCulturalData({
                        ...culturalData,
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
                    value={culturalData.heroDescription}
                    onChange={(e) =>
                      setCulturalData({
                        ...culturalData,
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
                  {culturalData.heroHeading}
                </h3>
                <p className="text-white/80">{culturalData.heroDescription}</p>
              </div>
            </div>
          )}

          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <Star className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Overview Section
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Overview Heading
                  </label>
                  <input
                    type="text"
                    value={culturalData.overviewHeading}
                    onChange={(e) =>
                      setCulturalData({
                        ...culturalData,
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
                    value={culturalData.overviewDescription}
                    onChange={(e) =>
                      setCulturalData({
                        ...culturalData,
                        overviewDescription: e.target.value,
                      })
                    }
                    rows={4}
                    className="w-full px-4 py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] text-black"
                  />
                </div>
              </div>
              <div className="mt-8 p-6 bg-[#F9F9F9] rounded-xl border border-[#171717]/10">
                <h3 className="text-xl font-bold text-[#171717] mb-3">
                  {culturalData.overviewHeading}
                </h3>
                <p className="text-[#171717]/70">
                  {culturalData.overviewDescription}
                </p>
              </div>
            </div>
          )}

          {activeTab === 'clubs' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Users className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                  <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                    Cultural Clubs
                  </h2>
                </div>
                <button
                  onClick={addClub}
                  className="bg-[#631012] hover:bg-[#7a1214] text-white px-4 py-2 rounded-lg flex items-center gap-2"
                >
                  <Plus size={18} /> Add Club
                </button>
              </div>

              <div className="grid grid-cols-1 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Section Heading
                  </label>
                  <input
                    type="text"
                    value={culturalData.clubsHeading}
                    onChange={(e) =>
                      setCulturalData({
                        ...culturalData,
                        clubsHeading: e.target.value,
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
                    value={culturalData.clubsSubtitle}
                    onChange={(e) =>
                      setCulturalData({
                        ...culturalData,
                        clubsSubtitle: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] text-black"
                  />
                </div>
              </div>

              <div className="space-y-4">
                {culturalData.clubs.map((club, index) => (
                  <div
                    key={club.id}
                    className="border border-[#171717]/20 rounded-lg p-4 bg-[#F9F9F9]"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-semibold text-[#631012]">
                        Club #{index + 1}
                      </span>
                      <button
                        onClick={() => removeClub(club.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#171717] mb-1">
                          Club Name
                        </label>
                        <input
                          type="text"
                          value={club.name}
                          onChange={(e) =>
                            updateClub(club.id, 'name', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg text-black"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#171717] mb-1">
                          Category
                        </label>
                        <select
                          value={club.category}
                          onChange={(e) =>
                            updateClub(club.id, 'category', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg text-black"
                        >
                          <option value="Music">Music</option>
                          <option value="Dance">Dance</option>
                          <option value="Theatre">Theatre</option>
                          <option value="Fine Arts">Fine Arts</option>
                          <option value="Literary">Literary</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#171717] mb-1">
                          Coordinator
                        </label>
                        <input
                          type="text"
                          value={club.coordinator}
                          onChange={(e) =>
                            updateClub(club.id, 'coordinator', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg text-black"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#171717] mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          value={club.email}
                          onChange={(e) =>
                            updateClub(club.id, 'email', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg text-black"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#171717] mb-1">
                          Member Count
                        </label>
                        <input
                          type="text"
                          value={club.memberCount}
                          onChange={(e) =>
                            updateClub(club.id, 'memberCount', e.target.value)
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
                          value={club.achievements.join(', ')}
                          onChange={(e) =>
                            updateClub(
                              club.id,
                              'achievements',
                              e.target.value.split(', ')
                            )
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg text-black"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-[#171717] mb-1">
                          Description
                        </label>
                        <textarea
                          value={club.description}
                          onChange={(e) =>
                            updateClub(club.id, 'description', e.target.value)
                          }
                          rows={2}
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {culturalData.clubs.map((club) => (
                    <div
                      key={club.id}
                      className="bg-white border border-[#171717]/10 rounded-lg p-4 shadow-sm"
                    >
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(club.category)}`}
                      >
                        {club.category}
                      </span>
                      <h4 className="font-semibold text-[#171717] mt-2">
                        {club.name}
                      </h4>
                      <p className="text-sm text-[#171717]/70 mb-3">
                        {club.description}
                      </p>
                      <div className="text-xs text-[#171717]/60 space-y-1">
                        <p>
                          <strong>Coordinator:</strong> {club.coordinator}
                        </p>
                        <p>
                          <strong>Members:</strong> {club.memberCount}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'events' && (
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Events Section
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Events Heading
                  </label>
                  <input
                    type="text"
                    value={culturalData.eventsHeading}
                    onChange={(e) =>
                      setCulturalData({
                        ...culturalData,
                        eventsHeading: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] text-black"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Events Description
                  </label>
                  <textarea
                    value={culturalData.eventsDescription}
                    onChange={(e) =>
                      setCulturalData({
                        ...culturalData,
                        eventsDescription: e.target.value,
                      })
                    }
                    rows={4}
                    className="w-full px-4 py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] text-black"
                  />
                </div>
              </div>
              <div className="mt-8 p-6 bg-[#F9F9F9] rounded-xl border border-[#171717]/10">
                <h3 className="text-xl font-bold text-[#171717] mb-3">
                  {culturalData.eventsHeading}
                </h3>
                <p className="text-[#171717]/70">
                  {culturalData.eventsDescription}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
