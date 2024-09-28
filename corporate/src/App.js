import 'bootstrap/dist/css/bootstrap.min.css';
import Appheader from './component/header';
import Hero from './component/hero';
import About from './component/about';
import Services from './component/services';
import Works from './component/works';
import Teams from './component/teams';
import Testimonials from './component/testimonials';
import Pricing from './component/pricing';
import Blog from './component/blog';
import Contact from './component/contact';

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
        <Pricing/>
        <Blog/>
        <Contact/>
      </main>
    </div>
  );
}

export default App;
