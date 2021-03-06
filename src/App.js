import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Home from './containers/Home';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Contact from './containers/ContactUs';
import Post from './containers/Post';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />
        <Route path="/" exact component={Home} />
        <Route path="/contact" component={Contact}/>
        <Route path="/posts/:postId" component={Post} />
      </div>
    </Router>
      );
}

export default App;
