import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Popup from './componets/Popup.jsx';
import Home from './Home.jsx';
import UseCallback from './componets/UseCallback.jsx';
import UseEffect from './componets/UseEffect.jsx';
import UseReducer from './componets/UseReducer.jsx';
import Navbar from './Navbar.jsx';
import UseState1 from './componets/UseState1.jsx';
import UseMemo from './componets/UseMemo.jsx';

const App = () => {
    return (
        <React.StrictMode>
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/popup" element={<Popup />} />
                    <Route path="/usecallback" element={<UseCallback />} />
                    <Route path="/useeffect" element={<UseEffect />} />
                    <Route path="/usememo" element={<UseMemo />} />
                    <Route path="/usereducer" element={<UseReducer />} />
                    <Route path="/usestate1" element={<UseState1 />} />
                </Routes>
            </Router>
        </React.StrictMode>
    );
}

export default App;

