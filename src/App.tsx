import Header from "./components/Header"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import AppContextProvider from "./contexts/AppContext"
import Projects from "./components/Projects"

function App() {

  return (
    <div className="relative w-full overflow-hidden bg-black px-5 md:px-20">
      <div className="absolute inset-0 mx-auto z-[1] left-0 top-0 min-w-[1440px] h-full site-bg"></div>
      <AppContextProvider>
        <Header />
        <main>
          <Hero />
          <Skills />
          <Projects />
        </main>
      </AppContextProvider>
    </div>
  )
}

export default App
