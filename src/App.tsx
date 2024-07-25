import Header from "./components/Header"
import Hero from "./components/Hero"
function App() {

  return (
    <div className="relative w-screen min-h-screen overflow-hidden bg-black">
      <div className="absolute inset-0 mx-auto z-[1] left-0 top-0 min-w-[1440px] h-full site-bg"></div>
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  )
}

export default App
