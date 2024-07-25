import Header from "./components/Header"

function App() {

  return (
    <div className="relative w-screen min-h-screen overflow-hidden">
      <div className="absolute left-0 top-0 min-w-[1440px] h-full site-bg"></div>
      <Header />
    </div>
  )
}

export default App
