import 'bootstrap/dist/css/bootstrap.min.css';
import Appheader from './component/header';
import Hero from './component/hero';
import About from './component/about';
import Services from './component/services';
import Works from './component/works';
import Teams from './component/teams';
import Testimonials from './component/testimonials';

function App() {
  return (
    <div className="App">
      <header id='header'>
        <Appheader/>
      </header>
      <main>
        <Hero/>
        <About/>
        <Services/>
        <Works/>
        <Teams/>
        <Testimonials/>
      </main>
    </div>
  );
}

export default App;
