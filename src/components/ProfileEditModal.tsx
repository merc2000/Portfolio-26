import React, { useState, useRef } from 'react';
import { X, Upload, RotateCcw, Check, Image as ImageIcon } from 'lucide-react';
import { UserProfile } from '../types';
import { DEFAULT_PROFILE } from '../data/userProfile';

interface ProfileEditModalProps {
  isOpen: boolean;
  profile: UserProfile;
  onClose: () => void;
  onSave: (updated: UserProfile) => void;
  onReset: () => void;
}

export const ProfileEditModal: React.FC<ProfileEditModalProps> = ({
  isOpen,
  profile,
  onClose,
  onSave,
  onReset,
}) => {
  const [formData, setFormData] = useState<UserProfile>(profile);
  const [bioText, setBioText] = useState<string>(profile.bioParagraphs.join('\n\n'));
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) {
        setFormData(prev => ({ ...prev, photoUrl: dataUrl }));
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedBioParagraphs = bioText
      .split('\n')
      .map(p => p.trim())
      .filter(p => p.length > 0);

    onSave({
      ...formData,
      bioParagraphs: updatedBioParagraphs.length > 0 ? updatedBioParagraphs : formData.bioParagraphs,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-neutral-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-neutral-100 flex items-center justify-between">
          <div>
            <h2 id="modal-title" className="text-xl font-bold tracking-tight text-neutral-900 leading-[1.2]">
              Customize Profile & Hero Section
            </h2>
            <p className="text-xs text-neutral-500 mt-1 leading-[1.5]">
              Update your photo, bio lines, and contact information. Saved locally in your browser.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-12 h-12 flex items-center justify-center text-neutral-400 hover:text-neutral-700 rounded-xl hover:bg-neutral-100 transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: 24px between distinct container sections */}
        <form onSubmit={handleSubmit} className="overflow-y-auto p-6 space-y-6 flex-1">
          
          {/* Photo Section */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-2 leading-[1.2]">
              Your Photo
            </label>
            <div className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl border border-neutral-200 bg-neutral-50">
              <div className="w-24 h-24 rounded-2xl overflow-hidden bg-neutral-200 border border-neutral-300 shrink-0">
                <img
                  src={formData.photoUrl}
                  alt={formData.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-3 flex-1 w-full text-center sm:text-left">
                <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="min-h-[48px] inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-900 text-white text-xs font-semibold hover:bg-neutral-800 transition-colors cursor-pointer"
                  >
                    <Upload className="w-4 h-4" />
                    <span>Upload New Photo</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, photoUrl: DEFAULT_PROFILE.photoUrl }))}
                    className="min-h-[48px] inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-neutral-300 bg-white text-neutral-700 text-xs font-medium hover:bg-neutral-100 transition-colors cursor-pointer"
                  >
                    <span>Use Default Portrait</span>
                  </button>
                </div>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                  aria-label="Upload photo file"
                />

                <p className="text-xs text-neutral-500 leading-[1.5]">
                  Select any JPG, PNG or WebP image from your computer.
                </p>
              </div>
            </div>
          </div>

          {/* Name & Title: 16px field spacing */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-2 leading-[1.2]">
                Your Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full min-h-[48px] px-4 py-2.5 text-sm rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent leading-[1.5]"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-2 leading-[1.2]">
                Professional Title / Role
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                className="w-full min-h-[48px] px-4 py-2.5 text-sm rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent leading-[1.5]"
                required
              />
            </div>
          </div>

          {/* Location: 16px field spacing */}
          <div>
            <label className="block text-xs font-semibold text-neutral-700 mb-2 leading-[1.2]">
              Location / Working Status
            </label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
              className="w-full min-h-[48px] px-4 py-2.5 text-sm rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent leading-[1.5]"
            />
          </div>

          {/* Few Lines About Me */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-xs font-semibold text-neutral-700 leading-[1.2]">
                Few Lines About Me (Paragraphs)
              </label>
              <span className="text-[11px] text-neutral-400">Separate paragraphs with blank lines</span>
            </div>
            <textarea
              rows={4}
              value={bioText}
              onChange={(e) => setBioText(e.target.value)}
              className="w-full p-4 text-sm rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent font-normal leading-[1.5]"
              placeholder="Write a few lines introducing yourself and your design work..."
              required
            />
          </div>

          {/* Contact Details: 16px field spacing */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-2 leading-[1.2]">
                Email Address
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full min-h-[48px] px-4 py-2.5 text-sm rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent leading-[1.5]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-2 leading-[1.2]">
                LinkedIn Profile URL
              </label>
              <input
                type="url"
                value={formData.linkedin}
                onChange={(e) => setFormData(prev => ({ ...prev, linkedin: e.target.value }))}
                className="w-full min-h-[48px] px-4 py-2.5 text-sm rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent leading-[1.5]"
              />
            </div>
          </div>

          {/* Modal Footer: 24px top separation with border */}
          <div className="pt-6 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => {
                onReset();
                setFormData(DEFAULT_PROFILE);
                setBioText(DEFAULT_PROFILE.bioParagraphs.join('\n\n'));
              }}
              className="min-h-[48px] inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium text-neutral-500 hover:text-rose-600 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset to Defaults</span>
            </button>

            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <button
                type="button"
                onClick={onClose}
                className="min-h-[48px] px-5 py-2.5 text-xs font-semibold text-neutral-700 hover:bg-neutral-100 rounded-xl transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-xl transition-colors cursor-pointer"
              >
                <Check className="w-4 h-4" />
                <span>Save Changes</span>
              </button>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
};
