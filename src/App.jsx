// import './App.css'
//import NavBar from './components/organisms/NavBar'

import PruebaDark from "./components/PruebaDark"
import { ThemeProvider } from "./context/ThemeContext";
import ThemeSwitch from "./components/atoms/ThemeSwitch/ThemeSwitch.jsx"

function App() {
  
  return (
    <>
      <ThemeProvider>
        <ThemeSwitch />
        <PruebaDark />
      </ThemeProvider>
    </>
  )
}

export default App;
