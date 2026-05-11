'use client';

import React, { useState } from 'react';
import {
  Save,
  ShieldCheck,
  Plus,
  Trash2,
  FileText,
  DollarSign,
} from 'lucide-react';

interface ProcedureStep {
  text: string;
}

interface Charge {
  id: number;
  description: string;
  fee: string;
}

interface GuidelinesData {
  heroHeading: string;
  heroDescription: string;
  verificationProcedureHeading: string;
  verificationSteps: ProcedureStep[];
  verificationContactEmails: string[];
  verificationChargesHeading: string;
  verificationCharges: Charge[];
  transcriptProcedureHeading: string;
  transcriptSteps: ProcedureStep[];
  transcriptContactEmails: string[];
  transcriptChargesHeading: string;
  transcriptCharges: Charge[];
}

type TabType = 'hero' | 'verification' | 'transcript';

export default function GuidelinesCertificatesVerificationPage() {
  const [activeTab, setActiveTab] = useState<TabType>('hero');

  const [guidelinesData, setGuidelinesData] = useState<GuidelinesData>({
    heroHeading: 'Guidelines for Certificates Verification',
    heroDescription:
      'Procedure for verification of educational certificates, transcript issuance and related charges.',
    verificationProcedureHeading:
      'Procedure for Verification of Educational Certificate',
    verificationSteps: [
      {
        text: 'Send the verification request to the Assistant Registrar (EEC), NIT, Hamirpur (HP) by letter or fax on 01972-223834 / 222584, or by email to ar-acad@nith.ac.in (CC: certificate-acad@nith.ac.in).',
      },
      {
        text: 'Attach photostat copies of the educational certificates with the request.',
      },
      {
        text: 'The verification will be intimated to the requester within three to five days from receipt of the request.',
      },
      {
        text: 'The verification can be faxed to the requester if a fax number is provided.',
      },
    ],
    verificationContactEmails: [
      'ar-acad@nith.ac.in',
      'certificate-acad@nith.ac.in',
    ],
    verificationChargesHeading: 'Charges for Verification Certificate',
    verificationCharges: [
      {
        id: 1,
        description: 'Verification Certificate (within India)',
        fee: 'Rs. 1000/-',
      },
      {
        id: 2,
        description: 'Verification Certificate (outside India)',
        fee: '$100/-',
      },
      {
        id: 3,
        description:
          'Verification through Govt./Govt. Aided Institution/Agency',
        fee: 'No Charges',
      },
    ],
    transcriptProcedureHeading: 'Procedure for Issue of Transcript Certificate',
    transcriptSteps: [
      {
        text: 'Send the request for a Transcript Certificate to the Assistant Registrar (EEC), NIT, Hamirpur (HP) by letter or fax on 01972-223834 / 222584, or by email to ar-acad@nith.ac.in (CC: certificate-acad@nith.ac.in).',
      },
      {
        text: 'Attach photostat copies of all semester grade sheets with the request.',
      },
      {
        text: 'The Transcript will be issued within seven to ten days from receipt of the request.',
      },
      {
        text: 'The Transcript can be faxed to the requester if a fax number is provided.',
      },
    ],
    transcriptContactEmails: [
      'ar-acad@nith.ac.in',
      'certificate-acad@nith.ac.in',
    ],
    transcriptChargesHeading: 'Charges for Issue of Transcript Certificate',
    transcriptCharges: [
      {
        id: 1,
        description: 'Transcript Certificate (within India)',
        fee: 'Rs. 2000/- per copy',
      },
      {
        id: 2,
        description: 'Transcript Certificate (outside India)',
        fee: 'Rs. 5000/- per copy',
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
      id: 'verification' as TabType,
      label: 'Verification',
      icon: <ShieldCheck size={18} />,
    },
    {
      id: 'transcript' as TabType,
      label: 'Transcript',
      icon: <FileText size={18} />,
    },
  ];

  const handleSave = () => {
    alert('Changes saved successfully!');
    console.log(guidelinesData);
  };

  // Verification Steps
  const updateVerificationStep = (index: number, value: string) => {
    const updated = [...guidelinesData.verificationSteps];
    updated[index] = { text: value };
    setGuidelinesData({ ...guidelinesData, verificationSteps: updated });
  };

  const addVerificationStep = () => {
    setGuidelinesData({
      ...guidelinesData,
      verificationSteps: [...guidelinesData.verificationSteps, { text: '' }],
    });
  };

  const removeVerificationStep = (index: number) => {
    setGuidelinesData({
      ...guidelinesData,
      verificationSteps: guidelinesData.verificationSteps.filter(
        (_, i) => i !== index
      ),
    });
  };

  // Verification Contact Emails
  const updateVerificationEmail = (index: number, value: string) => {
    const updated = [...guidelinesData.verificationContactEmails];
    updated[index] = value;
    setGuidelinesData({
      ...guidelinesData,
      verificationContactEmails: updated,
    });
  };

  const addVerificationEmail = () => {
    setGuidelinesData({
      ...guidelinesData,
      verificationContactEmails: [
        ...guidelinesData.verificationContactEmails,
        '',
      ],
    });
  };

  const removeVerificationEmail = (index: number) => {
    setGuidelinesData({
      ...guidelinesData,
      verificationContactEmails:
        guidelinesData.verificationContactEmails.filter((_, i) => i !== index),
    });
  };

  // Verification Charges
  const updateVerificationCharge = (
    id: number,
    field: keyof Charge,
    value: string
  ) => {
    setGuidelinesData({
      ...guidelinesData,
      verificationCharges: guidelinesData.verificationCharges.map((charge) =>
        charge.id === id ? { ...charge, [field]: value } : charge
      ),
    });
  };

  const addVerificationCharge = () => {
    const newId =
      guidelinesData.verificationCharges.length > 0
        ? Math.max(...guidelinesData.verificationCharges.map((c) => c.id)) + 1
        : 1;
    setGuidelinesData({
      ...guidelinesData,
      verificationCharges: [
        ...guidelinesData.verificationCharges,
        { id: newId, description: '', fee: '' },
      ],
    });
  };

  const removeVerificationCharge = (id: number) => {
    setGuidelinesData({
      ...guidelinesData,
      verificationCharges: guidelinesData.verificationCharges.filter(
        (c) => c.id !== id
      ),
    });
  };

  // Transcript Steps
  const updateTranscriptStep = (index: number, value: string) => {
    const updated = [...guidelinesData.transcriptSteps];
    updated[index] = { text: value };
    setGuidelinesData({ ...guidelinesData, transcriptSteps: updated });
  };

  const addTranscriptStep = () => {
    setGuidelinesData({
      ...guidelinesData,
      transcriptSteps: [...guidelinesData.transcriptSteps, { text: '' }],
    });
  };

  const removeTranscriptStep = (index: number) => {
    setGuidelinesData({
      ...guidelinesData,
      transcriptSteps: guidelinesData.transcriptSteps.filter(
        (_, i) => i !== index
      ),
    });
  };

  // Transcript Contact Emails
  const updateTranscriptEmail = (index: number, value: string) => {
    const updated = [...guidelinesData.transcriptContactEmails];
    updated[index] = value;
    setGuidelinesData({ ...guidelinesData, transcriptContactEmails: updated });
  };

  const addTranscriptEmail = () => {
    setGuidelinesData({
      ...guidelinesData,
      transcriptContactEmails: [...guidelinesData.transcriptContactEmails, ''],
    });
  };

  const removeTranscriptEmail = (index: number) => {
    setGuidelinesData({
      ...guidelinesData,
      transcriptContactEmails: guidelinesData.transcriptContactEmails.filter(
        (_, i) => i !== index
      ),
    });
  };

  // Transcript Charges
  const updateTranscriptCharge = (
    id: number,
    field: keyof Charge,
    value: string
  ) => {
    setGuidelinesData({
      ...guidelinesData,
      transcriptCharges: guidelinesData.transcriptCharges.map((charge) =>
        charge.id === id ? { ...charge, [field]: value } : charge
      ),
    });
  };

  const addTranscriptCharge = () => {
    const newId =
      guidelinesData.transcriptCharges.length > 0
        ? Math.max(...guidelinesData.transcriptCharges.map((c) => c.id)) + 1
        : 1;
    setGuidelinesData({
      ...guidelinesData,
      transcriptCharges: [
        ...guidelinesData.transcriptCharges,
        { id: newId, description: '', fee: '' },
      ],
    });
  };

  const removeTranscriptCharge = (id: number) => {
    setGuidelinesData({
      ...guidelinesData,
      transcriptCharges: guidelinesData.transcriptCharges.filter(
        (c) => c.id !== id
      ),
    });
  };

  return (
    <div className="space-y-4 sm:space-y-6 p-2 sm:p-4 lg:p-6">
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="bg-[#631012]/10 p-2 sm:p-3 rounded-full text-[#631012] flex-shrink-0">
              <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#171717] break-words">
                Certificate Verification Guidelines Editor
              </h1>
              <p className="text-sm sm:text-base text-[#171717]/60 mt-1">
                Manage verification and transcript procedures
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
                    value={guidelinesData.heroHeading}
                    onChange={(e) =>
                      setGuidelinesData({
                        ...guidelinesData,
                        heroHeading: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Guidelines for Certificates Verification"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Description
                  </label>
                  <textarea
                    rows={3}
                    value={guidelinesData.heroDescription}
                    onChange={(e) =>
                      setGuidelinesData({
                        ...guidelinesData,
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
                    {guidelinesData.heroHeading}
                  </h3>
                  <p className="text-base sm:text-lg text-[#171717]/70">
                    {guidelinesData.heroDescription}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Verification Procedure & Charges */}
          {activeTab === 'verification' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <ShieldCheck className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Verification of Educational Certificate
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div className="p-4 bg-[#F9F9F9] rounded-lg border border-[#171717]/10">
                  <h3 className="text-lg font-semibold text-[#171717] mb-3">
                    Procedure
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-[#171717] mb-2">
                        Procedure Heading
                      </label>
                      <input
                        type="text"
                        value={guidelinesData.verificationProcedureHeading}
                        onChange={(e) =>
                          setGuidelinesData({
                            ...guidelinesData,
                            verificationProcedureHeading: e.target.value,
                          })
                        }
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                        placeholder="Procedure heading"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="block text-sm font-medium text-[#171717]">
                          Steps
                        </label>
                        <button
                          onClick={addVerificationStep}
                          className="flex items-center gap-1 px-2 py-1 bg-[#631012] text-white text-xs rounded hover:bg-[#7a1214] transition-colors"
                        >
                          <Plus size={14} />
                          Add Step
                        </button>
                      </div>
                      <div className="space-y-2">
                        {guidelinesData.verificationSteps.map((step, index) => (
                          <div key={index} className="flex gap-2">
                            <textarea
                              rows={2}
                              value={step.text}
                              onChange={(e) =>
                                updateVerificationStep(index, e.target.value)
                              }
                              className="flex-1 px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                              placeholder={`Step ${index + 1}`}
                            />
                            <button
                              onClick={() => removeVerificationStep(index)}
                              className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors self-start"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="block text-sm font-medium text-[#171717]">
                          Contact Emails
                        </label>
                        <button
                          onClick={addVerificationEmail}
                          className="flex items-center gap-1 px-2 py-1 bg-[#631012] text-white text-xs rounded hover:bg-[#7a1214] transition-colors"
                        >
                          <Plus size={14} />
                          Add Email
                        </button>
                      </div>
                      <div className="space-y-2">
                        {guidelinesData.verificationContactEmails.map(
                          (email, index) => (
                            <div key={index} className="flex gap-2">
                              <input
                                type="email"
                                value={email}
                                onChange={(e) =>
                                  updateVerificationEmail(index, e.target.value)
                                }
                                className="flex-1 px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                                placeholder="email@nith.ac.in"
                              />
                              <button
                                onClick={() => removeVerificationEmail(index)}
                                className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-[#F9F9F9] rounded-lg border border-[#171717]/10">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-semibold text-[#171717]">
                      Charges ({guidelinesData.verificationCharges.length})
                    </h3>
                    <button
                      onClick={addVerificationCharge}
                      className="flex items-center gap-2 px-3 py-1.5 bg-[#631012] text-white text-sm rounded-lg hover:bg-[#7a1214] transition-colors"
                    >
                      <Plus size={16} />
                      Add Charge
                    </button>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-[#171717] mb-2">
                        Charges Heading
                      </label>
                      <input
                        type="text"
                        value={guidelinesData.verificationChargesHeading}
                        onChange={(e) =>
                          setGuidelinesData({
                            ...guidelinesData,
                            verificationChargesHeading: e.target.value,
                          })
                        }
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                        placeholder="Charges heading"
                      />
                    </div>

                    <div className="space-y-2">
                      {guidelinesData.verificationCharges.map(
                        (charge, index) => (
                          <div
                            key={charge.id}
                            className="p-3 border border-[#171717]/20 rounded-lg bg-white"
                          >
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm font-medium text-[#171717]/60">
                                Charge {index + 1}
                              </span>
                              <button
                                onClick={() =>
                                  removeVerificationCharge(charge.id)
                                }
                                className="px-2 py-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              <div>
                                <label className="block text-xs text-[#171717]/60 mb-1">
                                  Description
                                </label>
                                <input
                                  type="text"
                                  value={charge.description}
                                  onChange={(e) =>
                                    updateVerificationCharge(
                                      charge.id,
                                      'description',
                                      e.target.value
                                    )
                                  }
                                  className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                                  placeholder="Description"
                                />
                              </div>
                              <div>
                                <label className="block text-xs text-[#171717]/60 mb-1">
                                  Fee
                                </label>
                                <input
                                  type="text"
                                  value={charge.fee}
                                  onChange={(e) =>
                                    updateVerificationCharge(
                                      charge.id,
                                      'fee',
                                      e.target.value
                                    )
                                  }
                                  className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                                  placeholder="Rs. 1000/-"
                                />
                              </div>
                            </div>
                          </div>
                        )
                      )}
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
                    <h3 className="text-xl font-bold text-[#171717] mb-3">
                      {guidelinesData.verificationProcedureHeading}
                    </h3>
                    <ol className="list-decimal list-inside space-y-2">
                      {guidelinesData.verificationSteps.map((step, idx) => (
                        <li key={idx} className="text-sm text-[#171717]/70">
                          {step.text}
                        </li>
                      ))}
                    </ol>
                    {guidelinesData.verificationContactEmails.length > 0 && (
                      <div className="mt-3 p-3 bg-[#F9F9F9] rounded border border-[#171717]/10">
                        <p className="text-xs font-medium text-[#171717]/60 mb-2">
                          Contact:
                        </p>
                        {guidelinesData.verificationContactEmails.map(
                          (email, idx) => (
                            <div key={idx} className="text-sm text-[#631012]">
                              {idx === 0 ? 'To: ' : 'CC: '}
                              {email}
                            </div>
                          )
                        )}
                      </div>
                    )}
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-[#171717] mb-3">
                      {guidelinesData.verificationChargesHeading}
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-[#F9F9F9] border-b border-[#171717]/10">
                            <th className="px-4 py-3 text-left text-xs font-semibold text-[#171717] uppercase tracking-wider">
                              Sl. No.
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-[#171717] uppercase tracking-wider">
                              Description
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-[#171717] uppercase tracking-wider">
                              Fee
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-[#171717]/10">
                          {guidelinesData.verificationCharges.map(
                            (charge, index) => (
                              <tr
                                key={charge.id}
                                className="hover:bg-[#F9F9F9] transition-colors"
                              >
                                <td className="px-4 py-3 text-sm text-[#171717]">
                                  {index + 1}
                                </td>
                                <td className="px-4 py-3 text-sm text-[#171717]">
                                  {charge.description}
                                </td>
                                <td className="px-4 py-3 text-sm font-medium text-[#631012]">
                                  {charge.fee}
                                </td>
                              </tr>
                            )
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Transcript Procedure & Charges */}
          {activeTab === 'transcript' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <FileText className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Issue of Transcript Certificate
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div className="p-4 bg-[#F9F9F9] rounded-lg border border-[#171717]/10">
                  <h3 className="text-lg font-semibold text-[#171717] mb-3">
                    Procedure
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-[#171717] mb-2">
                        Procedure Heading
                      </label>
                      <input
                        type="text"
                        value={guidelinesData.transcriptProcedureHeading}
                        onChange={(e) =>
                          setGuidelinesData({
                            ...guidelinesData,
                            transcriptProcedureHeading: e.target.value,
                          })
                        }
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                        placeholder="Procedure heading"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="block text-sm font-medium text-[#171717]">
                          Steps
                        </label>
                        <button
                          onClick={addTranscriptStep}
                          className="flex items-center gap-1 px-2 py-1 bg-[#631012] text-white text-xs rounded hover:bg-[#7a1214] transition-colors"
                        >
                          <Plus size={14} />
                          Add Step
                        </button>
                      </div>
                      <div className="space-y-2">
                        {guidelinesData.transcriptSteps.map((step, index) => (
                          <div key={index} className="flex gap-2">
                            <textarea
                              rows={2}
                              value={step.text}
                              onChange={(e) =>
                                updateTranscriptStep(index, e.target.value)
                              }
                              className="flex-1 px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                              placeholder={`Step ${index + 1}`}
                            />
                            <button
                              onClick={() => removeTranscriptStep(index)}
                              className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors self-start"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="block text-sm font-medium text-[#171717]">
                          Contact Emails
                        </label>
                        <button
                          onClick={addTranscriptEmail}
                          className="flex items-center gap-1 px-2 py-1 bg-[#631012] text-white text-xs rounded hover:bg-[#7a1214] transition-colors"
                        >
                          <Plus size={14} />
                          Add Email
                        </button>
                      </div>
                      <div className="space-y-2">
                        {guidelinesData.transcriptContactEmails.map(
                          (email, index) => (
                            <div key={index} className="flex gap-2">
                              <input
                                type="email"
                                value={email}
                                onChange={(e) =>
                                  updateTranscriptEmail(index, e.target.value)
                                }
                                className="flex-1 px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                                placeholder="email@nith.ac.in"
                              />
                              <button
                                onClick={() => removeTranscriptEmail(index)}
                                className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-[#F9F9F9] rounded-lg border border-[#171717]/10">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-semibold text-[#171717]">
                      Charges ({guidelinesData.transcriptCharges.length})
                    </h3>
                    <button
                      onClick={addTranscriptCharge}
                      className="flex items-center gap-2 px-3 py-1.5 bg-[#631012] text-white text-sm rounded-lg hover:bg-[#7a1214] transition-colors"
                    >
                      <Plus size={16} />
                      Add Charge
                    </button>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-[#171717] mb-2">
                        Charges Heading
                      </label>
                      <input
                        type="text"
                        value={guidelinesData.transcriptChargesHeading}
                        onChange={(e) =>
                          setGuidelinesData({
                            ...guidelinesData,
                            transcriptChargesHeading: e.target.value,
                          })
                        }
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                        placeholder="Charges heading"
                      />
                    </div>

                    <div className="space-y-2">
                      {guidelinesData.transcriptCharges.map((charge, index) => (
                        <div
                          key={charge.id}
                          className="p-3 border border-[#171717]/20 rounded-lg bg-white"
                        >
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-[#171717]/60">
                              Charge {index + 1}
                            </span>
                            <button
                              onClick={() => removeTranscriptCharge(charge.id)}
                              className="px-2 py-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            <div>
                              <label className="block text-xs text-[#171717]/60 mb-1">
                                Description
                              </label>
                              <input
                                type="text"
                                value={charge.description}
                                onChange={(e) =>
                                  updateTranscriptCharge(
                                    charge.id,
                                    'description',
                                    e.target.value
                                  )
                                }
                                className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                                placeholder="Description"
                              />
                            </div>
                            <div>
                              <label className="block text-xs text-[#171717]/60 mb-1">
                                Fee
                              </label>
                              <input
                                type="text"
                                value={charge.fee}
                                onChange={(e) =>
                                  updateTranscriptCharge(
                                    charge.id,
                                    'fee',
                                    e.target.value
                                  )
                                }
                                className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                                placeholder="Rs. 2000/- per copy"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
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
                    <h3 className="text-xl font-bold text-[#171717] mb-3">
                      {guidelinesData.transcriptProcedureHeading}
                    </h3>
                    <ol className="list-decimal list-inside space-y-2">
                      {guidelinesData.transcriptSteps.map((step, idx) => (
                        <li key={idx} className="text-sm text-[#171717]/70">
                          {step.text}
                        </li>
                      ))}
                    </ol>
                    {guidelinesData.transcriptContactEmails.length > 0 && (
                      <div className="mt-3 p-3 bg-[#F9F9F9] rounded border border-[#171717]/10">
                        <p className="text-xs font-medium text-[#171717]/60 mb-2">
                          Contact:
                        </p>
                        {guidelinesData.transcriptContactEmails.map(
                          (email, idx) => (
                            <div key={idx} className="text-sm text-[#631012]">
                              {idx === 0 ? 'To: ' : 'CC: '}
                              {email}
                            </div>
                          )
                        )}
                      </div>
                    )}
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-[#171717] mb-3">
                      {guidelinesData.transcriptChargesHeading}
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-[#F9F9F9] border-b border-[#171717]/10">
                            <th className="px-4 py-3 text-left text-xs font-semibold text-[#171717] uppercase tracking-wider">
                              Sl. No.
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-[#171717] uppercase tracking-wider">
                              Description
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-[#171717] uppercase tracking-wider">
                              Fee
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-[#171717]/10">
                          {guidelinesData.transcriptCharges.map(
                            (charge, index) => (
                              <tr
                                key={charge.id}
                                className="hover:bg-[#F9F9F9] transition-colors"
                              >
                                <td className="px-4 py-3 text-sm text-[#171717]">
                                  {index + 1}
                                </td>
                                <td className="px-4 py-3 text-sm text-[#171717]">
                                  {charge.description}
                                </td>
                                <td className="px-4 py-3 text-sm font-medium text-[#631012]">
                                  {charge.fee}
                                </td>
                              </tr>
                            )
                          )}
                        </tbody>
                      </table>
                    </div>
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
