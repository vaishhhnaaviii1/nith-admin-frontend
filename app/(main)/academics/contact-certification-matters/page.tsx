'use client';

import React, { useState } from 'react';
import { Save, Mail, Plus, Trash2, FileText, Info } from 'lucide-react';

interface ContactInfo {
  id: number;
  name: string;
  emails: string[];
}

interface ContactData {
  heroHeading: string;
  heroDescription: string;
  contactSectionHeading: string;
  contacts: ContactInfo[];
}

type TabType = 'hero' | 'contacts';

export default function ContactCertificationMattersPage() {
  const [activeTab, setActiveTab] = useState<TabType>('hero');

  const [contactData, setContactData] = useState<ContactData>({
    heroHeading: 'Contact for Certification matters',
    heroDescription:
      'For queries related to certificates, verification and transcripts',
    contactSectionHeading:
      'Email Ids for certificate-related requests and verification',
    contacts: [
      {
        id: 1,
        name: 'Certificate Academic Office',
        emails: ['certificate-acad@nith.ac.in', 'ar-acad@nith.ac.in'],
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
      id: 'contacts' as TabType,
      label: 'Contacts',
      icon: <Mail size={18} />,
    },
  ];

  const handleSave = () => {
    alert('Changes saved successfully!');
    console.log(contactData);
  };

  // Contact Handlers
  const updateContact = (
    id: number,
    field: keyof ContactInfo,
    value: string
  ) => {
    setContactData({
      ...contactData,
      contacts: contactData.contacts.map((contact) =>
        contact.id === id ? { ...contact, [field]: value } : contact
      ),
    });
  };

  const addContact = () => {
    const newId =
      contactData.contacts.length > 0
        ? Math.max(...contactData.contacts.map((c) => c.id)) + 1
        : 1;
    setContactData({
      ...contactData,
      contacts: [
        ...contactData.contacts,
        { id: newId, name: '', emails: [''] },
      ],
    });
  };

  const removeContact = (id: number) => {
    setContactData({
      ...contactData,
      contacts: contactData.contacts.filter((c) => c.id !== id),
    });
  };

  const updateContactEmail = (
    contactId: number,
    emailIndex: number,
    value: string
  ) => {
    setContactData({
      ...contactData,
      contacts: contactData.contacts.map((contact) =>
        contact.id === contactId
          ? {
              ...contact,
              emails: contact.emails.map((email, idx) =>
                idx === emailIndex ? value : email
              ),
            }
          : contact
      ),
    });
  };

  const addEmailToContact = (contactId: number) => {
    setContactData({
      ...contactData,
      contacts: contactData.contacts.map((contact) =>
        contact.id === contactId
          ? { ...contact, emails: [...contact.emails, ''] }
          : contact
      ),
    });
  };

  const removeEmailFromContact = (contactId: number, emailIndex: number) => {
    setContactData({
      ...contactData,
      contacts: contactData.contacts.map((contact) =>
        contact.id === contactId
          ? {
              ...contact,
              emails: contact.emails.filter((_, i) => i !== emailIndex),
            }
          : contact
      ),
    });
  };

  return (
    <div className="space-y-4 sm:space-y-6 p-2 sm:p-4 lg:p-6">
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="bg-[#631012]/10 p-2 sm:p-3 rounded-full text-[#631012] flex-shrink-0">
              <Mail className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#171717] break-words">
                Contact Certification Matters Editor
              </h1>
              <p className="text-sm sm:text-base text-[#171717]/60 mt-1">
                Manage contact information for certificates
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
                    value={contactData.heroHeading}
                    onChange={(e) =>
                      setContactData({
                        ...contactData,
                        heroHeading: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Contact for Certification matters"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Description
                  </label>
                  <textarea
                    rows={3}
                    value={contactData.heroDescription}
                    onChange={(e) =>
                      setContactData({
                        ...contactData,
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
                    {contactData.heroHeading}
                  </h3>
                  <p className="text-base sm:text-lg text-[#171717]/70">
                    {contactData.heroDescription}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Contact Details */}
          {activeTab === 'contacts' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Mail className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Contact Information
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Section Heading
                  </label>
                  <input
                    type="text"
                    value={contactData.contactSectionHeading}
                    onChange={(e) =>
                      setContactData({
                        ...contactData,
                        contactSectionHeading: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Email Ids for certificate-related requests and verification"
                  />
                </div>

                <div className="p-4 bg-[#F9F9F9] rounded-lg border border-[#171717]/10">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-semibold text-[#171717]">
                      Contacts ({contactData.contacts.length})
                    </h3>
                    <button
                      onClick={addContact}
                      className="flex items-center gap-2 px-3 py-1.5 bg-[#631012] text-white text-sm rounded-lg hover:bg-[#7a1214] transition-colors"
                    >
                      <Plus size={16} />
                      Add Contact
                    </button>
                  </div>

                  <div className="space-y-3">
                    {contactData.contacts.map((contact) => (
                      <div
                        key={contact.id}
                        className="p-3 border border-[#171717]/20 rounded-lg bg-white"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-[#171717]/60">
                            Contact Entry
                          </span>
                          <button
                            onClick={() => removeContact(contact.id)}
                            className="px-2 py-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <div className="space-y-2">
                          <div>
                            <label className="block text-xs text-[#171717]/60 mb-1">
                              Contact Name
                            </label>
                            <input
                              type="text"
                              value={contact.name}
                              onChange={(e) =>
                                updateContact(
                                  contact.id,
                                  'name',
                                  e.target.value
                                )
                              }
                              className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                              placeholder="Certificate Academic Office"
                            />
                          </div>
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <label className="block text-xs text-[#171717]/60">
                                Email IDs
                              </label>
                              <button
                                onClick={() => addEmailToContact(contact.id)}
                                className="flex items-center gap-1 px-2 py-0.5 bg-[#631012] text-white text-xs rounded hover:bg-[#7a1214] transition-colors"
                              >
                                <Plus size={12} />
                                Add Email
                              </button>
                            </div>
                            <div className="space-y-1">
                              {contact.emails.map((email, emailIndex) => (
                                <div key={emailIndex} className="flex gap-2">
                                  <input
                                    type="email"
                                    value={email}
                                    onChange={(e) =>
                                      updateContactEmail(
                                        contact.id,
                                        emailIndex,
                                        e.target.value
                                      )
                                    }
                                    className="flex-1 px-3 py-1.5 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                                    placeholder="email@nith.ac.in"
                                  />
                                  <button
                                    onClick={() =>
                                      removeEmailFromContact(
                                        contact.id,
                                        emailIndex
                                      )
                                    }
                                    className="px-2 py-1.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                  >
                                    <Trash2 size={14} />
                                  </button>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
                  Preview:
                </p>
                <div className="bg-white p-4 sm:p-6 rounded-lg space-y-4">
                  <h3 className="text-xl font-bold text-[#171717]">
                    {contactData.contactSectionHeading}
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-[#F9F9F9] border-b border-[#171717]/10">
                          <th className="px-4 py-3 text-left text-xs font-semibold text-[#171717] uppercase tracking-wider">
                            Contact
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-[#171717] uppercase tracking-wider">
                            Email Id
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-[#171717]/10">
                        {contactData.contacts.map((contact) => (
                          <tr
                            key={contact.id}
                            className="hover:bg-[#F9F9F9] transition-colors"
                          >
                            <td className="px-4 py-3 text-sm font-medium text-[#171717]">
                              {contact.name}
                            </td>
                            <td className="px-4 py-3 text-sm text-[#631012]">
                              {contact.emails.map((email, idx) => (
                                <div key={idx}>{email}</div>
                              ))}
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
