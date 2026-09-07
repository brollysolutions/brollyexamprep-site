import { canonicalFor, useSeo } from '../components/ui'
import Hero from './home/Hero'
import {
  Analytics,
  ArticlesSection,
  CoursesSection,
  CurrentAffairsSection,
  ExamCategories,
  ExamUpdatesSection,
  FaqSection,
  FinalCta,
  FreeMockTests,
  HowItWorks,
  PreparationGuide,
  PrepTabs,
  PreviousPapers,
  QuickAccess,
  StudyMaterialSection,
  DemoSection,
  WhyBrolly,
} from './home/sections'

export default function Home() {
  useSeo({
    title: 'Competitive Exam Preparation Online | Brolly Exam Prep',
    description:
      'Prepare online for SSC, Banking, Railway, UPSC, Defence, Teaching and State exams with syllabus guides, mock tests, previous papers and study material.',
    canonical: canonicalFor('/'),
  })

  return (
    <>
      <Hero />
      <QuickAccess />
      <ExamCategories />
      <FreeMockTests />
      <PreparationGuide />
      <WhyBrolly />
      <HowItWorks />
      <PrepTabs />
      <PreviousPapers />
      <StudyMaterialSection />
      <CurrentAffairsSection />
      <Analytics />
      <CoursesSection />
      <ExamUpdatesSection />
      <ArticlesSection />
      <FaqSection />
      <DemoSection />
      <FinalCta />
    </>
  )
}
