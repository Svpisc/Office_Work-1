import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import APIComponent from './APIComponent';

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/api">API Component</Link>
                        </li>
                    </ul>
                </nav>

               
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/api">
                        <APIComponent />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
            </div>
        </Router>
    );
};

export default App;
