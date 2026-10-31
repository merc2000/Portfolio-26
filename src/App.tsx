import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SelectedWork } from './components/SelectedWork';
import { CaseStudyDetail } from './components/CaseStudyDetail';
import { AboutPage } from './components/AboutPage';
import { Footer } from './components/Footer';
import { ProfileEditModal } from './components/ProfileEditModal';
import { Toast } from './components/Toast';
import { CASE_STUDIES } from './data/caseStudies';
import { DEFAULT_PROFILE, getStoredProfile, saveStoredProfile, resetStoredProfile } from './data/userProfile';
import { CaseStudy, UserProfile } from './types';

export default function App() {
  const [profile, setProfile] = useState<UserProfile>(() => getStoredProfile());
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);
  const [isAboutPage, setIsAboutPage] = useState<boolean>(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync with browser hash for direct links and browser back button support
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (!hash) {
        setSelectedStudy(null);
        setIsAboutPage(false);
        return;
      }
      if (hash === 'about') {
        setSelectedStudy(null);
        setIsAboutPage(true);
        return;
      }
      const match = CASE_STUDIES.find(
        (c) => (c.id === hash || c.slug === hash) && !c.isComingSoon
      );
      if (match) {
        setSelectedStudy(match);
        setIsAboutPage(false);
      } else {
        setSelectedStudy(null);
        setIsAboutPage(false);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectCaseStudy = (study: CaseStudy) => {
    setSelectedStudy(study);
    setIsAboutPage(false);
    window.location.hash = study.id;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = () => {
    setSelectedStudy(null);
    setIsAboutPage(false);
    history.pushState(null, '', window.location.pathname);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateAbout = () => {
    setSelectedStudy(null);
    setIsAboutPage(true);
    window.location.hash = 'about';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToWork = () => {
    setSelectedStudy(null);
    setIsAboutPage(false);
    history.pushState(null, '', window.location.pathname);
    setTimeout(() => {
      const el = document.getElementById('selected-work');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 50);
  };

  const handleLockedClick = (study: CaseStudy) => {
    setToastMessage(
      `Coming soon: "${study.title}" is currently in progress and will be published shortly!`
    );
  };

  const handleSaveProfile = (updated: UserProfile) => {
    setProfile(updated);
    saveStoredProfile(updated);
    setToastMessage('Profile and hero section updated successfully!');
  };

  const handleResetProfile = () => {
    const defaultData = resetStoredProfile();
    setProfile(defaultData);
    setToastMessage('Profile reset to original defaults.');
  };

  const handlePhotoUploaded = (dataUrl: string) => {
    const updated = { ...profile, photoUrl: dataUrl };
    setProfile(updated);
    saveStoredProfile(updated);
    setToastMessage('Photo uploaded and updated successfully!');
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Top Bar Navigation */}
      <Navbar
        profile={profile}
        currentView={selectedStudy ? 'case-study' : isAboutPage ? 'about' : 'home'}
        onNavigateHome={handleNavigateHome}
        onNavigateAbout={handleNavigateAbout}
        onOpenEditModal={() => setIsEditModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {selectedStudy ? (
          <CaseStudyDetail
            study={selectedStudy}
            allStudies={CASE_STUDIES}
            onBack={handleBackToWork}
            onNavigateToStudy={handleSelectCaseStudy}
          />
        ) : isAboutPage ? (
          <AboutPage
            profile={profile}
            onNavigateHome={handleNavigateHome}
          />
        ) : (
          <>
            {/* Hero Section: Photo space + Few lines about me */}
            <HeroSection
              profile={profile}
              onOpenEditModal={() => setIsEditModalOpen(true)}
              onPhotoUploaded={handlePhotoUploaded}
            />

            {/* Selected Work Section: 3 Case Studies matching screenshot */}
            <SelectedWork
              caseStudies={CASE_STUDIES}
              onSelectCaseStudy={handleSelectCaseStudy}
              onLockedClick={handleLockedClick}
            />
          </>
        )}
      </main>

      {/* Minimalist Footer */}
      <Footer
        profile={profile}
        currentView={selectedStudy ? 'case-study' : isAboutPage ? 'about' : 'home'}
        onOpenEditModal={() => setIsEditModalOpen(true)}
      />

      {/* Modals & Notifications */}
      <ProfileEditModal
        isOpen={isEditModalOpen}
        profile={profile}
        onClose={() => setIsEditModalOpen(false)}
        onSave={handleSaveProfile}
        onReset={handleResetProfile}
      />

      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}
