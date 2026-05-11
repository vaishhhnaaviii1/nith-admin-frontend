'use client';

import React, { useState } from 'react';
import {
  Save,
  Database,
  Plus,
  Trash2,
  FileText,
  Bell,
  Contact,
} from 'lucide-react';

interface NADNotice {
  slNo: string;
  title: string;
  description: string;
  category: string;
  date: string;
  viewUrl: string;
  downloadUrl: string;
}

interface ContactPerson {
  sl: string;
  name: string;
  position: string;
  contactNumber: string;
  email: string;
}

interface NADCellData {
  heroHeading: string;
  heroDescription: string;
  mainDescription: string;
  notices: NADNotice[];
  contacts: ContactPerson[];
}

type TabType = 'hero' | 'notices' | 'contacts';

export default function NADCellPage() {
  const [activeTab, setActiveTab] = useState<TabType>('hero');

  const [nadData, setNADData] = useState<NADCellData>({
    heroHeading: 'NAD Cell',
    heroDescription:
      'National Academic Depository (NAD) – Secure digital access to academic awards',
    mainDescription:
      'National Academic Depository (NAD) is a 24×7 online storehouse of academic awards such as certificates, degrees, and mark-sheets, duly digitised and lodged by academic institutions, boards, and eligibility assessment bodies. NAD ensures easy access, secure storage, guaranteed authenticity, and online verification of academic awards.',
    notices: [
      {
        slNo: '1',
        title: 'Notice regarding NAD',
        description:
          'Official communication related to NAD implementation and updates.',
        category: 'Notice',
        date: '29-04-2021',
        viewUrl: '#',
        downloadUrl: '#',
      },
    ],
    contacts: [
      {
        sl: '1',
        name: 'Dr. Siddhartha Sharma',
        position: 'Nodal Officer (NAD)',
        contactNumber: '+91-1972-254006',
        email: 'nad@nith.ac.in',
      },
      {
        sl: '2',
        name: 'Dr. Nitin Gupta',
        position: 'Assistant Nodal Officer',
        contactNumber: '+91-1972-254416',
        email: 'nitin@nith.ac.in',
      },
      {
        sl: '3',
        name: 'Dr. Priyanka',
        position: 'Assistant Nodal Officer',
        contactNumber: '+91-1972-254401',
        email: 'dr.priyanka@nith.ac.in',
      },
      {
        sl: '4',
        name: 'Dr. Arun Kumar Yadav',
        position: 'Faculty Incharge (NAD-Uploading)',
        contactNumber: '+91-1972-254402',
        email: 'ayadav@nith.ac.in',
      },
      {
        sl: '5',
        name: 'Dr. Manender Singh',
        position: 'Faculty Incharge',
        contactNumber: '+91-1972-254301',
        email: 'manendra@nith.ac.in',
      },
      {
        sl: '6',
        name: 'Dr. Ram Prakash Sharma',
        position: 'Assistant Faculty Incharge',
        contactNumber: '+91-1972-254402',
        email: 'ram.sharma@nith.ac.in',
      },
    ],
  });

  const tabs = [
    {
      id: 'hero' as TabType,
      label: 'Hero & Description',
      icon: <FileText size={18} />,
    },
    {
      id: 'notices' as TabType,
      label: 'NAD Notices',
      icon: <Bell size={18} />,
    },
    {
      id: 'contacts' as TabType,
      label: 'Contact Details',
      icon: <Contact size={18} />,
    },
  ];

  const handleSave = () => {
    alert('Changes saved successfully!');
    console.log(nadData);
  };

  const updateNotice = (
    index: number,
    field: keyof NADNotice,
    value: string
  ) => {
    const updated = [...nadData.notices];
    updated[index] = { ...updated[index], [field]: value };
    setNADData({ ...nadData, notices: updated });
  };

  const addNotice = () => {
    setNADData({
      ...nadData,
      notices: [
        ...nadData.notices,
        {
          slNo: String(nadData.notices.length + 1),
          title: '',
          description: '',
          category: '',
          date: '',
          viewUrl: '#',
          downloadUrl: '#',
        },
      ],
    });
  };

  const removeNotice = (index: number) => {
    setNADData({
      ...nadData,
      notices: nadData.notices.filter((_, i) => i !== index),
    });
  };

  const updateContact = (
    index: number,
    field: keyof ContactPerson,
    value: string
  ) => {
    const updated = [...nadData.contacts];
    updated[index] = { ...updated[index], [field]: value };
    setNADData({ ...nadData, contacts: updated });
  };

  const addContact = () => {
    setNADData({
      ...nadData,
      contacts: [
        ...nadData.contacts,
        {
          sl: String(nadData.contacts.length + 1),
          name: '',
          position: '',
          contactNumber: '',
          email: '',
        },
      ],
    });
  };

  const removeContact = (index: number) => {
    setNADData({
      ...nadData,
      contacts: nadData.contacts.filter((_, i) => i !== index),
    });
  };

  return (
    <div className="space-y-4 sm:space-y-6 p-2 sm:p-4 lg:p-6">
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="bg-[#631012]/10 p-2 sm:p-3 rounded-full text-[#631012] flex-shrink-0">
              <Database className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#171717] break-words">
                NAD Cell Editor
              </h1>
              <p className="text-sm sm:text-base text-[#171717]/60 mt-1">
                Edit National Academic Depository information
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
          {/* Hero & Description Section */}
          {activeTab === 'hero' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <FileText className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Hero & Description Section
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Heading
                  </label>
                  <input
                    type="text"
                    value={nadData.heroHeading}
                    onChange={(e) =>
                      setNADData({
                        ...nadData,
                        heroHeading: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="NAD Cell"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Hero Description
                  </label>
                  <textarea
                    rows={3}
                    value={nadData.heroDescription}
                    onChange={(e) =>
                      setNADData({
                        ...nadData,
                        heroDescription: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Enter short description"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Main Description
                  </label>
                  <textarea
                    rows={5}
                    value={nadData.mainDescription}
                    onChange={(e) =>
                      setNADData({
                        ...nadData,
                        mainDescription: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Enter detailed description"
                  />
                </div>
              </div>

              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
                  Preview:
                </p>
                <div className="bg-white p-4 sm:p-6 rounded-lg space-y-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#171717] mb-3">
                      {nadData.heroHeading}
                    </h3>
                    <p className="text-base sm:text-lg text-[#171717]/70 mb-4">
                      {nadData.heroDescription}
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-[#631012]/5 to-[#8B1518]/5 p-6 rounded-lg border border-[#631012]/20">
                    <h4 className="text-xl font-bold text-[#171717] mb-3">
                      National Academic Depository (NAD)
                    </h4>
                    <p className="text-sm text-[#171717]/70">
                      {nadData.mainDescription}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* NAD Notices */}
          {activeTab === 'notices' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Bell className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  NAD Notices
                </h2>
              </div>

              <div className="space-y-3">
                {nadData.notices.map((notice, index) => (
                  <div
                    key={index}
                    className="p-4 border border-[#171717]/20 rounded-lg bg-[#F9F9F9] space-y-3"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-[#171717]/60">
                        Notice {index + 1}
                      </span>
                      <button
                        onClick={() => removeNotice(index)}
                        className="px-2 py-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="md:col-span-2">
                        <label className="block text-xs text-[#171717]/60 mb-1">
                          Sl. No.
                        </label>
                        <input
                          type="text"
                          value={notice.slNo}
                          onChange={(e) =>
                            updateNotice(index, 'slNo', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                          placeholder="1"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-xs text-[#171717]/60 mb-1">
                          Title
                        </label>
                        <input
                          type="text"
                          value={notice.title}
                          onChange={(e) =>
                            updateNotice(index, 'title', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                          placeholder="Notice title"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-xs text-[#171717]/60 mb-1">
                          Description
                        </label>
                        <textarea
                          rows={2}
                          value={notice.description}
                          onChange={(e) =>
                            updateNotice(index, 'description', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                          placeholder="Description"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-[#171717]/60 mb-1">
                          Category
                        </label>
                        <input
                          type="text"
                          value={notice.category}
                          onChange={(e) =>
                            updateNotice(index, 'category', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                          placeholder="Notice"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-[#171717]/60 mb-1">
                          Date
                        </label>
                        <input
                          type="text"
                          value={notice.date}
                          onChange={(e) =>
                            updateNotice(index, 'date', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                          placeholder="29-04-2021"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-[#171717]/60 mb-1">
                          View URL
                        </label>
                        <input
                          type="text"
                          value={notice.viewUrl}
                          onChange={(e) =>
                            updateNotice(index, 'viewUrl', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                          placeholder="https://..."
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-[#171717]/60 mb-1">
                          Download URL
                        </label>
                        <input
                          type="text"
                          value={notice.downloadUrl}
                          onChange={(e) =>
                            updateNotice(index, 'downloadUrl', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                          placeholder="https://..."
                        />
                      </div>
                    </div>
                  </div>
                ))}
                <button
                  onClick={addNotice}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 text-[#631012] hover:bg-[#631012]/10 rounded-lg transition-colors text-sm sm:text-base"
                >
                  <Plus size={18} />
                  Add Notice
                </button>
              </div>

              <div className="mt-6 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
                  Preview:
                </p>
                <div className="bg-white p-4 sm:p-6 rounded-lg space-y-3">
                  <h3 className="text-xl font-bold text-[#171717] mb-3">
                    NAD Notices
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-[#F9F9F9]">
                        <tr>
                          <th className="px-3 py-2 text-left text-xs font-semibold text-[#171717] border border-[#171717]/20">
                            Sl. No.
                          </th>
                          <th className="px-3 py-2 text-left text-xs font-semibold text-[#171717] border border-[#171717]/20">
                            Notice Title
                          </th>
                          <th className="px-3 py-2 text-left text-xs font-semibold text-[#171717] border border-[#171717]/20">
                            Category
                          </th>
                          <th className="px-3 py-2 text-left text-xs font-semibold text-[#171717] border border-[#171717]/20">
                            Date
                          </th>
                          <th className="px-3 py-2 text-left text-xs font-semibold text-[#171717] border border-[#171717]/20">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {nadData.notices.map((notice, index) => (
                          <tr key={index} className="hover:bg-[#F9F9F9]/50">
                            <td className="px-3 py-3 text-xs text-[#171717] border border-[#171717]/20">
                              {notice.slNo}
                            </td>
                            <td className="px-3 py-3 border border-[#171717]/20">
                              <div className="space-y-1">
                                <p className="text-sm font-semibold text-[#171717]">
                                  {notice.title}
                                </p>
                                <p className="text-xs text-[#171717]/60">
                                  {notice.description}
                                </p>
                              </div>
                            </td>
                            <td className="px-3 py-3 border border-[#171717]/20">
                              <span className="inline-block px-2 py-1 bg-[#631012]/10 text-[#631012] rounded text-xs font-medium">
                                {notice.category}
                              </span>
                            </td>
                            <td className="px-3 py-3 text-xs text-[#171717] border border-[#171717]/20">
                              {notice.date}
                            </td>
                            <td className="px-3 py-3 border border-[#171717]/20">
                              <div className="flex flex-col gap-1">
                                <button className="px-3 py-1 text-xs text-[#631012] hover:bg-[#631012]/10 rounded transition-colors">
                                  View
                                </button>
                                <button className="px-3 py-1 text-xs text-[#631012] hover:bg-[#631012]/10 rounded transition-colors">
                                  Download
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Contact Details */}
          {activeTab === 'contacts' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Contact className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Contact Details
                </h2>
              </div>

              <div className="space-y-3">
                {nadData.contacts.map((contact, index) => (
                  <div
                    key={index}
                    className="p-4 border border-[#171717]/20 rounded-lg bg-[#F9F9F9] space-y-3"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-[#171717]/60">
                        Contact {index + 1}
                      </span>
                      <button
                        onClick={() => removeContact(index)}
                        className="px-2 py-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs text-[#171717]/60 mb-1">
                          Sl.
                        </label>
                        <input
                          type="text"
                          value={contact.sl}
                          onChange={(e) =>
                            updateContact(index, 'sl', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                          placeholder="1"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-[#171717]/60 mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          value={contact.name}
                          onChange={(e) =>
                            updateContact(index, 'name', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                          placeholder="Dr. Name"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-[#171717]/60 mb-1">
                          Position
                        </label>
                        <input
                          type="text"
                          value={contact.position}
                          onChange={(e) =>
                            updateContact(index, 'position', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                          placeholder="Position"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-[#171717]/60 mb-1">
                          Contact Number
                        </label>
                        <input
                          type="text"
                          value={contact.contactNumber}
                          onChange={(e) =>
                            updateContact(
                              index,
                              'contactNumber',
                              e.target.value
                            )
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                          placeholder="+91-1972-254006"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-xs text-[#171717]/60 mb-1">
                          Email
                        </label>
                        <input
                          type="text"
                          value={contact.email}
                          onChange={(e) =>
                            updateContact(index, 'email', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                          placeholder="email@nith.ac.in"
                        />
                      </div>
                    </div>
                  </div>
                ))}
                <button
                  onClick={addContact}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 text-[#631012] hover:bg-[#631012]/10 rounded-lg transition-colors text-sm sm:text-base"
                >
                  <Plus size={18} />
                  Add Contact
                </button>
              </div>

              <div className="mt-6 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
                  Preview:
                </p>
                <div className="bg-white p-4 sm:p-6 rounded-lg space-y-3">
                  <h3 className="text-xl font-bold text-[#171717] mb-3">
                    Contact Details
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-[#F9F9F9]">
                        <tr>
                          <th className="px-3 py-2 text-left text-xs font-semibold text-[#171717] border border-[#171717]/20">
                            Sl.
                          </th>
                          <th className="px-3 py-2 text-left text-xs font-semibold text-[#171717] border border-[#171717]/20">
                            Name
                          </th>
                          <th className="px-3 py-2 text-left text-xs font-semibold text-[#171717] border border-[#171717]/20">
                            Position
                          </th>
                          <th className="px-3 py-2 text-left text-xs font-semibold text-[#171717] border border-[#171717]/20">
                            Contact Number
                          </th>
                          <th className="px-3 py-2 text-left text-xs font-semibold text-[#171717] border border-[#171717]/20">
                            Email
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {nadData.contacts.map((contact, index) => (
                          <tr key={index} className="hover:bg-[#F9F9F9]/50">
                            <td className="px-3 py-2 text-xs text-[#171717] border border-[#171717]/20">
                              {contact.sl}
                            </td>
                            <td className="px-3 py-2 text-xs text-[#171717] border border-[#171717]/20">
                              {contact.name}
                            </td>
                            <td className="px-3 py-2 text-xs text-[#171717] border border-[#171717]/20">
                              {contact.position}
                            </td>
                            <td className="px-3 py-2 text-xs text-[#171717] border border-[#171717]/20">
                              {contact.contactNumber}
                            </td>
                            <td className="px-3 py-2 text-xs text-[#171717] border border-[#171717]/20">
                              {contact.email}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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
