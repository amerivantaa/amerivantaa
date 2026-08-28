import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import USFocus from './components/USFocus'
import About from './components/About'
import Services from './components/Services'
import Platforms from './components/Platforms'
import TechStack from './components/TechStack'
import Industries from './components/Industries'
import Process from './components/Process'
import WhyUs from './components/WhyUs'
import EnterpriseReady from './components/EnterpriseReady'
import CTASection from './components/CTASection'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <USFocus />
        <About />
        <Services />
        <Platforms />
        <TechStack />
        <Industries />
        <Process />
        <WhyUs />
        <EnterpriseReady />
        <CTASection />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
