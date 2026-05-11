'use client';

import React, { useState } from 'react';
import {
  Save,
  User,
  Plus,
  Trash2,
  FileText,
  Users,
  Building,
} from 'lucide-react';

interface FormerDirector {
  name: string;
  tenure: string;
}

interface OfficeStaff {
  slNo: string;
  name: string;
  designation: string;
  phone: string;
  email: string;
}

interface DirectorData {
  // Hero Section
  heroHeading: string;
  heroSubheading: string;
  // Current Director
  currentName: string;
  currentDesignation: string;
  // Message
  messageHeading: string;
  messageParagraphs: string[];
  messageClosing: string;
  messageWishes: string;
  messageSignatureTitle: string;
  messageSignatureOrg: string;
  messageSignatureLocation: string;
  // Former Directors Section
  formerSectionHeading: string;
  formerSectionSubheading: string;
  // Former Directors NIT
  formerNITHeading: string;
  formerNITDirectors: FormerDirector[];
  // Former Principals REC
  formerRECHeading: string;
  formerRECPrincipals: FormerDirector[];
  // Director Office
  officeHeading: string;
  officeSubheading: string;
  directorOfficeHeading: string;
  directorInfo: OfficeStaff;
  officeStaffHeading: string;
  officeStaff: OfficeStaff[];
}

// Tab Types
type TabType = 'current' | 'message' | 'formerNIT' | 'formerREC' | 'office';

export default function DirectorPage() {
  const [activeTab, setActiveTab] = useState<TabType>('current');

  const [directorData, setDirectorData] = useState<DirectorData>({
    // Hero Section
    heroHeading: 'Director',
    heroSubheading: 'National Institute of Technology, Hamirpur',
    // Current Director
    currentName: 'Prof. Hiralal Murlidhar Suryawanshi',
    currentDesignation: '(Director)',
    // Message
    messageHeading: 'Message from the Director',
    messageParagraphs: [
      'Greetings and a Warm Welcome to one and all for joining us at National Institute of Technology, Hamirpur, India. National Institute of Technology, Hamirpur, is one of the premier autonomous Institutions of National Importance in Northern India under the act of Parliament-2007. It is a state of art Institution and a dream destination for those who wish to be leaders in Science and Technology. Besides being recognized nationally and internationally for excellent education at undergraduate level, we are also making wide strides in innovative research and other development activities.',
      "Being a National Level Institute we have a unique group of outstanding young minds from almost all the states and UT's of the country. Students from diverse backgrounds get to network with each other and get to identify and comprehend the wide spectrum of varied cultural and regional practices in our country. Students are not only given exposure to the latest technological advances in their chosen field but also trained to be responsible citizens of our country. The rich and unique learning environment at NIT develops the student physically, intellectually and emotionally. A series of activities such as a cultural festival, a technical festival, industry-focused seminars and extracurricular activities, open them to challenges of leadership. We not only enable our students to fulfill their dreams but also mentor them to think BIG. During their tenure at the institute, the students are given enriching and life-defining experience that enables them to reach new heights in their professional and personal lives.",
      'Our alumni are forerunners in several Multi-National Organizations and amongst successful entrepreneurs and renowned academicians with a significant contribution towards society. The Institute is known for producing some of the best engineers and technocrats for the country. The industry has always been appreciative of the talent pool offered by the institute and this has resulted into exemplary placements across all domains. Numerous reputed Industrial and Consultancy Corporates visit the institute campus for recruitment. The students bag stellar profiles and packages per annum.',
      'The Institution has a team of highly qualified, learned and dedicated faculty with expertise in all major disciplines of engineering and technology, science and management, and is a constant source of inspiration for the students. They are actively involved in raising the standards of not only our institute but also other institutions by collaborating with them and by sharing knowledge through faculty/student interaction programmes from time to time.',
      "The Institute has ongoing academic and research collaborations with many national and international universities in order to keep pace with increasing frontiers of knowledge. In order to align with country's major policy initiatives of Make in India, Digital India; Start-up India, the Institute in process of setting up an Incubation Centre, so as to support technology and knowledge based entrepreneurship and to provide a platform for speedy commercialization of technologies.",
      'Once again, I wish all the students an outstanding, momentous and valuable stay at NIT, Hamirpur and hope that you achieve your destinations/goals and emerge as top-notch engineers, technocrats, educationists or scientists.',
      "Good Luck 'n Good Wishes!!",
      'Jai Hind Jai Bharat!!',
      'My prime priority will be to build National Institute of Technology Hamirpur a world class Institute imparting quality education and promoting excellent research activities, having impact on society and industry globally.',
    ],
    messageClosing: 'With warm wishes,',
    messageWishes: '',
    messageSignatureTitle: 'Director',
    messageSignatureOrg: 'National Institute of Technology',
    messageSignatureLocation: 'Hamirpur (HP)',
    // Former Directors Section
    formerSectionHeading: 'Former Directors & Principals',
    formerSectionSubheading: 'Honoring our distinguished leadership',
    // Former Directors NIT
    formerNITHeading: 'Former Directors, NIT Hamirpur',
    formerNITDirectors: [
      {
        name: 'Prof. Lalji Kumar Awasthi',
        tenure: '10-Jun-1985 to 02-JD-1992',
      },
      { name: 'Dr. Vinod Paliwa', tenure: '23-03-2005 to 06-11-2009' },
      { name: 'Dr. Ajay K Sharma', tenure: '13-05-2006 to 25-07-2018' },
      { name: 'Dr. Rajesh Bhramavshi', tenure: '19-12-2018 to 30-06-2019' },
      { name: 'Dr. R.L. Sharma', tenure: '16-11-2010 to 16-10-2011' },
      { name: 'Dr. L.K. Riwai', tenure: '07-11-2003 to 22-03-2005' },
      { name: 'Dr. B.K. Srivastava', tenure: '03-03-2005 to 09-12-2009' },
      { name: 'Dr. Dhirendra Nistala', tenure: '07-08-2005 to 07-12-2008' },
      { name: 'Dr. B.E. Srivastava', tenure: '04-07-2003 to 05-08-2005' },
      { name: 'Dr. R.C. Sharma', tenure: '30-08-2003 to 03-07-2008' },
    ],
    // Former Principals REC
    formerRECHeading: 'Former Principals, REC Hamirpur',
    formerRECPrincipals: [
      { name: 'Dr. R.E. Sharma', tenure: '17-08-2001 to 30-08-2005' },
      { name: 'Dr. S.L. Riewai', tenure: '01-06-2009 to 06-08-2009' },
      {
        name: 'Mrs. Aurndrha Thakur (IAS)',
        tenure: '07-03-2008 to 21-02-2008',
      },
      { name: 'Mr. Kamlran Patel (IAS)', tenure: '31-07-1985 to 13-10-1989' },
      { name: 'Dr. G.L. Shar', tenure: '01-06-2001 to 30-10-2005' },
      { name: 'Dr. M.L. Gavahan', tenure: '02-01-2008 to 01-08-2009' },
      { name: 'Sh. Kamenisur Jha', tenure: '01-09-2008 to 30-06-2009' },
      { name: 'Sh. R.D. Chandan', tenure: '01-11-2008 to 30-11-2009' },
    ],
    // Director Office
    officeHeading: 'Director Office',
    officeSubheading: 'Director and Office Staff Contact Information',
    directorOfficeHeading: 'Director',
    directorInfo: {
      slNo: '1',
      name: 'Prof. Hiralal Murlidhar Suryawanshi',
      designation: 'Director',
      phone: '222308, 254001',
      email: 'director@nith.ac.in',
    },
    officeStaffHeading: 'Office Staff',
    officeStaff: [
      {
        slNo: '1',
        name: 'Ms. Sangeeta Anand (on Deputation)',
        designation: 'Stenographer SG-II (Private Secretary)',
        phone: '254001, 222308',
        email: 'psd@nith.ac.in',
      },
      {
        slNo: '2',
        name: 'Sh. Vikas Dogra',
        designation: 'Assistant SG-II(PA)',
        phone: '254001, 222308',
        email: 'vikasdogra@nith.ac.in',
      },
      {
        slNo: '3',
        name: 'Sh. Ramesh Chand-I',
        designation: 'Sr. Office Attendant SG-I',
        phone: '254001, 222308',
        email: '--',
      },
      {
        slNo: '4',
        name: 'Ms. Smriti',
        designation: 'Senior Technician',
        phone: '--',
        email: '--',
      },
    ],
  });

  // Tabs Configuration
  const tabs = [
    {
      id: 'current' as TabType,
      label: 'Current Director',
      icon: <User size={18} />,
    },
    {
      id: 'message' as TabType,
      label: 'Message',
      icon: <FileText size={18} />,
    },
    {
      id: 'formerNIT' as TabType,
      label: 'Former Directors',
      icon: <Users size={18} />,
    },
    {
      id: 'formerREC' as TabType,
      label: 'Former Principals',
      icon: <Users size={18} />,
    },
    {
      id: 'office' as TabType,
      label: 'Director Office',
      icon: <Building size={18} />,
    },
  ];

  const handleSave = () => {
    alert('Changes saved successfully!');
    console.log(directorData);
  };

  // Message paragraph handlers
  const updateParagraph = (index: number, value: string) => {
    const updated = [...directorData.messageParagraphs];
    updated[index] = value;
    setDirectorData({ ...directorData, messageParagraphs: updated });
  };

  const addParagraph = () => {
    setDirectorData({
      ...directorData,
      messageParagraphs: [...directorData.messageParagraphs, ''],
    });
  };

  const removeParagraph = (index: number) => {
    setDirectorData({
      ...directorData,
      messageParagraphs: directorData.messageParagraphs.filter(
        (_, i) => i !== index
      ),
    });
  };

  // Former NIT Directors handlers
  const updateFormerNIT = (
    index: number,
    field: keyof FormerDirector,
    value: string
  ) => {
    const updated = [...directorData.formerNITDirectors];
    updated[index] = { ...updated[index], [field]: value };
    setDirectorData({ ...directorData, formerNITDirectors: updated });
  };

  const addFormerNIT = () => {
    setDirectorData({
      ...directorData,
      formerNITDirectors: [
        ...directorData.formerNITDirectors,
        { name: '', tenure: '' },
      ],
    });
  };

  const removeFormerNIT = (index: number) => {
    setDirectorData({
      ...directorData,
      formerNITDirectors: directorData.formerNITDirectors.filter(
        (_, i) => i !== index
      ),
    });
  };

  // Former REC Principals handlers
  const updateFormerREC = (
    index: number,
    field: keyof FormerDirector,
    value: string
  ) => {
    const updated = [...directorData.formerRECPrincipals];
    updated[index] = { ...updated[index], [field]: value };
    setDirectorData({ ...directorData, formerRECPrincipals: updated });
  };

  const addFormerREC = () => {
    setDirectorData({
      ...directorData,
      formerRECPrincipals: [
        ...directorData.formerRECPrincipals,
        { name: '', tenure: '' },
      ],
    });
  };

  const removeFormerREC = (index: number) => {
    setDirectorData({
      ...directorData,
      formerRECPrincipals: directorData.formerRECPrincipals.filter(
        (_, i) => i !== index
      ),
    });
  };

  // Office Staff handlers
  const updateOfficeStaff = (
    index: number,
    field: keyof OfficeStaff,
    value: string
  ) => {
    const updated = [...directorData.officeStaff];
    updated[index] = { ...updated[index], [field]: value };
    setDirectorData({ ...directorData, officeStaff: updated });
  };

  const addOfficeStaff = () => {
    setDirectorData({
      ...directorData,
      officeStaff: [
        ...directorData.officeStaff,
        { slNo: '', name: '', designation: '', phone: '', email: '' },
      ],
    });
  };

  const removeOfficeStaff = (index: number) => {
    setDirectorData({
      ...directorData,
      officeStaff: directorData.officeStaff.filter((_, i) => i !== index),
    });
  };

  return (
    <div className="space-y-4 sm:space-y-6 p-2 sm:p-4 lg:p-6">
      {/* Gradient Header */}
      <div className="bg-gradient-to-r from-[#631012] to-[#7a1214] rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 text-white">
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <User className="w-6 h-6 sm:w-8 sm:h-8" />
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
            Director
          </h1>
        </div>
        <p className="text-sm sm:text-base text-white/90">
          Manage Director section content
        </p>
      </div>

      {/* Action Bar */}
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="bg-[#631012]/10 p-2 sm:p-3 rounded-full text-[#631012] flex-shrink-0">
              <User className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#171717] break-words">
                Director Editor
              </h1>
              <p className="text-sm sm:text-base text-[#171717]/60 mt-1">
                Edit Director content
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

      {/* Tabs Container */}
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
          {/* Current Director Tab */}
          {activeTab === 'current' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <User className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Current Director
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#171717] mb-2">
                      Page Heading
                    </label>
                    <input
                      type="text"
                      value={directorData.heroHeading}
                      onChange={(e) =>
                        setDirectorData({
                          ...directorData,
                          heroHeading: e.target.value,
                        })
                      }
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                      placeholder="Director"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#171717] mb-2">
                      Page Subheading
                    </label>
                    <input
                      type="text"
                      value={directorData.heroSubheading}
                      onChange={(e) =>
                        setDirectorData({
                          ...directorData,
                          heroSubheading: e.target.value,
                        })
                      }
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                      placeholder="National Institute of Technology, Hamirpur"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#171717] mb-2">
                      Director Name
                    </label>
                    <input
                      type="text"
                      value={directorData.currentName}
                      onChange={(e) =>
                        setDirectorData({
                          ...directorData,
                          currentName: e.target.value,
                        })
                      }
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                      placeholder="Prof. Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#171717] mb-2">
                      Designation
                    </label>
                    <input
                      type="text"
                      value={directorData.currentDesignation}
                      onChange={(e) =>
                        setDirectorData({
                          ...directorData,
                          currentDesignation: e.target.value,
                        })
                      }
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                      placeholder="(Director)"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
                  Preview:
                </p>
                <div className="bg-white p-4 sm:p-6 rounded-lg text-center">
                  <h2 className="text-2xl font-bold text-[#171717]">
                    {directorData.heroHeading}
                  </h2>
                  <p className="text-sm text-[#171717]/60 mb-4">
                    {directorData.heroSubheading}
                  </p>
                  <h3 className="text-xl font-bold text-[#631012]">
                    {directorData.currentName}
                  </h3>
                  <p className="text-sm text-[#171717]">
                    {directorData.currentDesignation}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Message Tab */}
          {activeTab === 'message' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <FileText className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Director Message
                </h2>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#171717] mb-2">
                  Message Heading
                </label>
                <input
                  type="text"
                  value={directorData.messageHeading}
                  onChange={(e) =>
                    setDirectorData({
                      ...directorData,
                      messageHeading: e.target.value,
                    })
                  }
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                  placeholder="Message from the Director"
                />
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-medium text-[#171717]">
                  Message Paragraphs
                </label>
                {directorData.messageParagraphs.map((para, index) => (
                  <div key={index} className="flex gap-2">
                    <textarea
                      rows={3}
                      value={para}
                      onChange={(e) => updateParagraph(index, e.target.value)}
                      className="flex-1 px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                      placeholder={`Paragraph ${index + 1}`}
                    />
                    <button
                      onClick={() => removeParagraph(index)}
                      className="px-2 py-1 text-red-600 hover:bg-red-50 rounded transition-colors self-start"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
                <button
                  onClick={addParagraph}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 text-[#631012] hover:bg-[#631012]/10 rounded-lg transition-colors text-sm sm:text-base"
                >
                  <Plus size={18} />
                  Add Paragraph
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Closing Line
                  </label>
                  <input
                    type="text"
                    value={directorData.messageClosing}
                    onChange={(e) =>
                      setDirectorData({
                        ...directorData,
                        messageClosing: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="With warm wishes,"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Signature Title
                  </label>
                  <input
                    type="text"
                    value={directorData.messageSignatureTitle}
                    onChange={(e) =>
                      setDirectorData({
                        ...directorData,
                        messageSignatureTitle: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Director"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Signature Organization
                  </label>
                  <input
                    type="text"
                    value={directorData.messageSignatureOrg}
                    onChange={(e) =>
                      setDirectorData({
                        ...directorData,
                        messageSignatureOrg: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="National Institute of Technology"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#171717] mb-2">
                  Signature Location
                </label>
                <input
                  type="text"
                  value={directorData.messageSignatureLocation}
                  onChange={(e) =>
                    setDirectorData({
                      ...directorData,
                      messageSignatureLocation: e.target.value,
                    })
                  }
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                  placeholder="Hamirpur (HP)"
                />
              </div>

              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
                  Preview:
                </p>
                <div className="bg-white p-4 sm:p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#171717] mb-4">
                    {directorData.messageHeading}
                  </h3>
                  <div className="space-y-3">
                    {directorData.messageParagraphs.map((para, index) => (
                      <p key={index} className="text-sm text-[#171717]/80">
                        {para}
                      </p>
                    ))}
                  </div>
                  <p className="text-sm text-[#171717]/80 mt-4">
                    {directorData.messageClosing}
                  </p>
                  <div className="mt-2">
                    <p className="text-sm font-semibold text-[#631012]">
                      {directorData.messageSignatureTitle}
                    </p>
                    <p className="text-sm text-[#171717]/60">
                      {directorData.messageSignatureOrg}
                    </p>
                    <p className="text-sm text-[#171717]/60">
                      {directorData.messageSignatureLocation}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Former Directors (NIT) Tab */}
          {activeTab === 'formerNIT' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Users className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Former Directors (NIT)
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Section Heading
                  </label>
                  <input
                    type="text"
                    value={directorData.formerSectionHeading}
                    onChange={(e) =>
                      setDirectorData({
                        ...directorData,
                        formerSectionHeading: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Former Directors & Principals"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Section Subheading
                  </label>
                  <input
                    type="text"
                    value={directorData.formerSectionSubheading}
                    onChange={(e) =>
                      setDirectorData({
                        ...directorData,
                        formerSectionSubheading: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Honoring our distinguished leadership"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#171717] mb-2">
                  NIT Directors Heading
                </label>
                <input
                  type="text"
                  value={directorData.formerNITHeading}
                  onChange={(e) =>
                    setDirectorData({
                      ...directorData,
                      formerNITHeading: e.target.value,
                    })
                  }
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                  placeholder="Former Directors, NIT Hamirpur"
                />
              </div>

              <div className="space-y-3">
                {directorData.formerNITDirectors.map((person, index) => (
                  <div
                    key={index}
                    className="p-3 border border-[#171717]/20 rounded-lg bg-[#F9F9F9]"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-[#171717]/60">
                        Director {index + 1}
                      </span>
                      <button
                        onClick={() => removeFormerNIT(index)}
                        className="px-2 py-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <input
                        type="text"
                        value={person.name}
                        onChange={(e) =>
                          updateFormerNIT(index, 'name', e.target.value)
                        }
                        className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                        placeholder="Name"
                      />
                      <input
                        type="text"
                        value={person.tenure}
                        onChange={(e) =>
                          updateFormerNIT(index, 'tenure', e.target.value)
                        }
                        className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                        placeholder="Tenure"
                      />
                    </div>
                  </div>
                ))}
                <button
                  onClick={addFormerNIT}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 text-[#631012] hover:bg-[#631012]/10 rounded-lg transition-colors text-sm sm:text-base"
                >
                  <Plus size={18} />
                  Add Former Director
                </button>
              </div>

              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
                  Preview:
                </p>
                <div className="bg-white p-4 sm:p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#171717] mb-1">
                    {directorData.formerNITHeading}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {directorData.formerNITDirectors.map((person, index) => (
                      <div key={index} className="p-3 bg-[#F9F9F9] rounded-lg">
                        <p className="text-sm font-semibold text-[#171717]">
                          {person.name}
                        </p>
                        <p className="text-xs text-[#631012]">
                          Tenure : {person.tenure}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Former Principals (REC) Tab */}
          {activeTab === 'formerREC' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Users className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Former Principals (REC)
                </h2>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#171717] mb-2">
                  REC Principals Heading
                </label>
                <input
                  type="text"
                  value={directorData.formerRECHeading}
                  onChange={(e) =>
                    setDirectorData({
                      ...directorData,
                      formerRECHeading: e.target.value,
                    })
                  }
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                  placeholder="Former Principals, REC Hamirpur"
                />
              </div>

              <div className="space-y-3">
                {directorData.formerRECPrincipals.map((person, index) => (
                  <div
                    key={index}
                    className="p-3 border border-[#171717]/20 rounded-lg bg-[#F9F9F9]"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-[#171717]/60">
                        Principal {index + 1}
                      </span>
                      <button
                        onClick={() => removeFormerREC(index)}
                        className="px-2 py-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <input
                        type="text"
                        value={person.name}
                        onChange={(e) =>
                          updateFormerREC(index, 'name', e.target.value)
                        }
                        className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                        placeholder="Name"
                      />
                      <input
                        type="text"
                        value={person.tenure}
                        onChange={(e) =>
                          updateFormerREC(index, 'tenure', e.target.value)
                        }
                        className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                        placeholder="Tenure"
                      />
                    </div>
                  </div>
                ))}
                <button
                  onClick={addFormerREC}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 text-[#631012] hover:bg-[#631012]/10 rounded-lg transition-colors text-sm sm:text-base"
                >
                  <Plus size={18} />
                  Add Former Principal
                </button>
              </div>

              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
                  Preview:
                </p>
                <div className="bg-white p-4 sm:p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#171717] mb-4">
                    {directorData.formerRECHeading}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {directorData.formerRECPrincipals.map((person, index) => (
                      <div key={index} className="p-3 bg-[#F9F9F9] rounded-lg">
                        <p className="text-sm font-semibold text-[#171717]">
                          {person.name}
                        </p>
                        <p className="text-xs text-[#631012]">
                          Tenure : {person.tenure}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Director Office Tab */}
          {activeTab === 'office' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Building className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Director Office
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Section Heading
                  </label>
                  <input
                    type="text"
                    value={directorData.officeHeading}
                    onChange={(e) =>
                      setDirectorData({
                        ...directorData,
                        officeHeading: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Director Office"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Section Subheading
                  </label>
                  <input
                    type="text"
                    value={directorData.officeSubheading}
                    onChange={(e) =>
                      setDirectorData({
                        ...directorData,
                        officeSubheading: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Director and Office Staff Contact Information"
                  />
                </div>
              </div>

              {/* Director Info */}
              <div className="p-4 border border-[#171717]/20 rounded-lg bg-[#F9F9F9]">
                <h3 className="text-lg font-semibold text-[#171717] mb-3">
                  Director Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
                  <input
                    type="text"
                    value={directorData.directorInfo.slNo}
                    onChange={(e) =>
                      setDirectorData({
                        ...directorData,
                        directorInfo: {
                          ...directorData.directorInfo,
                          slNo: e.target.value,
                        },
                      })
                    }
                    className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                    placeholder="Sl. No."
                  />
                  <input
                    type="text"
                    value={directorData.directorInfo.name}
                    onChange={(e) =>
                      setDirectorData({
                        ...directorData,
                        directorInfo: {
                          ...directorData.directorInfo,
                          name: e.target.value,
                        },
                      })
                    }
                    className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                    placeholder="Name"
                  />
                  <input
                    type="text"
                    value={directorData.directorInfo.designation}
                    onChange={(e) =>
                      setDirectorData({
                        ...directorData,
                        directorInfo: {
                          ...directorData.directorInfo,
                          designation: e.target.value,
                        },
                      })
                    }
                    className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                    placeholder="Designation"
                  />
                  <input
                    type="text"
                    value={directorData.directorInfo.phone}
                    onChange={(e) =>
                      setDirectorData({
                        ...directorData,
                        directorInfo: {
                          ...directorData.directorInfo,
                          phone: e.target.value,
                        },
                      })
                    }
                    className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                    placeholder="Phone No."
                  />
                  <input
                    type="text"
                    value={directorData.directorInfo.email}
                    onChange={(e) =>
                      setDirectorData({
                        ...directorData,
                        directorInfo: {
                          ...directorData.directorInfo,
                          email: e.target.value,
                        },
                      })
                    }
                    className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                    placeholder="Email"
                  />
                </div>
              </div>

              {/* Office Staff */}
              <div>
                <label className="block text-sm font-medium text-[#171717] mb-2">
                  Office Staff Heading
                </label>
                <input
                  type="text"
                  value={directorData.officeStaffHeading}
                  onChange={(e) =>
                    setDirectorData({
                      ...directorData,
                      officeStaffHeading: e.target.value,
                    })
                  }
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                  placeholder="Office Staff"
                />
              </div>

              <div className="space-y-3">
                {directorData.officeStaff.map((staff, index) => (
                  <div
                    key={index}
                    className="p-3 border border-[#171717]/20 rounded-lg bg-[#F9F9F9]"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-[#171717]/60">
                        Staff {index + 1}
                      </span>
                      <button
                        onClick={() => removeOfficeStaff(index)}
                        className="px-2 py-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2">
                      <input
                        type="text"
                        value={staff.slNo}
                        onChange={(e) =>
                          updateOfficeStaff(index, 'slNo', e.target.value)
                        }
                        className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                        placeholder="Sl. No."
                      />
                      <input
                        type="text"
                        value={staff.name}
                        onChange={(e) =>
                          updateOfficeStaff(index, 'name', e.target.value)
                        }
                        className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                        placeholder="Name"
                      />
                      <input
                        type="text"
                        value={staff.designation}
                        onChange={(e) =>
                          updateOfficeStaff(
                            index,
                            'designation',
                            e.target.value
                          )
                        }
                        className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                        placeholder="Designation"
                      />
                      <input
                        type="text"
                        value={staff.phone}
                        onChange={(e) =>
                          updateOfficeStaff(index, 'phone', e.target.value)
                        }
                        className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                        placeholder="Phone No."
                      />
                      <input
                        type="text"
                        value={staff.email}
                        onChange={(e) =>
                          updateOfficeStaff(index, 'email', e.target.value)
                        }
                        className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                ))}
                <button
                  onClick={addOfficeStaff}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 text-[#631012] hover:bg-[#631012]/10 rounded-lg transition-colors text-sm sm:text-base"
                >
                  <Plus size={18} />
                  Add Office Staff
                </button>
              </div>

              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
                  Preview:
                </p>
                <div className="bg-white p-4 sm:p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#171717] mb-1">
                    {directorData.officeHeading}
                  </h3>
                  <p className="text-sm text-[#171717]/60 mb-4">
                    {directorData.officeSubheading}
                  </p>

                  <h4 className="text-lg font-semibold text-[#171717] mb-2">
                    {directorData.directorOfficeHeading}
                  </h4>
                  <div className="overflow-x-auto mb-4">
                    <table className="w-full text-sm">
                      <thead className="bg-[#631012] text-white">
                        <tr>
                          <th className="px-3 py-2 text-left">Sl. No.</th>
                          <th className="px-3 py-2 text-left">Name</th>
                          <th className="px-3 py-2 text-left">Designation</th>
                          <th className="px-3 py-2 text-left">Phone No.</th>
                          <th className="px-3 py-2 text-left">Email</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="px-3 py-2">
                            {directorData.directorInfo.slNo}
                          </td>
                          <td className="px-3 py-2">
                            {directorData.directorInfo.name}
                          </td>
                          <td className="px-3 py-2">
                            {directorData.directorInfo.designation}
                          </td>
                          <td className="px-3 py-2">
                            {directorData.directorInfo.phone}
                          </td>
                          <td className="px-3 py-2 text-[#631012]">
                            {directorData.directorInfo.email}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h4 className="text-lg font-semibold text-[#171717] mb-2">
                    {directorData.officeStaffHeading}
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-[#631012] text-white">
                        <tr>
                          <th className="px-3 py-2 text-left">Sl. No.</th>
                          <th className="px-3 py-2 text-left">Name</th>
                          <th className="px-3 py-2 text-left">Designation</th>
                          <th className="px-3 py-2 text-left">Phone No.</th>
                          <th className="px-3 py-2 text-left">Email</th>
                        </tr>
                      </thead>
                      <tbody>
                        {directorData.officeStaff.map((staff, index) => (
                          <tr key={index} className="border-b">
                            <td className="px-3 py-2">{staff.slNo}</td>
                            <td className="px-3 py-2">{staff.name}</td>
                            <td className="px-3 py-2">{staff.designation}</td>
                            <td className="px-3 py-2">{staff.phone}</td>
                            <td className="px-3 py-2 text-[#631012]">
                              {staff.email}
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
