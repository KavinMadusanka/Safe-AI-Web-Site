import './App.css'

import Homepage from './pages/Home'
import Header from './pages/Header'
import Domain from './pages/Domain'
import Milestones from './pages/Milestones'
import AboutUs from './pages/AboutUs'
import Documents from './pages/Documents'
import Contact from './pages/ContactUs'
import Presentations from './pages/SlidesOfPastPresentations'

function App() {

  return (
    <div>
      <Header />
      <Homepage />
      <Domain />
      <Milestones />
      <Documents />
      <Presentations />
      <AboutUs />
      <Contact />
    </div>
  )
}

export default App
