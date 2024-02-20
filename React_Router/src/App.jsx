import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import APIComponent from './components/APIComponent';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/APIComponent' element={<APIComponent />} />
      </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
