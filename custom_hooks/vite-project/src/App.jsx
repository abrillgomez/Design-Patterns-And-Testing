import "./App.css"
import Navbar from "./components/Navbar/Navbar"
import { Panel } from "./components/Panel/Panel"
import { ThemeProvider } from "./context/ThemeContext"

function App() {
  return (
    <ThemeProvider value={[]}>
      <Navbar />
      <Panel />
    </ThemeProvider>
  )
}

export default App
