import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';

function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route key="home" path="/movie-log" element={<Home />} />
          <Route key="default" path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    );
  }

export default App