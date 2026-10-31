import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ArrowRight
} from 'lucide-react';
import { CaseStudy } from '../types';

interface ScribeCaseStudyProps {
  study: CaseStudy;
  allStudies: CaseStudy[];
  onBack: () => void;
  onNavigateToStudy: (study: CaseStudy) => void;
}

export const ScribeCaseStudy: React.FC<ScribeCaseStudyProps> = ({
  study,
  allStudies,
  onBack,
  onNavigateToStudy,
}) => {
  const [activeFlowTab, setActiveFlowTab] = useState<'plural' | 'conjugate' | 'translate'>('plural');
  const nextStudy = allStudies.find(s => s.id !== study.id && !s.isComingSoon);

  return (
    <div className="min-h-screen bg-[#FCFCFD] text-neutral-900 selection:bg-[#1D95CA]/30 selection:text-neutral-900 overflow-x-clip">
      
      {/* Main Editorial Case Study Container */}
      <main className="max-w-4xl mx-auto px-6 sm:px-8 pt-8 sm:pt-12 pb-28">

        {/* ========================================================
            HERO & METADATA SECTION
           ======================================================== */}
        <section id="intro" className="mb-20 sm:mb-24 scroll-mt-28">
          
          {/* Primary Editorial Title: tight heading line height <= 1.2 */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-950 leading-[1.15] mb-6 text-balance">
            Designing an optional <span className="whitespace-nowrap">active-recall</span> step for a{' '}
            <span className="relative inline-block text-neutral-950">
              language keyboard
              <span className="absolute bottom-1 left-0 w-full h-[4px] bg-[#1D95CA] -z-10 rounded-full opacity-80"></span>
            </span>
          </h1>

          {/* Subtitle / Executive Summary: optimal 1.6 body line height with #1D95CA highlights */}
          <p className="text-lg sm:text-xl text-neutral-700 font-normal leading-[1.6] mb-8 max-w-3xl">
            Scribe is a WikiMedia project that makes <span className="text-[#1D95CA] font-semibold">Wikidata-based mobile keyboard applications</span> to help second language learners <span className="text-[#1D95CA] font-semibold">communicate more confidently</span> in the languages they’re learning.
          </p>

          {/* Hero Cover Image */}
          <div id="scribe-cover-container" className="relative mb-8">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100 shadow-sm">
              <img
                src="/assets/aistudio/Frame_4_a8ebdac6.jpg"
                alt="Scribe Mobile Keyboard Active-Recall Guess Functionality Showcase"
                className="w-full h-auto object-cover"
                onError={(e) => {
                  e.currentTarget.src = '/public/assets/aistudio/Frame_4_a8ebdac6.jpg';
                }}
              />
            </div>
          </div>

          {/* Project Details */}
          <div className="pt-8 sm:pt-10 border-t border-neutral-200 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                Timeline
              </div>
              <p className="text-base sm:text-lg text-neutral-900 font-medium leading-relaxed">
                3 weeks
              </p>
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                Team
              </div>
              <div className="space-y-1 text-base sm:text-lg text-neutral-900 font-medium leading-relaxed">
                <p>Product Designer (me)</p>
                <p>Product Manager</p>
                <p>Developer</p>
              </div>
            </div>
          </div>

        </section>


        {/* ========================================================
            SECTION 1: THE CHALLENGE & WHY THE GUESS FUNCTIONALITY
           ======================================================== */}
        <section id="challenge" className="mb-20 sm:mb-24 scroll-mt-28">
          
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#1D95CA]">
              Introduction & Context
            </span>
            <div className="h-px bg-neutral-200 flex-1"></div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-950 mb-6 leading-[1.15]">
            When typing in a second language, learners are <span className="text-[#1D95CA]">on their own</span>
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-neutral-700 leading-[1.6] font-normal mb-8">
            <p>
              Many language learners rely on apps to learn vocabulary, grammar, and rules. However, when it comes to actually using the language, especially while writing messages, they are often on their own.
            </p>
            <p>
              With Scribe, users can perform key linguistic operations <span className="text-[#1D95CA] font-semibold">without leaving the keyboard</span>, reducing cognitive load and making language use more natural in everyday communication:
            </p>
          </div>

          {/* 3 Core Capability Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-10">
            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200/80">
              <div className="w-10 h-10 rounded-xl bg-[#1D95CA]/10 text-[#1D95CA] flex items-center justify-center font-bold text-sm mb-4">
                01
              </div>
              <h3 className="text-base font-bold text-neutral-900 mb-2 leading-[1.2]">
                Look up plural forms
              </h3>
              <p className="text-sm text-neutral-600 leading-[1.5]">
                Quickly check the plural endings of foreign nouns right in the candidate bar while composing.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200/80">
              <div className="w-10 h-10 rounded-xl bg-[#1D95CA]/10 text-[#1D95CA] flex items-center justify-center font-bold text-sm mb-4">
                02
              </div>
              <h3 className="text-base font-bold text-neutral-900 mb-2 leading-[1.2]">
                Check translations
              </h3>
              <p className="text-sm text-neutral-600 leading-[1.5]">
                Translate words and verify contextual word senses without switching back and forth to a separate translator app.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200/80">
              <div className="w-10 h-10 rounded-xl bg-[#1D95CA]/10 text-[#1D95CA] flex items-center justify-center font-bold text-sm mb-4">
                03
              </div>
              <h3 className="text-base font-bold text-neutral-900 mb-2 leading-[1.2]">
                Verb conjugation & forms
              </h3>
              <p className="text-sm text-neutral-600 leading-[1.5]">
                Get immediate help selecting correct grammatical tenses (infinitive, preterite, present, supine).
              </p>
            </div>
          </div>

          {/* Why the Guess Functionality */}
          <div
            id="why-guess"
            className="border-l-2 border-[#1D95CA] pl-6 my-8 py-2 bg-[#1D95CA]/5 rounded-r-2xl pr-6 scroll-mt-28"
          >
            <h3 className="text-lg font-bold text-neutral-950 mb-2 leading-[1.3]">
              Why the Guess Functionality?
            </h3>
            <p className="text-base sm:text-lg leading-[1.6] text-neutral-700 font-normal mb-3">
              <strong className="font-semibold text-neutral-900">Scribe gave users the right answer,</strong> but nothing encouraged them to{' '}
              <span className="text-[#1D95CA] font-semibold">engage with the language themselves</span>.
            </p>
            <p className="text-sm sm:text-base leading-[1.6] text-neutral-600">
              The guess functionality was introduced to address this gap. The intent was to encourage users to think and attempt an answer before receiving help, reinforcing learning through active recall while still preserving the convenience of in-keyboard assistance.
            </p>
          </div>

          {/* What is the Guess Functionality */}
          <div
            id="what-guess"
            className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200/80 scroll-mt-28"
          >
            <h3 className="text-base font-bold text-neutral-900 mb-2 leading-[1.2]">
              What is the Guess Functionality?
            </h3>
            <p className="text-sm sm:text-base text-neutral-700 leading-[1.6] mb-3">
              The guess functionality (when enabled) prompts users to <span className="text-[#1D95CA] font-semibold">make a guess before the correct answer is revealed</span>.
            </p>
            <p className="text-xs sm:text-sm text-neutral-500 leading-[1.5] bg-white p-3 rounded-xl border border-neutral-200/60">
              <strong>Optional by Design:</strong> The feature was designed to be optional, allowing users to turn it off if they preferred faster assistance or did not want the additional interaction.
            </p>
          </div>

        </section>


        {/* ========================================================
            SECTION 2: EXPLORING THE APPROACH
           ======================================================== */}
        <section id="approach" className="mb-20 sm:mb-24 scroll-mt-28">
          
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#1D95CA]">
              Design Strategy
            </span>
            <div className="h-px bg-neutral-200 flex-1"></div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-950 mb-6 leading-[1.15]">
            Exploring the approach:{' '}
            <span className="text-[#1D95CA]">Balancing friction vs. convenience</span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-700 leading-[1.6] font-normal mb-8">
            Once we knew we wanted a guess step, the open question was how much friction that step could add before it started working against the convenience Scribe is built on.
          </p>

          {/* Wireframe Comparison Image */}
          <div className="relative rounded-2xl overflow-hidden border border-neutral-200 bg-white shadow-sm mb-8">
            <img
              src="/assets/aistudio/ExploringTheApproach_a9f516b4.jpg"
              alt="How does the user enter a guess? Option 1: Multiple Choice vs Option 2: Free-Text Input"
              className="w-full h-auto object-cover"
              onError={(e) => {
                e.currentTarget.src = '/public/assets/aistudio/ExploringTheApproach_a9f516b4.jpg';
              }}
            />

            <div className="px-6 py-4 bg-neutral-50 border-t border-neutral-100 text-xs text-neutral-500 leading-[1.5]">
              <span className="font-medium text-neutral-700">Early Design Sketches: Free-Text Input vs. Multiple Choice Options</span>
            </div>
          </div>

          {/* 2 Critical Questions & Solutions */}
          <div className="space-y-6">
            
            {/* Question 1: How should the guess be entered? */}
            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200/80">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1D95CA] mb-2 block">
                Design Decision 01 · Input Method
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-neutral-950 mb-3 leading-[1.2]">
                Recognition vs. Active Retrieval: Why Typed Input Won
              </h3>
              <p className="text-neutral-700 text-sm sm:text-base leading-[1.6] mb-3">
                One of the first things I had to figure out was how the guess itself would be entered. I considered two directions: <strong className="font-semibold text-neutral-900">letting users select from a set of options</strong>, or <strong className="font-semibold text-neutral-900">having them type their answer freely</strong>.
              </p>
              <p className="text-neutral-700 text-sm sm:text-base leading-[1.6] mb-4">
                The difference mattered more than it might seem. Selecting from options relies on <span className="text-[#1D95CA] font-semibold">recognition</span>, where the correct answer just needs to look familiar, while typing requires actually <span className="text-[#1D95CA] font-semibold">producing the answer from memory</span>.
              </p>
              <div className="p-4 rounded-xl bg-white border border-neutral-200/70 text-xs sm:text-sm text-neutral-600 leading-[1.5]">
                Cognitive psychology research on the <span className="text-[#1D95CA] font-semibold">"testing effect"</span> shows that active retrieval leads to significantly stronger long-term retention than recognition-based recall. Since the whole point of the guess step was to reinforce learning, not just add an interaction, typed input was the clearer choice.
              </div>
            </div>

            {/* Question 2: How many attempts? */}
            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200/80">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1D95CA] mb-2 block">
                Design Decision 02 · Friction Threshold
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-neutral-950 mb-3 leading-[1.2]">
                How Many Attempts: Preserving Conversational Speed
              </h3>
              <p className="text-neutral-700 text-sm sm:text-base leading-[1.6] mb-3">
                The next question was how many attempts a user should get before the correct answer was revealed. I considered allowing multiple guesses, like a game, but that risked undermining the convenience Scribe is built around.
              </p>
              <p className="text-neutral-700 text-sm sm:text-base leading-[1.6]">
                Users are typing to communicate, not to solve a puzzle, and repeated attempts could turn a quick lookup into a longer, more effortful detour. The PM agreed, and we settled on a <span className="text-[#1D95CA] font-semibold">single guess</span>.
              </p>
            </div>

          </div>

        </section>


        {/* ========================================================
            SECTION 3: ITERATIONS, PROTOTYPE & TRADE-OFFS
           ======================================================== */}
        <section id="prototype" className="mb-20 sm:mb-24 scroll-mt-28">
          <div id="iterations" className="scroll-mt-28" />
          
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#1D95CA]">
              Prototyping & Iteration
            </span>
            <div className="h-px bg-neutral-200 flex-1"></div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-950 mb-6 leading-[1.15]">
            Refining the feedback loop & <span className="text-[#1D95CA]">navigating engineering constraints</span>
          </h2>

          {/* Part 1: Refining the Feedback Loop */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-7 h-7 rounded-lg bg-[#1D95CA]/10 text-[#1D95CA] flex items-center justify-center font-bold text-xs">
                01
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-neutral-950 leading-[1.2]">
                Refining The Feedback Loop
              </h3>
            </div>

            {/* Minimal bullet cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/70">
                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                  Iteration 1 · Interim Step
                </span>
                <p className="text-xs sm:text-sm text-neutral-700 leading-[1.5]">
                  Showed correct answer & emoji inside guess box. Removed after review to <span className="text-[#1D95CA] font-semibold">eliminate unnecessary friction</span>.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/70">
                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                  Iteration 2 · Direct Merge
                </span>
                <p className="text-xs sm:text-sm text-neutral-700 leading-[1.5]">
                  Pressing Enter inserts text directly with an emoji check on the <span className="text-[#1D95CA] font-semibold">grammatical gender pill</span>.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#1D95CA]/5 border border-[#1D95CA]/20">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#1D95CA] block mb-1">
                  Iteration 3 · Accessibility Fix
                </span>
                <p className="text-xs sm:text-sm text-neutral-700 leading-[1.5]">
                  Replaced OS emoji with a <span className="text-[#1D95CA] font-semibold">dedicated vector check</span> to ensure WCAG contrast across all gender colors.
                </p>
              </div>
            </div>

            {/* Frame 9 Image Showcase */}
            <div className="relative rounded-2xl overflow-hidden border border-neutral-200 bg-white shadow-sm">
              <img
                src="/assets/aistudio/Frame_9_2435069f.jpg"
                alt="Refining the feedback loop: Iteration 1 to 3 progression"
                className="w-full h-auto object-cover"
                onError={(e) => {
                  e.currentTarget.src = '/public/assets/aistudio/Frame_9_2435069f.jpg';
                }}
              />

              <div className="px-6 py-4 bg-neutral-50 border-t border-neutral-100 text-xs text-neutral-500 leading-[1.5]">
                <span className="font-medium text-neutral-700">Evolution of feedback loop across 3 iterations</span>
              </div>
            </div>
          </div>

          {/* Part 2: Feasibility VS. Usability */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-7 h-7 rounded-lg bg-[#1D95CA]/10 text-[#1D95CA] flex items-center justify-center font-bold text-xs">
                02
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-neutral-950 leading-[1.2]">
                Feasibility VS. Usability
              </h3>
            </div>

            {/* Minimal bullet cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/70">
                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                  Iteration 1 · Usability Ideal (Scroll)
                </span>
                <p className="text-xs sm:text-sm text-neutral-700 leading-[1.5]">
                  Vertical scrolling supported scanning lengthy Wikidata definitions, but required building a <span className="text-[#1D95CA] font-semibold">new gestural model</span>.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#1D95CA]/5 border border-[#1D95CA]/20">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#1D95CA] block mb-1">
                  Iteration 2 · Engineering Pragmatism (Side-Click)
                </span>
                <p className="text-xs sm:text-sm text-neutral-700 leading-[1.5]">
                  Reused existing <span className="text-[#1D95CA] font-semibold">side-click pagination</span> from the conjugation flow, minimizing dev cost under constraints.
                </p>
              </div>
            </div>

            {/* Frame 10 Image Showcase */}
            <div className="relative rounded-2xl overflow-hidden border border-neutral-200 bg-white shadow-sm">
              <img
                src="/assets/aistudio/Frame_10_a90cd6d5.jpg"
                alt="Feasibility vs. Usability: Scroll vs. Side-click pagination"
                className="w-full h-auto object-cover"
                onError={(e) => {
                  e.currentTarget.src = '/public/assets/aistudio/Frame_10_a90cd6d5.jpg';
                }}
              />

              <div className="px-6 py-4 bg-neutral-50 border-t border-neutral-100 text-xs text-neutral-500 leading-[1.5]">
                <span className="font-medium text-neutral-700">Engineering Trade-off: New interaction vs. Pattern reuse</span>
              </div>
            </div>
          </div>

        </section>


        {/* ========================================================
            SECTION 4: FINAL FLOWS
           ======================================================== */}
        <section id="flows" className="mb-20 sm:mb-24 scroll-mt-28">
          
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#1D95CA]">
              Deliverables & UI Specs
            </span>
            <div className="h-px bg-neutral-200 flex-1"></div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-950 mb-4 leading-[1.15]">
            Final Flow: <span className="text-[#1D95CA]">Three In-Keyboard Workflows</span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-700 leading-[1.6] font-normal mb-8">
            The final prototype seamlessly integrates the single-attempt guess step into Plural, Conjugation, and Translation queries without leaving the chat interface.
          </p>

          {/* Interactive Flow Switcher */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-neutral-100 rounded-xl mb-6">
            <button
              onClick={() => setActiveFlowTab('plural')}
              className={`min-h-[44px] px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer flex-1 text-center ${
                activeFlowTab === 'plural'
                  ? 'bg-white text-neutral-950 shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-950'
              }`}
            >
              1. Plural Guess Flow
            </button>
            <button
              onClick={() => setActiveFlowTab('conjugate')}
              className={`min-h-[44px] px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer flex-1 text-center ${
                activeFlowTab === 'conjugate'
                  ? 'bg-white text-neutral-950 shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-950'
              }`}
            >
              2. Conjugation Flow
            </button>
            <button
              onClick={() => setActiveFlowTab('translate')}
              className={`min-h-[44px] px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer flex-1 text-center ${
                activeFlowTab === 'translate'
                  ? 'bg-white text-neutral-950 shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-950'
              }`}
            >
              3. Translation Flow
            </button>
          </div>

          {/* Tab 1: Plural Flow */}
          {activeFlowTab === 'plural' && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <div className="relative rounded-2xl overflow-hidden border border-neutral-200 bg-white shadow-sm">
                <img
                  src="/assets/aistudio/PluralFinalPrototype_2a4924c6.jpg"
                  alt="Plural Final Prototype: 5-step UI sequence"
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.currentTarget.src = '/public/assets/aistudio/PluralFinalPrototype_2a4924c6.jpg';
                  }}
                />
              </div>

            </div>
          )}

          {/* Tab 2: Conjugation Flow */}
          {activeFlowTab === 'conjugate' && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <div className="relative rounded-2xl overflow-hidden border border-neutral-200 bg-white shadow-sm">
                <img
                  src="/assets/aistudio/ConjugateFinalPrototype_6b8dcf49.jpg"
                  alt="Conjugation Final Prototype: 7-step UI sequence"
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.currentTarget.src = '/public/assets/aistudio/ConjugateFinalPrototype_6b8dcf49.jpg';
                  }}
                />
              </div>

            </div>
          )}

          {/* Tab 3: Translation Flow */}
          {activeFlowTab === 'translate' && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <div className="relative rounded-2xl overflow-hidden border border-neutral-200 bg-white shadow-sm">
                <img
                  src="/assets/aistudio/TranslateFinalPrototype_bb49bb6f.jpg"
                  alt="Translation Final Prototype: 6-step UI sequence"
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.currentTarget.src = '/public/assets/aistudio/TranslateFinalPrototype_bb49bb6f.jpg';
                  }}
                />
              </div>

            </div>
          )}

        </section>


        {/* ========================================================
            SECTION 5: REFLECTION
           ======================================================== */}
        <section id="reflection" className="mb-20 sm:mb-24 scroll-mt-28">
          
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#1D95CA]">
              WRAP-UP
            </span>
            <div className="h-px bg-neutral-200 flex-1"></div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-950 mb-8 leading-[1.15]">
            Reflection
          </h2>

          <div className="space-y-6">
            
            {/* What this became */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-neutral-200/90 shadow-xs relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#1D95CA]"></div>
              <h3 className="text-base sm:text-lg font-bold text-neutral-950 mb-2.5 leading-[1.2]">
                What this became
              </h3>
              <div className="space-y-3 text-neutral-700 font-normal text-base sm:text-lg leading-[1.6]">
                <p>
                  I designed and integrated an optional guess step into Scribe’s keyboard flow. It uses typed recall instead of selection, allows a single attempt, and gives accessible feedback.
                </p>
                <p>
                  The design was handed off ready for development before priorities shifted.
                </p>
              </div>
            </div>

            {/* Next steps */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-neutral-200/90 shadow-xs relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#1D95CA]"></div>
              <h3 className="text-base sm:text-lg font-bold text-neutral-950 mb-2.5 leading-[1.2]">
                Next steps
              </h3>
              <div className="space-y-3 text-neutral-700 font-normal text-base sm:text-lg leading-[1.6]">
                <p>
                  I’d start with a short A/B test comparing guess on versus off, measuring how well learners recall the same words a week later.
                </p>
                <p>
                  Alongside that, I’d track how often users switch the feature off, since that is the clearest signal of whether the extra step feels like friction.
                </p>
              </div>
            </div>

            {/* Takeaway */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-neutral-200/90 shadow-xs relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#1D95CA]"></div>
              <h3 className="text-base sm:text-lg font-bold text-neutral-950 mb-2.5 leading-[1.2]">
                Takeaway
              </h3>
              <p className="text-neutral-700 font-normal text-base sm:text-lg leading-[1.6]">
                If I were to do this again, I'd want to bring in user testing much earlier, even informal feedback on paper sketches like the pop-up concept, rather than relying only on internal feedback from the PM and engineering constraints.
              </p>
            </div>

          </div>

        </section>


        {/* ========================================================
            BOTTOM NAVIGATION / NEXT PROJECT
           ======================================================== */}
        <div className="pt-12 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <button
            onClick={onBack}
            className="min-h-[48px] inline-flex items-center gap-2 text-sm font-semibold text-neutral-700 hover:text-neutral-950 transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Selected Work</span>
          </button>

          {nextStudy && (
            <button
              onClick={() => onNavigateToStudy(nextStudy)}
              className="min-h-[48px] inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-neutral-950 text-white text-sm font-semibold hover:bg-neutral-800 transition-all cursor-pointer shadow-sm group"
            >
              <span>Next Project: {nextStudy.client}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          )}
        </div>

      </main>

    </div>
  );
};
