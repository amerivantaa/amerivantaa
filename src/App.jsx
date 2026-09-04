import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import USFocus from './components/USFocus'
import Offices from './components/Offices'
import About from './components/About'
import Services from './components/Services'
import Platforms from './components/Platforms'
import TechStack from './components/TechStack'
import Industries from './components/Industries'
import CaseStudies from './components/CaseStudies'
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
        <Offices />
        <About />
        <Services />
        <Platforms />
        <TechStack />
        <CTASection
          title="Built to plug into how your team already ships"
          subtitle="Vetted engineers who join your existing stack and workflow — not a separate process to manage."
          buttonLabel="Talk to us"
          dark={false}
        />
        <Industries />
        <CaseStudies />
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
