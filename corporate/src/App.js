import 'bootstrap/dist/css/bootstrap.min.css';
import Appheader from './component/header';
import Hero from './component/hero';

function App() {
  return (
    <div className="App">
      <header id='header'>
        <Appheader/>
      </header>
      <main>
        <Hero/>
      </main>
    </div>
  );
}

export default App;
