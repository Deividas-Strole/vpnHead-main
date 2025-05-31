import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Article from './pages/Article';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:id" element={<Article />} /> {/* dynamic route */}
      </Routes>
    </Router>
  );
}

export default App;
