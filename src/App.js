import './App.css';
import Logo from './components/atoms/ImagenDeFondo/ImagenDeFondo';
import Suspense from './components/atoms/TituloSuspense/Suspense';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Suspense />
        <Logo nombre = {Logo}/>
      </header>
    </div>
  );
}

export default App;
