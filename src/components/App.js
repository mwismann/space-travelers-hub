import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Rockets from '../routes/Rockets';
import Missions from '../routes/Missions';
import Profile from '../routes/Profile';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
