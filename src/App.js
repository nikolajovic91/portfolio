import './styles/styles.scss';
import Header from './components/Header';
import { Route, Switch } from 'react-router-dom';
import Projects from './components/Projects';
import Home from './components/Home';
// import Contact from './components/Contact';
import Socials from './components/Socials';

function App() {
  
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/portfolio/" component={Home} exact />
        <Route path="/portfolio/projects" component={Projects} />
        <Route path="/portfoilo/socials" component={Socials} />
        {/* <Route path="/contact" component={Contact} /> */}
      </Switch>
    </div>
  );
}

export default App;
