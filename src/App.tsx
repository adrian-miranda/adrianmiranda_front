import './App.css';
// import Logo from './components/atoms/ImagenDeFondo/ImagenDeFondo';
import Suspense from './components/atoms/TituloSuspense/Suspense';
// import { OpcionMenu } from './components/atoms/OpcionMenu';
import { NavBar } from './components/organisms/NavBar';
// import { PersonasProvider } from './context/PersonaContext';
// import { OpcionMenu } from './components/atoms/OpcionMenu';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Suspense />
        {/* <Logo nombre = {Logo}/> */}
        {/* <PersonasProvider>
          <OpcionMenu/>
        </PersonasProvider> */}
      </header>
    </div>
  );
}

export default App;
