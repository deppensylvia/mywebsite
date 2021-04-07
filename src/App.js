import Navbar from './Navbar';
import Home from './pages/Home';
import NotFound from './NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import BlogHome from './pages/blog/BlogHome';
import BlogDetails from './pages/blog/BlogDetails';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
        <div className="bg-decor"></div>
          <Switch>   
            <Route exact path="/">
              <h1 id="main-border">Hi! My name is Sylvia.</h1>
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
            <Route exact path="/blogs">
              <BlogHome align={"main middle"}/>
            </Route>
            <Route path="/blogs/:id"> 
              <BlogDetails align={"main middle"}/>
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
