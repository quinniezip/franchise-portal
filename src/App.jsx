import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Lesson from './pages/Lesson';
import Quiz from './pages/Quiz';
import ChannelSetup from './pages/ChannelSetup';

function App() {
  const [channels, setChannels] = useState(() => {
    try {
      const saved = localStorage.getItem('selected_channels');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  if (!channels) {
    return <ChannelSetup onComplete={setChannels} />;
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar channels={channels} onChangeChannels={() => setChannels(null)} />
        <Routes>
          <Route path="/" element={<Home channels={channels} />} />
          <Route path="/module/:moduleId/lesson/:lessonId" element={<Lesson />} />
          <Route path="/module/:moduleId/quiz" element={<Quiz />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
