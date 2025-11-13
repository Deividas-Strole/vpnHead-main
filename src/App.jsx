import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './axiosConfig'; // Import axios configuration
import Home from './pages/Home';
import Article from './pages/Article';
import About from './pages/About';
import Library from './pages/Library';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import ArticleEditor from './pages/ArticleEditor';
import DeleteArticle from './pages/DeleteArticle';
// import Header from './components/Header';

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/library" element={<Library />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/article-editor" element={<ArticleEditor />} />
        <Route path="/admin/delete-article" element={<DeleteArticle />} />
      </Routes>
    </Router>
  );
}

export default App;