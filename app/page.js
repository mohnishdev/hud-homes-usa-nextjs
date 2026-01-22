import Header from '../components/Layout/Header'
import CounterBar from '../components/Sections/CounterBar'
import MainContent from '../components/Layout/MainContent'
import Testimonials from '../components/Sections/Testimonials'
import Footer from '../components/Layout/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="mt-[35px] md:mt-5">
        <div className="flex flex-col items-center justify-center">
          <CounterBar />
          <MainContent />
        </div>
        <Testimonials />
        <Footer />
      </main>
    </>
  )
}