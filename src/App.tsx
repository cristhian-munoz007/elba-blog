import './App.css';
import Blog from './pages/Blog';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#f9f9f9' }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="home" element={<Blog />} />
          <Route path="blog" element={<Blog />} />
          <Route path="*" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
