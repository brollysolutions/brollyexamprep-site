import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'

import Home from './pages/Home'
import GovernmentExams from './pages/GovernmentExams'
import StateExams from './pages/StateExams'
import EntranceExams from './pages/EntranceExams'
import StudyMaterial from './pages/StudyMaterial'
import StudyTopic from './pages/StudyTopic'
import StudySubject from './pages/StudySubject'
import Practice from './pages/Practice'
import CurrentAffairs from './pages/CurrentAffairs'
import ExamUpdates from './pages/ExamUpdates'
import MockTests from './pages/MockTests'
import { MockTestRoute } from './pages/MockTest'
import PreviousYearPapers from './pages/PreviousYearPapers'
import Courses from './pages/Courses'
import ExamDetail from './pages/ExamDetail'
import TelanganaPolice from './pages/TelanganaPolice'
import Directory from './pages/Directory'
import Search from './pages/Search'
import { Blog, BlogPost } from './pages/Blog'
import { Login, Register } from './pages/Auth'
import {
  About,
  Careers,
  Contact,
  CorrectionsPolicy,
  EditorialPolicy,
  Faculty,
  Legal,
  NotFound,
  SuccessStories,
} from './pages/Static'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />

        {/* Section landing pages */}
        <Route path="/government-exams/" element={<GovernmentExams />} />
        <Route path="/entrance-exams/" element={<EntranceExams />} />
        <Route path="/study-material/" element={<StudyMaterial />} />
        {/* Subject hub, then written topic notes. A subject/topic with no
            file yet renders a "being written" page rather than a dead end. */}
        <Route path="/study-material/:subject/" element={<StudySubject />} />
        <Route path="/study-material/:subject/:topic/" element={<StudyTopic />} />
        <Route path="/practice/" element={<Practice />} />
        <Route path="/current-affairs/" element={<CurrentAffairs />} />
        <Route path="/exam-updates/" element={<ExamUpdates />} />

        {/* Resource hubs */}
        <Route path="/mock-tests/" element={<MockTests />} />
        <Route path="/mock-tests/free/" element={<MockTests />} />
        {/* One attemptable paper per slug; unknown slugs get a "not live yet" page. */}
        <Route path="/mock-tests/:slug/" element={<MockTestRoute />} />
        <Route path="/previous-year-papers/" element={<PreviousYearPapers />} />
        <Route path="/courses/" element={<Courses />} />

        {/* State government exams: one page per state, then its own exams.
            Exams with written copy get their own route ahead of the template. */}
        <Route path="/government-exams/state/:state/" element={<StateExams />} />
        <Route
          path="/government-exams/state/telangana/telangana-police/"
          element={<TelanganaPolice />}
        />
        <Route path="/government-exams/state/:state/:exam/" element={<ExamDetail />} />
        <Route path="/government-exams/state/:state/:exam/:resource/" element={<ExamDetail />} />

        {/* Individual exams and their six resource sub-pages */}
        <Route path="/government-exams/:category/:exam/" element={<ExamDetail />} />
        <Route path="/government-exams/:category/:exam/:resource/" element={<ExamDetail />} />
        <Route path="/entrance-exams/:category/:exam/" element={<ExamDetail />} />
        <Route path="/entrance-exams/:category/:exam/:resource/" element={<ExamDetail />} />

        {/* Blog */}
        <Route path="/blog/" element={<Blog />} />
        <Route path="/blog/:slug/" element={<BlogPost />} />

        {/* Account */}
        <Route path="/login/" element={<Login />} />
        <Route path="/register/" element={<Register />} />

        {/* Search */}
        <Route path="/search/" element={<Search />} />

        {/* Company */}
        <Route path="/about/" element={<About />} />
        <Route path="/contact/" element={<Contact />} />
        <Route path="/careers/" element={<Careers />} />
        <Route path="/success-stories/" element={<SuccessStories />} />
        <Route path="/faculty/" element={<Faculty />} />
        <Route path="/editorial-policy/" element={<EditorialPolicy />} />
        <Route path="/corrections-policy/" element={<CorrectionsPolicy />} />

        {/* Legal */}
        <Route path="/privacy-policy/" element={<Legal />} />
        <Route path="/terms-and-conditions/" element={<Legal />} />
        <Route path="/refund-policy/" element={<Legal />} />
        <Route path="/disclaimer/" element={<Legal />} />

        {/*
          Every remaining two-segment nav path (category listings, subject
          pages, update types) is assembled from the nav tree.
        */}
        <Route path="/:root/:category/" element={<Directory />} />
        <Route path="/:root/:category/:topic/" element={<Directory />} />
        <Route path="/government-jobs/" element={<Directory />} />
        <Route path="/exam-calendar/" element={<Directory />} />
        <Route path="/previous-year-questions/" element={<Directory />} />

        {/* React Router matches "/about" against path "/about/", so both
            spellings of every URL resolve to the same page. */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
