import { useTitle } from '../components/ui'
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
  useTitle('')
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
