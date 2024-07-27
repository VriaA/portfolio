import Header from "./components/Header"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import AppContextProvider from "./contexts/AppContext"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="relative w-full overflow-hidden bg-black px-5 md:px-20">
      <div className="absolute inset-0 mx-auto z-[1] left-[-1px] top-[-1px] min-w-[1440px] h-full site-bg"></div>
      <AppContextProvider>
        <Header />
        <main className="flex flex-col gap-20">
          <Hero />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </AppContextProvider>
    </div>
  )
}

export default App
