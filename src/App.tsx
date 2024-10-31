import './App.css';
// import Logo from './components/atoms/ImagenDeFondo/ImagenDeFondo';
import Suspense from './components/atoms/TituloSuspense/Suspense';
import { OpcionMenu } from './components/atoms/OpcionMenu';
import { NavBar } from './components/organisms/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <h1>APrendiendo</h1>
        <Suspense />
        {/* <Logo nombre = {Logo}/> */}
        <OpcionMenu/>
      </header>
    </div>
  );
}

export default App;
