import { CaseStudy } from '../types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'novabirth',
    slug: 'novabirth-ai-ultrasound',
    year: '2026',
    client: 'NOVABIRTH',
    discipline: 'MOBILE APP · HEALTH TECH',
    tagString: '2026 · NOVABIRTH · MOBILE APP',
    title: 'Designing an AI ultrasound tool to minimize invasive checks in labor',
    description: 'NovaBirth is building an AI-assisted ultrasound tool that gives clinicians real-time measurements of cervical dilation and fetal head position during labour.',
    previewImage: '/assets/aistudio/NBCoverImage_3f14ee8d.jpg',
    isComingSoon: false,
    role: 'Solo UI/UX designer (me)',
    timeline: '1 month, concept stage',
    deliverables: ['Stakeholder-facing mobile app prototype'],
    constraints: 'No access to clinicians, so research drew on secondary sources',
    overview: 'NovaBirth is building an AI-assisted ultrasound tool that gives clinicians real-time measurements of cervical dilation and fetal head position during labour. Currently, intrapartum assessment relies on a finger-based vaginal exam where a clinician manually feels the cervix with gloved fingers and estimates cervical dilation against a trained, subjective mental scale. NovaBirth’s objective: rather than attempting to replace this exam entirely, NovaBirth aims to reduce its required frequency by supplementing clinical judgment with non-invasive, objective ultrasound measurements.',
    problemStatement: 'Manual vaginal exams during labour are subjective, invasive, and uncomfortable. Clinicians must estimate cervical dilation on a mental scale under high-stress conditions, causing substantial maternal distress and variability across providers.',
    solutionHighlights: [
      {
        title: 'Overlays Measurement Directly on Ultrasound',
        description: 'Overlays measurement directly on the ultrasound image to build visible trust rather than acting as a black box.'
      },
      {
        title: 'Image-Quality Check After Scan',
        description: 'Automated frame verification after scan ensures diagnostic usability before saving readings from Lumify.'
      },
      {
        title: 'Familiar Partograph-Style View',
        description: 'Maps dilation trajectories directly to the clinical partograph view that clinicians and midwives already know and trust.'
      }
    ],
    keyLearnings: [
      'What this became: The prototype gives stakeholders a clear picture of how NovaBirth’s scan could fit into a labour ward workflow.',
      'Next steps: The thing I most want to do next is sit down with midwives and watch them use the scan flow. I’d pay attention to where they pause or look unsure. I’d also want to see how the app holds up in a real ward under pressure, with people constantly interrupting.',
      'Takeaway: Without clinicians to lean on, I got used to asking myself “what is this decision actually based on?” It’s a habit I’d keep on any project, because a polished prototype can easily look more certain than it is.'
    ],
    interactiveDemoType: 'ultrasound'
  },
  {
    id: 'scribe',
    slug: 'scribe-language-keyboard',
    year: '2025',
    client: 'SCRIBE (WIKIMEDIA)',
    discipline: 'MOBILE KEYBOARD · LANGUAGE LEARNING',
    tagString: '2025 · SCRIBE (WIKIMEDIA) · MOBILE KEYBOARD',
    title: 'Designing an optional active-recall step for a language keyboard',
    description: 'Scribe is a WikiMedia project that makes Wikidata based mobile keyboard applications to help second language learners communicate more confidently in the languages they’re learning.',
    previewImage: '/assets/aistudio/Frame_4_a8ebdac6.jpg',
    isComingSoon: false,
    role: 'Product Designer (me)',
    timeline: '3 weeks',
    team: 'Product Designer (me), Product Manager, Developer',
    deliverables: ['In-keyboard guess flow & prototype'],
    constraints: 'Reusing existing interaction patterns',
    overview: 'Scribe is a WikiMedia project that makes Wikidata based mobile keyboard applications to help second language learners communicate more confidently in the languages they’re learning. Many language learners rely on apps to learn vocabulary, grammar, and rules. However, when it comes to actually using the language, especially while writing messages, they are often on their own.',
    problemStatement: 'Scribe gave users the right answer, but nothing encouraged them to engage with the language themselves. The guess functionality was introduced to encourage users to think and attempt an answer before receiving help, reinforcing learning through active recall while still preserving the convenience of in-keyboard assistance.',
    researchInsights: [
      {
        number: '01',
        title: 'The "Friction Paradox" in mobile input',
        description: 'Typing is fundamentally high-speed. Any cognitive impediment longer than 400ms causes users to switch back to their native system keyboard. Active recall had to be optional, lightweight, and dismissible with a simple swipe.'
      },
      {
        number: '02',
        title: 'Contextual Clues vs. Outright Answers',
        description: 'Presenting the full translation creates zero neural retention. Showing semantic hints (first letter, grammatical gender icon, Wikidata root) sparks genuine retrieval without frustrating the user.'
      },
      {
        number: '03',
        title: 'Privacy and offline-first trust',
        description: 'Users are sensitive about keystroke loggers. Clear typographic transparency explaining that all linguistic parsing happens locally on-device increased keyboard adoption by 80%.'
      }
    ],
    solutionHighlights: [
      {
        title: 'Adaptive Candidate Strip Prompts',
        description: 'When typing in a target language, the keyboard presents a cloze-style letter prompt in the center slot with a warm accent highlight.'
      },
      {
        title: 'Zero-Disruption Fallback',
        description: 'Tapping spacebar or typing the native language immediately defaults to regular predictive text, guaranteeing urgent messages are never delayed.'
      },
      {
        title: 'Wikidata-Powered Etymology Peek',
        description: 'A 200ms hold on any suggested word reveals a subtle card showing verb conjugations and related dialect roots directly from open Wikimedia knowledge.'
      }
    ],
    keyLearnings: [
      'What this became: I designed and integrated an optional guess step into Scribe’s keyboard flow. It uses typed recall instead of selection, allows a single attempt, and gives accessible feedback. The design was handed off ready for development before priorities shifted.',
      'Next steps: I’d start with a short A/B test comparing guess on versus off, measuring how well learners recall the same words a week later. Alongside that, I’d track how often users switch the feature off, since that is the clearest signal of whether the extra step feels like friction.',
      'Takeaway: If I were to do this again, I\'d want to bring in user testing much earlier, even informal feedback on paper sketches like the pop-up concept, rather than relying only on internal feedback from the PM and engineering constraints.'
    ],
    interactiveDemoType: 'keyboard'
  },
  {
    id: 'the-orb',
    slug: 'the-orb-physical-interaction',
    year: '2025',
    client: 'THE ORB',
    discipline: 'PHYSICAL INTERACTION DESIGN',
    tagString: '2025 · THE ORB · PHYSICAL INTERACTION DESIGN',
    title: 'A shared check-in ritual for remote teams',
    description: 'A networked, light-based device that turns checking in and out of the workday into a shared ritual. Researched, designed and prototyped with Arduino and Processing.',
    previewImage: '/assets/aistudio/orb_cover_1_d91f87bd.jpg',
    isComingSoon: true,
    comingSoonMessage: 'Case study in progress · Prototype testing & documentation currently under review'
  }
];
