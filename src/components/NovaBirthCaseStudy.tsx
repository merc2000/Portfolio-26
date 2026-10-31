import React from 'react';
import { 
  ArrowLeft, 
  ArrowRight
} from 'lucide-react';
import { CaseStudy } from '../types';
import regeneratedLoFiCritique from '../assets/images/regenerated_image_1792957129321.png';
import regeneratedManualEntryWireframe from '../assets/images/regenerated_image_1792957220332.png';

interface NovaBirthCaseStudyProps {
  study: CaseStudy;
  allStudies: CaseStudy[];
  onBack: () => void;
  onNavigateToStudy: (study: CaseStudy) => void;
}

export const NovaBirthCaseStudy: React.FC<NovaBirthCaseStudyProps> = ({
  study,
  allStudies,
  onBack,
  onNavigateToStudy,
}) => {
  const nextStudy = allStudies.find(s => s.id !== study.id && !s.isComingSoon);

  return (
    <div className="min-h-screen bg-[#FCFCFD] text-neutral-900 selection:bg-[#F19AB0]/30 selection:text-neutral-900 overflow-x-clip">
      
      {/* Main Editorial Case Study Container */}
      <main className="max-w-4xl mx-auto px-6 sm:px-8 pt-8 sm:pt-12 pb-28">

        {/* ========================================================
            HERO & METADATA SECTION
           ======================================================== */}
        <section id="intro" className="mb-20 sm:mb-24 scroll-mt-28">
          
          {/* Primary Editorial Title: tight heading line height <= 1.2 */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-950 leading-[1.15] mb-6 text-balance">
            Designing an AI ultrasound tool to minimize{' '}
            <span className="relative inline-block text-neutral-950">
              invasive checks
              <span className="absolute bottom-1 left-0 w-full h-[4px] bg-[#F19AB0] -z-10 rounded-full opacity-80"></span>
            </span>{' '}
            in labor
          </h1>

          {/* Subtitle / Executive Summary: optimal 1.6 body line height */}
          <p className="text-lg sm:text-xl text-neutral-700 font-normal leading-[1.6] mb-8 max-w-3xl">
            NovaBirth is building an AI-assisted ultrasound tool that gives clinicians{' '}
            <span className="text-[#F19AB0] font-semibold">real-time measurements</span> of cervical dilation and{' '}
            <span className="text-[#F19AB0] font-semibold">fetal head position</span> during labour.
          </p>

          {/* Hero Cover Image */}
          <div id="novabirth-cover-container" className="relative mb-8">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100 shadow-sm">
              <img
                src="/assets/aistudio/NBCoverImage_3f14ee8d.jpg"
                alt="NovaBirth AI Ultrasound Mobile App Cover Showcase"
                className="w-full h-auto object-cover"
                onError={(e) => {
                  e.currentTarget.src = '/public/assets/aistudio/NBCoverImage_3f14ee8d.jpg';
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
                1 month, concept stage
              </p>
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                Team
              </div>
              <div className="space-y-1">
                <p className="text-base sm:text-lg text-neutral-900 font-medium leading-relaxed">
                  Solo UI/UX designer (me)
                </p>
                <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed">
                  No access to clinicians, so research drew on secondary sources
                </p>
              </div>
            </div>
          </div>

        </section>


        {/* ========================================================
            SECTION 1: THE PROBLEM
           ======================================================== */}
        <section id="problem" className="mb-20 sm:mb-24 scroll-mt-28">
          
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#F19AB0]">
              The Problem
            </span>
            <div className="h-px bg-neutral-200 flex-1"></div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-950 mb-6 leading-[1.15]">
            Manual vaginal exams during labour are{' '}
            <span className="text-[#F19AB0]">subjective, invasive, and uncomfortable</span>
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-neutral-700 leading-[1.6] font-normal mb-8">
            <p>
              Currently, intrapartum assessment relies on a <strong className="font-semibold text-neutral-900">finger-based vaginal exam</strong>.
            </p>
            <p>
              A clinician manually feels the cervix with gloved fingers and estimates cervical dilation against a trained, subjective mental scale.
            </p>
          </div>

          {/* NovaBirth's Objective Callout */}
          <div className="border-l-2 border-neutral-300 pl-6 my-8 py-2">
            <p className="text-base sm:text-lg leading-[1.6] text-neutral-600 font-normal">
              <strong className="font-semibold text-neutral-700 not-italic">NovaBirth's Objective:</strong>{' '}
              <span className="italic text-neutral-500">
                Rather than attempting to replace this exam entirely, NovaBirth aims to reduce its required frequency by supplementing clinical judgment with non-invasive, objective ultrasound measurements.
              </span>
            </p>
          </div>

          {/* Infographic Frame 10: Measuring Cervical Dilation */}
          <div className="relative rounded-2xl overflow-hidden border border-neutral-200 bg-white shadow-sm mb-8">
            <img
              src="/assets/aistudio/Frame_10_6c855983.jpg"
              alt="Measuring Cervical Dilation Comparison Graphic: Before NovaBirth vs With NovaBirth"
              className="w-full h-auto object-cover"
              onError={(e) => {
                e.currentTarget.src = '/public/assets/aistudio/Frame_10_6c855983.jpg';
              }}
            />
            <div className="px-6 py-4 bg-neutral-50 border-t border-neutral-100 text-xs text-neutral-500 leading-[1.5]">
              <span className="font-medium text-neutral-700">Manual exam vs. measuring using non-invasive probe</span>
            </div>
          </div>

        </section>


        {/* ========================================================
            SECTION 2: DESIGNING WITHOUT CLINICIANS
           ======================================================== */}
        <section id="research" className="mb-20 sm:mb-24 scroll-mt-28">
          
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#F19AB0]">
              Designing Without Clinicians
            </span>
            <div className="h-px bg-neutral-200 flex-1"></div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-950 mb-8 leading-[1.15]">
            I couldn't observe a labour ward or interview a midwife, so I treated the research as{' '}
            <span className="text-[#F19AB0]">a set of questions to answer from secondary sources</span>
          </h2>

          {/* Sticky Notes Canvas Image */}
          <div className="relative rounded-2xl overflow-hidden border border-neutral-200 bg-white shadow-sm mb-8">
            <img
              src="/assets/aistudio/Frame_2_f5c6b4ed.jpg"
              alt="Secondary Research Synthesis Sticky Notes Canvas"
              className="w-full h-auto object-cover"
              onError={(e) => {
                e.currentTarget.src = '/public/assets/aistudio/Frame_2_f5c6b4ed.jpg';
              }}
            />
            <div className="px-6 py-4 bg-neutral-50 border-t border-neutral-100 text-xs text-neutral-500 leading-[1.5]">
              <span className="font-medium text-neutral-700">Questions grouped by theme</span>
            </div>
          </div>

          {/* 4 Research Questions Detail Grid: 24px internal card padding and gap */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 hover:border-[#F19AB0]/50 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono font-bold text-[#F19AB0]">Q1</span>
                <h4 className="text-sm font-bold text-neutral-900 leading-[1.2]">How is cervical dilation measured today?</h4>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 leading-[1.6] font-normal">
                Digital vaginal examination (DVE) tracks dilation from 0 to 10 cm and head descent. It is highly invasive, carries infection risks, and has high inter-examiner variation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 hover:border-[#F19AB0]/50 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono font-bold text-[#F19AB0]">Q2</span>
                <h4 className="text-sm font-bold text-neutral-900 leading-[1.2]">What can hardware and AI actually do?</h4>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 leading-[1.6] font-normal">
                Transperineal ultrasound probes (e.g., Philips Lumify) capture the sagittal pelvic view. Machine learning algorithms can automatically detect the internal os and fetal occiput.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 hover:border-[#F19AB0]/50 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono font-bold text-[#F19AB0]">Q3</span>
                <h4 className="text-sm font-bold text-neutral-900 leading-[1.2]">How does this product earn clinician trust?</h4>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 leading-[1.6] font-normal">
                While I cannnot answer this without directly speaking to clinicians, I am hoping UI descisions like overlaing measurements directly on the live scan frame could help.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 hover:border-[#F19AB0]/50 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono font-bold text-[#F19AB0]">Q4</span>
                <h4 className="text-sm font-bold text-neutral-900 leading-[1.2]">What is already established?</h4>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 leading-[1.6] font-normal">
                The WHO Partograph and labor curve plotting. I did not invent an unfamiliar chart instead I mapped readings straight to the partograph curves clinicians already use.
              </p>
            </div>
          </div>

        </section>


        {/* ========================================================
            SECTION 3: TASK FLOW & INFORMATION ARCHITECTURE
           ======================================================== */}
        <section id="flow" className="mb-20 sm:mb-24 scroll-mt-28">
          
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#F19AB0]">
              Task Flow & Information Architecture
            </span>
            <div className="h-px bg-neutral-200 flex-1"></div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-950 mb-8 leading-[1.15]">
            This research directly shaped my <span className="text-[#F19AB0]">task flow</span>
          </h2>

          {/* High-Level Task Flow Diagram */}
          <div className="relative rounded-2xl overflow-hidden border border-neutral-200 bg-white shadow-sm mb-12">
            <img
              src="/assets/aistudio/TaskFlow_square.png"
              alt="NovaBirth Clinical Task Flow: Capture, Hand-off, Analyze & Measure, Deliver"
              className="w-full h-auto object-contain"
              onError={(e) => {
                e.currentTarget.src = '/public/assets/aistudio/TaskFlow_square.png';
              }}
            />
            <div className="px-6 py-4 bg-neutral-50 border-t border-neutral-100 text-xs text-neutral-500 leading-[1.5]">
              <span className="font-medium text-neutral-700">Task flow</span>
            </div>
          </div>

          {/* Detailed Information Architecture Diagram */}
          <div className="relative rounded-2xl overflow-hidden border border-neutral-200 bg-white shadow-sm mb-8">
            <img
              src="/assets/aistudio/NovaBirth_UserFlow_53cd98ee.jpg"
              alt="NovaBirth Task Flow and Information Architecture Diagram"
              className="w-full h-auto object-cover"
              onError={(e) => {
                e.currentTarget.src = '/public/assets/aistudio/NovaBirth_UserFlow_53cd98ee.jpg';
              }}
            />
            <div className="px-6 py-4 bg-neutral-50 border-t border-neutral-100 text-xs text-neutral-500 leading-[1.5]">
              <span className="font-medium text-neutral-700">Information Architecture</span>
            </div>
          </div>

        </section>


        {/* ========================================================
            SECTION 4: LOW-FIDELITY WIREFRAME & ITERATIONS
           ======================================================== */}
        <section id="lo-fi" className="mb-20 sm:mb-24 scroll-mt-28">
          
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#F19AB0]">
              Low-Fidelity Wireframe & Iterations
            </span>
            <div className="h-px bg-neutral-200 flex-1"></div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-950 mb-6 leading-[1.15]">
            I designed the lo-fi wireframe, then{' '}
            <span className="text-[#F19AB0]">reviewed it critically</span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-700 leading-[1.6] font-normal mb-8">
            I found <strong className="font-semibold text-neutral-900">two issues</strong>, highlighted in the image below:
          </p>

          {/* Wireframe Critique Image (Frame 8) */}
          <div className="relative rounded-2xl overflow-hidden border border-neutral-200 bg-white shadow-sm mb-12">
            <img
              src={regeneratedLoFiCritique}
              alt="Low-Fidelity Wireframe Critique showing Issue 1 and Issue 2"
              className="w-full h-auto object-cover"
              onError={(e) => {
                e.currentTarget.src = '/public/assets/aistudio/Frame_8_33a993d1.jpg';
              }}
            />
            <div className="px-6 py-4 bg-neutral-50 border-t border-neutral-100 text-xs text-neutral-500 leading-[1.5]">
              <span className="font-medium text-neutral-700">Low-Fidelity Wireframe</span>
            </div>
          </div>

          {/* Iteration 1: Global Scan Button */}
          <div className="mb-12">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950 mb-3 leading-[1.2]">
              Solving Issue 1: Floating Global Scan Button
            </h3>
            <p className="text-base text-neutral-700 leading-[1.6] font-normal mb-4">
              I moved Scan to a <span className="text-[#F19AB0] font-semibold">persistent, globally accessible button</span> and updated the Information Architecture to reflect it. Getting the placement right took a few iterations:
            </p>
            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200/80 text-sm text-neutral-700 mb-6 space-y-3 leading-[1.6]">
              <p>
                • An early version overlapped its own label with the tab bar underneath it.
              </p>
              <p>
                • A later version collided with the scrollable content behind it.
              </p>
              <p className="font-semibold text-neutral-950">
                • <span className="text-[#F19AB0] font-bold">Solution:</span> I settled on a floating button placed outside the tab bar entirely.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-neutral-200 bg-white shadow-sm mb-8">
              <img
                src="/assets/aistudio/Frame_9_fd312d30.jpg"
                alt="Iterations of the Scan button placement on tab bar"
                className="w-full h-auto object-cover"
                onError={(e) => {
                  e.currentTarget.src = '/public/assets/aistudio/Frame_9_fd312d30.jpg';
                }}
              />
              <div className="px-6 py-4 bg-neutral-50 border-t border-neutral-100 text-xs text-neutral-500 leading-[1.5]">
                <span className="font-medium text-neutral-700">Exploring floating button positioning</span>
              </div>
            </div>
          </div>

          {/* Iteration 2: Added Option for Manual Entry */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950 mb-3 leading-[1.2]">
              Solving Issue 2: Added an Option for Manual Entry
            </h3>
            <p className="text-base text-neutral-700 leading-[1.6] font-normal mb-6">
              To support bedside reality when ultrasound imaging is hindered by fetal position or hardware charging, I introduced a seamless <span className="text-[#F19AB0] font-semibold">+ Log Manual Reading</span> action allowing clinicians to log manual finger exam dilation (0–10 cm), timestamp, and observational notes.
            </p>

            <div className="relative rounded-2xl overflow-hidden border border-neutral-200 bg-white shadow-sm mb-8">
              <img
                src={regeneratedManualEntryWireframe}
                alt="Wireframe for Dilation History and Log Manual Reading Modal"
                className="w-full h-auto object-cover"
                onError={(e) => {
                  e.currentTarget.src = '/public/assets/aistudio/Frame_3_8f8e90e8.jpg';
                }}
              />
              <div className="px-6 py-4 bg-neutral-50 border-t border-neutral-100 text-xs text-neutral-500 leading-[1.5]">
                <span className="font-medium text-neutral-700">Lo-Fi wireframe for manual entry</span>
              </div>
            </div>
          </div>

        </section>


        {/* ========================================================
            SECTION 5: HIGH-FIDELITY PROTOTYPE
           ======================================================== */}
        <section id="hi-fi" className="mb-20 sm:mb-24 scroll-mt-28">
          
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#F19AB0]">
              High-Fidelity Prototype
            </span>
            <div className="h-px bg-neutral-200 flex-1"></div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-950 mb-8 leading-[1.15]">
            I designed within NovaBirth's existing brand colors throughout the app, as per direction from the team
          </h2>

          {/* High Fidelity Full Flow Image (Frame 5) */}
          <div className="relative rounded-2xl overflow-hidden border border-neutral-200 bg-white shadow-sm mb-8">
            <img
              src="/assets/aistudio/Frame_5_341020aa.jpg"
              alt="NovaBirth High Fidelity Mobile Prototype Screens"
              className="w-full h-auto object-cover"
              onError={(e) => {
                e.currentTarget.src = '/public/assets/aistudio/Frame_5_341020aa.jpg';
              }}
            />
            <div className="px-6 py-4 bg-neutral-50 border-t border-neutral-100 text-xs text-neutral-500 leading-[1.5]">
              <span className="font-medium text-neutral-700">High-fidelity screen flow</span>
            </div>
          </div>

        </section>


        {/* ========================================================
            SECTION 6: REFLECTION
           ======================================================== */}
        <section id="reflection" className="mb-20 sm:mb-24 scroll-mt-28">
          
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#F19AB0]">
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
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#F19AB0]"></div>
              <h3 className="text-base sm:text-lg font-bold text-neutral-950 mb-2.5 leading-[1.2]">
                What this became
              </h3>
              <p className="text-neutral-700 font-normal text-base sm:text-lg leading-[1.6]">
                The prototype gives stakeholders a clear picture of how NovaBirth’s scan could fit into a labour ward workflow.
              </p>
            </div>

            {/* Next steps */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-neutral-200/90 shadow-xs relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#F19AB0]"></div>
              <h3 className="text-base sm:text-lg font-bold text-neutral-950 mb-2.5 leading-[1.2]">
                Next steps
              </h3>
              <div className="space-y-3 text-neutral-700 font-normal text-base sm:text-lg leading-[1.6]">
                <p>
                  The thing I most want to do next is sit down with midwives and watch them use the scan flow. I’d pay attention to where they pause or look unsure.
                </p>
                <p>
                  I’d also want to see how the app holds up in a real ward under pressure, with people constantly interrupting.
                </p>
              </div>
            </div>

            {/* Takeaway */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-neutral-200/90 shadow-xs relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#F19AB0]"></div>
              <h3 className="text-base sm:text-lg font-bold text-neutral-950 mb-2.5 leading-[1.2]">
                Takeaway
              </h3>
              <p className="text-neutral-700 font-normal text-base sm:text-lg leading-[1.6]">
                Without clinicians to lean on, I got used to asking myself “what is this decision actually based on?” It’s a habit I’d keep on any project, because a polished prototype can easily look more certain than it is.
              </p>
            </div>

          </div>

        </section>


        {/* ========================================================
            CASE STUDY FOOTER & NEXT PROJECT
           ======================================================== */}
        <div className="pt-20 sm:pt-24 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <button
            onClick={onBack}
            className="min-h-[48px] inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-neutral-800 hover:text-neutral-500 transition-colors cursor-pointer group"
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
