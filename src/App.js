import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Footer from './components/Footer';
import Team from './components/pages/Team';
import News from './components/pages/News';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/druzyna' exact element={<Team />} />
          <Route path='/wydarzenia' exact element={<News />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
