import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, Sliders, ShieldCheck, Sparkles, MessageSquare, ExternalLink, RefreshCw } from 'lucide-react';
import { CaseStudy } from '../types';
import { NovaBirthCaseStudy } from './NovaBirthCaseStudy';
import { ScribeCaseStudy } from './ScribeCaseStudy';

interface CaseStudyDetailProps {
  study: CaseStudy;
  allStudies: CaseStudy[];
  onBack: () => void;
  onNavigateToStudy: (study: CaseStudy) => void;
}

export const CaseStudyDetail: React.FC<CaseStudyDetailProps> = ({
  study,
  allStudies,
  onBack,
  onNavigateToStudy,
}) => {
  // If viewing the NovaBirth case study, render the custom Framer-inspired editorial component
  if (study.id === 'novabirth') {
    return (
      <NovaBirthCaseStudy
        study={study}
        allStudies={allStudies}
        onBack={onBack}
        onNavigateToStudy={onNavigateToStudy}
      />
    );
  }

  // If viewing the Scribe case study, render the custom Framer-inspired editorial component
  if (study.id === 'scribe') {
    return (
      <ScribeCaseStudy
        study={study}
        allStudies={allStudies}
        onBack={onBack}
        onNavigateToStudy={onNavigateToStudy}
      />
    );
  }
  // Simulator State for Novabirth Ultrasound
  const [dilationCm, setDilationCm] = useState<number>(7.2);
  const [showAiOverlay, setShowAiOverlay] = useState<boolean>(true);
  const [probeAngle, setProbeAngle] = useState<number>(45);

  // Simulator State for Scribe Keyboard
  const [activeRecallRevealed, setActiveRecallRevealed] = useState<boolean>(false);
  const [simulatedChat, setSimulatedChat] = useState<string>('Bonjour Sarah, comment tu vas ?');
  const [keyboardInput, setKeyboardInput] = useState<string>('Je vais bien, merci ! Et');

  const nextStudy = allStudies.find(s => s.id !== study.id && !s.isComingSoon);

  return (
    <div className="min-h-screen bg-white">
      {/* Case Study Header: 64px to 80px+ page-level whitespace */}
      <article className="max-w-5xl mx-auto px-6 sm:px-8 pt-8 sm:pt-12 pb-24 sm:pb-28">

        {/* Big Title: tight line height <= 1.2 */}
        <h1 id="intro" className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 leading-[1.15] mb-6 text-balance scroll-mt-28">
          {study.title}
        </h1>

        {/* Lead Subtitle: optimal 1.6 body line height */}
        <p className="text-lg sm:text-xl text-neutral-600 font-normal leading-[1.6] mb-10 max-w-3xl">
          {study.description}
        </p>

        {/* Metadata Grid: 24px internal gap and 32px padding */}
        <div id="overview" className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-8 border-y border-neutral-100 mb-12 text-sm scroll-mt-28">
          <div>
            <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1 leading-[1.2]">Role</div>
            <div className="text-neutral-900 font-medium leading-[1.3]">{study.role || 'Lead Designer'}</div>
          </div>
          <div>
            <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1 leading-[1.2]">Timeline</div>
            <div className="text-neutral-900 font-medium leading-[1.3]">{study.timeline || '2025 – 2026'}</div>
          </div>
          <div>
            <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1 leading-[1.2]">Discipline</div>
            <div className="text-neutral-900 font-medium leading-[1.3]">{study.discipline}</div>
          </div>
          <div>
            <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1 leading-[1.2]">Impact</div>
            <div className="text-neutral-900 font-medium leading-[1.3]">{study.impactMetric?.value || 'Validated'}</div>
          </div>
        </div>

        {/* Main Hero Showcase Media with JumpToMenu on the right */}
        <div className="relative rounded-2xl overflow-visible mb-16">
          <div className="relative rounded-2xl overflow-hidden border border-neutral-200/80 bg-neutral-50 shadow-sm">
            <img
              src={study.previewImage}
              alt={study.title}
              className="w-full h-auto object-cover"
            />
            <div className="px-6 py-4 bg-neutral-50 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500 leading-[1.5]">
              <span className="font-medium text-neutral-700">Primary UI interface & research artifact overview</span>
              <span>{study.client} design documentation</span>
            </div>
          </div>
        </div>

        {/* Key Impact Metric Callout: 24px container section padding */}
        {study.impactMetric && (
          <div className="p-6 sm:p-8 rounded-2xl bg-neutral-50 border border-neutral-200/70 mb-16">
            <div className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 mb-2 leading-[1.1]">
              {study.impactMetric.value}
            </div>
            <p className="text-base sm:text-lg text-neutral-700 font-normal max-w-2xl leading-[1.6]">
              {study.impactMetric.label}
            </p>
          </div>
        )}

        {/* Executive Overview */}
        <div className="mb-16 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 mb-4 leading-[1.2]">
            Overview & Clinical Context
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 leading-[1.6] font-normal">
            {study.overview}
          </p>
          <div className="p-6 rounded-2xl border border-neutral-200 bg-neutral-50/50">
            <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-2 leading-[1.2]">The Core Friction</h3>
            <p className="text-neutral-700 leading-[1.6] text-sm sm:text-base">
              {study.problemStatement}
            </p>
          </div>
        </div>

        {/* Research Insights (Numbered Editorial Style) */}
        {study.researchInsights && study.researchInsights.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 mb-8 leading-[1.2]">
              Key Research & Fieldwork Insights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {study.researchInsights.map((insight, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-neutral-200/80 bg-white flex flex-col justify-between"
                >
                  <div>
                    <div className="text-sm font-mono font-bold text-neutral-400 mb-3">
                      {insight.number}
                    </div>
                    <h3 className="text-base font-semibold text-neutral-900 leading-[1.2] mb-3">
                      {insight.title}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-[1.6] font-normal">
                      {insight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* INTERACTIVE PROTOTYPE SECTION */}
        {study.interactiveDemoType === 'ultrasound' && (
          <div className="mb-20 rounded-2xl border border-neutral-200 bg-neutral-950 text-white p-6 sm:p-10 shadow-lg">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-neutral-800">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">Interactive Clinical Prototype</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 leading-[1.2]">AI Transperineal Labor HUD</h3>
                <p className="text-xs sm:text-sm text-neutral-400 mt-1 leading-[1.5]">Adjust ultrasound sagittal probe angle and test real-time anatomical AI segmentation</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowAiOverlay(!showAiOverlay)}
                  className={`min-h-[48px] px-4 py-2 text-xs font-semibold rounded-xl border transition-colors cursor-pointer ${
                    showAiOverlay
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                      : 'bg-neutral-800 text-neutral-400 border-neutral-700'
                  }`}
                >
                  AI Contour: {showAiOverlay ? 'Enabled' : 'Bypassed'}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Simulated Ultrasound Screen */}
              <div className="lg:col-span-7 relative aspect-[4/3] bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 flex items-center justify-center p-6 select-none">
                {/* Ultrasound Noise & Fan Shape */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-900 to-black opacity-90"></div>
                
                {/* Live simulated anatomical contours */}
                <div className="relative z-10 w-full h-full flex flex-col justify-between">
                  <div className="flex justify-between items-center text-xs font-mono text-neutral-400">
                    <span>SAGITTAL_PLANE // 4.5MHz</span>
                    <span className="text-emerald-400 font-semibold">SIGNAL: OPTIMAL</span>
                  </div>

                  {/* Center Probe View with dynamic dilation indicator */}
                  <div className="relative my-auto flex flex-col items-center justify-center">
                    <div
                      className="relative rounded-full transition-all duration-300 border-2"
                      style={{
                        width: `${Math.min(220, Math.max(90, dilationCm * 24))}px`,
                        height: `${Math.min(220, Math.max(90, dilationCm * 24))}px`,
                        borderColor: showAiOverlay ? '#10b981' : '#525252',
                        backgroundColor: showAiOverlay ? 'rgba(16, 185, 129, 0.08)' : 'rgba(255,255,255,0.02)',
                        boxShadow: showAiOverlay ? '0 0 24px rgba(16, 185, 129, 0.2)' : 'none'
                      }}
                    >
                      {showAiOverlay && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-xs font-mono font-bold bg-neutral-950/80 px-2 py-0.5 rounded text-emerald-300">
                            {dilationCm.toFixed(1)} cm
                          </span>
                        </div>
                      )}
                    </div>
                    {showAiOverlay && (
                      <span className="text-[11px] font-mono text-neutral-400 mt-2">
                        Internal Os Contour Tracking (Confidence: 97.4%)
                      </span>
                    )}
                  </div>

                  {/* HUD Bottom Bar */}
                  <div className="flex justify-between items-center text-xs font-mono text-neutral-400 pt-2 border-t border-neutral-800">
                    <span>PROBE ANGLE: {probeAngle}°</span>
                    <span>PATIENT ID: #NB-4812</span>
                  </div>
                </div>
              </div>

              {/* Controls */}
              <div className="lg:col-span-5 space-y-6 text-sm">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-neutral-300 font-medium">Simulated Cervical Dilation</label>
                    <span className="text-emerald-400 font-mono font-bold">{dilationCm.toFixed(1)} cm</span>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="10"
                    step="0.1"
                    value={dilationCm}
                    onChange={(e) => setDilationCm(parseFloat(e.target.value))}
                    className="w-full accent-emerald-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-neutral-500 mt-1 font-mono">
                    <span>3 cm (Latent)</span>
                    <span>6 cm (Active)</span>
                    <span>10 cm (Transition)</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-neutral-300 font-medium">Sagittal Probe Angle</label>
                    <span className="text-neutral-400 font-mono">{probeAngle}°</span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="70"
                    value={probeAngle}
                    onChange={(e) => setProbeAngle(parseInt(e.target.value))}
                    className="w-full accent-neutral-400 cursor-pointer"
                  />
                </div>

                <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 space-y-2">
                  <div className="font-semibold text-white flex items-center gap-1.5 leading-[1.2]">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Clinical Safety Invariant</span>
                  </div>
                  <p className="text-neutral-400 leading-[1.6]">
                    The software requires two consecutive stable frames before recording objective measurements, preventing motion artifacts caused by maternal contractions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {study.interactiveDemoType === 'keyboard' && (
          <div className="mb-16 sm:mb-20 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 sm:p-10 shadow-sm">
            <div className="mb-6 pb-6 border-b border-neutral-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase leading-[1.2]">Interactive Interaction Model</span>
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1 leading-[1.2]">Scribe Active-Recall Keyboard Demo</h3>
                <p className="text-xs sm:text-sm text-neutral-600 mt-1 leading-[1.5]">Try tapping the active-recall suggestion in the candidate strip</p>
              </div>
              <button
                onClick={() => {
                  setActiveRecallRevealed(false);
                  setKeyboardInput('Je vais bien, merci ! Et ');
                }}
                className="min-h-[48px] inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-300 bg-white text-xs font-medium text-neutral-700 hover:bg-neutral-100 transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reset Demo</span>
              </button>
            </div>

            {/* Mobile Device Frame */}
            <div className="max-w-sm mx-auto bg-white rounded-3xl border border-neutral-300 shadow-xl overflow-hidden">
              {/* Chat Header */}
              <div className="px-4 py-3 bg-neutral-100 border-b border-neutral-200 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs">
                  S
                </div>
                <div>
                  <div className="text-xs font-semibold text-neutral-900 leading-[1.2]">Sarah (French Tandem)</div>
                  <div className="text-[10px] text-emerald-600 leading-[1.3]">Active learning mode</div>
                </div>
              </div>

              {/* Chat Thread */}
              <div className="p-4 space-y-3 min-h-[160px] bg-neutral-50/60 text-xs">
                <div className="max-w-[80%] bg-neutral-200 text-neutral-800 p-3 rounded-2xl rounded-tl-sm leading-[1.5]">
                  {simulatedChat}
                </div>
                <div className="max-w-[85%] ml-auto bg-blue-600 text-white p-3 rounded-2xl rounded-tr-sm leading-[1.5]">
                  {keyboardInput}
                  {activeRecallRevealed ? ' toi ?' : ' ...'}
                </div>
              </div>

              {/* Keyboard Candidate Bar with Active Recall */}
              <div className="px-3 py-2 bg-neutral-200 border-t border-neutral-300 flex items-center justify-around gap-2 text-xs">
                <span className="text-neutral-500 text-[11px]">toi</span>
                
                {/* Active recall clue button */}
                <button
                  onClick={() => {
                    setActiveRecallRevealed(true);
                    setKeyboardInput('Je vais bien, merci ! Et toi ?');
                  }}
                  className={`min-h-[36px] px-3.5 py-1.5 rounded-lg font-medium text-xs transition-all cursor-pointer ${
                    activeRecallRevealed
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200'
                  }`}
                >
                  {activeRecallRevealed ? '✓ toi (you)' : '💡 t _ _ ? (you)'}
                </button>

                <span className="text-neutral-500 text-[11px]">vous</span>
              </div>

              {/* Virtual Keyboard Grid Representation */}
              <div className="p-2 bg-neutral-200/90 text-neutral-800 grid grid-cols-10 gap-1 text-center font-mono text-xs select-none">
                {['Q','W','E','R','T','Y','U','I','O','P'].map(k => (
                  <span key={k} className="bg-white py-2 rounded shadow-xs">{k}</span>
                ))}
                {['A','S','D','F','G','H','J','K','L'].map(k => (
                  <span key={k} className="bg-white py-2 rounded shadow-xs">{k}</span>
                ))}
                <span className="col-span-2 bg-neutral-300 py-2 rounded text-[10px] font-sans">⇧</span>
                {['Z','X','C','V','B','N','M'].map(k => (
                  <span key={k} className="bg-white py-2 rounded shadow-xs">{k}</span>
                ))}
                <span className="bg-neutral-300 py-2 rounded text-[10px] font-sans">⌫</span>
              </div>
            </div>

            <p className="text-center text-xs text-neutral-500 mt-4 leading-[1.5]">
              {activeRecallRevealed
                ? '🎉 Recalled! The micro-challenge completes without breaking typing momentum.'
                : 'Click "💡 t _ _ ?" above to experience the micro active-recall interaction.'}
            </p>
          </div>
        )}

        {/* Design Solution Highlights */}
        {study.solutionHighlights && (
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 mb-8 leading-[1.2]">
              System Architecture & Interactions
            </h2>
            <div className="space-y-6">
              {study.solutionHighlights.map((sol, idx) => (
                <div key={idx} className="p-6 rounded-2xl border border-neutral-200 bg-white">
                  <h3 className="text-lg font-bold text-neutral-900 mb-2 leading-[1.2]">{sol.title}</h3>
                  <p className="text-neutral-600 leading-[1.6] text-sm sm:text-base font-normal">{sol.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Learnings & Takeaways: 24px container section padding */}
        {study.keyLearnings && (
          <div className="mb-16 p-6 sm:p-8 rounded-2xl bg-neutral-50 border border-neutral-200/80">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 mb-6 leading-[1.2]">
              Key Reflections & Engineering Principles
            </h2>
            <ul className="space-y-4">
              {study.keyLearnings.map((learning, idx) => (
                <li key={idx} className="flex items-start gap-3 text-neutral-700 text-sm sm:text-base leading-[1.6]">
                  <CheckCircle2 className="w-5 h-5 text-neutral-900 shrink-0 mt-0.5" />
                  <span>{learning}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Footer Navigation: Next Case Study & Back */}
        <div className="pt-12 sm:pt-16 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <button
            onClick={onBack}
            className="min-h-[48px] inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-neutral-900 hover:text-neutral-600 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Work</span>
          </button>

          {nextStudy && (
            <button
              onClick={() => onNavigateToStudy(nextStudy)}
              className="min-h-[48px] inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neutral-900 text-white text-sm font-semibold hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              <span>Next Project: {nextStudy.client}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

      </article>
    </div>
  );
};
