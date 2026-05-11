'use client';

import React, { useState } from 'react';
import { Save, Shield, Plus, Trash2, Users, FileText } from 'lucide-react';

interface AuthorityMember {
  id: string;
  name: string;
  designation: string;
  affiliation: string;
  position: string;
  email: string;
  contactPhone: string;
}

interface MeetingMinute {
  id: string;
  title: string;
  date: string;
  documentUrl: string;
  uploadedDate: string;
  uploadedBy: string;
}

interface SenateData {
  members: AuthorityMember[];
  minutes: MeetingMinute[];
}

type TabType = 'members' | 'minutes';

export default function SenatePage() {
  const [activeTab, setActiveTab] = useState<TabType>('members');

  const [senateData, setSenateData] = useState<SenateData>({
    members: [
      {
        id: '1',
        name: 'Prof. Director',
        designation: 'Chairperson',
        affiliation: 'NIT Hamirpur',
        position: 'Director',
        email: 'director@nith.ac.in',
        contactPhone: '+91-1972-254001',
      },
      {
        id: '2',
        name: 'Prof. Academic Dean',
        designation: 'Member',
        affiliation: 'NIT Hamirpur',
        position: 'Dean Academic',
        email: 'dean.acad@nith.ac.in',
        contactPhone: '+91-1972-254002',
      },
    ],
    minutes: [
      {
        id: '1',
        title: 'Senate Meeting 2024-1',
        date: '2024-02-10',
        documentUrl: '/documents/senate/minutes-2024-1.pdf',
        uploadedDate: '2024-02-15',
        uploadedBy: 'Admin',
      },
    ],
  });

  const tabs = [
    {
      id: 'members' as TabType,
      label: 'Members',
      icon: <Users size={18} />,
    },
    {
      id: 'minutes' as TabType,
      label: 'Meeting Minutes',
      icon: <FileText size={18} />,
    },
  ];

  const handleSave = () => {
    alert('Changes saved successfully!');
    console.log(senateData);
  };

  const updateMember = (
    index: number,
    field: keyof AuthorityMember,
    value: string
  ) => {
    const updated = [...senateData.members];
    updated[index] = { ...updated[index], [field]: value };
    setSenateData({ ...senateData, members: updated });
  };

  const addMember = () => {
    setSenateData({
      ...senateData,
      members: [
        ...senateData.members,
        {
          id: Date.now().toString(),
          name: '',
          designation: '',
          affiliation: '',
          position: '',
          email: '',
          contactPhone: '',
        },
      ],
    });
  };

  const removeMember = (index: number) => {
    setSenateData({
      ...senateData,
      members: senateData.members.filter((_, i) => i !== index),
    });
  };

  const updateMinute = (
    index: number,
    field: keyof MeetingMinute,
    value: string
  ) => {
    const updated = [...senateData.minutes];
    updated[index] = { ...updated[index], [field]: value };
    setSenateData({ ...senateData, minutes: updated });
  };

  const addMinute = () => {
    setSenateData({
      ...senateData,
      minutes: [
        ...senateData.minutes,
        {
          id: Date.now().toString(),
          title: '',
          date: '',
          documentUrl: '',
          uploadedDate: new Date().toISOString().split('T')[0],
          uploadedBy: '',
        },
      ],
    });
  };

  const removeMinute = (index: number) => {
    setSenateData({
      ...senateData,
      minutes: senateData.minutes.filter((_, i) => i !== index),
    });
  };

  return (
    <div className="space-y-4 sm:space-y-6 p-2 sm:p-4 lg:p-6">
      <div className="bg-gradient-to-r from-[#631012] to-[#7a1214] rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 text-white">
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <Shield className="w-6 h-6 sm:w-8 sm:h-8" />
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">Senate</h1>
        </div>
        <p className="text-sm sm:text-base text-white/90">
          Manage Senate members and meeting minutes
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="bg-[#631012]/10 p-2 sm:p-3 rounded-full text-[#631012] flex-shrink-0">
              <Shield className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#171717] break-words">
                Senate Editor
              </h1>
              <p className="text-sm sm:text-base text-[#171717]/60 mt-1">
                Edit Senate content
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
          {/* Members Tab */}
          {activeTab === 'members' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Users className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Senate Members
                </h2>
              </div>

              <div className="space-y-3">
                {senateData.members.map((member, index) => (
                  <div
                    key={member.id}
                    className="p-4 border border-[#171717]/20 rounded-lg bg-[#F9F9F9] space-y-3"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-[#171717]/60">
                        Member {index + 1}
                      </span>
                      <button
                        onClick={() => removeMember(index)}
                        className="px-2 py-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs text-[#171717]/60 mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          value={member.name}
                          onChange={(e) =>
                            updateMember(index, 'name', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                          placeholder="Member name"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-[#171717]/60 mb-1">
                          Designation
                        </label>
                        <input
                          type="text"
                          value={member.designation}
                          onChange={(e) =>
                            updateMember(index, 'designation', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                          placeholder="Chairperson, Member, etc."
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-[#171717]/60 mb-1">
                          Affiliation
                        </label>
                        <input
                          type="text"
                          value={member.affiliation}
                          onChange={(e) =>
                            updateMember(index, 'affiliation', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                          placeholder="Organization"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-[#171717]/60 mb-1">
                          Position
                        </label>
                        <input
                          type="text"
                          value={member.position}
                          onChange={(e) =>
                            updateMember(index, 'position', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                          placeholder="Position title"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-[#171717]/60 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          value={member.email}
                          onChange={(e) =>
                            updateMember(index, 'email', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                          placeholder="email@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-[#171717]/60 mb-1">
                          Contact Phone
                        </label>
                        <input
                          type="tel"
                          value={member.contactPhone}
                          onChange={(e) =>
                            updateMember(index, 'contactPhone', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                          placeholder="+91-XXXXXXXXXX"
                        />
                      </div>
                    </div>
                  </div>
                ))}
                <button
                  onClick={addMember}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 text-[#631012] hover:bg-[#631012]/10 rounded-lg transition-colors text-sm sm:text-base"
                >
                  <Plus size={18} />
                  Add Member
                </button>
              </div>

              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
                  Preview:
                </p>
                <div className="bg-white p-4 sm:p-6 rounded-lg">
                  <div className="space-y-3">
                    {senateData.members.map((member) => (
                      <div
                        key={member.id}
                        className="border-b border-[#171717]/10 pb-3"
                      >
                        <h4 className="font-semibold text-[#171717]">
                          {member.name}
                        </h4>
                        <p className="text-sm text-[#631012]">
                          {member.designation}
                        </p>
                        <p className="text-xs text-[#171717]/60">
                          {member.affiliation}{' '}
                          {member.position && `• ${member.position}`}
                        </p>
                        <div className="flex gap-4 mt-1">
                          <p className="text-xs text-[#171717]/60">
                            {member.email}
                          </p>
                          <p className="text-xs text-[#171717]/60">
                            {member.contactPhone}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Meeting Minutes Tab */}
          {activeTab === 'minutes' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <FileText className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Meeting Minutes
                </h2>
              </div>

              <div className="space-y-3">
                {senateData.minutes.map((minute, index) => (
                  <div
                    key={minute.id}
                    className="p-4 border border-[#171717]/20 rounded-lg bg-[#F9F9F9] space-y-3"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-[#171717]/60">
                        Minute {index + 1}
                      </span>
                      <button
                        onClick={() => removeMinute(index)}
                        className="px-2 py-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs text-[#171717]/60 mb-1">
                          Title
                        </label>
                        <input
                          type="text"
                          value={minute.title}
                          onChange={(e) =>
                            updateMinute(index, 'title', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                          placeholder="Meeting title"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-[#171717]/60 mb-1">
                          Date
                        </label>
                        <input
                          type="date"
                          value={minute.date}
                          onChange={(e) =>
                            updateMinute(index, 'date', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-[#171717]/60 mb-1">
                          Document URL
                        </label>
                        <input
                          type="text"
                          value={minute.documentUrl}
                          onChange={(e) =>
                            updateMinute(index, 'documentUrl', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                          placeholder="/documents/senate/minutes.pdf"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-[#171717]/60 mb-1">
                          Uploaded By
                        </label>
                        <input
                          type="text"
                          value={minute.uploadedBy}
                          onChange={(e) =>
                            updateMinute(index, 'uploadedBy', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                          placeholder="Admin"
                        />
                      </div>
                    </div>
                  </div>
                ))}
                <button
                  onClick={addMinute}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 text-[#631012] hover:bg-[#631012]/10 rounded-lg transition-colors text-sm sm:text-base"
                >
                  <Plus size={18} />
                  Add Minute
                </button>
              </div>

              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
                  Preview:
                </p>
                <div className="bg-white p-4 sm:p-6 rounded-lg">
                  <div className="space-y-3">
                    {senateData.minutes.map((minute) => (
                      <div
                        key={minute.id}
                        className="border-b border-[#171717]/10 pb-3"
                      >
                        <h4 className="font-semibold text-[#171717]">
                          {minute.title}
                        </h4>
                        <p className="text-sm text-[#171717]/60">
                          Date: {minute.date}
                        </p>
                        <p className="text-xs text-[#631012] underline">
                          {minute.documentUrl}
                        </p>
                        <p className="text-xs text-[#171717]/60">
                          Uploaded on {minute.uploadedDate} by{' '}
                          {minute.uploadedBy}
                        </p>
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
