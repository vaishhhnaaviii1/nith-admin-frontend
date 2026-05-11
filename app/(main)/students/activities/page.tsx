'use client';

import React, { useState } from 'react';
import {
  Save,
  Calendar,
  Plus,
  Trash2,
  FileText,
  Users,
  MapPin,
  Clock,
} from 'lucide-react';

interface Activity {
  id: number;
  title: string;
  date: string;
  time: string;
  venue: string;
  category: string;
  description: string;
  organizer: string;
  participants: string;
}

interface ActivitiesData {
  heroHeading: string;
  heroDescription: string;
  activitiesHeading: string;
  activitiesSubtitle: string;
  activities: Activity[];
  upcomingHeading: string;
  upcomingDescription: string;
}

type TabType = 'hero' | 'activities' | 'upcoming';

export default function ActivitiesPage() {
  const [activeTab, setActiveTab] = useState<TabType>('hero');

  const [activitiesData, setActivitiesData] = useState<ActivitiesData>({
    heroHeading: 'Student Activities',
    heroDescription:
      'Explore the vibrant co-curricular and extra-curricular activities that shape the holistic development of students at NIT Hamirpur.',
    activitiesHeading: 'Recent Activities',
    activitiesSubtitle:
      'A glimpse into the dynamic student life and events organized throughout the year',
    activities: [
      {
        id: 1,
        title: 'Annual Technical Symposium',
        date: '2025-03-15',
        time: '09:00 AM - 05:00 PM',
        venue: 'Main Auditorium',
        category: 'Technical',
        description:
          'A day-long symposium featuring talks by industry experts, research presentations, and technical demonstrations.',
        organizer: 'Technical Council',
        participants: '500+',
      },
      {
        id: 2,
        title: 'Cultural Night - Expressions',
        date: '2025-02-20',
        time: '06:00 PM - 10:00 PM',
        venue: 'Open Air Theatre',
        category: 'Cultural',
        description:
          'An evening of music, dance, drama, and artistic performances showcasing student talents.',
        organizer: 'Cultural Council',
        participants: '1000+',
      },
      {
        id: 3,
        title: 'Inter-Hostel Sports Tournament',
        date: '2025-01-25',
        time: '08:00 AM - 06:00 PM',
        venue: 'Sports Complex',
        category: 'Sports',
        description:
          'Multi-sport tournament including cricket, football, basketball, and athletics competitions.',
        organizer: 'Sports Council',
        participants: '800+',
      },
      {
        id: 4,
        title: 'Entrepreneurship Workshop',
        date: '2025-04-10',
        time: '10:00 AM - 04:00 PM',
        venue: 'Seminar Hall - Block A',
        category: 'Workshop',
        description:
          'Interactive workshop on startup ecosystem, business planning, and funding strategies.',
        organizer: 'E-Cell NITH',
        participants: '200+',
      },
    ],
    upcomingHeading: 'Upcoming Events',
    upcomingDescription:
      'Stay tuned for exciting events and activities planned for the upcoming semester.',
  });

  const tabs = [
    {
      id: 'hero' as TabType,
      label: 'Hero Section',
      icon: <FileText size={18} />,
    },
    {
      id: 'activities' as TabType,
      label: 'Activities List',
      icon: <Calendar size={18} />,
    },
    {
      id: 'upcoming' as TabType,
      label: 'Upcoming Events',
      icon: <Clock size={18} />,
    },
  ];

  const handleSave = () => {
    alert('Changes saved successfully!');
    console.log(activitiesData);
  };

  const addActivity = () => {
    const newActivity: Activity = {
      id: Date.now(),
      title: '',
      date: '',
      time: '',
      venue: '',
      category: 'Technical',
      description: '',
      organizer: '',
      participants: '',
    };
    setActivitiesData({
      ...activitiesData,
      activities: [...activitiesData.activities, newActivity],
    });
  };

  const removeActivity = (id: number) => {
    setActivitiesData({
      ...activitiesData,
      activities: activitiesData.activities.filter((a) => a.id !== id),
    });
  };

  const updateActivity = (id: number, field: keyof Activity, value: string) => {
    setActivitiesData({
      ...activitiesData,
      activities: activitiesData.activities.map((a) =>
        a.id === id ? { ...a, [field]: value } : a
      ),
    });
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Technical: 'bg-blue-100 text-blue-800',
      Cultural: 'bg-purple-100 text-purple-800',
      Sports: 'bg-green-100 text-green-800',
      Workshop: 'bg-amber-100 text-amber-800',
      Social: 'bg-pink-100 text-pink-800',
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="space-y-4 sm:space-y-6 p-2 sm:p-4 lg:p-6">
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="bg-[#631012]/10 p-2 sm:p-3 rounded-full text-[#631012] flex-shrink-0">
              <Calendar className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#171717] break-words">
                Activities Editor
              </h1>
              <p className="text-sm sm:text-base text-[#171717]/60 mt-1">
                Manage student activities and events
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

          {activeTab === 'activities' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                  <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                    Activities List
                  </h2>
                </div>
                <button
                  onClick={addActivity}
                  className="bg-[#631012] hover:bg-[#7a1214] text-white px-4 py-2 rounded-lg flex items-center gap-2"
                >
                  <Plus size={18} /> Add Activity
                </button>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Section Heading
                  </label>
                  <input
                    type="text"
                    value={activitiesData.activitiesHeading}
                    onChange={(e) =>
                      setActivitiesData({
                        ...activitiesData,
                        activitiesHeading: e.target.value,
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
                    value={activitiesData.activitiesSubtitle}
                    onChange={(e) =>
                      setActivitiesData({
                        ...activitiesData,
                        activitiesSubtitle: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] text-black"
                  />
                </div>
              </div>

              <div className="space-y-4">
                {activitiesData.activities.map((activity, index) => (
                  <div
                    key={activity.id}
                    className="border border-[#171717]/20 rounded-lg p-4 bg-[#F9F9F9]"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-semibold text-[#631012]">
                        Activity #{index + 1}
                      </span>
                      <button
                        onClick={() => removeActivity(activity.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#171717] mb-1">
                          Title
                        </label>
                        <input
                          type="text"
                          value={activity.title}
                          onChange={(e) =>
                            updateActivity(activity.id, 'title', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg text-black"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#171717] mb-1">
                          Category
                        </label>
                        <select
                          value={activity.category}
                          onChange={(e) =>
                            updateActivity(
                              activity.id,
                              'category',
                              e.target.value
                            )
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg text-black"
                        >
                          <option value="Technical">Technical</option>
                          <option value="Cultural">Cultural</option>
                          <option value="Sports">Sports</option>
                          <option value="Workshop">Workshop</option>
                          <option value="Social">Social</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#171717] mb-1">
                          Date
                        </label>
                        <input
                          type="date"
                          value={activity.date}
                          onChange={(e) =>
                            updateActivity(activity.id, 'date', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg text-black"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#171717] mb-1">
                          Time
                        </label>
                        <input
                          type="text"
                          value={activity.time}
                          onChange={(e) =>
                            updateActivity(activity.id, 'time', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg text-black"
                          placeholder="e.g., 09:00 AM - 05:00 PM"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#171717] mb-1">
                          Venue
                        </label>
                        <input
                          type="text"
                          value={activity.venue}
                          onChange={(e) =>
                            updateActivity(activity.id, 'venue', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg text-black"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#171717] mb-1">
                          Organizer
                        </label>
                        <input
                          type="text"
                          value={activity.organizer}
                          onChange={(e) =>
                            updateActivity(
                              activity.id,
                              'organizer',
                              e.target.value
                            )
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg text-black"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#171717] mb-1">
                          Participants
                        </label>
                        <input
                          type="text"
                          value={activity.participants}
                          onChange={(e) =>
                            updateActivity(
                              activity.id,
                              'participants',
                              e.target.value
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
                          value={activity.description}
                          onChange={(e) =>
                            updateActivity(
                              activity.id,
                              'description',
                              e.target.value
                            )
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activitiesData.activities.map((activity) => (
                    <div
                      key={activity.id}
                      className="bg-white border border-[#171717]/10 rounded-lg p-4 shadow-sm"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(activity.category)}`}
                        >
                          {activity.category}
                        </span>
                        <span className="text-sm text-[#171717]/60">
                          {activity.date}
                        </span>
                      </div>
                      <h4 className="font-semibold text-[#171717] mb-2">
                        {activity.title}
                      </h4>
                      <p className="text-sm text-[#171717]/70 mb-3">
                        {activity.description}
                      </p>
                      <div className="flex flex-wrap gap-3 text-xs text-[#171717]/60">
                        <span className="flex items-center gap-1">
                          <MapPin size={12} />
                          {activity.venue}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {activity.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users size={12} />
                          {activity.participants}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'upcoming' && (
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Upcoming Events Section
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Section Heading
                  </label>
                  <input
                    type="text"
                    value={activitiesData.upcomingHeading}
                    onChange={(e) =>
                      setActivitiesData({
                        ...activitiesData,
                        upcomingHeading: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] text-black"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Section Description
                  </label>
                  <textarea
                    value={activitiesData.upcomingDescription}
                    onChange={(e) =>
                      setActivitiesData({
                        ...activitiesData,
                        upcomingDescription: e.target.value,
                      })
                    }
                    rows={3}
                    className="w-full px-4 py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] text-black"
                  />
                </div>
              </div>

              <div className="mt-8 p-6 bg-[#F9F9F9] rounded-xl border border-[#171717]/10">
                <h3 className="text-xl font-bold text-[#171717] mb-2">
                  {activitiesData.upcomingHeading}
                </h3>
                <p className="text-[#171717]/70">
                  {activitiesData.upcomingDescription}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
