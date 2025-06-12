// import './App.css'
import NavBar from './components/organisms/NavBar'
import PruebaDark from "./components/PruebaDark"
import { ThemeProvider} from "./context/ThemeContext";

function App() {
  
  return (
    <>
      <ThemeProvider>
        <NavBar/>
        <PruebaDark />
      </ThemeProvider>
    </>
  )
}

export default App;
