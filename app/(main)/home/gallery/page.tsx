'use client';

import React, { useState } from 'react';
import { Save, Image, Plus, Trash2, FileText, BarChart3 } from 'lucide-react';

interface GalleryImage {
  title: string;
  category: string;
  altText: string;
  imageUrl: string;
}

interface GalleryStat {
  value: string;
  label: string;
}

interface GalleryData {
  heading: string;
  description: string;
  images: GalleryImage[];
  stats: GalleryStat[];
}

type TabType = 'content' | 'images' | 'stats';

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<TabType>('content');

  const [galleryData, setGalleryData] = useState<GalleryData>({
    heading: 'Gallery',
    description:
      'Explore moments from our campus events, achievements, and vibrant community.',
    images: [
      {
        title: 'Gallery Image 1',
        category: 'Event',
        altText: 'Gallery Image 1',
        imageUrl: '/images/gallery/1.jpg',
      },
      {
        title: 'Gallery Image 2',
        category: 'Achievement',
        altText: 'Gallery Image 2',
        imageUrl: '/images/gallery/2.jpg',
      },
      {
        title: 'Gallery Image 3',
        category: 'Campus',
        altText: 'Gallery Image 3',
        imageUrl: '/images/gallery/3.jpg',
      },
      {
        title: 'Gallery Image 4',
        category: 'Event',
        altText: 'Gallery Image 4',
        imageUrl: '/images/gallery/4.jpg',
      },
      {
        title: 'Gallery Image 5',
        category: 'Achievement',
        altText: 'Gallery Image 5',
        imageUrl: '/images/gallery/5.jpg',
      },
      {
        title: 'Gallery Image 6',
        category: 'Campus',
        altText: 'Gallery Image 6',
        imageUrl: '/images/gallery/6.jpg',
      },
      {
        title: 'Gallery Image 7',
        category: 'Event',
        altText: 'Gallery Image 7',
        imageUrl: '/images/gallery/7.jpg',
      },
      {
        title: 'Gallery Image 8',
        category: 'Achievement',
        altText: 'Gallery Image 8',
        imageUrl: '/images/gallery/8.jpg',
      },
      {
        title: 'Gallery Image 9',
        category: 'Campus',
        altText: 'Gallery Image 9',
        imageUrl: '/images/gallery/9.jpg',
      },
      {
        title: 'Gallery Image 10',
        category: 'Event',
        altText: 'Gallery Image 10',
        imageUrl: '/images/gallery/10.jpg',
      },
      {
        title: 'Gallery Image 11',
        category: 'Achievement',
        altText: 'Gallery Image 11',
        imageUrl: '/images/gallery/11.jpg',
      },
      {
        title: 'Gallery Image 12',
        category: 'Campus',
        altText: 'Gallery Image 12',
        imageUrl: '/images/gallery/12.jpg',
      },
    ],
    stats: [
      { value: '12+', label: 'Gallery Images' },
      { value: '3', label: 'Categories' },
      { value: '2024', label: 'Current Year' },
    ],
  });

  const tabs = [
    {
      id: 'content' as TabType,
      label: 'Section Content',
      icon: <FileText size={18} />,
    },
    {
      id: 'images' as TabType,
      label: 'Gallery Images',
      icon: <Image size={18} />,
    },
    {
      id: 'stats' as TabType,
      label: 'Statistics',
      icon: <BarChart3 size={18} />,
    },
  ];

  const handleSave = () => {
    alert('Changes saved successfully!');
    console.log(galleryData);
  };

  const updateImage = (
    index: number,
    field: keyof GalleryImage,
    value: string
  ) => {
    const updated = [...galleryData.images];
    updated[index] = { ...updated[index], [field]: value };
    setGalleryData({ ...galleryData, images: updated });
  };

  const addImage = () => {
    setGalleryData({
      ...galleryData,
      images: [
        ...galleryData.images,
        { title: '', category: '', altText: '', imageUrl: '' },
      ],
    });
  };

  const removeImage = (index: number) => {
    setGalleryData({
      ...galleryData,
      images: galleryData.images.filter((_, i) => i !== index),
    });
  };

  const updateStat = (
    index: number,
    field: keyof GalleryStat,
    value: string
  ) => {
    const updated = [...galleryData.stats];
    updated[index] = { ...updated[index], [field]: value };
    setGalleryData({ ...galleryData, stats: updated });
  };

  const addStat = () => {
    setGalleryData({
      ...galleryData,
      stats: [...galleryData.stats, { value: '', label: '' }],
    });
  };

  const removeStat = (index: number) => {
    setGalleryData({
      ...galleryData,
      stats: galleryData.stats.filter((_, i) => i !== index),
    });
  };

  return (
    <div className="space-y-4 sm:space-y-6 p-2 sm:p-4 lg:p-6">
      <div className="bg-gradient-to-r from-[#631012] to-[#7a1214] rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 text-white">
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <Image className="w-6 h-6 sm:w-8 sm:h-8" />
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">Gallery</h1>
        </div>
        <p className="text-sm sm:text-base text-white/90">
          Manage gallery section content
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="bg-[#631012]/10 p-2 sm:p-3 rounded-full text-[#631012] flex-shrink-0">
              <Image className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#171717] break-words">
                Gallery Editor
              </h1>
              <p className="text-sm sm:text-base text-[#171717]/60 mt-1">
                Edit gallery content
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
          {/* Section Content */}
          {activeTab === 'content' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <FileText className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Section Content
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Heading
                  </label>
                  <input
                    type="text"
                    value={galleryData.heading}
                    onChange={(e) =>
                      setGalleryData({
                        ...galleryData,
                        heading: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Gallery"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Description
                  </label>
                  <textarea
                    rows={3}
                    value={galleryData.description}
                    onChange={(e) =>
                      setGalleryData({
                        ...galleryData,
                        description: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Description"
                  />
                </div>
              </div>

              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
                  Preview:
                </p>
                <div className="bg-white p-4 sm:p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-[#171717] mb-2">
                    {galleryData.heading}
                  </h3>
                  <p className="text-sm text-[#171717]/60">
                    {galleryData.description}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Gallery Images */}
          {activeTab === 'images' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Image className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Gallery Images
                </h2>
              </div>

              <div className="space-y-3 max-h-[500px] overflow-y-auto">
                {galleryData.images.map((image, index) => (
                  <div
                    key={index}
                    className="p-4 border border-[#171717]/20 rounded-lg bg-[#F9F9F9] space-y-3"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-[#171717]/60">
                        Image {index + 1}
                      </span>
                      <button
                        onClick={() => removeImage(index)}
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
                          value={image.title}
                          onChange={(e) =>
                            updateImage(index, 'title', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                          placeholder="Image title"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-[#171717]/60 mb-1">
                          Category
                        </label>
                        <input
                          type="text"
                          value={image.category}
                          onChange={(e) =>
                            updateImage(index, 'category', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                          placeholder="Event, Achievement, Campus"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs text-[#171717]/60 mb-1">
                          Alt Text
                        </label>
                        <input
                          type="text"
                          value={image.altText}
                          onChange={(e) =>
                            updateImage(index, 'altText', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                          placeholder="Descriptive alt text"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-[#171717]/60 mb-1">
                          Image URL
                        </label>
                        <input
                          type="text"
                          value={image.imageUrl}
                          onChange={(e) =>
                            updateImage(index, 'imageUrl', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                          placeholder="/images/gallery/1.jpg"
                        />
                      </div>
                    </div>
                  </div>
                ))}
                <button
                  onClick={addImage}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 text-[#631012] hover:bg-[#631012]/10 rounded-lg transition-colors text-sm sm:text-base"
                >
                  <Plus size={18} />
                  Add Image
                </button>
              </div>

              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
                  Preview:
                </p>
                <div className="bg-white p-4 sm:p-6 rounded-lg">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {galleryData.images.slice(0, 8).map((image, index) => (
                      <div
                        key={index}
                        className="bg-[#F9F9F9] p-3 rounded-lg border border-[#171717]/10 text-center"
                      >
                        <div className="w-full h-20 bg-[#171717]/10 rounded mb-2 flex items-center justify-center">
                          <Image className="w-8 h-8 text-[#171717]/30" />
                        </div>
                        <p className="text-xs text-[#631012] font-medium">
                          {image.category}
                        </p>
                        <p className="text-xs text-[#171717]/60 truncate">
                          {image.title}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Statistics */}
          {activeTab === 'stats' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <BarChart3 className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Gallery Statistics
                </h2>
              </div>

              <div className="space-y-3">
                {galleryData.stats.map((stat, index) => (
                  <div
                    key={index}
                    className="p-3 border border-[#171717]/20 rounded-lg bg-[#F9F9F9]"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-[#171717]/60">
                        Stat {index + 1}
                      </span>
                      <button
                        onClick={() => removeStat(index)}
                        className="px-2 py-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <div>
                        <label className="block text-xs text-[#171717]/60 mb-1">
                          Value
                        </label>
                        <input
                          type="text"
                          value={stat.value}
                          onChange={(e) =>
                            updateStat(index, 'value', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                          placeholder="12+"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-[#171717]/60 mb-1">
                          Label
                        </label>
                        <input
                          type="text"
                          value={stat.label}
                          onChange={(e) =>
                            updateStat(index, 'label', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                          placeholder="Gallery Images"
                        />
                      </div>
                    </div>
                  </div>
                ))}
                <button
                  onClick={addStat}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 text-[#631012] hover:bg-[#631012]/10 rounded-lg transition-colors text-sm sm:text-base"
                >
                  <Plus size={18} />
                  Add Stat
                </button>
              </div>

              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
                  Preview:
                </p>
                <div className="bg-white p-4 sm:p-6 rounded-lg">
                  <div className="flex justify-center gap-8">
                    {galleryData.stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <p className="text-2xl font-bold text-[#631012]">
                          {stat.value}
                        </p>
                        <p className="text-sm text-[#171717]/60">
                          {stat.label}
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
