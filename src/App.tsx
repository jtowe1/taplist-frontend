import { Routes, Route } from 'react-router-dom';
import { TapList } from './components/TapList';
import { AdminPage } from './pages/AdminPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<TapList />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
}

export default App;
