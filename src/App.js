import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import { SingleReview } from './SingleReview';
function App() {

    return (
      <BrowserRouter>
        <Routes>
          <Route key="home" path="/movie-log" element={<Home />} />
          <Route key="default" path="*" element={<SingleReview />} />

        </Routes>
      </BrowserRouter>
    );
  }

export default App