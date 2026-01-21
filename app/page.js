import Header from '../components/Header'
import CounterBar from '../components/CounterBar'
import MainContent from '../components/MainContent'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="mt-[35px] md:mt-5">
        <div className="flex flex-col justify-center">
          <CounterBar />
          <MainContent />
        </div>
        <Testimonials />
        <Footer />
      </main>
    </>
  )
}