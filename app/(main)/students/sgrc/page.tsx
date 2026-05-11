'use client';

import React, { useState } from 'react';
import {
  Save,
  Users,
  Plus,
  Trash2,
  FileText,
  Target,
  ClipboardList,
  Calendar,
} from 'lucide-react';

interface CommitteeMember {
  id: number;
  name: string;
  designation: string;
  department: string;
  role: string;
}

interface Meeting {
  id: number;
  date: string;
  agenda: string;
  minutes: string;
  status: string;
}

interface SGRCData {
  heroHeading: string;
  heroDescription: string;
  aboutHeading: string;
  aboutDescription: string;
  objectives: string[];
  membersHeading: string;
  membersSubtitle: string;
  members: CommitteeMember[];
  meetingsHeading: string;
  meetingsSubtitle: string;
  meetings: Meeting[];
}

type TabType = 'hero' | 'about' | 'members' | 'meetings';

export default function SGRCPage() {
  const [activeTab, setActiveTab] = useState<TabType>('hero');

  const [sgrcData, setSgrcData] = useState<SGRCData>({
    heroHeading: 'Student Grievance Redressal Committee (SGRC)',
    heroDescription:
      'A dedicated committee to address student grievances and ensure a conducive learning environment at NIT Hamirpur.',
    aboutHeading: 'About SGRC',
    aboutDescription:
      'The Student Grievance Redressal Committee (SGRC) at NIT Hamirpur is constituted to address and resolve grievances of students related to academic and non-academic matters. The committee ensures fair and transparent handling of all complaints.',
    objectives: [
      'To provide a platform for students to voice their grievances',
      'To ensure timely resolution of student complaints',
      'To maintain transparency in the grievance redressal process',
      'To promote a harmonious academic environment',
      'To protect student rights and interests',
    ],
    membersHeading: 'Committee Members',
    membersSubtitle:
      'The SGRC comprises faculty members and student representatives',
    members: [
      {
        id: 1,
        name: 'Dr. Anil Kumar',
        designation: 'Associate Professor',
        department: 'Computer Science & Engineering',
        role: 'Chairperson',
      },
      {
        id: 2,
        name: 'Dr. Meera Sharma',
        designation: 'Assistant Professor',
        department: 'Electronics & Communication',
        role: 'Member Secretary',
      },
      {
        id: 3,
        name: 'Dr. Rajesh Verma',
        designation: 'Associate Professor',
        department: 'Mechanical Engineering',
        role: 'Member',
      },
      {
        id: 4,
        name: 'Priya Singh',
        designation: 'B.Tech 4th Year',
        department: 'Civil Engineering',
        role: 'Student Representative',
      },
      {
        id: 5,
        name: 'Rahul Gupta',
        designation: 'M.Tech 2nd Year',
        department: 'Electrical Engineering',
        role: 'Student Representative',
      },
    ],
    meetingsHeading: 'Recent Meetings',
    meetingsSubtitle: 'Minutes and agendas of SGRC meetings',
    meetings: [
      {
        id: 1,
        date: '2025-03-15',
        agenda: 'Review of pending grievances and resolution status',
        minutes:
          'Discussed 12 pending cases, resolved 8, referred 4 to higher authorities.',
        status: 'Completed',
      },
      {
        id: 2,
        date: '2025-02-20',
        agenda: 'Annual review of grievance redressal mechanism',
        minutes:
          'Proposed improvements to online grievance portal. Approved new timeline for resolution.',
        status: 'Completed',
      },
      {
        id: 3,
        date: '2025-04-10',
        agenda: 'Quarterly review meeting',
        minutes: '',
        status: 'Scheduled',
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
      id: 'about' as TabType,
      label: 'About & Objectives',
      icon: <Target size={18} />,
    },
    {
      id: 'members' as TabType,
      label: 'Committee Members',
      icon: <Users size={18} />,
    },
    {
      id: 'meetings' as TabType,
      label: 'Meetings',
      icon: <ClipboardList size={18} />,
    },
  ];

  const handleSave = () => {
    alert('Changes saved successfully!');
    console.log(sgrcData);
  };

  const addMember = () => {
    const newMember: CommitteeMember = {
      id: Date.now(),
      name: '',
      designation: '',
      department: '',
      role: 'Member',
    };
    setSgrcData({ ...sgrcData, members: [...sgrcData.members, newMember] });
  };

  const removeMember = (id: number) => {
    setSgrcData({
      ...sgrcData,
      members: sgrcData.members.filter((m) => m.id !== id),
    });
  };

  const updateMember = (
    id: number,
    field: keyof CommitteeMember,
    value: string
  ) => {
    setSgrcData({
      ...sgrcData,
      members: sgrcData.members.map((m) =>
        m.id === id ? { ...m, [field]: value } : m
      ),
    });
  };

  const addMeeting = () => {
    const newMeeting: Meeting = {
      id: Date.now(),
      date: new Date().toISOString().split('T')[0],
      agenda: '',
      minutes: '',
      status: 'Scheduled',
    };
    setSgrcData({ ...sgrcData, meetings: [...sgrcData.meetings, newMeeting] });
  };

  const removeMeeting = (id: number) => {
    setSgrcData({
      ...sgrcData,
      meetings: sgrcData.meetings.filter((m) => m.id !== id),
    });
  };

  const updateMeeting = (id: number, field: keyof Meeting, value: string) => {
    setSgrcData({
      ...sgrcData,
      meetings: sgrcData.meetings.map((m) =>
        m.id === id ? { ...m, [field]: value } : m
      ),
    });
  };

  const addObjective = () => {
    setSgrcData({ ...sgrcData, objectives: [...sgrcData.objectives, ''] });
  };

  const removeObjective = (index: number) => {
    setSgrcData({
      ...sgrcData,
      objectives: sgrcData.objectives.filter((_, i) => i !== index),
    });
  };

  const updateObjective = (index: number, value: string) => {
    const updated = [...sgrcData.objectives];
    updated[index] = value;
    setSgrcData({ ...sgrcData, objectives: updated });
  };

  const getRoleColor = (role: string) => {
    const colors: Record<string, string> = {
      Chairperson: 'bg-[#631012] text-white',
      'Member Secretary': 'bg-blue-100 text-blue-800',
      Member: 'bg-gray-100 text-gray-800',
      'Student Representative': 'bg-green-100 text-green-800',
    };
    return colors[role] || 'bg-gray-100 text-gray-800';
  };

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      Completed: 'bg-green-100 text-green-800',
      Scheduled: 'bg-blue-100 text-blue-800',
      Cancelled: 'bg-red-100 text-red-800',
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="space-y-4 sm:space-y-6 p-2 sm:p-4 lg:p-6">
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="bg-[#631012]/10 p-2 sm:p-3 rounded-full text-[#631012] flex-shrink-0">
              <Users className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#171717] break-words">
                SGRC Editor
              </h1>
              <p className="text-sm sm:text-base text-[#171717]/60 mt-1">
                Manage Student Grievance Redressal Committee
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
                    value={sgrcData.heroHeading}
                    onChange={(e) =>
                      setSgrcData({ ...sgrcData, heroHeading: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] text-black"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Hero Description
                  </label>
                  <textarea
                    value={sgrcData.heroDescription}
                    onChange={(e) =>
                      setSgrcData({
                        ...sgrcData,
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
                  {sgrcData.heroHeading}
                </h3>
                <p className="text-white/80">{sgrcData.heroDescription}</p>
              </div>
            </div>
          )}

          {activeTab === 'about' && (
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <Target className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
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
                    value={sgrcData.aboutHeading}
                    onChange={(e) =>
                      setSgrcData({ ...sgrcData, aboutHeading: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] text-black"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    About Description
                  </label>
                  <textarea
                    value={sgrcData.aboutDescription}
                    onChange={(e) =>
                      setSgrcData({
                        ...sgrcData,
                        aboutDescription: e.target.value,
                      })
                    }
                    rows={4}
                    className="w-full px-4 py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] text-black"
                  />
                </div>
              </div>

              <div className="mt-6">
                <div className="flex items-center justify-between mb-4">
                  <label className="block text-sm font-medium text-[#171717]">
                    Objectives
                  </label>
                  <button
                    onClick={addObjective}
                    className="text-[#631012] hover:text-[#7a1214] flex items-center gap-1 text-sm"
                  >
                    <Plus size={16} /> Add Objective
                  </button>
                </div>
                <div className="space-y-3">
                  {sgrcData.objectives.map((objective, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="text-[#631012] font-medium">
                        {index + 1}.
                      </span>
                      <input
                        type="text"
                        value={objective}
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
                  {sgrcData.aboutHeading}
                </h3>
                <p className="text-[#171717]/70 mb-4">
                  {sgrcData.aboutDescription}
                </p>
                <h4 className="font-semibold text-[#171717] mb-2">
                  Objectives:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-[#171717]/70">
                  {sgrcData.objectives.map((obj, index) => (
                    <li key={index}>{obj}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'members' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Users className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                  <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                    Committee Members
                  </h2>
                </div>
                <button
                  onClick={addMember}
                  className="bg-[#631012] hover:bg-[#7a1214] text-white px-4 py-2 rounded-lg flex items-center gap-2"
                >
                  <Plus size={18} /> Add Member
                </button>
              </div>

              <div className="grid grid-cols-1 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Section Heading
                  </label>
                  <input
                    type="text"
                    value={sgrcData.membersHeading}
                    onChange={(e) =>
                      setSgrcData({
                        ...sgrcData,
                        membersHeading: e.target.value,
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
                    value={sgrcData.membersSubtitle}
                    onChange={(e) =>
                      setSgrcData({
                        ...sgrcData,
                        membersSubtitle: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] text-black"
                  />
                </div>
              </div>

              <div className="space-y-4">
                {sgrcData.members.map((member, index) => (
                  <div
                    key={member.id}
                    className="border border-[#171717]/20 rounded-lg p-4 bg-[#F9F9F9]"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-semibold text-[#631012]">
                        Member #{index + 1}
                      </span>
                      <button
                        onClick={() => removeMember(member.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#171717] mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          value={member.name}
                          onChange={(e) =>
                            updateMember(member.id, 'name', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg text-black"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#171717] mb-1">
                          Designation
                        </label>
                        <input
                          type="text"
                          value={member.designation}
                          onChange={(e) =>
                            updateMember(
                              member.id,
                              'designation',
                              e.target.value
                            )
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg text-black"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#171717] mb-1">
                          Department
                        </label>
                        <input
                          type="text"
                          value={member.department}
                          onChange={(e) =>
                            updateMember(
                              member.id,
                              'department',
                              e.target.value
                            )
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg text-black"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#171717] mb-1">
                          Role
                        </label>
                        <select
                          value={member.role}
                          onChange={(e) =>
                            updateMember(member.id, 'role', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg text-black"
                        >
                          <option value="Chairperson">Chairperson</option>
                          <option value="Member Secretary">
                            Member Secretary
                          </option>
                          <option value="Member">Member</option>
                          <option value="Student Representative">
                            Student Representative
                          </option>
                        </select>
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
                  {sgrcData.members.map((member) => (
                    <div
                      key={member.id}
                      className="bg-white border border-[#171717]/10 rounded-lg p-4 shadow-sm"
                    >
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getRoleColor(member.role)}`}
                      >
                        {member.role}
                      </span>
                      <h4 className="font-semibold text-[#171717] mt-2">
                        {member.name}
                      </h4>
                      <p className="text-sm text-[#631012]">
                        {member.designation}
                      </p>
                      <p className="text-sm text-[#171717]/60">
                        {member.department}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'meetings' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <ClipboardList className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                  <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                    Meetings
                  </h2>
                </div>
                <button
                  onClick={addMeeting}
                  className="bg-[#631012] hover:bg-[#7a1214] text-white px-4 py-2 rounded-lg flex items-center gap-2"
                >
                  <Plus size={18} /> Add Meeting
                </button>
              </div>

              <div className="grid grid-cols-1 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Section Heading
                  </label>
                  <input
                    type="text"
                    value={sgrcData.meetingsHeading}
                    onChange={(e) =>
                      setSgrcData({
                        ...sgrcData,
                        meetingsHeading: e.target.value,
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
                    value={sgrcData.meetingsSubtitle}
                    onChange={(e) =>
                      setSgrcData({
                        ...sgrcData,
                        meetingsSubtitle: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] text-black"
                  />
                </div>
              </div>

              <div className="space-y-4">
                {sgrcData.meetings.map((meeting, index) => (
                  <div
                    key={meeting.id}
                    className="border border-[#171717]/20 rounded-lg p-4 bg-[#F9F9F9]"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-semibold text-[#631012]">
                        Meeting #{index + 1}
                      </span>
                      <button
                        onClick={() => removeMeeting(meeting.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#171717] mb-1">
                          Date
                        </label>
                        <input
                          type="date"
                          value={meeting.date}
                          onChange={(e) =>
                            updateMeeting(meeting.id, 'date', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg text-black"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#171717] mb-1">
                          Status
                        </label>
                        <select
                          value={meeting.status}
                          onChange={(e) =>
                            updateMeeting(meeting.id, 'status', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg text-black"
                        >
                          <option value="Scheduled">Scheduled</option>
                          <option value="Completed">Completed</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-[#171717] mb-1">
                          Agenda
                        </label>
                        <textarea
                          value={meeting.agenda}
                          onChange={(e) =>
                            updateMeeting(meeting.id, 'agenda', e.target.value)
                          }
                          rows={2}
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg text-black"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-[#171717] mb-1">
                          Minutes
                        </label>
                        <textarea
                          value={meeting.minutes}
                          onChange={(e) =>
                            updateMeeting(meeting.id, 'minutes', e.target.value)
                          }
                          rows={2}
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg text-black"
                          placeholder="Leave empty if meeting is scheduled"
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
                <div className="space-y-3">
                  {sgrcData.meetings.map((meeting) => (
                    <div
                      key={meeting.id}
                      className="bg-white border border-[#171717]/10 rounded-lg p-4 shadow-sm"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} className="text-[#631012]" />
                          <span className="font-medium text-[#171717]">
                            {meeting.date}
                          </span>
                        </div>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(meeting.status)}`}
                        >
                          {meeting.status}
                        </span>
                      </div>
                      <p className="text-sm text-[#171717]/70 mb-2">
                        <strong>Agenda:</strong> {meeting.agenda}
                      </p>
                      {meeting.minutes && (
                        <p className="text-sm text-[#171717]/70">
                          <strong>Minutes:</strong> {meeting.minutes}
                        </p>
                      )}
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
