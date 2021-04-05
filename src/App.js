import Navbar from './Navbar';
import Home from './pages/Home';
import NotFound from './NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import BlogHome from './pages/blog/BlogHome';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
        <div className="bg-decor"></div>
        <h1 id="main-border">Hi! My name is Sylvia.</h1>
          <Switch>   
            <Route exact path="/">
              <Home align={"main top"}/>
            </Route>
            <Route exact path="/about">
              <About align={"main middle"} />
            </Route>
            <Route exact path="/projects">
              <Projects align={"main middle"}/>
            </Route>
            <Route exact path="/contact">
              <Contact align={"main bottom"}/>
            </Route>
            <Route exact path="/blog">
              <BlogHome align={"main middle"}/>
            </Route>
            <Route path="*">
              <NotFound align={"main middle"}/>
            </Route>
          </Switch>
        </div> 
      </div>
    </Router>
  );
}

export default App;
